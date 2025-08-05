# AmazonBonus - Amazon Siparişlerinden Bonus Kazan

Modern ve estetik Amazon sipariş takip ve bonus sistemi platformu.

## 🎯 Özellikler

- **Sipariş Takibi**: Amazon siparişlerinizi gerçek zamanlı olarak takip edin
- **Bonus Sistemi**: Her alışverişten %3'e kadar bonus kazanın
- **Modern Tasarım**: Neon koyu mor temasıyla çarpıcı arayüz
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Glassmorphism**: Modern cam efektli tasarım
- **Animasyonlar**: Framer Motion ile akıcı animasyonlar

## 🚀 Teknoloji Stack

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom Neon Theme
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Tam tip güvenliği

## 🎨 Tasarım Teması

- **Ana Renk**: Neon Koyu Mor (#8b5cf6)
- **Aksan Renkleri**: Neon Yeşil, Pembe, Mavi
- **Arkaplan**: Koyu Gradyan (#0f0f23 → #1e1b4b)
- **Efektler**: Neon glow, glassmorphism, animasyonlar

## 📦 Kurulum

1. Bağımlılıkları yükleyin:
\`\`\`bash
npm install
\`\`\`

2. Geliştirme sunucusunu başlatın:
\`\`\`bash
npm run dev
\`\`\`

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📁 Proje Yapısı

\`\`\`
├── app/
│   ├── globals.css          # Global CSS ve tema
│   ├── layout.tsx           # Ana layout
│   ├── page.tsx             # Giriş sayfası
│   └── dashboard/
│       └── page.tsx         # Dashboard sayfası
├── components/
│   └── ui/                  # UI komponentleri
│       ├── button.tsx
│       ├── input.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts             # Yardımcı fonksiyonlar
└── PRD.md                   # Ürün Gereksinimleri Belgesi
\`\`\`

## 🔧 Geliştirme

### Sayfalar

1. **Giriş Sayfası** (`/`): Modern giriş ve kayıt formu
2. **Dashboard** (`/dashboard`): Sipariş takibi ve bonus istatistikleri

### Komponentler

- **Button**: Neon efektli butonlar
- **Input**: Glassmorphism inputlar
- **Card**: Yarı şeffaf kartlar

### Özelleştirme

Renk temasını `tailwind.config.js` dosyasından özelleştirebilirsiniz:

\`\`\`js
colors: {
  primary: {
    500: '#8b5cf6', // Ana neon mor
  },
  neon: {
    purple: '#8b5cf6',
    pink: '#ec4899',
    green: '#10b981',
  }
}
\`\`\`

## 📱 Responsive Tasarım

- **Mobile First**: Önce mobil tasarım
- **Breakpoints**: Tailwind standart breakpoint'leri
- **Flexible Layouts**: Grid ve Flexbox

## 🎭 Animasyonlar

- **Framer Motion**: Sayfa geçişleri ve hover efektleri
- **CSS Animations**: Neon glow ve gradient animasyonları
- **Micro Interactions**: Buton hover ve focus durumları

## 🔮 Gelecek Özellikler

- Amazon API entegrasyonu
- Gerçek bonus sistemi
- Mobil uygulama
- Push bildirimleri
- Çoklu dil desteği

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## 📞 İletişim

- **Email**: info@amazonbonus.com
- **GitHub**: [AmazonBonus](https://github.com/amazonbonus)
- **Web**: [amazonbonus.com](https://amazonbonus.com)

---

Made with ❤️ and ⚡ by AmazonBonus Team