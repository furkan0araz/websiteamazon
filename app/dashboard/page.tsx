"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ShoppingBag, 
  TrendingUp, 
  DollarSign, 
  Package, 
  Bell, 
  Settings, 
  User, 
  LogOut,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  ExternalLink,
  Gift,
  Star,
  Calendar,
  BarChart3,
  RefreshCw,
  Download,
  MessageCircle,
  CreditCard,
  Plus,
  ChevronRight,
  CalendarDays,
  Wallet
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Area, AreaChart, PieChart, Pie, Cell } from 'recharts'
import toast, { Toaster } from 'react-hot-toast'

export default function Dashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [chartType, setChartType] = useState<'line' | 'bar' | 'area'>('area')
  const [isUpdating, setIsUpdating] = useState(false)
  const [selectedDateRange, setSelectedDateRange] = useState('1 Haz 2025 - 31 Tem 2025')
  
  // Orders filters state
  const [orderFilters, setOrderFilters] = useState({
    status: 'Tümü',
    email: '',
    dateRange: 'Son 30 gün',
    pageSize: '10'
  })

  // Mock data
  const stats = {
    totalOrders: 24,
    deliveredOrders: 18,
    pendingOrders: 6,
    totalEarnings: 47.50,
    monthlyEarnings: 12.30,
    bonusLevel: 2
  }

  // Chart data
  const chartData = [
    { name: 'Oca', siparisler: 4, kazanc: 12.50, bonus: 8.5 },
    { name: 'Şub', siparisler: 6, kazanc: 18.30, bonus: 12.2 },
    { name: 'Mar', siparisler: 8, kazanc: 25.80, bonus: 16.8 },
    { name: 'Nis', siparisler: 5, kazanc: 15.20, bonus: 10.4 },
    { name: 'May', siparisler: 9, kazanc: 32.40, bonus: 21.6 },
    { name: 'Haz', siparisler: 12, kazanc: 48.70, bonus: 28.9 },
  ]

  const pieData = [
    { name: 'Teslim Edildi', value: 18, color: '#059669' },
    { name: 'Kargoda', value: 4, color: '#3b82f6' },
    { name: 'Bekliyor', value: 2, color: '#d97706' },
  ]

  // Button handlers
  const handleUpdateOrders = async () => {
    setIsUpdating(true)
    toast.loading('Siparişler güncelleniyor...', { id: 'update' })
    
    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false)
      toast.success('Siparişler başarıyla güncellendi!', { id: 'update' })
    }, 2000)
  }

  const handleExportData = () => {
    toast.success('Veriler CSV olarak indiriliyor...')
    // Simulate file download
    const data = "Sipariş ID,Ürün,Tarih,Durum,Bonus\n" + 
                 recentOrders.map(order => 
                   `${order.id},${order.product},${order.date},${order.status},${order.bonus}`
                 ).join('\n')
    
    const blob = new Blob([data], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'siparisler.csv'
    a.click()
  }

  const handleStartChat = () => {
    toast.success('Canlı sohbet başlatılıyor...')
    // Simulate chat opening
  }

  const handleLogout = () => {
    toast.success('Çıkış yapılıyor...')
    // Simulate logout
    setTimeout(() => {
      window.location.href = '/'
    }, 1500)
  }

  const handleViewDetails = (section: string) => {
    toast.info(`${section} detayları gösteriliyor...`)
    // Navigate to details page
  }

  // Payments data and handlers
  const paymentsData = {
    totalEarnings: 42.75,
    minimumPayout: 75.00,
    pendingPayments: 12.30,
    lastPaymentPeriod: '1 Haz 2025 - 31 Tem 2025'
  }

  const paymentHistory = [
    {
      id: 'PAY-001',
      type: 'Aylık Bonus',
      method: 'PayPal',
      date: '2024-12-15',
      status: 'Tamamlandı',
      amount: 125.50
    },
    {
      id: 'PAY-002',
      type: 'Referans Bonusu',
      method: 'Banka Havalesi',
      date: '2024-11-28',
      status: 'Tamamlandı',
      amount: 85.20
    },
    {
      id: 'PAY-003',
      type: 'Aylık Bonus',
      method: 'PayPal',
      date: '2024-11-15',
      status: 'İptal Edildi',
      amount: 67.40
    }
  ]

  const paymentMethods = [
    {
      id: 1,
      type: 'PayPal',
      email: 'user@example.com',
      isDefault: true
    }
  ]

  const handleAddPaymentMethod = () => {
    toast.info('Ödeme yöntemi ekleme formu açılıyor...')
    // Open payment method modal
  }

  const handleDateRangeChange = () => {
    const dateRanges = [
      '1 Oca 2025 - 31 Oca 2025',
      '1 Şub 2025 - 28 Şub 2025', 
      '1 Mar 2025 - 31 Mar 2025',
      '1 Nis 2025 - 30 Nis 2025',
      '1 May 2025 - 31 May 2025',
      '1 Haz 2025 - 31 Tem 2025'
    ]
    
    const currentIndex = dateRanges.indexOf(selectedDateRange)
    const nextIndex = (currentIndex + 1) % dateRanges.length
    const newRange = dateRanges[nextIndex]
    
    setSelectedDateRange(newRange)
    toast.success(`Tarih aralığı ${newRange} olarak güncellendi`)
  }

  // Orders data and filters
  const orderStatuses = ['Tümü', 'Bekliyor', 'Kargoda', 'Teslim Edildi', 'İptal Edildi']
  const dateRanges = ['Son 30 gün', 'Son 7 gün', 'Son 3 ay', 'Tüm zamanlar']
  const pageSizes = ['10', '25', '50', '100']

  const ordersData = [
    // Mock data - şu an boş
  ]

  const handleCreateOrder = () => {
    toast.info('Sipariş oluşturma sayfası açılıyor...')
  }

  const handleOrderFilter = (filterType: string, value: string) => {
    setOrderFilters(prev => ({ ...prev, [filterType]: value }))
    toast.success(`${filterType === 'status' ? 'Durum' : filterType === 'dateRange' ? 'Tarih' : 'Sayfa boyutu'} filtresi güncellendi`)
  }

  const recentOrders = [
    {
      id: 'AMZ-001',
      product: 'iPhone 15 Pro Max',
      date: '2025-01-25',
      status: 'Teslim Edildi',
      bonus: 8.50,
      amount: 849.99
    },
    {
      id: 'AMZ-002', 
      product: 'MacBook Air M3',
      date: '2025-01-24',
      status: 'Kargoda',
      bonus: 15.20,
      amount: 1299.99
    },
    {
      id: 'AMZ-003',
      product: 'AirPods Pro 2',
      date: '2025-01-23',
      status: 'Bekliyor',
      bonus: 3.80,
      amount: 249.99
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 glass border-r border-orange-200 z-50">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-orange-200">
            <h1 className="text-2xl font-bold text-orange-600">AmazonBonus</h1>
            <p className="text-sm text-gray-600 mt-1">Kontrol Paneli</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {[
              { id: 'dashboard', label: 'Kontrol Paneli', icon: BarChart3 },
              { id: 'orders', label: 'Siparişler', icon: ShoppingBag },
              { id: 'payments', label: 'Ödemeler', icon: Wallet },
              { id: 'profile', label: 'Profil', icon: User },
              { id: 'settings', label: 'Ayarlar', icon: Settings },
            ].map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeTab === item.id
                      ? 'bg-orange-100 text-orange-700 border-r-2 border-orange-500'
                      : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-orange-200">
            <div className="flex items-center space-x-3 mb-4">
                                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-orange-500 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">araz0723@gmail.com</p>
                <p className="text-xs text-gray-600">Bonus Seviyesi {stats.bonusLevel}</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-muted-foreground hover:text-red-400 hover:bg-red-500/10"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Çıkış Yap
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="glass border-b border-orange-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <span>Kontrol Paneli</span>
                {activeTab !== 'dashboard' && (
                  <>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-orange-600 capitalize">
                      {activeTab === 'payments' ? 'Ödemeler' : 
                       activeTab === 'orders' ? 'Siparişler' : 
                       activeTab === 'profile' ? 'Profil' : 'Ayarlar'}
                    </span>
                  </>
                )}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {activeTab === 'dashboard' ? 'Kontrol Paneli' :
                 activeTab === 'payments' ? 'Ödemeler' :
                 activeTab === 'orders' ? 'Siparişler' :
                 activeTab === 'profile' ? 'Profil' : 'Ayarlar'}
              </h2>
              <p className="text-gray-600">
                {activeTab === 'dashboard' ? 'Amazon siparişlerinizi takip edin ve bonuslarınızı görün' :
                 activeTab === 'payments' ? 'Ödeme geçmişinizi görüntüleyin ve ödeme yöntemlerinizi yönetin' :
                 activeTab === 'orders' ? 'Amazon siparişlerinizi yönetin ve durumlarını takip edin' :
                 'Detaylı bilgiler ve ayarlar'}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {activeTab === 'dashboard' && (
            <>
              {/* Announcement Banner */}
              <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
                              className="mb-6 p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-primary/20 border border-green-500/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Gift className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Sipariş durumları manuel olarak güncellenmektedir. Kazancınızın güncel kalması için siparişlerinizi düzenli olarak güncelleyin.
                  </p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-accent-green border-accent-green/30 hover:bg-accent-green/10"
                onClick={handleUpdateOrders}
                disabled={isUpdating}
              >
                {isUpdating ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                {isUpdating ? 'Güncelleniyor...' : 'Şimdi Güncelle'}
              </Button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="neon-glow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      BU DÖNEM İPTAL VE İADE SAYISI
                    </CardTitle>
                    <Package className="w-4 h-4 text-primary-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">{stats.totalOrders} Adet</div>
                  <Button variant="ghost" className="text-muted-foreground p-0 h-auto">
                    Detaylar <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="neon-glow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      BU DÖNEM TESLİMAT SAYISI
                    </CardTitle>
                                                <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">{stats.deliveredOrders} Adet</div>
                  <Button 
                    variant="ghost" 
                    className="text-muted-foreground p-0 h-auto hover:text-accent-green"
                    onClick={() => handleViewDetails('Teslimat')}
                  >
                    Detaylar <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="neon-glow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      BU DÖNEM TAHMİNİ KAZANÇ
                    </CardTitle>
                                                <DollarSign className="w-4 h-4 text-yellow-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">${stats.totalEarnings.toFixed(2)}</div>
                  <p className="text-sm text-muted-foreground">+${stats.monthlyEarnings} bu ay</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Charts and Orders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart Card */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <Card className="h-[450px]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-blue-400 font-semibold">SİPARİŞ & KAZANÇ GRAFİĞİ</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant={chartType === 'area' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => setChartType('area')}
                      >
                        Alan
                      </Button>
                      <Button 
                        variant={chartType === 'line' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => setChartType('line')}
                      >
                        Çizgi
                      </Button>
                      <Button 
                        variant={chartType === 'bar' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => setChartType('bar')}
                      >
                        Çubuk
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handleExportData}
                      >
                        <Download className="w-4 h-4 mr-1" />
                        CSV
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    {chartType === 'area' && (
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorKazanc" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
                          </linearGradient>
                          <linearGradient id="colorSiparisler" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#059669" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#059669" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                        <XAxis dataKey="name" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(26, 26, 46, 0.95)', 
                            border: '1px solid rgba(249, 115, 22, 0.3)',
                            borderRadius: '8px',
                            color: '#f9fafb'
                          }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="kazanc" 
                          stroke="#f97316" 
                          fillOpacity={1} 
                          fill="url(#colorKazanc)"
                          strokeWidth={3}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="siparisler" 
                          stroke="#059669" 
                          fillOpacity={1} 
                          fill="url(#colorSiparisler)"
                          strokeWidth={3}
                        />
                      </AreaChart>
                    )}
                    
                    {chartType === 'line' && (
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                        <XAxis dataKey="name" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(26, 26, 46, 0.95)', 
                            border: '1px solid rgba(249, 115, 22, 0.3)',
                            borderRadius: '8px',
                            color: '#f9fafb'
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="kazanc" 
                          stroke="#f97316" 
                          strokeWidth={3}
                          dot={{ fill: '#f97316', strokeWidth: 2, r: 6 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="siparisler" 
                          stroke="#059669" 
                          strokeWidth={3}
                          dot={{ fill: '#059669', strokeWidth: 2, r: 6 }}
                        />
                      </LineChart>
                    )}
                    
                    {chartType === 'bar' && (
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                        <XAxis dataKey="name" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(26, 26, 46, 0.95)', 
                            border: '1px solid rgba(249, 115, 22, 0.3)',
                            borderRadius: '8px',
                            color: '#f9fafb'
                          }}
                        />
                        <Bar dataKey="kazanc" fill="#f97316" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="siparisler" fill="#059669" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    )}
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Chat & Status Section */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <div className="space-y-6">
                {/* Live Support */}
                <Card className="glass border-orange-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600 font-semibold flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      CANLI DESTEK
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Destek Ekibi</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Sorularınız için 7/24 buradayız!
                    </p>
                    <Button 
                      variant="default" 
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium shadow-lg"
                      onClick={handleStartChat}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Sohbet Başlat
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Stats Pie Chart */}
                <Card className="glass border-orange-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-sm text-orange-600">SİPARİŞ DURUMU</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <ResponsiveContainer width="100%" height={150}>
                          <PieChart>
                            <Pie
                              data={pieData}
                              cx="50%"
                              cy="50%"
                              innerRadius={30}
                              outerRadius={60}
                              paddingAngle={2}
                              dataKey="value"
                            >
                              {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                                border: '1px solid rgba(249, 115, 22, 0.3)',
                                borderRadius: '8px',
                                color: '#374151'
                              }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex-1 ml-6">
                        <div className="space-y-3">
                          {pieData.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div 
                                  className="w-4 h-4 rounded-full flex-shrink-0" 
                                  style={{ backgroundColor: item.color }}
                                ></div>
                                <span className="text-sm text-gray-800">{item.name}</span>
                              </div>
                              <span className="text-sm font-semibold text-gray-800">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* Recent Orders */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Card className="glass border-orange-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-orange-600">Son Siparişler</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toast.info('Filtre seçenekleri açılıyor...')}
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filtrele
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toast.info('Tüm siparişler sayfasına yönlendiriliyor...')}
                    >
                      Tümünü Gör
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-50 border border-orange-200"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                          <Package className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{order.product}</h4>
                          <button 
                            onClick={() => router.push(`/orders/${order.id}`)}
                            className="text-sm text-orange-600 hover:text-orange-700 transition-colors cursor-pointer"
                          >
                            #{order.id} • {order.date}
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="text-sm font-medium text-gray-800">${order.amount}</p>
                            <p className="text-xs text-green-600">+${order.bonus} bonus</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Teslim Edildi' ? 'bg-green-500/20 text-green-500' :
                            order.status === 'Kargoda' ? 'bg-blue-500/20 text-blue-500' :
                            'bg-yellow-500/20 text-yellow-500'
                          }`}>
                            {order.status}
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => toast.info(`${order.product} detayları gösteriliyor...`)}
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
            </>
          )}

          {/* Payments Content */}
          {activeTab === 'payments' && (
            <>
              {/* Earnings Summary */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <Card className="glass border-orange-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600 font-semibold">KAZANCINIZ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          Toplam tutar ${paymentsData.minimumPayout} veya daha fazla ise aylık işleme alınır
                        </p>
                        <div className="w-full bg-gray-600 rounded-full h-4 border border-gray-500">
                          <div 
                            className="bg-blue-500 h-4 rounded-full transition-all duration-500 shadow-lg"
                            style={{ 
                              width: `${Math.min((paymentsData.totalEarnings / paymentsData.minimumPayout) * 100, 100)}%`,
                              boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)',
                              backgroundColor: '#3b82f6'
                            }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          Ödeme eşiğiniz %{Math.round((paymentsData.totalEarnings / paymentsData.minimumPayout) * 100)} kadarnla ulaştınız
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-600">
                          ${paymentsData.totalEarnings.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Transactions */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                  <Card className="glass border-orange-200 shadow-lg">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-orange-600">
                          İŞLEMLER
                        </CardTitle>
                        <CalendarDays className="w-4 h-4 text-orange-500" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={handleDateRangeChange}
                          className="text-gray-600 border-orange-300"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          {selectedDateRange}
                        </Button>
                      </div>
                      <div className="text-2xl font-bold text-gray-800 mb-2">
                        ${paymentsData.pendingPayments.toFixed(2)}
                      </div>
                      <Button 
                        variant="ghost" 
                        className="text-gray-600 p-0 h-auto hover:text-orange-600"
                        onClick={() => handleViewDetails('İşlemler')}
                      >
                        Tüm İşlemler <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Payment Methods */}
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  <Card className="glass border-orange-200 shadow-lg">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-orange-600">
                          ÖDEME YÖNTEMLERİ
                        </CardTitle>
                        <CreditCard className="w-4 h-4 text-blue-500" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      {paymentMethods.length > 0 ? (
                        <div className="space-y-4">
                          {paymentMethods.map((method) => (
                            <div key={method.id} className="flex items-center justify-between p-4 rounded-lg bg-dark-800/30 border border-primary/10">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                                  <CreditCard className="w-5 h-5 text-accent-blue" />
                                </div>
                                <div>
                                  <p className="font-medium text-foreground">{method.type}</p>
                                  <p className="text-sm text-muted-foreground">{method.email}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                {method.isDefault && (
                                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-accent-green/20 text-accent-green">
                                    Varsayılan
                                  </span>
                                )}
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                          <Button 
                            variant="outline" 
                            onClick={handleAddPaymentMethod}
                            className="w-full border-primary/30 hover:bg-primary/5"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Yeni Ödeme Yöntemi Ekle
                          </Button>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <Plus className="w-8 h-8 text-primary-400" />
                          </div>
                          <h3 className="font-medium text-foreground mb-2">Ödeme Yöntemi Ekle</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Buradan yeni bir ödeme yöntemi ekleyebilirsiniz.
                          </p>
                          <Button 
                            variant="outline" 
                            onClick={handleAddPaymentMethod}
                            className="border-primary/30 hover:bg-primary/5"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Ödeme Yöntemi Ekle
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Payments Table */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3 }}
              >
                <Card className="glass border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-blue-400 font-semibold">ÖDEMELER</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => toast.info('Ödeme filtresi açılıyor...')}
                        >
                          <Filter className="w-4 h-4 mr-2" />
                          Filtrele
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => toast.info('Arama yapın...')}
                        >
                          <Search className="w-4 h-4 mr-2" />
                          Ödeme No Arama...
                        </Button>
                        <Button variant="outline" size="sm">
                          Ara
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Table Headers */}
                    <div className="grid grid-cols-5 gap-4 p-4 border-b border-primary/20 text-sm font-medium text-muted-foreground">
                      <div>Ödeme No / Türü</div>
                      <div>Ödeme Yöntemi</div>
                      <div className="flex items-center cursor-pointer hover:text-primary-400">
                        Tarih
                        <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                      </div>
                      <div>Durum</div>
                      <div>Tutar</div>
                    </div>

                    {/* Payment History */}
                    {paymentHistory.length > 0 ? (
                      <div className="space-y-2">
                        {paymentHistory.map((payment, index) => (
                          <motion.div
                            key={payment.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="grid grid-cols-5 gap-4 p-4 rounded-lg bg-dark-800/30 border border-primary/10 hover:border-primary/20 transition-all"
                          >
                            <div>
                              <p className="font-medium text-foreground">{payment.id}</p>
                              <p className="text-sm text-muted-foreground">{payment.type}</p>
                            </div>
                            <div>
                              <p className="text-foreground">{payment.method}</p>
                              {payment.method === 'PayPal' && (
                                <p className="text-xs text-muted-foreground">user@example.com</p>
                              )}
                            </div>
                            <div>
                              <p className="text-foreground">
                                {new Date(payment.date).toLocaleDateString('tr-TR', {
                                  day: '2-digit',
                                  month: '2-digit',
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                            <div>
                              <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                payment.status === 'Tamamlandı' ? 'bg-accent-green/20 text-accent-green' :
                                payment.status === 'İptal Edildi' ? 'bg-accent-red/20 text-accent-red' :
                                'bg-accent-yellow/20 text-accent-yellow'
                              }`}>
                                {payment.status}
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-foreground">${payment.amount.toFixed(2)}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-16">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Wallet className="w-10 h-10 text-primary-400" />
                        </div>
                        <h3 className="text-lg font-medium text-foreground mb-2">Veri bulunmamaktadır.</h3>
                        <p className="text-muted-foreground mb-6">
                          Henüz herhangi bir ödeme işleminiz bulunmuyor. İlk ödemeleriniz burada görünecek.
                        </p>
                        <Button 
                          variant="outline"
                          onClick={() => setActiveTab('earnings')}
                          className="border-primary/30 hover:bg-primary/5"
                        >
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Kazançlarınızı Görün
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </>
          )}

          {/* Orders Content */}
          {activeTab === 'orders' && (
            <>
              {/* Orders Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <Card className="glass border-orange-200 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-orange-600 font-semibold">TÜM SİPARİŞLER</CardTitle>
                      <div className="flex items-center space-x-4">
                        <Button 
                          variant="outline"
                          onClick={handleExportData}
                          className="border-orange-200 hover:bg-orange-50"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Dışa Aktar
                        </Button>
                        <Button 
                          variant="default"
                          onClick={handleCreateOrder}
                          className="bg-orange-600 hover:bg-orange-700 text-white"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Sipariş Oluştur
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              {/* Filters */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <Card className="glass border-orange-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {/* Sipariş Durumu */}
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                          Sipariş Durumu
                        </label>
                        <select 
                          className="w-full p-2 bg-white border border-orange-200 rounded-lg text-gray-800"
                          value={orderFilters.status}
                          onChange={(e) => handleOrderFilter('status', e.target.value)}
                        >
                          <option value="Tümü">Tümü</option>
                          <option value="Teslim Edildi">Teslim Edildi</option>
                          <option value="Kargoda">Kargoda</option>
                          <option value="Bekliyor">Bekliyor</option>
                        </select>
                      </div>

                      {/* Alıcı E-Posta Adresi */}
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                          Alıcı E-Posta Adresi
                        </label>
                        <Input
                          placeholder="E-posta adresi ara..."
                          value={orderFilters.email}
                          onChange={(e) => setOrderFilters(prev => ({ ...prev, email: e.target.value }))}
                          className="border-orange-200 focus:border-orange-500"
                        />
                      </div>

                      {/* Sipariş Tarihi */}
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                          Sipariş Tarihi
                        </label>
                        <select 
                          className="w-full p-2 bg-white border border-orange-200 rounded-lg text-gray-800"
                          value={orderFilters.dateRange}
                          onChange={(e) => handleOrderFilter('dateRange', e.target.value)}
                        >
                          <option value="Son 30 gün">Son 30 gün</option>
                          <option value="Son 7 gün">Son 7 gün</option>
                          <option value="Son 3 ay">Son 3 ay</option>
                          <option value="Tüm zamanlar">Tüm zamanlar</option>
                        </select>
                      </div>

                      {/* Sayfa Başına Veri */}
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                          Sayfa Başına Veri
                        </label>
                        <select 
                          className="w-full p-2 bg-white border border-orange-200 rounded-lg text-gray-800"
                          value={orderFilters.pageSize}
                          onChange={(e) => handleOrderFilter('pageSize', e.target.value)}
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Orders List */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
              >
                <Card className="glass border-orange-200 shadow-lg">
                  <CardContent className="p-0">
                    {/* Table Headers */}
                    <div className="grid grid-cols-6 gap-4 p-4 border-b border-orange-200 bg-orange-50">
                      <div className="text-sm font-medium text-gray-700">Sipariş No</div>
                      <div className="text-sm font-medium text-gray-700">Sipariş Detayları</div>
                      <div className="text-sm font-medium text-gray-700">Sipariş Durumu</div>
                      <div className="text-sm font-medium text-gray-700 flex items-center">
                        Sipariş Tarihi
                        <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                      </div>
                      <div className="text-sm font-medium text-gray-700">Sipariş Tutarı</div>
                      <div className="text-sm font-medium text-gray-700">Net Komisyon</div>
                    </div>

                    {/* Orders List */}
                    <div className="divide-y divide-orange-200">
                      {recentOrders.map((order, index) => (
                        <motion.div
                          key={order.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="grid grid-cols-6 gap-4 p-4 hover:bg-orange-50 transition-colors"
                        >
                          {/* Sipariş No */}
                          <div>
                            <button 
                              onClick={() => router.push(`/orders/${order.id}`)}
                              className="text-sm text-orange-600 hover:text-orange-700 transition-colors cursor-pointer font-medium"
                            >
                              #{order.id}
                            </button>
                          </div>

                          {/* Sipariş Detayları */}
                          <div>
                            <h4 className="font-medium text-gray-800 text-sm">{order.product}</h4>
                            <p className="text-xs text-gray-600">Amazon.com</p>
                          </div>

                          {/* Sipariş Durumu */}
                          <div>
                            <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Teslim Edildi' ? 'bg-green-100 text-green-700' :
                              order.status === 'Kargoda' ? 'bg-blue-100 text-blue-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {order.status}
                            </div>
                          </div>

                          {/* Sipariş Tarihi */}
                          <div>
                            <p className="text-sm text-gray-800">{order.date}</p>
                          </div>

                          {/* Sipariş Tutarı */}
                          <div>
                            <p className="text-sm font-medium text-gray-800">${order.amount}</p>
                          </div>

                          {/* Net Komisyon */}
                          <div>
                            <p className="text-sm font-medium text-green-600">${order.bonus}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between p-4 border-t border-orange-200">
                      <p className="text-sm text-gray-600">
                        Toplam {recentOrders.length} sipariş gösteriliyor
                      </p>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-orange-200 hover:bg-orange-50"
                        >
                          Önceki
                        </Button>
                        <span className="text-sm text-gray-600">1</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-orange-200 hover:bg-orange-50"
                        >
                          Sonraki
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          )}

          {/* Other tabs content placeholder */}
          {activeTab !== 'dashboard' && activeTab !== 'payments' && activeTab !== 'orders' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Card className="glass border-primary/20">
                <CardContent className="py-16">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-10 h-10 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {activeTab === 'profile' ? 'Profil' : 'Ayarlar'} Sayfası
                  </h3>
                  <p className="text-muted-foreground">
                    Bu sayfa şu anda geliştirme aşamasında. Yakında kullanıma sunulacak.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Footer */}
          <footer className="mt-12 p-6 border-t border-orange-200">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <p>Copyright © 2025 AmazonBonus. Tüm hakları saklıdır.</p>
              <p className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date().toLocaleDateString('tr-TR', {
                  day: '2-digit',
                  month: '2-digit', 
                  year: 'numeric'
                })} - {new Date().toLocaleTimeString('tr-TR', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </footer>
        </main>
      </div>
      
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(255, 255, 255, 0.95)',
            color: '#374151',
            border: '1px solid rgba(249, 115, 22, 0.3)',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)',
          },
                      success: {
              iconTheme: {
                primary: '#059669',
                secondary: '#ffffff',
              },
            },
                      error: {
              iconTheme: {
                primary: '#dc2626',
                secondary: '#ffffff',
              },
            },
        }}
      />
    </div>
  )
}