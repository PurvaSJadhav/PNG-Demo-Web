"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Load user info from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("userInfo");
      if (stored) setUser(JSON.parse(stored));
    } catch (err) {
      console.warn("Failed to parse userInfo from localStorage");
    } finally {
      setLoading(false);
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const { data } = await axios.post("/api/admin/login", { email, password });

      // Store user info and token in localStorage
      const userData = {
        email,
        token: data.token,
        role: "admin", // since this is admin login
      };

      setUser(userData);
      localStorage.setItem("userInfo", JSON.stringify(userData));

      // Redirect to admin dashboard
      router.push("/admin/dashboard");
    } catch (err) {
      // Handle errors from backend
      const message =
        err.response?.data?.message || "Login failed. Check your credentials.";
      throw new Error(message);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("userInfo");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
