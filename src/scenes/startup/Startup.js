import React from "react"
import PropTypes from 'prop-types'
import {
  Button,
  Divider,
  Heading,
  VStack,
  Stack,
  ScrollView,
  Center,
  NativeBaseProvider,
} from "native-base"
const Home = ({ navigation }) => {
  return (
      <VStack
        w="100%"
        space={2.5}
        px="2"
        mt="4"
        alignItems="center"
        justifyContent="center"
      >
         <Heading size="lg">VINTED</Heading>
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{
            base: "column",
            md: "row",
          }}
          space={3}
          mx={{
            base: "auto",
            md: "0",
          }}
        >
          //<Button size="lg" onPress={() => {navigation.navigate('Details', { from: 'Home' })}}>SIGN IN</Button>
          <Button size="lg" onPress={() => console.log("logowanie")})}}>SIGN IN</Button>
          <Button size="lg" onPress={() => console.log("rejestracja")}>SIGN UP</Button>
          <Button size="lg" onPress={() => console.log("exit")}>EXIT</Button>
        </Stack>

        <Divider w="100%" />
      </VStack>

  )
}
/*
Home.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}
*/
export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Startup />
      </Center>
    </NativeBaseProvider>
  )
}
