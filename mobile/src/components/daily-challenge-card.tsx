import { Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

export function DailyChallengeCard() {
  const handlePress = () => {
    alert('Günlük meydan okuma yakında başlayacak.');
  };

  return (
    <View style={styles.wrapper}>
      <ThemedText style={styles.sectionTitle}>Günlük Meydan Okuma</ThemedText>

      <LinearGradient
        colors={['#C8FF3D', '#FF3D9A', '#FF7A3D']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.55, 1]}
        style={styles.card}
      >
        <View style={styles.topRow}>
          <ThemedText style={styles.tinyTitle}>DAILY CHALLENGE</ThemedText>
          <View style={styles.timeBadge}>
            <Ionicons name="time-outline" size={14} color="#FFFFFF" />
            <ThemedText style={styles.timeBadgeText}>10dk</ThemedText>
          </View>
        </View>

        <ThemedText style={styles.mainText}>
          5 Türev sorusu çöz, +100 XP{'\n'}kazan!
        </ThemedText>

        <View style={styles.bottomRow}>
          <View style={styles.xpBadge}>
            <Ionicons name="star" size={14} color="#FFFFFF" />
            <ThemedText style={styles.xpBadgeText}>+100 XP</ThemedText>
          </View>

          <Pressable onPress={handlePress} style={styles.ctaButton}>
            <ThemedText style={styles.ctaText}>Başla</ThemedText>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: Spacing.two,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: Spacing.three,
  },
  card: {
    marginHorizontal: Spacing.three,
    borderRadius: 24,
    padding: Spacing.three,
    gap: Spacing.three,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tinyTitle: {
    color: '#18172B',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0,0,0,0.35)',
    paddingHorizontal: Spacing.two,
    paddingVertical: 6,
    borderRadius: 16,
  },
  timeBadgeText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  mainText: {
    color: '#18172B',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0,0,0,0.35)',
    paddingHorizontal: Spacing.two,
    paddingVertical: 8,
    borderRadius: 18,
  },
  xpBadgeText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(0,0,0,0.35)',
    paddingHorizontal: Spacing.three,
    paddingVertical: 8,
    borderRadius: 18,
  },
  ctaText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});