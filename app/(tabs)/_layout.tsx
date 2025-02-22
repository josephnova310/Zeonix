import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';

function TabBarIcon({ name, color }: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...{ name, color }} />;
}

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#64748b',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#2563eb',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: t('calculator'),
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Text style={styles.headerLogo}>ZEONIS</Text>
              <Text style={styles.headerSubtitle}>{t('calculator')}</Text>
            </View>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="calculator" color={color} />,
        }}
      />
      <Tabs.Screen
        name="companies"
        options={{
          title: t('companies'),
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Text style={styles.headerLogo}>ZEONIS</Text>
              <Text style={styles.headerSubtitle}>{t('companies')}</Text>
            </View>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="business" color={color} />,
        }}
      />
      <Tabs.Screen
        name="loans"
        options={{
          title: t('loans'),
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Text style={styles.headerLogo}>ZEONIS</Text>
              <Text style={styles.headerSubtitle}>{t('loans')}</Text>
            </View>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="cash" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('settings'),
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Text style={styles.headerLogo}>ZEONIS</Text>
              <Text style={styles.headerSubtitle}>{t('settings')}</Text>
            </View>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="settings" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    alignItems: 'center',
  },
  headerLogo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  },
});