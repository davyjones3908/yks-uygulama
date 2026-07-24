import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';

type ActivityItemProps = {
  emoji: string;
  title: string;
  subtitle: string;
  xpText: string;
  xpColor: string;
};

export function ActivityItem({ emoji, title, subtitle, xpText, xpColor }: ActivityItemProps) {
  const theme = useTheme();

  return (
    <View style={[styles.row, { backgroundColor: theme.backgroundElement }]}>
      <ThemedText style={styles.emoji}>{emoji}</ThemedText>

      <View style={styles.textBlock}>
        <ThemedText style={styles.title} numberOfLines={1}>
          {title}
        </ThemedText>
        <ThemedText
          style={[styles.subtitle, { color: theme.textSecondary }]}
          numberOfLines={1}
        >
          {subtitle}
        </ThemedText>
      </View>

      <View style={[styles.xpBadge, { backgroundColor: xpColor }]}>
        <ThemedText style={styles.xpText}>{xpText}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Spacing.three,
    padding: Spacing.two,
    borderRadius: 18,
    gap: Spacing.two,
  },
  emoji: {
    fontSize: 22,
  },
  textBlock: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
  },
  xpBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: 6,
    borderRadius: 14,
  },
  xpText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0B3B1E',
  },
});