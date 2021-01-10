import React from "react";
import { StyleSheet, View } from "react-native";
import CollapsibleScroll from "@toggled-apps/react-native-collapsible-scroll";

export const items = [
  {
    title: "Upcoming Show Live from Paris",
    subtitle: "SPRING-SUMMER 2021",
    picture: {
      uri:
        "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    top: 0,
  },
  {
    title: "In Boutiques",
    subtitle: "FALL-WINTER 2020/21",
    picture: {
      uri:
        "https://images.unsplash.com/photo-1565430414858-958049a669c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
    top: 0,
  },
  {
    title: "Deauville Film Festival",
    subtitle: "CHANEL IN CINEMA",
    picture: {
      uri:
        "https://images.unsplash.com/photo-1575115170343-3d57e5e13f10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80",
    },
    top: 0,
  },
  {
    title: "IN BOUTIQUES",
    subtitle: "Métiers d'art 2019/20",
    picture: {
      uri:
        "https://images.unsplash.com/photo-1517846693594-1567da72af75?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80",
    },
    top: 0,
  },
  {
    title: "Haute Couture",
    subtitle: "FALL-WINTER 2020/21",
    picture: {
      uri:
        "https://images.unsplash.com/photo-1550966871-47324cfb6278?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1979&q=80",
    },
    top: 0,
  },
  {
    title: "Balade en Méditerranée",
    subtitle: "CRUISE 2020/21",
    picture: {
      uri:
        "https://images.unsplash.com/photo-1489731110502-23f1239ea56c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
    top: 0,
  },
  {
    title: "Spring-Summer 2020 Campaign",
    subtitle: "EYEWEAR",
    picture: {
      uri:
        "https://images.unsplash.com/photo-1558980664-28d10ee9bb52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    top: 0,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <CollapsibleScroll items={items} onPress={(i: number) => console.log(`item selected ${i}`)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
