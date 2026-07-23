# Katkı Rehberi (Contributing Guide)

Bu dokümanda, projemize katılmak ve ekip olarak nasıl çalışacağımız hakkında bilgiler bulacaksınız.

---

## 📋 Ekip Çalışma Kuralları

### 1. Branch Yönetimi

**Temel Kurallar:**
- ❌ **Hiç kimse doğrudan `main` branch'inde çalışmayacak**
- ✅ Her görev için **ayrı bir branch** açılacak
- ✅ Branch isimleri şu formatta olacak:
  - `feature/kisa-gorev-adi` - Yeni özellik eklerken
  - `fix/kisa-hata-adi` - Hata düzeltirken
  - `docs/guncellemeler` - Dokümantasyon güncellemelerinde

**Örnek Branch İsimleri:**
```
feature/auth-login
feature/user-profile-page
fix/crash-on-startup
fix/incorrect-calculation
docs/setup-instructions
```

### 2. Commit Mesajları

**Commit mesajları açık ve anlaşılır olmalıdır.**

❌ **Kötü Örnek:**
```
fixed bugs
updates
changes
```

✅ **İyi Örnek:**
```
Add user authentication with Firebase
Fix crash when loading profile page
Update README with installation steps
Refactor database service for better performance
```

**Commit mesajı kuralı:**
- İlk satır: Kısa özet (50 karakterden az)
- Boş satır
- Detaylı açıklama (isteğe bağlı)

### 3. Pull Request Süreci

**Önemli Kurallar:**
- ✅ Her Pull Request **yalnızca tek bir görev veya özelliği** kapsayacak
- ✅ Pull Request **en az bir ekip üyesi tarafından** kontrol edilecek
- ✅ Pull Request açıklamasında yapılan değişiklikler **detaylı** anlatılacak
- ✅ **Tüm testler** geçmeden merge edilmeyecek

### 4. Güvenlik Kuralları

**Çok Önemli! 🔒**

- ❌ **Asla GitHub'a API anahtarı, token, parola veya şifre yüklemeyin**
- ✅ Tüm gizli bilgileri `.env.example` dosyasının şablonunda yazın
- ✅ Gerçek değerleri kişisel `.env` dosyasında tutun
- ✅ `.env` dosyası `.gitignore`'a eklenmiş olmalı

---

## 🎯 Başlangıç Seviyesi Kullanıcılar için GitHub Desktop Süreci

Eğer GitHub Desktop kullanıyorsanız, lütfen bu adımları takip edin:

### Adım 1: Repository'yi Clone Etme

1. GitHub Desktop'ı açın
2. **Menüde** "File" → "Clone repository" seçin
3. "davyjones3908/yks-uygulama" repository'sini arayın ve seçin
4. Bilgisayarınızda bir klasör seçin (örn: `C:\Users\Kullanıcı\Projects`)
5. **"Clone" düğmesini tıklayın**
6. Bekleme bitene kadar bekleyin (dosyalar indirilecek)

### Adım 2: Main Branch'i Güncelleme

Yeni başlamadan veya pull request açmadan **her zaman** main branch'i güncelleyin:

1. GitHub Desktop'ta sol üst köşede **"Current Branch"** seçeneğini bulun
2. **"main" branch'i seçin**
3. Sağ üst köşede **"Fetch origin"** düğmesini tıklayın
4. Eğer "Pull origin" düğmesi görünürse, **onu da tıklayın**

*Bu işlem, ekip üyelerin en son yaptıkları değişiklikleri sizin bilgisayarınıza getirir.*

### Adım 3: Yeni Branch Oluşturma

1. GitHub Desktop'ta **"Current Branch"** seçeneğini tıklayın
2. **"New Branch" düğmesini tıklayın**
3. Aşağıdaki bilgileri girin:
   - **Name (İsim):** `feature/gorev-adi` veya `fix/hata-adi`
   - **Create branch from:** `main` olmalı
4. **"Create Branch" düğmesini tıklayın**
5. Sorulursa **"Publish branch"** düğmesini tıklayın (branch'i GitHub'a yüklemek için)

**Örnek:**
```
featuresName: feature/login-page
Create from: main
```

### Adım 4: Kod Değişikliği Yapma

1. **Kod editörünüzü açın** (VS Code önerilir)
2. Repository klasörünü editörde açın
3. Gerekli değişiklikleri yapın
4. Dosyaları kaydedin

### Adım 5: Commit Oluşturma

1. GitHub Desktop'a dönün
2. Sol tarafta değişen dosyaları göreceksiniz
3. **Açıklamak istediğiniz dosyaları kontrol edin** (checkbox)
4. Altta **"Summary (Özet)"** alanına yapılan işi yazın:
   - Örnek: `Add login functionality`
   - Örnek: `Fix crash on startup`
5. **"Commit to [branch-adi]" düğmesini tıklayın**

### Adım 6: Branch'i Push Etme (GitHub'a Yükleme)

1. GitHub Desktop'ta sağ üst köşede **"Publish branch"** veya **"Push origin"** düğmesini tıklayın
2. Bekleme bitene kadar bekleyin

*Bu işlem, yaptığınız değişiklikleri GitHub'a gönderir.*

### Adım 7: Pull Request Açma

1. GitHub Desktop'ta, **"Current Branch"** seçiminde yaptığınız branch'i göreceksiniz
2. Sağ üst köşede **"Create Pull Request"** düğmesini tıklayın
3. Tarayıcıda GitHub sayfası açılacak
4. Pull Request açıklamasını doldurun:
   - **Başlık:** Yapılan işin özeti
   - **Açıklama:** Neler değiştiğini detaylı yazın
5. **"Create Pull Request" düğmesini tıklayın**

**Örnek Pull Request Açıklaması:**
```
## Yapılan İşler
- Login sayfası oluşturdum
- Firebase authentication entegre ettim
- Form validasyonu ekledim

## Test Edildi
- Doğru parola ile giriş başarılı
- Yanlış parola ile hata mesajı gösteriliyor
```

### Adım 8: Pull Request Onayı Bekleme

1. GitHub'da yaptığınız pull request'i açın
2. Ekip üyelerinin yorumlar yapabileceğini veya değişiklik isteyebileceğini bilin
3. İstenen değişiklikleri yapıp tekrar commit edin
4. Sonunda ekip üyesi **"Approve"** düğmesini tıklatacak

### Adım 9: Pull Request'i Merge Etme

1. Pull Request onaylandıktan sonra, **"Merge pull request"** düğmesini tıklayın
2. **"Confirm merge"** düğmesini tıklayın
3. **"Delete branch"** düğmesini tıklayın (isteğe bağlı, temizlik için)

### Adım 10: Main Branch'i Tekrar Güncelleme

Merge sonrasında, yerel bilgisayarınızdaki main branch'i güncelleyin:

1. GitHub Desktop'ta **"Current Branch"** → **"main"** seçin
2. **"Fetch origin"** düğmesini tıklayın
3. **"Pull origin"** düğmesini tıklayın (görünürse)

*Artık ana projede en son değişiklikler sizde vardır!*

---

## 🔄 Tam Süreci Görsel Olarak İzleme

```
1. main branch'i güncelle (Fetch + Pull)
                |
                v
2. Yeni branch oluştur (feature/gorev-adi)
                |
                v
3. Kod yaz ve değişiklikleri yap
                |
                v
4. Dosyaları kontrol et ve Commit yap
                |
                v
5. Branch'i GitHub'a push et (Publish/Push)
                |
                v
6. Pull Request aç ve açıkla
                |
                v
7. Ekip üyesi kontrol et ve onay ver
                |
                v
8. Pull Request'i merge et
                |
                v
9. Main branch'i tekrar güncelle
                |
                v
           Başarılı! ✓
```

---

## 📚 Faydalı Bilgiler

### Conflict (Çakışma) Oluşursa

Eğer pull request açarken çakışma uyarısı görürseniz:
1. GitHub Desktop'ta branch'inize geri dönün
2. **"Branch" → "Update from main"** seçin
3. VS Code'da çakışan dosyaları açın
4. Çakışan bölümleri düzenleyin
5. Tekrar commit ve push yapın

### Yanlışlıkla Yanlış Branch'te Çalıştıysam?

1. Değişiklikleri kaydedin (henüz commit etmeyin)
2. GitHub Desktop'ta **"Stash"** seçeneğini kullanın
3. Doğru branch'e geçin
4. Değişiklikleri geri yükleyin

---

## ❓ Sıkça Sorulan Sorular (FAQ)

**S: Main branch'e doğrudan push yapabilirim mi?**
C: Hayır! Main branch korunur. Her zaman feature branch'te çalışın.

**S: .env dosyasını GitHub'a yükledim, ne yapmalı?**
C: Derhal repository sahibine bildiriniz! Gerçek şifreler yüklenmişse hemen değiştirilmelidir.

**S: Kaç commit atlayabilirim?**
C: Her anlamlı değişiklik için yeni commit yapın. Kuralı yok, ama az olanları tercih edin.

**S: Pull request'i geri alabilir miyim?**
C: Evet! Kapatabilirsiniz. GitHub'da "Close pull request" seçeneğini kullanın.

---

## 📞 Yardım İhtiyacınız Varsa

- **Teknik Sorular:** GitHub Issues bölümünde açın
- **Hızlı Sorular:** Ekip üyeleriyle iletişime geçin
- **Bilmediğiniz bir şey:** Sorgulamaktan çekinmeyin! Herkes başlangıçtır.

---

**İyi Çalışmalar! 🚀**
