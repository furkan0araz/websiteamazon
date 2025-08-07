'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowLeft, 
  Package, 
  Calendar, 
  DollarSign, 
  Info, 
  CheckCircle, 
  Clock, 
  Truck,
  Home,
  ChevronRight
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  
  // Mock sipariş verisi
  const orderData = {
    id: params.id,
    orderNumber: "111-4453621-6204230",
    orderDate: "18.12.2024",
    refundAmount: "$0.00",
    orderAmount: "$43.95",
    estimatedCommission: "$0.66",
    status: "Beklemede",
    deliveryTime: "Arriving tomorrow 10 AM - 3 PM",
    products: [
      {
        id: 1,
        name: "Amazon Basics 8-Count 9 Volt Alkaline Performance All-Purpose Batteries, 5-Year Shelf Life, Packaging May Vary",
        price: "$11.40",
        quantity: 2,
        image: "🔋"
      },
      {
        id: 2,
        name: "Voniko 9V Batteries - Alkaline 9V Battery 4 Pack - Ultra Long Lasting with a 7-Year Shelf Life",
        price: "$7.05",
        quantity: 3,
        image: "🔋"
      }
    ],
    timeline: [
      {
        id: 1,
        status: "Sipariş Oluşturuldu",
        time: "18.12.2024 22:25",
        icon: CheckCircle,
        color: "text-blue-500",
        bgColor: "bg-blue-500"
      },
      {
        id: 2,
        status: 'Sipariş durumu "Beklemede" olarak değiştirildi',
        time: "18.12.2024 22:25",
        icon: Clock,
        color: "text-gray-400",
        bgColor: "bg-gray-400"
      }
    ]
  }

  const handleBack = () => {
    router.push('/dashboard?tab=orders')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100">
      {/* Header */}
      <header className="glass border-b border-orange-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <button 
                onClick={handleBack}
                className="hover:text-orange-600 transition-colors"
              >
                Kontrol Paneli
              </button>
              <ChevronRight className="w-4 h-4 mx-2" />
              <button 
                onClick={handleBack}
                className="hover:text-orange-600 transition-colors"
              >
                Siparişler
              </button>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-orange-600">Sipariş Detayları</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Sipariş #{orderData.orderNumber}</h1>
            <p className="text-gray-600">Sipariş detaylarını görüntüleyin</p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleBack}
            className="border-orange-200 hover:bg-orange-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Geri Dön
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sol Sütun - Sipariş Özeti */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-orange-600 border-b border-orange-200 pb-2">
                  SİPARİŞ ÖZETİ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sipariş Bilgileri */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sipariş No:</span>
                    <span className="font-medium text-gray-800">#{orderData.orderNumber}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sipariş Tarihi:</span>
                    <span className="font-medium text-gray-800">{orderData.orderDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Para İadesi:</span>
                    <span className="font-medium text-gray-800">{orderData.refundAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sipariş Tutarı:</span>
                    <span className="font-medium text-gray-800">{orderData.orderAmount}</span>
                  </div>
                </div>

                {/* Ayırıcı Çizgi */}
                <div className="border-t border-gray-200"></div>

                {/* Tahmini Komisyon */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Info className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600">Tahmini Komisyon Tutarı:</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">{orderData.estimatedCommission}</div>
                </div>

                {/* Ayırıcı Çizgi */}
                <div className="border-t border-gray-200"></div>

                {/* Ürün Listesi */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-orange-600 font-medium">
                    <Truck className="w-4 h-4" />
                    <span>{orderData.deliveryTime}</span>
                  </div>
                  
                  {orderData.products.map((product, index) => (
                    <div key={product.id} className="space-y-3">
                      <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 border border-orange-200">
                        <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                          {product.image}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800 text-sm leading-tight mb-2">
                            {product.name}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-orange-600 font-semibold">{product.price}</span>
                            <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                              {product.quantity}
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < orderData.products.length - 1 && (
                        <div className="border-t border-gray-200"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sağ Sütun - Sipariş Durumu */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-orange-600 border-b border-orange-200 pb-2">
                  SİPARİŞ DURUMU
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Komisyon Bilgisi */}
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Komisyon, sadece teslim edilen siparişler için geçerlidir. İade, iptal veya para iadesi taleplerinde komisyon kaybedilir. Tüm ürünler teslim edildiğinde komisyon alırsınız.
                  </p>
                </div>

                {/* Timeline */}
                <div className="space-y-6">
                  <h3 className="font-medium text-gray-800">Sipariş Geçmişi</h3>
                  <div className="relative">
                    {/* Timeline çizgisi */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    
                    {/* Timeline öğeleri */}
                    <div className="space-y-6">
                      {orderData.timeline.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <div key={item.id} className="relative flex items-start space-x-4">
                            {/* İkon */}
                            <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center z-10 relative`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            
                            {/* İçerik */}
                            <div className="flex-1 pt-1">
                              <p className="font-medium text-gray-800">{item.status}</p>
                              <p className="text-sm text-gray-600 mt-1">{item.time}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 p-6 border-t border-orange-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <p>Copyright © 2024 AmazonBonus. Tüm hakları saklıdır.</p>
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
    </div>
  )
} 