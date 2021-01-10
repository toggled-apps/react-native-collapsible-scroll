import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Item, { IItem, MAX_HEIGHT } from "./Item";

interface Props {
  items: IItem[];
  onPress: (i: number) => void;
}

const CollapsibleScroll = ({ items = [], onPress }: Props) => {
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y: value } }) => {
      y.value = value;
    },
  });
  return (
    <View>
      <StatusBar hidden />
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        snapToInterval={MAX_HEIGHT}
      >
        <Animated.View
          style={[
            styles.container,
            { height: (items.length + 1) * MAX_HEIGHT },
          ]}
        >
          {items.map((item, index) => (
            <Item item={item} key={index} y={y} index={index} onPress={(i: number) => onPress(i)}/>
          ))}
        </Animated.View>
      </Animated.ScrollView>
    </View>
  );
};

export default CollapsibleScroll;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});
