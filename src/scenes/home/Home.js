import React from "react"
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  Icon,
  IconButton,
  NativeBaseProvider,
} from "native-base"
import { View, useWindowDimensions, Animated, StatusBar, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabViewAnimated, TabBar } from 'react-native-tab-view';
import { Entypo } from "@expo/vector-icons"
import { Constants } from 'expo';

//You need to install this
//yarn add react-native-tab-view
//expo install react-native-pager-view

const Home = () => {
  const data = [
  ]
  const FirstRoute = () => (
    <View style={{ flex: 1 }} />
  );

  const SecondRoute = () => (
    <View style={{ flex: 1 }} />
  );

  const renderScene = SceneMap({
    men: FirstRoute,
    women: SecondRoute,
  });

  const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'men', title: 'Mężczyźni' },
      { key: 'women', title: 'Kobiety' },
    ]);
  return (
    <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />

  )
}

export default Home
