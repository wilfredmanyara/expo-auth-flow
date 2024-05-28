import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthData, authService } from "../services/authService";

type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
  signUp(email: string, password: string, name: string): Promise<void>;
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem("@AuthData");
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error("Please enter email and password");
    }
  const _authData = await authService.signIn(email, password);
    setAuthData(_authData);
    AsyncStorage.setItem("@AuthData", JSON.stringify(_authData));
  };

  const signOut = async () => {
    setAuthData(undefined);
    await AsyncStorage.removeItem("@AuthData");
  };

  const signUp = async (email: string, password: string, name: string) => {
    if (!email || !password || !name) {
      throw new Error("Please enter email, password, and name");
    }

  const _authData = await authService.signUp(email, password, name);
    setAuthData(_authData);
    AsyncStorage.setItem("@AuthData", JSON.stringify(_authData));
  };

  return (
    <AuthContext.Provider
      value={{ authData, loading, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
