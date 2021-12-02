import * as React from "react"
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  AlertDialog
} from "native-base"
const SignUp = () => {

  const [isOpen, setIsOpen] = React.useState(false)

  const onClose = () => setIsOpen(false)

  const cancelRef = React.useRef(null)
  return (
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading
        size="lg"
        color="coolGray.800"
        _dark={{
          color: "warmGray.50",
        }}
        fontWeight="semibold"
      >
        Welcome
      </Heading>
      <Heading
        mt="1"
        color="coolGray.600"
        _dark={{
          color: "warmGray.200",
        }}
        fontWeight="medium"
        size="xs"
      >
        Sign up to continue!
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={() => setIsOpen(!isOpen)}>
          Sign up
        </Button>
         <AlertDialog
                        leastDestructiveRef={cancelRef}
                        isOpen={isOpen}
                        onClose={onClose}
                      >
                        <AlertDialog.Content>
                          <AlertDialog.CloseButton />
                          <AlertDialog.Header>Error Login</AlertDialog.Header>
                          <AlertDialog.Body>
                            Nie udalo sie zarejestrowac bo jeszcze nie mamy serwera bo nie potrafimy go postawic :)
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
      </VStack>
    </Box>
  )
}

export default SignUp
