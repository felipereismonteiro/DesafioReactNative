import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import styled from "styled-components/native";
import { GithubRoute } from "@/api/GithubRoute";
import { useEffect } from "react";

export default function TabOneScreen() {
  useEffect(() => {
    const response = GithubRoute.FindUser("000000000000000");

    response
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <View style={styles.container}>
      <MainText style={styles.title}>Tab One</MainText>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

const MainText = styled.Text`
  color: yellow;
`;
