import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'login_signin': 'Sign In',
      'login_title': 'DATA ACQUISITION AND MONITORING SYSTEM'
    }
  },
  vi: {
    translation: {
      'login_signin': 'Đăng nhập',
      'login_title': 'HỆ THỐNG THU THẬP VÀ GIÁM SÁT DỮ LIỆU'
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  })