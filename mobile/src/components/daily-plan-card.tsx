import { Pressable, StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';

const CIRCLE_SIZE = 90;
const STROKE_WIDTH = 8;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const PROGRESS = 0.65;

export function DailyPlanCard() {
  const theme = useTheme();

  const handlePress = () => {
    alert('Günlük plan yakında başlayacak.');
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundElement }]}>
      <View style={styles.left}>
        <View style={[styles.tag, { backgroundColor: theme.pink }]}>
          <ThemedText style={styles.tagText}>GÜNLÜK PLAN</ThemedText>
        </View>

        <ThemedText style={styles.mainText}>
          Bugün 40 Bilgi Kartı ve 1{'\n'}Sınav seni bekliyor.
        </ThemedText>

        <Pressable onPress={handlePress} style={styles.ctaRow}>
          <ThemedText style={[styles.ctaText, { color: theme.green }]}>
            Şimdi Başla
          </ThemedText>
          <Ionicons name="chevron-forward" size={16} color={theme.green} />
        </Pressable>
      </View>

      <View style={styles.progressWrapper}>
        <Svg
            width={CIRCLE_SIZE}
            height={CIRCLE_SIZE}
            style={{ transform: [{ rotate: '-90deg' }] }}
          >
          <Circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={RADIUS}
            stroke={theme.backgroundSelected}
            strokeWidth={STROKE_WIDTH}
            fill="none"
          />
          <Circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={RADIUS}
            stroke={theme.neonGreen}
            strokeWidth={STROKE_WIDTH}
            fill="none"
            strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
            strokeDashoffset={CIRCUMFERENCE * (1 - PROGRESS)}
            strokeLinecap="round"
          />
        </Svg>
        <View style={styles.progressLabel}>
          <ThemedText style={styles.progressPercent}>%65</ThemedText>
          <ThemedText style={[styles.progressGoal, { color: theme.textSecondary }]}>
            HEDEF
          </ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Spacing.three,
    padding: Spacing.three,
    borderRadius: 24,
    gap: Spacing.three,
  },
  left: {
    flex: 1,
    gap: Spacing.two,
  },
  tag: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.two,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 11,
  },
  mainText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ctaText: {
    fontWeight: '700',
    fontSize: 14,
  },
  progressWrapper: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressPercent: {
    fontSize: 18,
    fontWeight: '700',
  },
  progressGoal: {
    fontSize: 9,
    fontWeight: '600',
  },
});