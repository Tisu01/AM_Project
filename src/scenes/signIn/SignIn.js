import * as React from "react"
import PropTypes from 'prop-types'
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  AlertDialog,
 Dimensions ,
} from "native-base"

const SignIn = ({ navigation }) => {

  const [isOpen, setIsOpen] = React.useState(false)

  const onClose = () => setIsOpen(false)

   const cancelRef = React.useRef(null)
  return (
    <Box safeArea p="2" py="8" w="100%" maxW="100%">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: "warmGray.50",
        }}
      >
        Witaj!
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: "warmGray.200",
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Zaloguj się, aby kontynuować!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
          <Link
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500",
            }}
            alignSelf="flex-end"
            mt="1"
          >
            Zapomniałeś hasła?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={() => setIsOpen(!isOpen)}> Zaloguj się</Button>
        <AlertDialog
                leastDestructiveRef={cancelRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <AlertDialog.Content>
                  <AlertDialog.CloseButton />
                  <AlertDialog.Header>Error Login</AlertDialog.Header>
                  <AlertDialog.Body>
                    Nie udalo sie zalogowac bo jeszcze nie mamy serwera bo nie potrafimy go postawic :)
                  </AlertDialog.Body>
                  <AlertDialog.Footer>

                      <Button

                        colorScheme="blue"
                        onPress={onClose}
                        ref={cancelRef}
                      >
                        Wyjdz
                      </Button>

                  </AlertDialog.Footer>
                </AlertDialog.Content>
              </AlertDialog>
        <Text >Nie masz Konta ? Zarejestruj się!!</Text>
        <HStack mt="2"  justifyContent="center">
            <Button mt="2" colorScheme="indigo" size="full" height="10"
            onPress={() => {navigation.navigate('SignUp', { from: 'SignIn' })}}>Zarejestruj się</Button>

        </HStack>
      </VStack>
    </Box>
  )
}

SignIn.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

SignIn.defaultProps = {
  navigation: { navigate: () => null },
}

export default SignIn
