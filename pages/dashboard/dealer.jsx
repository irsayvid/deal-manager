import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../../components/AuthContext'

const DealerDashboard = () => {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [router, user])

  if (!user) return null

  return <div>DealerDashboard</div>
}

export default DealerDashboard
