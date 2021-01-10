# React Native Collapsible Scroll

This react native module is intended to provide a beautifully animated collapsible scroll view which you can customise and use in your own projects.

![Example](./assets/react-native-collapsible-scroll.gif)

## Usage

```
yarn add @toggled-apps/react-native-collapsible-scroll
or
npm install @toggled-apps/react-native-collapsible-scroll
```
## Dependencies
This module imports Gesture Handler and Reanimated v2 as dependencies. These may conflict with your own dependency versioning. You can follow these instructions to install them yourself:

### For React Native (Unmanaged)
```
yarn add react-native-reanimated react-native-gesture-handler

or

npm install react-native-reanimated react-native-gesture-handler
```

React Native Gesture Handler needs extra steps to finalize its installation, please follow their [installation instructions](https://github.com/software-mansion/react-native-gesture-handler).

React Native Reanimated v2 needs extra steps to finalize its installation, please follow their [installation instructions](https://docs.swmansion.com/react-native-reanimated/docs/installation/).

### For Expo (Managed)
```
expo install react-native-gesture-handler
yarn add react-native-reanimated
```
Add Reanimated's babel plugin to your babel.config.js:
```
  module.exports = {
      ...
      plugins: [
          ...
          'react-native-reanimated/plugin',
      ],
  };
```

### Example Usage
```javascript
import React from "react";
import { StyleSheet, View } from "react-native";
import CollapsibleScroll from "./src/CollapsibleScroll";

export const items = [
  {
    title: "Upcoming Show Live from Paris",
    subtitle: "SPRING-SUMMER 2021",
    picture: {
      uri:
        "/url/to/image",
    },
    top: 0,
  }, ...
];

export default function App() {
  return (
    <View style={styles.container}>
      <CollapsibleScroll items={items} onPress={(i: number) => console.log(`item selected ${i}`)}/>
    </View>
  );
}
``` 

## Props
|Name|Type|Required|Default|Description|
|---|---|---|---|---|
|items|array|Required|[]|An array of items to be displayed<br /><br /> Item model includes {title: string, subtitle: string, picture: require("") or {uri: string}, top: number}|
|onPress|function|Required|null|Function to be executed on item press.|

## 🚀 Run the example
The provided example uses [expo](https://expo.io/).

Expo Project: https://expo.io/@toggled-apps/react-native-collapsible-scroll

Build locally: Navigate to the "examples" directory and run:

- Install packages with `yarn` or `npm install`.
- Run `yarn ios` or `yarn android` or `npm run ios` or `npm run android`.

## 💸 Credit
Credit also goes to William Candillion for his wonderful tutorial and source code upon which this component is based upon [here](https://github.com/wcandillon/can-it-be-done-in-react-native/tree/master/season4/src/Chanel)

## 🤟 Contributions
This project is mantained by Toggled LTD (@toggled-apps).

We welcome all contributions to the upkeep and further development of this module! Feel free to raise PRs and Issues 😇

## MIT License
Copyright 2021 Toggled LTD

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.