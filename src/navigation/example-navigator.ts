import { createStackNavigator } from "react-navigation"
import { IndexScreen } from "../views/index-screen"
import { DrawerScreens } from "./drawer-navigator"

export const ExampleNavigator = createStackNavigator({
  index: { screen: IndexScreen },
  drawerStack: { screen: DrawerScreens },
},
{
  headerMode: "none",
})
