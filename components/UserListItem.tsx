import React from "react";
import { Text, View } from "react-native";

function UserListItem({ user }: any) {
  return (
    <View style={{ padding: 15, backgroundColor: "white" }}>
      <Text style={{ fontWeight: "600" }}>{user?.full_name}</Text>
    </View>
  );
}

export default UserListItem;
