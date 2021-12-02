import React from "react"
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Image,
  Button,
  Divider,
  Heading,
  VStack,
  Stack,
  ScrollView,
  Center,
  NativeBaseConfigProvider,
  useToast,
  Box,
} from "native-base"

const img = require('../../../assets/images/vinted.png');


const Startup = ({ navigation }) => {
const toast = useToast()

  return (

      <VStack
        w="100%"
        space={2.5}
        px="2"
        mt="4"
        alignItems="center"
        justifyContent="center"
      >
         <Heading size="lg">VINTLED</Heading>
          <Image
              source={{ uri: img.src }}
              width={100}
              height={100}
              alt= "Srinted"
            />
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

          <Button size="lg" onPress={() => {navigation.navigate('SignIn', { from: 'Startup' })}}>SIGN IN</Button>
          <Button size="lg" onPress={() => {navigation.navigate('SignUp', { from: 'Startup' })}}>SIGN UP</Button>
          <Button size="lg"  onPress={() => {
                                    toast.show({
                                      render: () => {
                                        return (
                                          <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                                            EXIT ale NIE EXIT
                                          </Box>
                                        )
                                      },
                                    })
                                  }}>EXIT</Button>
        </Stack>


      </VStack>

  )
}

Startup.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Startup.defaultProps = {
  navigation: { navigate: () => null },
}

export default Startup
