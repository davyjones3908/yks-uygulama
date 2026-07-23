# Copilot Talimatları

Bu dosya, GitHub Copilot ve diğer AI asistanlarına proje hakkında bilgi verir.

## 📌 Proje Özeti

**Proje Adı:** YKS Uygulama
**Amacı:** YKS hazırlığı için mobil/web uygulama
**Ekip:** 4 kişi
**Teknoloji:** React Native/Flutter, Node.js, Firebase

## 🏗️ Proje Yapısı

```
src/
├── components/      # Yeniden kullanılabilir UI bileşenleri
├── pages/          # Ekranlar/Sayfalar
├── services/       # API ve dış hizmetler
├── styles/         # CSS/Stil dosyaları
├── utils/          # Yardımcı fonksiyonlar
├── hooks/          # Custom React hooks
├── context/        # Context API durumu
└── App.js          # Ana uygulama dosyası
```

## 📏 Kod Yazma Kuralları

### 1. Stil Rehberi

- **Dil:** TypeScript tercih edilir, JavaScript da kabul edilir
- **Formatting:** Prettier kullanın (npm run format)
- **Linting:** ESLint kurallarına uyun (npm run lint)
- **Naming:** camelCase fonksiyon/değişkenler, PascalCase bileşenler

### 2. Bileşen Yazma

```javascript
// ✅ İyi Örnek
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  return <div>{user?.name}</div>;
}

export default UserProfile;
```

### 3. Hata Yönetimi

- Try-catch blokları kullanın
- Kullanıcıya anlaşılır hata mesajları gösterin
- Console'da detaylı log mesajları yazın (development'da)

### 4. Async İşlemler

- Loading state'i yönetin
- Error handling yapın
- Timeout'ları ayarlayın

## 🔒 Güvenlik Kuralları

- ❌ **Asla hard-code API key veya şifre yazmayın**
- ✅ `.env.example` dosyasından template alın
- ✅ `.env` dosyasını `.gitignore`'a ekleyin
- ✅ Sensitive data için environment variables kullanın
- ✅ User input'ları validate edin

## 🧪 Testing

- Her fonksiyon için test yazın (mümkünse)
- Integration test'leri ekleyin
- Hata durumlarını test edin

## 📝 Yorum ve Dokümantasyon

- Kompleks logic'in üstüne yorum yazın
- Fonksiyonların başında JSDoc yazın
- Neden yapıldığını açıklayın, ne yaptığını değil

```javascript
/**
 * Kullanıcı verilerini API'dan yükler
 * @param {string} userId - Kullanıcı ID
 * @returns {Promise<User>} Kullanıcı nesnesi
 */
async function fetchUser(userId) {
  // ...
}
```

## 🎯 Geliştirme Pratikleri

### Branch Isimlendirme
- `feature/kisa-gorev-adi` - Yeni özellik
- `fix/kisa-hata-adi` - Hata düzeltme
- `docs/guncellemeler` - Dokümantasyon

### Commit Mesajları
- İlk satır: Kısa özet (50 char max)
- Detaylı açıklama (isteğe bağlı)
- Referans issue'ları: "Closes #123"

### Pull Request'ler
- Bir PR = Bir özellik/hata
- Pull request template'i kullanın
- En az bir review gerekli

## 📚 Faydalı Kaynaklar

- README.md - Kurulum ve başlangıç
- CONTRIBUTING.md - Katkı rehberi
- .env.example - Environment variables

## ❓ Sorular

Eğer Copilot:
- Kod yazması gerekiyorsa: GitHub CONTRIBUTING.md'yi oku
- Değişiklik yapması gerekiyorsa: Önce kod reviewers'a danış
- Komutu çalıştırması gerekiyorsa: Test ortamında yap

## 🚫 Yapma (Anti-patterns)

1. ❌ Çoklu branch'ten merge etme
2. ❌ Main'e doğrudan push yapma
3. ❌ Gizli bilgileri commit etme
4. ❌ Test etmeden push yapma
5. ❌ Kötü commit mesajları
6. ❌ Açıklamasız Pull Request

---

**Son Güncelleme:** 23 Temmuz 2026
