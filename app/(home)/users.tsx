import UserListItem from "@/components/UserListItem";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";

function Users() {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data }: any = await supabase
      .from("profiles")
      .select("*")
      .neq("id", user?.id);
    setUsers(data);
    console.log(data, "data");
  };

  return (
    <FlatList
      data={users}
      contentContainerStyle={{ gap: 5 }}
      renderItem={({ item }) => <UserListItem user={item} />}
    />
  );
}

export default Users;
