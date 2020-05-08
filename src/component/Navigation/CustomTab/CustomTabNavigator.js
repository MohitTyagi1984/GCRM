import {
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import Dashboard from '../../Dashboard/Dashboard';
import Master from '../../Master/Master';
import Sales from '../../Sales/Sales';
import Report from '../../Report/Report';
const CustomTabNavigator = createMaterialTopTabNavigator({
  Dashboard: {
    navigationOptions: {
      tabBarLabel: "Dashboard"
    },
    screen: Dashboard
  },
  Master: {
    navigationOptions: {
      tabBarLabel: "Master"
    },
    screen: Master
  },
  Sales: {
    navigationOptions: {
      tabBarLabel: "Sales"
    },
    screen: Sales
  },
  Report: {
    navigationOptions: {
      tabBarLabel: "Report"
    },
    screen: Report
  }
}, {
  tabBarPosition: "top"
});

export default CustomTabNavigator;