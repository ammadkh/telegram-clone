import { Stack } from "expo-router";
import React from "react";
import ChatProvider from "../providers/ChatProvider";
// Prevent the splash screen from auto-hiding before asset loading is complete

function _layout() {
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
