import { Tabs} from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function RootLayout() {
  return (
    
    <Tabs screenOptions={{ tabBarActiveTintColor: 'white', tabBarStyle:{backgroundColor:'black'}, headerStyle:{backgroundColor:'black'} }}>

    <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        headerTitle: 'Home',
        headerTitleStyle: {
          color: '#fff'
         },
        
        tabBarIcon: ({ color}) => <FontAwesome size={28} name="home" color={color} />,
      }}
    />

    <Tabs.Screen
      name="travels"
      options={{
        title: 'Travels',
        headerTitle: 'Travels',
        headerTitleStyle: {
          color: '#fff'
         },
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="map-o" color={color} />,
      }}
    />

    <Tabs.Screen
      name="settings"
      options={{
        title: 'Perfil',
        headerTitle: 'Perfil',
        headerTitleStyle: {
          color: '#fff'
         },
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
      }}
    />

  </Tabs>
  );
}
