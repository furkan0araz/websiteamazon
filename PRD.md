# Amazon Order Tracker & Bonus Platform - PRD (Ürün Gereksinimleri Belgesi)

## 🎯 Proje Özeti

**Proje Adı:** AmazonBonus  
**Vizyon:** Amazon alışverişlerinden bonus kazandıran, modern ve kullanıcı dostu sipariş takip platformu  
**Hedef Kitle:** Amazon'dan düzenli alışveriş yapan kullanıcılar  
**Teknoloji Stack:** Next.js, TypeScript, Tailwind CSS, PostgreSQL, Amazon SP-API  

## 🎨 Tasarım Kimliği

### Renk Paleti
- **Ana Renk:** Neon Koyu Mor (#6B46C1, #8B5CF6)
- **Aksan Renkleri:** Neon Yeşil (#10B981), Altın Sarısı (#F59E0B)
- **Arkaplan:** Koyu Gradyan (#0F0F23 → #1E1B4B)
- **Metin:** Açık Gri (#F8FAFC), Koyu Gri (#64748B)

### Tasarım Prensipleri
- **Modern & Minimalist:** Temiz çizgiler, fazlalıktan kaçınma
- **Neon Efektleri:** Hover durumlarında parıltı efektleri
- **Glassmorphism:** Yarı şeffaf kartlar ve bulanık arka plan
- **Responsive:** Tüm cihazlarda mükemmel görünüm

## 🚀 Temel Özellikler

### A. Kontrol Paneli
#### Sipariş Takip Tablosu
- Amazon siparişlerini otomatik çekme (Amazon SP-API)
- Sipariş durumları: Bekliyor, Kargoda, Teslim Edildi, İade
- Gerçek zamanlı güncellemeler
- Filtreleme ve arama özellikleri

#### Tahmini Kazanç Paneli
- Alışverişlerden kazanılan bonuslar (USD/TL)
- Canlı bonus hesaplayıcı
- Seviye bazlı bonus oranları
- Grafik ve istatistikler

#### Aylık Özet Dashboard
- Toplam sipariş sayısı
- Kazanılan toplam bonus
- İade oranları ve teslimat başarısı
- Aylık karşılaştırma grafikleri

### B. Bonus ve Ödül Sistemi
#### Seviyeli Bonus Sistemi
- **Başlangıç (Level 1):** %1 bonus
- **Gümüş (Level 2):** %1.5 bonus
- **Altın (Level 3):** %2 bonus
- **Platin (Level 4):** %2.5 bonus
- **Elmas (Level 5):** %3 bonus

#### Bonus Kullanım Seçenekleri
- Amazon hediye çeki
- İndirim kuponu
- Nakit çekim (minimum limit ile)
- Crypto para çevirimi

#### Referans Programı
- Arkadaş davet linki oluşturma
- Davet edilen her aktif kullanıcı için %10 bonus
- Çok seviyeli referans sistemi

### C. Eklenti & Entegrasyonlar
#### Amazon API Entegrasyonu
- SP-API ile sipariş geçmişi çekme
- Gerçek zamanlı sipariş durumu takibi
- Güvenli OAuth2 bağlantısı

#### Tarayıcı Eklentisi
- Chrome/Firefox eklentisi
- Amazon'da alışveriş yaparken bonus gösterimi
- Tek tıkla bonus aktivasyonu

#### Mobil Uygulama
- React Native ile geliştirme
- Push bildirimleri
- Offline mod desteği

### D. İletişim ve Destek
#### Canlı Destek Sistemi
- Chatbot entegrasyonu
- WhatsApp Business API
- Ticket sistemi

#### Yardım Merkezi
- SSS (Sık Sorulan Sorular)
- Video rehberleri
- Bonus kullanım kılavuzu
- Güvenlik politikaları

## 📱 Sayfa Yapısı

### 1. Ana Sayfa (Landing Page)
- Hero section: "Amazon alışverişlerinden bonus kazan!"
- Özellik tanıtımları
- Kullanıcı testimonialları
- Fiyatlandırma planları

### 2. Kayıt/Giriş Sayfaları
- Email ve şifre ile kayıt
- Google OAuth entegrasyonu
- Amazon hesabı bağlantısı
- Şifremi unuttum özelliği

### 3. Dashboard (Ana Panel)
- Sipariş takip kartları
- Bonus istatistikleri
- Seviye ilerleme çubuğu
- Hızlı işlemler menüsü

### 4. Siparişler Sayfası
- Detaylı sipariş listesi
- Filtreleme seçenekleri
- Bonus kazanç detayları
- İade işlemleri

### 5. Bonuslar Sayfası
- Bonus geçmişi
- Kullanım seçenekleri
- Çekim talepleri
- Bonus kuralları

### 6. Kampanyalar Sayfası
- Aktif kampanyalar
- Dönemsel bonus artışları
- Özel teklifler
- Referans programı detayları

### 7. Profil ve Ayarlar
- Kişisel bilgiler
- Amazon hesap bağlantısı
- Bildirim tercihleri
- Güvenlik ayarları

## 🛠️ Teknik Gereksinimler

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Framer Motion
- **UI Kütüphanesi:** shadcn/ui + Radix UI
- **State Management:** Zustand
- **Charts:** Recharts

### Backend
- **Runtime:** Node.js + TypeScript
- **Framework:** Next.js API Routes / Express.js
- **Database:** PostgreSQL + Prisma ORM
- **Authentication:** NextAuth.js
- **File Storage:** AWS S3

### Üçüncü Parti Entegrasyonlar
- **Amazon SP-API:** Sipariş bilgileri
- **Stripe:** Ödeme işlemleri
- **SendGrid:** Email bildirimleri
- **Firebase:** Push bildirimleri

### Güvenlik ve Performans
- **HTTPS:** SSL sertifikası
- **Rate Limiting:** API koruması
- **Data Encryption:** Hassas verilerin şifrelenmesi
- **CDN:** Vercel/CloudFlare entegrasyonu

## 📊 Success Metrics (Başarı Metrikleri)

### Kullanıcı Metrikleri
- Monthly Active Users (MAU)
- User Retention Rate (%30 günlük)
- Average Session Duration
- Conversion Rate (kayıt → aktif kullanıcı)

### İş Metrikleri
- Toplam işlenen sipariş sayısı
- Kullanıcı başına ortalama bonus
- Referral program başarı oranı
- Revenue per user

## 🚧 Geliştirme Aşamaları

### Phase 1: MVP (4 hafta)
- [ ] Temel UI/UX tasarımı
- [ ] Kullanıcı kayıt/giriş sistemi
- [ ] Basit sipariş takibi
- [ ] Bonus hesaplama sistemi

### Phase 2: Core Features (6 hafta)
- [ ] Amazon API entegrasyonu
- [ ] Dashboard geliştirme
- [ ] Bonus çekim sistemi
- [ ] Mobil responsive tasarım

### Phase 3: Advanced Features (8 hafta)
- [ ] Tarayıcı eklentisi
- [ ] Referans programı
- [ ] Analytics ve raporlama
- [ ] Mobil uygulama

### Phase 4: Scale & Optimize (4 hafta)
- [ ] Performans optimizasyonu
- [ ] A/B test implementasyonu
- [ ] Güvenlik sıkılaştırması
- [ ] Monitoring ve logging

## 💰 Monetizasyon Stratejisi

### Revenue Streams
1. **Platform Komisyonu:** Bonus ödemelerinden %5-10 kesinti
2. **Premium Membership:** Yüksek bonus oranları ve özel özellikler
3. **Affiliate Marketing:** Partner mağazalardan komisyon
4. **Enterprise Solutions:** Kurumsal müşteriler için özel çözümler

### Fiyatlandırma
- **Free Plan:** %1 bonus, basic features
- **Pro Plan:** %2 bonus, advanced analytics ($9.99/ay)
- **VIP Plan:** %3 bonus, priority support ($19.99/ay)

---

**Proje Başlangıç Tarihi:** 2025-01-27  
**Tahmini Tamamlanma:** 2025-04-27 (3 ay)  
**Toplam Geliştirme Süresi:** 22 hafta  