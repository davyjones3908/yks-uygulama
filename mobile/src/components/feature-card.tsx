import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';

type FeatureCardProps = {
  accentColor: string;
  iconName: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  pillOne: string;
  pillTwo: string;
  alertMessage: string;
};

export function FeatureCard({
  accentColor,
  iconName,
  title,
  description,
  pillOne,
  pillTwo,
  alertMessage,
}: FeatureCardProps) {
  const theme = useTheme();

  const handlePress = () => {
    alert(alertMessage);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.card, { backgroundColor: theme.backgroundElement }]}
    >
      <View style={[styles.iconBox, { backgroundColor: accentColor }]}>
        <Ionicons name={iconName} size={22} color="#FFFFFF" />
      </View>

      <ThemedText style={styles.title}>{title}</ThemedText>
      <ThemedText style={[styles.description, { color: theme.textSecondary }]}>
        {description}
      </ThemedText>

      <View style={styles.pillRow}>
        <View style={[styles.pill, { borderColor: accentColor }]}>
          <ThemedText style={[styles.pillText, { color: accentColor }]}>{pillOne}</ThemedText>
        </View>
        <View style={[styles.pill, { borderColor: accentColor }]}>
          <ThemedText style={[styles.pillText, { color: accentColor }]}>{pillTwo}</ThemedText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: Spacing.three,
    padding: Spacing.three,
    borderRadius: 24,
    gap: Spacing.two,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
  },
  description: {
    fontSize: 13,
  },
  pillRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    marginTop: 4,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.two,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1.5,
  },
  pillText: {
    fontWeight: '700',
    fontSize: 12,
  },
});