"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, EyeOff, Mail, Lock, User, ShoppingBag, TrendingUp, Gift, LogIn } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !password || (!isLogin && !name)) {
      toast.error('Lütfen tüm alanları doldurun!')
      return
    }

    toast.loading(isLogin ? 'Giriş yapılıyor...' : 'Kayıt oluşturuluyor...', { id: 'auth' })
    
    // Simulate API call
    setTimeout(() => {
      if (isLogin) {
        toast.success('Giriş başarılı! Dashboard\'a yönlendiriliyorsunuz...', { id: 'auth' })
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 1500)
      } else {
        toast.success('Kayıt başarılı! Giriş yapabilirsiniz...', { id: 'auth' })
        setIsLogin(true)
        setName('')
      }
    }, 2000)
  }

  const handleGoogleLogin = () => {
    toast.loading('Google ile giriş yapılıyor...')
    // Simulate Google OAuth
    setTimeout(() => {
      toast.success('Google ile giriş başarılı!')
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 1500)
    }, 2000)
  }

  const handleForgotPassword = () => {
    if (!email) {
      toast.error('Lütfen önce e-posta adresinizi girin!')
      return
    }
    toast.success('Şifre sıfırlama linki e-posta adresinize gönderildi!')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-pink/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-neon-green/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10 w-full max-w-6xl">
        {/* Left side - Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl lg:text-7xl font-bold gradient-text mb-4"
            >
              AmazonBonus
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground"
            >
              Amazon alışverişlerinden bonus kazan!
            </motion.p>
          </div>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
          >
            <div className="glass rounded-xl p-6 text-center border border-primary/20 hover:border-primary/40 transition-all">
              <ShoppingBag className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Sipariş Takibi</h3>
              <p className="text-sm text-muted-foreground">Amazon siparişlerinizi kolayca takip edin</p>
            </div>
            <div className="glass rounded-xl p-6 text-center border border-accent-green/20 hover:border-accent-green/40 transition-all">
              <TrendingUp className="w-8 h-8 text-accent-green mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Bonus Kazan</h3>
              <p className="text-sm text-muted-foreground">Her alışverişten %3'e kadar bonus</p>
            </div>
            <div className="glass rounded-xl p-6 text-center border border-accent-pink/20 hover:border-accent-pink/40 transition-all">
              <Gift className="w-8 h-8 text-accent-pink mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Ödüller</h3>
              <p className="text-sm text-muted-foreground">Bonuslarınızı hediye çekine çevirin</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center lg:text-left"
          >
          </motion.div>
        </motion.div>

        {/* Right side - Login Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-2xl border-primary/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
              </CardTitle>
              <CardDescription>
                {isLogin 
                  ? 'AmazonBonus hesabınıza erişmek için lütfen bilgilerinizi girin.'
                  : 'AmazonBonus hesabı oluşturun ve bonus kazanmaya başlayın.'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Ad Soyad"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                )}
                
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="E-posta adresiniz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Şifreniz"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-primary/30" />
                      <span className="text-muted-foreground">Beni Hatırla</span>
                    </label>
                    <button 
                      type="button" 
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                      onClick={handleForgotPassword}
                    >
                      Şifreni mi unuttun?
                    </button>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  {isLogin ? 'Oturum Aç' : 'Hesap Oluştur'}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-primary/20" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-dark-800 px-2 text-muted-foreground">veya</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 hover:bg-primary/5 hover:border-primary/50"
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
                <p className="text-sm text-muted-foreground">
                  {isLogin ? "Hesabınız yok mu?" : "Zaten hesabınız var mı?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-1 text-primary-400 hover:text-primary-300 font-medium transition-colors"
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
            className="mt-6 text-center text-xs text-muted-foreground"
          >
            <p className="mb-2">🔒 Güvenli ve şifreli bağlantı</p>
            <p>Copyright © 2025 AmazonBonus. Tüm hakları saklıdır.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:text-primary-400">Gizlilik Politikası</a>
              <a href="#" className="hover:text-primary-400">Kullanım Sözleşmesi</a>
              <a href="#" className="hover:text-primary-400">S.S.S</a>
              <a href="#" className="hover:text-primary-400">İletişim</a>
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
            background: 'rgba(26, 26, 46, 0.95)',
            color: '#f9fafb',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)',
          },
          success: {
            iconTheme: {
              primary: '#059669',
              secondary: '#f9fafb',
            },
          },
          error: {
            iconTheme: {
              primary: '#dc2626',
              secondary: '#f9fafb',
            },
          },
        }}
      />
    </div>
  )
}