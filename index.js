import {AppRegistry} from 'react-native'
import App from './App'
import Greeting from './screens/Greeting'
import CounterState from './screens/CounterState'
import ColumnItems from './screens/ColumnItems'
import RowsItems from './screens/RowsItems'
import AlertComponent from './screens/AlertComponent'
import TextInputDemo from './screens/TextInputDemo'
import SwitchDemo from './screens/SwitchDemo'
import ImageDemo from './screens/ImageDemo'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App)
