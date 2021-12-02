import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Startup from 'scenes/startup'
import SignIn from 'scenes/signIn'
import SignUp from 'scenes/signUp'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />

  </Stack.Navigator>
)


export const StartupNavigator = () => (
  <Stack.Navigator
    initialRouteName="Startup"
    headerMode="screen"
    screenOptions={navigationProps}
  >
  <Stack.Screen
        name="Startup"
        component={Startup}
        options={({ navigation }) => ({
          title: 'Startup',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
      <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              title: 'Sign In',
            }}
          />
       <Stack.Screen
                  name="SignUp"
                  component={SignUp}
                  options={{
                    title: 'Sign Up',
                  }}
       />



  </Stack.Navigator>
)



export const SignInNavigator = () => (
  <Stack.Navigator
    initialRouteName="SignIn"
    headerMode="screen"
    screenOptions={navigationProps}
  >
  <Stack.Screen
        name="SignIn"
        component={Startup}
        options={({ navigation }) => ({
          title: 'SignIn',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
      <Stack.Screen
             name="SignUp"
             component={SignUp}
             options={{
                title: 'Sign Up',
                }}
             />

  </Stack.Navigator>
)


