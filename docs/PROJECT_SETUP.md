# Proje Kurulum Rehberi

Bu dokümanda proje kurulumu detaylı olarak açıklanmıştır.

## 📋 Ön Koşullar

- Node.js 16+ ([https://nodejs.org](https://nodejs.org))
- Git ([https://git-scm.com](https://git-scm.com))
- Git Account (GitHub, GitLab, vb.)
- Kod Editörü (VS Code önerilir)

## ⚙️ Kurulum

### 1. Repository'yi Klonlama

```bash
git clone https://github.com/davyjones3908/yks-uygulama.git
cd yks-uygulama
```

### 2. Bağımlılıkları Yükleme

```bash
npm install
```

### 3. Environment Variables

```bash
cp .env.example .env
```

Gerekli ortam değişkenlerini `.env` dosyasında doldurun.

### 4. Geliştirme Sunucusunu Başlatma

```bash
npm run dev
```

Sunucu `http://localhost:3000` adresinde başlayacak.

## 🔍 Sistem Kontrolleri

### Node.js Versiyonu Kontrol Etme

```bash
node --version
# v16.0.0 veya daha yüksek olmalı
```

### npm Versiyonu Kontrol Etme

```bash
npm --version
# 8.0.0 veya daha yüksek olmalı
```

### Git Yapılandırması

```bash
# Adınızı ayarlayın
git config --global user.name "Adınız"

# Email'inizi ayarlayın
git config --global user.email "email@example.com"
```

## 📚 Faydalı Komutlar

```bash
# Geliştirme sunucusu (auto-reload ile)
npm run dev

# Kod stilini kontrol et
npm run lint

# Kodu formatla
npm run format

# Test'leri çalıştır
npm test

# Production build oluştur
npm run build
```

## 🚨 Sık Karşılaşılan Sorunlar

### Problem: "npm: command not found"

**Çözüm:** Node.js yükleyin ([https://nodejs.org](https://nodejs.org))

### Problem: "Port already in use"

**Çözüm:** Portu değiştirin

```bash
PORT=3001 npm run dev
```

### Problem: "Module not found"

**Çözüm:** Bağımlılıkları yeniden yükleyin

```bash
rm -rf node_modules
npm install
```

## 📞 Yardım

Sorun yaşıyorsanız:
1. Bu dökümanı tekrar okuyun
2. GitHub Issues'de arayın
3. Ekip üyeleriyle iletişime geçin
