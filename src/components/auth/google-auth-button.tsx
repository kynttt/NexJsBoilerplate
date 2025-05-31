'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'

interface GoogleAuthButtonProps {
  className?: string
  text?: string
}

export function GoogleAuthButton({
  className,
  text = 'Continue with Google',
}: GoogleAuthButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)

  const handleClick = async () => {
    try {
      setIsLoading(true)
      await signIn('google', { callbackUrl: '/dashboard' })
    } catch (error) {
      console.error('Error signing in with Google:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      type="button"
      disabled={isLoading}
      onClick={handleClick}
      className={className}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <span>Please wait</span>
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          {text}
        </span>
      )}
    </Button>
  )
} 