import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useState } from 'react'

import jwt_decode from 'jwt-decode'
import axios from 'axios'

const AuthContext = createContext({})
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwt_decode(token)
      console.log(decoded)
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem('token')
        return
      }
      setUser(decoded.user)
    }
    setLoading(false)
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    router.push('/login')
  }

  const login = async (data) => {
    try {
      const resp = await axios.post('/api/login/dealer', data)
      const token = resp.data.token
      localStorage.setItem('token', token)
      const decoded = jwt_decode(token)
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem('token')
        return
      }
      setUser(decoded.user)
      router.push('/dashboard/dealer')
    } catch (err) {}
  }

  const value = {
    user,
    logout,
    login,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading ? <>{children}</> : null}
    </AuthContext.Provider>
  )
}
