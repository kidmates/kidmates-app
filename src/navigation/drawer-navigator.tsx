import { DrawerNavigator } from "react-navigation"
// import PlacesList from "../views/PlacesList/PlacesList"
// import PlacesMap from "../views/PlacesMap/PlacesMap"
import DrawerScreen1 from "../views/drawer/drawer-screen-1"
import DrawerContainer from "../views/drawer/drawer-container"

export const DrawerScreens = DrawerNavigator(
  {
    screen1: { screen: DrawerScreen1 },
    // screen1: { screen: PlacesList },
    // screen2: { screen: PlacesMap },
  },
  {
    contentComponent: DrawerContainer,
  },
)
