import { createContext } from 'react';

interface AuthConextData {
  name: string;
}

const AuthContext = createContext<AuthConextData>({} as AuthConextData);

export default AuthContext;
