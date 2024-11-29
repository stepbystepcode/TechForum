'use server'
import { SignupFormSchema, FormState } from '@/lib/definitions'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  })
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  const { username, password } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
    },
  })
 
 
  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }

}
export async function login(state: FormState, formData: FormData) {
    const username = formData.get('username') as string | null;
    const password = formData.get('password') as string | null;
  
    if (!username || !password) {
      return {
          message: 'Username and password are required.',
      }
    }
  
    const user = await prisma.user.findUnique({
      where: { username }, // username is now guaranteed to be a string
    })
  
    if (!user || !await bcrypt.compare(password, user.password)) {
      return {
          message: 'Invalid username or password.',
        }
    }

}