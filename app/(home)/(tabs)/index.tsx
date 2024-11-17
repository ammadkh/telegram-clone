import { useAuth } from "@/providers/AuthProvider";
import { router } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { ChannelList } from "stream-chat-expo";

function MainTabScreen() {
  const { user } = useAuth();
  return (
    <ChannelList
      filters={{ members: { $in: [user?.id!] } }}
      onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
    />
  );
}

export default MainTabScreen;
