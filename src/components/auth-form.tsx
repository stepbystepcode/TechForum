'use client'

import { useActionState } from 'react'
import { signup } from '@/app/actions/auth'
import { login } from '@/app/actions/auth'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
type AuthMode = 'login' | 'register'
export function AuthForm({ mode }: { mode: AuthMode }) {
  const [state, formAction, isPending] = useActionState(signup, undefined);

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-primary">{mode==='login'?'Log in':'Sign up'}</h1>
    <form action={formAction}  className="space-y-4">
      <div>
        <Label htmlFor="username">Username</Label>
        <Input id="username" name="username" placeholder="Username" />
      </div>
      {state?.errors?.username && <p>{state.errors.username}</p>}


      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <SubmitButton isPending={isPending} />
    </form>
    <div className="text-sm mt-4 text-center">
          {mode === 'login' ? (
            <>
              <span className="text-gray-600">Don't have an account? </span>
              <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Create one here
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-600">Already have an account? </span>
              <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Log in here
              </Link>
            </>
          )}
        </div>
    </div>
  )
}

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button disabled={isPending} type="submit"  className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
      Sign Up
    </Button>
  )
} 