import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Environment variables yükle
dotenv.config();

// Express app'i oluştur
const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware'ler
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'YKS Uygulama API is running',
    timestamp: new Date().toISOString(),
    environment: NODE_ENV
  });
});

app.get('/', (req, res) => {
  res.json({
    name: 'YKS Uygulama API',
    version: '0.1.0',
    description: 'YKS hazırlığı için API',
    endpoints: {
      health: 'GET /api/health'
    }
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route bulunamadı'
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Hata:', err);
  res.status(500).json({
    status: 'error',
    message: 'Sunucu hatası',
    error: NODE_ENV === 'development' ? err.message : undefined
  });
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`🚀 YKS Uygulama API`);
  console.log(`${'='.repeat(50)}`);
  console.log(`📍 Server çalışıyor: http://localhost:${PORT}`);
  console.log(`🔧 Ortam: ${NODE_ENV}`);
  console.log(`📅 Başlama Saati: ${new Date().toLocaleString('tr-TR')}`);
  console.log(`${'='.repeat(50)}\n`);
});

export default app;
