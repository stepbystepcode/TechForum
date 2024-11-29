'use server'
import { SignupFormSchema } from '@/lib/definitions'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import { createSession } from '@/lib/session'

const prisma = new PrismaClient()

export type AuthResult = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message?: string;
}

// 修改为直接返回 Promise<AuthResult>
export async function signup(prevState: AuthResult): Promise<AuthResult> {
  // 获取表单数据
  const formData = await (arguments[1] as FormData);
  
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
  
  return {
    message: 'Account created successfully!'
  }
}

export async function login(prevState: AuthResult): Promise<AuthResult> {
  // 获取表单数据
  const formData = await (arguments[1] as FormData);
  
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  if (!username || !password) {
    return {
      errors: {
        username: !username ? ['Username is required'] : undefined,
        password: !password ? ['Password is required'] : undefined,
      }
    }
  }

  const user = await prisma.user.findUnique({
    where: { username },
  })

  if (!user || !await bcrypt.compare(password, user.password)) {
    return {
      message: 'Invalid username or password.',
    }
  }
  await createSession(user.id)
  return {
    message: 'Login successful!'
  }
}