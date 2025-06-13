import { useContext } from 'react'
import { AuthContext } from './AuthContext'

export function UseAuth2() {
  return useContext(AuthContext);
}