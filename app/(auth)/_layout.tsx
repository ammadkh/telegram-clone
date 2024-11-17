import { useAuth } from "@/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";
import React from "react";

function AuthLayout() {
  const { user } = useAuth();
  console.log(user, "user");
  if (user) {
    return <Redirect href={"/(home)"} />;
  }
  return <Stack />;
}

export default AuthLayout;
