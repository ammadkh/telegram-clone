import { Slot, Stack } from "expo-router";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { ChannelList, Chat, OverlayProvider } from "stream-chat-expo";
// Prevent the splash screen from auto-hiding before asset loading is complete
import { StreamChat } from "stream-chat";

function _layout() {
  const client = StreamChat.getInstance("94t5gs4prn63");

  const connect = async () => {
    try {
      await client.connectUser(
        {
          id: "jlahey",
          name: "Jim Lahey",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("jlahey")
      );
    } catch (error) {
      console.log(error, "err");
    }
  };

  useEffect(() => {
    connect();
  }, []);
  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack>
      </Chat>
    </OverlayProvider>
  );
}

export default _layout;
