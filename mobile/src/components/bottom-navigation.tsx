import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';

type TabKey = 'home' | 'cards' | 'exams' | 'goals';

const TABS: { key: TabKey; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { key: 'home', label: 'Ana Sayfa', icon: 'home' },
  { key: 'cards', label: 'Kartlar', icon: 'layers' },
  { key: 'exams', label: 'Sınavlar', icon: 'timer' },
  { key: 'goals', label: 'Hedefler', icon: 'school' },
];

export function BottomNavigation() {
  const theme = useTheme();

  const handlePress = (key: TabKey) => {
    if (key !== 'home') {
      alert('Bu sayfa henüz hazırlanmadı.');
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.navigationBackground, borderTopColor: theme.border },
      ]}
    >
      {TABS.map((tab) => {
        const isActive = tab.key === 'home';
        const color = isActive ? theme.neonGreen : theme.textSecondary;

        return (
          <Pressable
            key={tab.key}
            onPress={() => handlePress(tab.key)}
            style={styles.tab}
          >
            <Ionicons name={tab.icon} size={22} color={color} />
            <ThemedText style={[styles.label, { color }]}>{tab.label}</ThemedText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: Spacing.two,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
  },
});