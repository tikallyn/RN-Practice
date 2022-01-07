import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import ComponentsScreen from "./src/screens/ComponentsScreen"
import ListScreen from "./src/screens/ListScreen"
import ImageScreen from "./src/screens/ImageScreen"
import CounterScreen from "./src/screens/CounterScreen"
import ColorsScreen from "./src/screens/ColorsScreen"
import CustomColorScreen from "./src/screens/CustomColorScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    CustomColor: CustomColorScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(navigator)
