import { Redirect, Stack } from "expo-router";
import React from "react";
import ChatProvider from "../../providers/ChatProvider";
import { useAuth } from "@/providers/AuthProvider";
// Prevent the splash screen from auto-hiding before asset loading is complete

function _layout() {
  const { user } = useAuth();
  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
    </ChatProvider>
  );
}

export default _layout;
