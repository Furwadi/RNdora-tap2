import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Leaderboard from './Leaderboard'

const AppNavigator = createStackNavigator(
    {
      Home: {
          screen: HomeScreen,
        },
    Leaderboard : {
        screen : Leaderboard
        }
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);