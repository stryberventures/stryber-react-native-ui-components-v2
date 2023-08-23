import {I18nManager} from 'react-native';

import vocabularies from './vocabularies';

let currentLang = I18nManager.isRTL ? 'ar' : 'en';

export const vocab = vocabularies[currentLang];
