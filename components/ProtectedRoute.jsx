import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from './AuthContext'

const ProtectedRoute = ({ children }) => {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [router, user])

  if (!user) return null
  return <div>{children}</div>
}

export default ProtectedRoute
