'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LogIn, User, Mail, Lock, Eye, EyeOff, Gift, Shield, Zap, ArrowRight } from 'lucide-react'
import { Toaster, toast } from 'react-hot-toast'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !password) {
      toast.error('Lütfen tüm alanları doldurun')
      return
    }

    if (isLogin) {
      toast.success('Giriş başarılı! Dashboard\'a yönlendiriliyorsunuz...')
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 1500)
    } else {
      toast.success('Hesap başarıyla oluşturuldu! Giriş yapabilirsiniz.')
      setIsLogin(true)
    }
  }

  const handleGoogleLogin = () => {
    toast.loading('Google ile giriş yapılıyor...', { id: 'google' })
    setTimeout(() => {
      toast.success('Google ile giriş başarılı!', { id: 'google' })
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 1000)
    }, 2000)
  }

  const handleForgotPassword = () => {
    toast.info('Şifre sıfırlama linki e-posta adresinize gönderildi.')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10 w-full max-w-6xl">
        {/* Left side - Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <div className="mb-8">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">AmazonBonus</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Amazon alışverişlerinizden bonus kazanın, 
              <br className="hidden lg:block" />
              kazancınızı takip edin!
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass rounded-xl p-6 text-center border border-orange-200 hover:border-orange-300 transition-all">
              <Gift className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Ödüller</h3>
              <p className="text-sm text-gray-600">Her alışverişten %3'e kadar bonus</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center border border-orange-200 hover:border-orange-300 transition-all">
              <Shield className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Güvenli</h3>
              <p className="text-sm text-gray-600">SSL şifreli güvenli bağlantı</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center border border-orange-200 hover:border-orange-300 transition-all">
              <Zap className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Hızlı</h3>
              <p className="text-sm text-gray-600">Anında bonus hesaplama</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center border border-orange-200 hover:border-orange-300 transition-all">
              <ArrowRight className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Kolay</h3>
              <p className="text-sm text-gray-600">Basit ve kullanıcı dostu</p>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>✓ 50,000+ mutlu kullanıcı</p>
            <p>✓ 1,000,000+ TL bonus dağıtıldı</p>
            <p>✓ 7/24 canlı destek</p>
          </div>
        </motion.div>

        {/* Right side - Login Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 max-w-md"
        >
          <Card className="glass border-orange-200 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">
                {isLogin ? 'Hoş Geldiniz' : 'Hesap Oluştur'}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {isLogin ? 'Hesabınıza giriş yapın' : 'Yeni hesap oluşturun'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="E-posta adresiniz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Şifreniz"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-orange-300" />
                      <span className="text-gray-600">Beni Hatırla</span>
                    </label>
                    <button 
                      type="button" 
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                      onClick={handleForgotPassword}
                    >
                      Şifreni mi unuttun?
                    </button>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  {isLogin ? 'Oturum Aç' : 'Hesap Oluştur'}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">veya</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-gray-200 hover:bg-gray-50 hover:border-orange-300"
                  onClick={handleGoogleLogin}
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google ile devam et
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {isLogin ? "Hesabınız yok mu?" : "Zaten hesabınız var mı?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-1 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    {isLogin ? "Kayıt Ol" : "Giriş Yap"}
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6 text-center text-xs text-gray-500"
          >
            <p className="mb-2">🔒 Güvenli ve şifreli bağlantı</p>
            <p>Copyright © 2025 AmazonBonus. Tüm hakları saklıdır.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:text-orange-600">Gizlilik Politikası</a>
              <a href="#" className="hover:text-orange-600">Kullanım Sözleşmesi</a>
              <a href="#" className="hover:text-orange-600">S.S.S</a>
              <a href="#" className="hover:text-orange-600">İletişim</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Toast Notifications */}
      <Toaster
        position="top-center"
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