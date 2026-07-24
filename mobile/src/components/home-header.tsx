import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';

export function HomeHeader() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatar}>
          <ThemedText style={styles.avatarText}>TC</ThemedText>
        </View>
        <View>
          <ThemedText style={[styles.username, { color: theme.textSecondary }]}>
            Taro Can
          </ThemedText>
          <ThemedText style={styles.greeting}>Merhaba!</ThemedText>
        </View>
      </View>

      <View style={styles.badges}>
        <View style={[styles.badge, { backgroundColor: theme.backgroundElement }]}>
          <Ionicons name="flame" size={16} color={theme.pink} />
          <ThemedText style={[styles.badgeText, { color: theme.pink }]}>5 Gün</ThemedText>
        </View>
        <View style={[styles.badge, { backgroundColor: theme.backgroundElement }]}>
          <Ionicons name="trophy" size={16} color={theme.neonGreen} />
          <ThemedText style={[styles.badgeText, { color: theme.neonGreen }]}>240 XP</ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.two,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4ADE80',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#FFFFFF',
  },
  username: {
    fontSize: 13,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '700',
  },
  badges: {
    flexDirection: 'column',
    gap: Spacing.one,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: Spacing.two,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    fontWeight: '700',
    fontSize: 13,
  },
});