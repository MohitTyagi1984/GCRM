import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawerNavigator, {} from "./Navigation/CustomDrawer/CustomDrawerNavigator";
import LoginView from "./Login/LoginView";
import Home from "./Home/Home";
import CreateLeads from '../component/Lead/CreateLeads';
import MyLeads from '../component/Lead/MyLeads';
import MyAppointments from '../component/Lead/MyAppointments';
import MyOpportunities from '../component/Lead/MyOpportunities';
import MyProjects from '../component/Lead/MyProjects';
import MyQuotations from '../component/Lead/MyQuotations';
import PendingApprovals from '../component/Lead/PendingApprovals';
const MainNavigator = createDrawerNavigator(
  {
    LoginView: {
      navigationOptions: {
        drawerLabel: () => null,
      },
      screen: LoginView
    },
    Home: {
      navigationOptions: {
        navigationOptions: {
          drawerLabel: () => null,
        },
      },
      screen: Home
    },
    CreateLeads: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Create Leads"
      },
      screen: CreateLeads
    },
    MyLeads: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "My Leads"
      },
      screen: MyLeads
    },
    MyAppointments: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "My Appointments"
      },
      screen: MyAppointments
    },
    MyOpportunities: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "My Opportunities"
      },
      screen: MyOpportunities
    },
    MyProjects: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "My Projects"
      },
      screen: MyProjects
    },
    MyQuotations: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "My Quotations"
      },
      screen: MyQuotations
    },
    PendingApprovals: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Pending Approvals"
      },
      screen: PendingApprovals
    },
  },
  {
    contentcomponent: props => <CustomDrawerNavigator {...props} />
    // contentComponent: CustomDrawerNavigator
  }
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;