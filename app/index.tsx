import { Redirect } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function index() {
  return <Redirect href={"/(home)/(tabs)"}></Redirect>;
}
