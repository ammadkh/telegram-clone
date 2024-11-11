import { Stack } from "expo-router";
import React from "react";

function ChannelStack() {
  return (
    <Stack>
      <Stack.Screen
        name="[cid]"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}

export default ChannelStack;
