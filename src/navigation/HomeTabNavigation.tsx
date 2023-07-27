import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTabParamList} from '@utils/types';
import CallStack from './CallStack';
import SettingsStack from './SettingsStack';
import ChatStack from './ChatStack';
import ExploreStack from './ExploreStack';
import MapStack from './MapStack';

const Tab = createBottomTabNavigator<HomeTabParamList>();

function HomeTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatStack" component={ChatStack} />
      <Tab.Screen name="ExploreStack" component={ExploreStack} />
      <Tab.Screen name="MapStack" component={MapStack} />
      <Tab.Screen name="CallStack" component={CallStack} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  );
}

export default HomeTabNavigation;
