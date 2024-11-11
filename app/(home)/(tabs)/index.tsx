import { router } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { ChannelList } from "stream-chat-expo";

function MainTabScreen() {
  return (
    <ChannelList
      onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
    />
  );
}

export default MainTabScreen;
