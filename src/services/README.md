# Hizmetler (Services)

Bu klasörde API çağrıları ve dış hizmetler bulunur.

## Yapı

```
services/
├── api.js          # API istemci
├── auth.js         # Kimlik doğrulama
├── database.js     # Veritabanı işlemleri
└── firebase.js     # Firebase ayarları
```

## Örnek API Service

```javascript
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function fetchUser(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    if (!response.ok) throw new Error('Hata');
    return await response.json();
  } catch (error) {
    console.error('Kullanıcı yükleme hatası:', error);
    throw error;
  }
}
```
