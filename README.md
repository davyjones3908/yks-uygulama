# YKS Uygulama Projesi

## 📱 Proje Hakkında

Bu proje, YKS (Yükseköğretim Kurumları Sınavı) hazırlığı için bir mobil uygulama geliştirme projesidir. Dört kişilik bir ekip tarafından yapılacak bu projede, öğrencilerin çalışmalarını takip edebilecekleri, test çözebilecekleri ve ilerleme durumlarını görebilecekleri bir platform oluşturulacaktır.

### Proje Amacı

- YKS'ye hazırlanan öğrenciler için interaktif bir çalışma platformu oluşturmak
- Test çözme ve performans takip etme imkanı sağlamak
- Kullanıcı dostu bir arayüz ile öğrenme deneyimini iyileştirmek
- Ekip çalışması ve yazılım geliştirme en iyi uygulamalarını öğrenmek

### Teknoloji Stack

Projede aşağıdaki teknolojiler kullanılacaktır:

- **Frontend:** React Native / Flutter (Karar verilecek)
- **Backend:** Node.js + Express (API)
- **Veritabanı:** Firebase Realtime Database / MongoDB
- **Kimlik Doğrulama:** Firebase Authentication
- **Barındırma:** Firebase Hosting / Heroku

> **Not:** Teknolojiler ekip kararı doğrultusunda değiştirilebilir.

### Ekip Bilgisi

- **Ekip Büyüklüğü:** 4 kişi
- **Repository:** davyjones3908/yks-uygulama
- **Ana Branch:** main
- **Başlama Tarihi:** 23 Temmuz 2026

---

## 🚀 Hızlı Başlangıç

### Gereksinimler

- Node.js 16+ yüklü olmalıdır
- Git yüklü olmalıdır
- GitHub Desktop (isteğe bağlı, başlangıç seviyesi kullanıcılar için önerilir)
- Kod editörü (VS Code önerilir)

### Kurulum Adımları

#### 1. Repository'yi Klonlama

```bash
git clone https://github.com/davyjones3908/yks-uygulama.git
cd yks-uygulama
```

**GitHub Desktop ile:**
1. GitHub Desktop'ı açın
2. "File" → "Clone repository" seçin
3. "davyjones3908/yks-uygulama" repository'sini seçin
4. Bilgisayarınızda kaydetmek istediğiniz klasörü seçin
5. "Clone" düğmesini tıklayın

#### 2. Bağımlılıkları Yükleme

```bash
npm install
```

#### 3. Ortam Değişkenlerini Yapılandırma

```bash
cp .env.example .env
```

Gerekli ortam değişkenlerini `.env` dosyasında düzenleyin.

#### 4. Geliştirme Sunucusunu Başlatma

```bash
npm run dev
```

Uygulama başarıyla açılırsa, terminal'de `Server running on http://localhost:3000` veya benzeri bir mesaj görürsünüz.

---

## 📁 Proje Yapısı

```
yks-uygulama/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   ├── feature_request.md
│   │   └── general.md
│   ├── pull_request_template.md
│   └── copilot-instructions.md
├── src/
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   ├── pages/               # Ekranlar / Sayfalar
│   ├── services/            # API ve dış hizmetler
│   ├── styles/              # CSS / Stil dosyaları
│   ├── utils/               # Yardımcı fonksiyonlar
│   ├── hooks/               # React Hooks (özel)
│   ├── context/             # Context API durumu
│   └── App.js               # Ana uygulama dosyası
├── public/                  # Statik dosyalar
├── tests/                   # Test dosyaları
├── docs/                    # Proje dokümantasyonu
├── .env.example             # Ortam değişkenleri şablonu
├── .gitignore              # Git tarafından yoksayılacak dosyalar
├── .prettierrc              # Kod formatlaması ayarları
├── .eslintrc.json           # Linting ayarları
├── package.json             # Bağımlılıklar ve script'ler
├── package-lock.json        # Bağımlılık kilidi
├── README.md                # Bu dosya
├── CONTRIBUTING.md          # Katkı rehberi ve çalışma kuralları
└── LICENSE                  # Lisans dosyası
```

---

## 👥 Ekip Çalışma Kuralları

Bu proje için izleyeceğimiz çalışma süreci hakkında detaylı bilgi için **[CONTRIBUTING.md](CONTRIBUTING.md)** dosyasını okuyun.

### Kısa Özet

✅ **Yapılacak:**
- Her görev için ayrı branch açma
- Pull Request ile kod incelemesi
- Anlaşılır commit mesajları yazma
- `.env` dosyalarını `.gitignore`'a ekleme

❌ **Yapılmayacak:**
- Main branch'inde doğrudan geliştirme
- API anahtarı veya şifre GitHub'a yükleme
- Çok büyük Pull Request'ler açma

---

## 🛠️ Geliştirme Komutları

```bash
# Geliştirme sunucusunu başlatma
npm run dev

# Ürün için build oluşturma
npm run build

# Test'leri çalıştırma
npm test

# Kod kalitesini kontrol etme (linting)
npm run lint

# Kod formatlaması
npm run format
```

---

## 📝 Katkı Süreci

1. **Branch oluşturun:** `feature/gorev-adi` veya `fix/hata-adi`
2. **Kod yazın ve test edin**
3. **Commit edin:** Açık ve anlaşılır mesajlar yazın
4. **Push edin:** Branch'i GitHub'a gönderin
5. **Pull Request açın:** Detaylı açıklama ekleyin
6. **İnceleme aşaması:** En az bir ekip üyesi onaylamalı
7. **Merge edin:** Onay sonrasında ana branch'e katılın

Detaylı bilgi için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını okuyun.

---

## 📞 Iletişim ve Sorular

Proje hakkında sorularınız varsa:
- GitHub Issues bölümünde soru açabilirsiniz
- Ekip üyeleriyle Discussions sekmesinde iletişime geçebilirsiniz

---

## 📄 Lisans

Bu proje MIT lisansı altında yayınlanmıştır.

---

**Happy Coding! 🚀**
