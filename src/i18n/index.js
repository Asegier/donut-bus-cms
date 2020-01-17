import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
// import * as RNLocalize from 'react-native-localize';
import CommonEN from './en';
import LoginEN from './en/login';

// import LanguageTW from './zh-TW';
import CommonHK from './zh-hk';
import LoginHK from './zh-hk/login';

import mergeJSON from 'merge-json';


import LanguageDetector from "i18next-browser-languagedetector";

// import('./en').then(props => console.log('en'));

// const languageDetector = {
//     type: 'languageDetector',
//     async: true,
//     detect: cb => {
//         /*
//          * iOS
//          * countryCod: US, languageCode: en, languageTag: en-US
//          * countryCod: AU, languageCode: en, languageTag: en-AU
//          * countryCod: US, languageCode: zh, languageTag: zh-Hant-US, scriptCode: Hant
//          * countryCod: TW, languageCode: zh, languageTag: zh-Hant-TW, scriptCode: Hant
//          * countryCod: US, languageCode: yue, languageTag: zh-Hant-US, scriptCode: Hant
//          * countryCod: US, languageCode: zh, languageTag: zh-Hans-US, scriptCode: Hans
//          */
//         // const lang = 'en';
//         // switch (true) {
//         //     case lang.search('zh-Hant') >= 0:
//         //         cb('zh-Hant');
//         //         break;
//         //     case lang.search('zh-Hans') >= 0:
//         //         cb('zh-Hans');
//         //         break;
//         //     default:
//         //         cb('en');
//         //         break;
//         // }
//         cb('zh-hk');
    
//     },
//     init: () => {},
//     cacheUserLanguage: () => {},
// };

const EN = mergeJSON.merge(CommonEN, LoginEN);
const HK = mergeJSON.merge(CommonHK, LoginHK);

const i18nextInitOptions = {
    fallbackLng: {
        'en': ['en'],
        default: ["en"],
    },
    debug: true,
    resources: {
        en: {
            translation: EN,
        },
        "zh-HK": {
            translation: HK,
        },
    },
    whitelist: ["en", "zh-HK"],
    detection: {
        order: ['path', 'navigator']
    },
    // load: 'languageOnly'
};

// const options = {
//     // order and from where user language should be detected
//     order: ['path', 'session', 'querystring', 'cookie', 'header'],
  
//     // keys or params to lookup language from
//     lookupQuerystring: 'lng',
//     lookupCookie: 'i18next',
//     lookupHeader: 'accept-language',
//     lookupSession: 'lng',
//     lookupPath: 'lng',
//     lookupFromPathIndex: 0,
  
//     // cache user language
//     caches: false, // ['cookie']
  
//     // optional expire and domain for set cookie
//     cookieExpirationDate: new Date(),
//     cookieDomain: 'myDomain',
//     cookieSecure: true // if need secure cookie
//   }

i18next
    // .use(languageDetector)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(i18nextInitOptions);

export default i18next;