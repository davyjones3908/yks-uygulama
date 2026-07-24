import { Platform, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeHeader } from '@/components/home-header';
import { DailyPlanCard } from '@/components/daily-plan-card';
import { FeatureCard } from '@/components/feature-card';
import { ActivityItem } from '@/components/activity-item';
import { DailyChallengeCard } from '@/components/daily-challenge-card';
import { BottomNavigation } from '@/components/bottom-navigation';
import { useTheme } from '@/hooks/use-theme';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <DailyPlanCard />
        <FeatureCard
          accentColor={theme.green}
          iconName="layers"
          title="Bilgi Kartları"
          description="12 Ders • 840+ Kart"
          pillOne="12/12 ders"
          pillTwo="12dk hedef"
          alertMessage="Bilgi Kartları yakında açılacak."
        />
        <FeatureCard
          accentColor={theme.pink}
          iconName="timer"
          title="Mini Sınav"
          description="8 Deneme • Hızlı Çöz"
          pillOne="4/8 deneme"
          pillTwo="10dk zorluk"
          alertMessage="Mini Sınav yakında açılacak."
        />
        <ThemedText style={styles.sectionTitle}>Son Aktivitelerin</ThemedText>

        <ActivityItem
          emoji="📐"
          title="Temel Kavramlar Testi"
          subtitle="Dün çözüldü • 4/5 Doğru"
          xpText="+15XP"
          xpColor={theme.backgroundSelected}
        />
        <ActivityItem
          emoji="🧮"
          title="Matematik Kartları"
          subtitle="Bugün • 18/20 Doğru"
          xpText="+30XP"
          xpColor="#D8F5DE"
        />
        <ActivityItem
          emoji="📚"
          title="Türkçe Mini Sınav"
          subtitle="Dün • 3/5 Doğru"
          xpText="+10XP"
          xpColor="#FCD6E6"
        />
        <DailyChallengeCard />
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    ...Platform.select({
      web: {
        maxWidth: 430,
        width: '100%',
        alignSelf: 'center',
      },
      default: {},
    }),
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 16,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: Spacing.three,
    marginTop: Spacing.two,
  },
});