import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const res = await api.get("/auth/me", {
        withCredentials: true,
      });

      const currentUser = res.data.user;

      console.log("✅ CURRENT USER:", currentUser);
      console.log("✅ ROLE:", currentUser?.role);
      console.log("✅ DEPARTMENT:", currentUser?.department);

      setUser(currentUser);

      return currentUser;
    } catch (error) {
      console.log(
        "❌ FETCH USER ERROR:",
        error.response?.data || error.message
      );

      setUser(null);
      return null;
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      await refreshUser();
      setLoading(false);
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);