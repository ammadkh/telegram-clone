import { useAuth } from "@/providers/AuthProvider";
import { Link, router, Stack } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { ChannelList } from "stream-chat-expo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
function MainTabScreen() {
  const { user } = useAuth();
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link href="/(home)/users" asChild>
              <FontAwesome5
                name="users"
                size={22}
                color="gray"
                style={{ marginHorizontal: 10 }}
              />
            </Link>
          ),
        }}
      />
      <ChannelList
        filters={{ members: { $in: [user?.id!] } }}
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
      />
    </>
  );
}

export default MainTabScreen;
