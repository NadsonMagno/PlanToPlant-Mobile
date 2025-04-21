import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="plantas" options={{ title: 'Plantas' }} />
      <Tabs.Screen name="jardins" options={{ title: 'Jardins' }} />
    </Tabs>
  );
}
