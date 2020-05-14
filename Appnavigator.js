import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createSwitchNavigator } from 'react-navigation'
import IoIcon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
  } from "react-native";

const color = {
    ACTIVE: "#147ecc",
    INACTIVE: "#ccc"
}

/* import AuthStack */
import SignInScreen from './screens/auth/SignInScreen'
import SignUpScreen from './screens/auth/SignUpScreen'
import WelcomeScreen from './screens/auth/WelcomeScreen'
import AuthLoadingScreen from './screens/auth/AuthLoadingScreen'

/* import HomeStack Screens */
import Home from './screens/home/Home'
import Intro from './screens/home/Intro'
import Tutorial from './screens/home/Tutorial'
import Comment from './screens/home/Comment'

/* import DiagnoticsStack Screens */
import Animals from './screens/diagnotics/Animals'
import Diagnotics from './screens/diagnotics/Diagnotics'
import CameraEx from './screens/diagnotics/CameraEx'

/* import StoreStack Screens */
import Store from './screens/store/Store'
import Products from './screens/store/Products'
import Product from './screens/store/Product'
import Goods from './screens/store/Goods'
import Order from './screens/store/Order'

/* import SettingStack Screens */
import Setting from './screens/settings/Settings'

/* import Management Farm*/
import Management from './screens/farm/Management'
import ChangeInfor from './screens/farm/ChangeInfor'
import AddProducts from './screens/farm/AddProducts'

/* import Home Store Screen */
import HomeStore from './storescreens/home/HomeStore'

/* import Bill in Store */
import Bill from './storescreens/bill/Bill'
import BillDetail from './storescreens/bill/BillDetail'

/* Create AuthStack */
const AuthStackNavigator = createStackNavigator({
    Welcome: WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    
})


/*Create HomeStack */
const HomeStack = createStackNavigator({ Home, Intro, Tutorial, Comment})

HomeStack.navigationOptions = {
    tabBarLabel: 'Trang chủ',
    tabBarIcon: ({ focused }) => {
        return <IoIcon name='ios-planet'
            size={28}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}

/*Create DiagnoticsStack */
const DiagnoticsStack = createStackNavigator({ Animals, Diagnotics, CameraEx })
DiagnoticsStack.navigationOptions = {
    tabBarLabel: 'Chẩn đoán',
    tabBarIcon: ({ focused }) => {
        return <FAIcon name='diagnoses'
            size={28}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}

/*Create StoreStack */
const StoreStack = createStackNavigator({ Store, Products, Product, Goods, Order})
StoreStack.navigationOptions = {
    tabBarLabel: 'Cửa hàng',
    tabBarIcon: ({ focused }) => {
        return <IoIcon name='ios-cart'
            size={28}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}

/* Create SettingStack */
const SettingStack = createStackNavigator({ Setting })
SettingStack.navigationOptions = {
    tabBarLabel: 'Cài đặt',
    tabBarIcon: ({ focused }) => {
        return <IoIcon name='ios-settings'
            size={28}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    },
    
}
/* Create SettingStack */
const FarmStack = createStackNavigator({ Management, ChangeInfor, AddProducts })
FarmStack.navigationOptions = {
    tabBarLabel: 'Quản lý',
    tabBarIcon: ({ focused }) => {
        return <IoIcon name='ios-home'
            size={28}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    },
    
}

const AppTabNavigator = createBottomTabNavigator({
    HomeStack,
    DiagnoticsStack,
    StoreStack,
    FarmStack,
    SettingStack
})

const AppStackNavigator = createStackNavigator({
    AppTabNavigator: {
        screen: AppTabNavigator,

        navigationOptions:
     {
         header: null
     }   
    }
})

AppTabNavigator.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];

    // You can do whatever you like here to pick the title based on the route name
    let headerTitle = routeName;

    return {
        headerTitle,
    };
};

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator
})

const StoreHomeStack = createStackNavigator({ HomeStore})
StoreHomeStack.navigationOptions = {
    tabBarLabel: 'Sản phẩm',
    tabBarIcon: ({ focused }) => {
        return <IoIcon name='ios-home'
            size={28}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}
const BillStack = createStackNavigator({ Bill, BillDetail})
BillStack.navigationOptions = {
    tabBarLabel: 'Hóa đơn',
    tabBarIcon: ({ focused }) => {
        return <IoIcon name='ios-paper'
            size={28}
            color={focused ? color.ACTIVE : color.INACTIVE}
        />
    }
}


const StoreTabNavigator = createBottomTabNavigator({
    StoreHomeStack,
    BillStack
    
})

const StoreStackNavigator = createStackNavigator({
    StoreTabNavigator :{
       screen: StoreTabNavigator,
       navigationOptions:
       {
           header: null
       }   
    }
}) 
const StoreDrawerNavigator = createDrawerNavigator({
    Home: StoreStackNavigator
})

const AppNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator,
    Store: StoreDrawerNavigator
  })

export default AppNavigator