import en from './locales/en';
import zh from './locales/zh';
import {createI18n} from '@react-native-localize-ext/react';

const i18n = createI18n({
  defaultLocale: {
    key: 'en',
    values: en,
  },
  //   loader: (name: string) => import(`./locales/${name}`),
  //   loader: (name) => {
  //     switch (name) {
  //       case 'en':
  //         import('./locales/en');
  //         break;
  //       case 'zh':
  //         import('./locales/zh');
  //         break;
  //       default:
  //         import('./locales/en');
  //     }
  //   },
});
i18n._.define('zh', zh);

export default i18n;
