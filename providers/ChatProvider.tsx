import React, { PropsWithChildren, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat, OverlayProvider } from "stream-chat-expo";
import { useAuth } from "./AuthProvider";

function ChatProvider({ children }: PropsWithChildren) {
  const client = StreamChat.getInstance(
    process.env.EXPO_PUBLIC_STREAM_API_KEY!
  );
  const [isReady, setIsReady] = useState(false);
  const { profile } = useAuth();
  const connect = async () => {
    console.log(profile.id, "profile");
    try {
      await client.connectUser(
        {
          id: profile.id,
          name: profile.full_name,
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken(profile.id)
      );
      setIsReady(true);
    } catch (error) {
      console.log(error, "err");
    }
  };

  useEffect(() => {
    if (!profile?.id) {
      return;
    }
    connect();
    return () => {
      if (isReady) {
        console.log("disconne");
        client?.disconnectUser();
      }
      setIsReady(false);
    };
  }, [profile?.id]);

  if (!isReady) {
    return <ActivityIndicator />;
  }

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  );
}

export default ChatProvider;
