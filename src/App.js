import React, { useState, useEffect } from 'react'
import { View, useWindowDimensions } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import { NativeBaseProvider, Center} from 'native-base';
import { TabView, SceneMap } from 'react-native-tab-view';
import 'utils/ignore'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Router from './routes'

const App = () => {
  // state
  const [didLoad, setDidLoad] = useState(false)

  // handler
  const handleLoadAssets = async () => {
    // assets preloading
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  // lifecycle
  useEffect(() => {
    handleLoadAssets()
  }, [])

  // rendering
  if (!didLoad) return <View />
  return (

   <Provider store={store}>
    <NativeBaseProvider>
      <Router />
      </NativeBaseProvider>
    </Provider>

  )
}



export default App
