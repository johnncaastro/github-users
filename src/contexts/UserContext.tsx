import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface User {
  id: number;
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  location: string;
  followers: number;
  following: number;
}

interface UserContextProps {
  user: User | undefined;
  inputName: string;
  setInputName(name: string): void;
  SearchGitHubUser(): Promise<void>;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextProps)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [inputName, setInputName] = useState('');
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUser = async () => {
      const response = await api.get('/johnncaastro');
      const {
        id,
        name,
        login,
        bio,
        avatar_url,
        location,
        followers,
        following } = response.data;

      setUser({
        id,
        name,
        login,
        bio,
        avatar_url,
        location,
        followers,
        following,
      });
    }

    getUser();
  }, []);

  async function SearchGitHubUser() {
    try {
      if(!inputName) {
        alert('Informe um nome de usuário!');
  
        return;
      }
  
      const response = await api.get(`/${inputName}`);
      const {
        id,
        name,
        login,
        bio,
        avatar_url,
        location,
        followers,
        following } = response.data;

        setUser({
          id,
          name,
          login,
          bio,
          avatar_url,
          location,
          followers,
          following,
        });

    } catch(error) {
      alert('O nome de usuário não existe!');
    }

    setInputName('');
  }

  return (
    <UserContext.Provider value={{
      user,
      SearchGitHubUser,
      inputName,
      setInputName }}>
      {children}
    </UserContext.Provider>
  )
}