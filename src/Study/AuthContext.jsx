import { createContext, useState, useContext } from 'react';
import cookie from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [submittedUser, setSubmittedUser] = useState(null);

  return (
    <AuthContext.Provider value={{ submittedUser, setSubmittedUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
