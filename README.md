
# 🎬 DesignFlow AI - Ürün Lansmanı Videosu

> Remotion, TypeScript ve modern web teknolojileri ile AI destekli video üretimi

## 📹 Final Video



https://github.com/user-attachments/assets/f1361a4a-3114-47a5-883c-4c356c32b184




*Geleneksel video düzenleme yazılımı kullanmadan, tamamen kod ile oluşturulmuş  ürün lansmanı videosu.*

---

## 🚀 Proje Hakkında

Bu proje, **programatik video üretimi** konusunda Remotion framework'ünü kullanarak geliştirilmiştir. After Effects veya Premiere Pro gibi geleneksel video editörleri yerine, her kare, animasyon ve geçiş TypeScript kodu ile oluşturulmuştur.

**Çözünürlük:** 1920x1080 (Full HD)  
**Render Süresi:** ~3-5 dakika

---

## 🛠️ Kullanılan Teknolojiler

### Ana Framework
- **[Remotion](https://www.remotion.dev/)** `v4.0.422` - React tabanlı video üretim framework'ü
- **React** `v19.2.3` - Component bazlı video yapısı
- **TypeScript** `v5.9.3` - Type-safe video geliştirme

### Tasarım & Stil
- **Tailwind CSS** `v4.0.0` - Utility-first CSS framework
- **CSS Gradients & Glassmorphism** - Modern UI efektleri
- **Custom Animations** - Spring fiziği ve interpolation tabanlı geçişler

### AI Entegrasyonu
- **Leonardo AI** - Logo ve ikon üretimi (4 özel ikon + 1 logo)
- **Google Text-to-Speech (gTTS)** - Script'ten sesli anlatım üretimi
  - Alternatif: ElevenLabs API (premium kalite TTS)

### Geliştirme Araçları
- **Node.js** - Script otomasyonu (ses üretimi)
- **Axios** `v1.13.5` - TTS servisleri için API istekleri
- **ESLint** - Kod kalitesi ve tutarlılık
- **Prettier** - Kod formatlama

### Build & Render
- **FFmpeg** (Remotion üzerinden) - MP4 video encoding
- **Remotion CLI** - Development server ve rendering
