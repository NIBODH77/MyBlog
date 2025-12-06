import React, { useState, useEffect } from 'react';
import { MoreHorizontal, Search, Check, Plus, Trash2 } from 'lucide-react';
import { Link } from "wouter";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

interface Country {
  name: string;
  flag: string;
  code: string;
  languages: string[];
  population: number;
}

interface Language {
  code: string;
  name: string;
  color: string;
}

export default function QuoraLanguageSettings() {
  const [primaryLanguage, setPrimaryLanguage] = useState<string>('en');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['en']);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddLanguage, setShowAddLanguage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [countrySearchQuery, setCountrySearchQuery] = useState('');

  const allLanguages: Language[] = [
    { code: 'en', name: 'English', color: 'bg-blue-500' },
    { code: 'nl', name: 'Nederlands', color: 'bg-red-600' },
    { code: 'es', name: 'Español', color: 'bg-orange-500' },
    { code: 'fr', name: 'Français', color: 'bg-blue-700' },
    { code: 'de', name: 'Deutsch', color: 'bg-yellow-500' },
    { code: 'it', name: 'Italiano', color: 'bg-green-600' },
    { code: 'ja', name: '日本語', color: 'bg-red-500' },
    { code: 'id', name: 'Indonesia', color: 'bg-red-400' },
    { code: 'pt', name: 'Português', color: 'bg-green-700' },
    { code: 'hi', name: 'हिंदी', color: 'bg-teal-500' },
    { code: 'da', name: 'Dansk', color: 'bg-red-600' },
    { code: 'fi', name: 'Suomi', color: 'bg-blue-600' },
    { code: 'no', name: 'Norsk', color: 'bg-blue-800' },
    { code: 'sv', name: 'Svenska', color: 'bg-blue-500' },
    { code: 'mr', name: 'मराठी', color: 'bg-orange-600' },
    { code: 'bn', name: 'বাংলা', color: 'bg-red-700' },
    { code: 'ko', name: '한국어', color: 'bg-blue-400' },
    { code: 'zh-CN', name: '中文', color: 'bg-red-600' },
    { code: 'ar', name: 'العربية', color: 'bg-green-600' },
    { code: 'ru', name: 'Русский', color: 'bg-blue-700' },
    { code: 'tr', name: 'Türkçe', color: 'bg-red-500' },
    { code: 'pl', name: 'Polski', color: 'bg-red-600' },
    { code: 'vi', name: 'Tiếng Việt', color: 'bg-red-500' },
    { code: 'th', name: 'ไทย', color: 'bg-red-600' }
  ];

  const languages = allLanguages.filter(lang => selectedLanguages.includes(lang.code));
  const availableLanguages = allLanguages.filter(lang => !selectedLanguages.includes(lang.code));

  const filteredAvailableLanguages = availableLanguages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Hardcoded countries data - संशोधित version
  const allCountriesData: Country[] = [
    { name: 'United States', code: 'US', languages: ['English'], population: 331000000, flag: 'https://flagcdn.com/w80/us.png' },
    { name: 'United Kingdom', code: 'GB', languages: ['English'], population: 67000000, flag: 'https://flagcdn.com/w80/gb.png' },
    { name: 'China', code: 'CN', languages: ['Chinese'], population: 1402000000, flag: 'https://flagcdn.com/w80/cn.png' },
    { name: 'India', code: 'IN', languages: ['Hindi', 'English'], population: 1380000000, flag: 'https://flagcdn.com/w80/in.png' },
    { name: 'Indonesia', code: 'ID', languages: ['Indonesian'], population: 273000000, flag: 'https://flagcdn.com/w80/id.png' },
    { name: 'Pakistan', code: 'PK', languages: ['Urdu', 'English'], population: 220000000, flag: 'https://flagcdn.com/w80/pk.png' },
    { name: 'Brazil', code: 'BR', languages: ['Portuguese'], population: 212000000, flag: 'https://flagcdn.com/w80/br.png' },
    { name: 'Nigeria', code: 'NG', languages: ['English'], population: 206000000, flag: 'https://flagcdn.com/w80/ng.png' },
    { name: 'Bangladesh', code: 'BD', languages: ['Bengali'], population: 164000000, flag: 'https://flagcdn.com/w80/bd.png' },
    { name: 'Russia', code: 'RU', languages: ['Russian'], population: 144000000, flag: 'https://flagcdn.com/w80/ru.png' },
    { name: 'Mexico', code: 'MX', languages: ['Spanish'], population: 128000000, flag: 'https://flagcdn.com/w80/mx.png' },
    { name: 'Japan', code: 'JP', languages: ['Japanese'], population: 126000000, flag: 'https://flagcdn.com/w80/jp.png' },
    { name: 'Ethiopia', code: 'ET', languages: ['Amharic'], population: 114000000, flag: 'https://flagcdn.com/w80/et.png' },
    { name: 'Philippines', code: 'PH', languages: ['Filipino', 'English'], population: 109000000, flag: 'https://flagcdn.com/w80/ph.png' },
    { name: 'Egypt', code: 'EG', languages: ['Arabic'], population: 102000000, flag: 'https://flagcdn.com/w80/eg.png' },
    { name: 'Vietnam', code: 'VN', languages: ['Vietnamese'], population: 97000000, flag: 'https://flagcdn.com/w80/vn.png' },
    { name: 'DR Congo', code: 'CD', languages: ['French'], population: 89000000, flag: 'https://flagcdn.com/w80/cd.png' },
    { name: 'Turkey', code: 'TR', languages: ['Turkish'], population: 84000000, flag: 'https://flagcdn.com/w80/tr.png' },
    { name: 'Iran', code: 'IR', languages: ['Persian'], population: 83000000, flag: 'https://flagcdn.com/w80/ir.png' },
    { name: 'Germany', code: 'DE', languages: ['German'], population: 83000000, flag: 'https://flagcdn.com/w80/de.png' },
    { name: 'Thailand', code: 'TH', languages: ['Thai'], population: 69000000, flag: 'https://flagcdn.com/w80/th.png' },
    { name: 'France', code: 'FR', languages: ['French'], population: 65000000, flag: 'https://flagcdn.com/w80/fr.png' },
    { name: 'Italy', code: 'IT', languages: ['Italian'], population: 60000000, flag: 'https://flagcdn.com/w80/it.png' },
    { name: 'Tanzania', code: 'TZ', languages: ['Swahili', 'English'], population: 59000000, flag: 'https://flagcdn.com/w80/tz.png' },
    { name: 'South Africa', code: 'ZA', languages: ['English', 'Zulu', 'Xhosa'], population: 59000000, flag: 'https://flagcdn.com/w80/za.png' },
    { name: 'Myanmar', code: 'MM', languages: ['Burmese'], population: 54000000, flag: 'https://flagcdn.com/w80/mm.png' },
    { name: 'Kenya', code: 'KE', languages: ['Swahili', 'English'], population: 53000000, flag: 'https://flagcdn.com/w80/ke.png' },
    { name: 'South Korea', code: 'KR', languages: ['Korean'], population: 51000000, flag: 'https://flagcdn.com/w80/kr.png' },
    { name: 'Colombia', code: 'CO', languages: ['Spanish'], population: 50000000, flag: 'https://flagcdn.com/w80/co.png' },
    { name: 'Spain', code: 'ES', languages: ['Spanish'], population: 47000000, flag: 'https://flagcdn.com/w80/es.png' },
    { name: 'Uganda', code: 'UG', languages: ['English', 'Swahili'], population: 45000000, flag: 'https://flagcdn.com/w80/ug.png' },
    { name: 'Argentina', code: 'AR', languages: ['Spanish'], population: 45000000, flag: 'https://flagcdn.com/w80/ar.png' },
    { name: 'Algeria', code: 'DZ', languages: ['Arabic'], population: 43000000, flag: 'https://flagcdn.com/w80/dz.png' },
    { name: 'Sudan', code: 'SD', languages: ['Arabic', 'English'], population: 43000000, flag: 'https://flagcdn.com/w80/sd.png' },
    { name: 'Ukraine', code: 'UA', languages: ['Ukrainian'], population: 43000000, flag: 'https://flagcdn.com/w80/ua.png' },
    { name: 'Iraq', code: 'IQ', languages: ['Arabic', 'Kurdish'], population: 40000000, flag: 'https://flagcdn.com/w80/iq.png' },
    { name: 'Afghanistan', code: 'AF', languages: ['Pashto', 'Dari'], population: 38000000, flag: 'https://flagcdn.com/w80/af.png' },
    { name: 'Poland', code: 'PL', languages: ['Polish'], population: 38000000, flag: 'https://flagcdn.com/w80/pl.png' },
    { name: 'Canada', code: 'CA', languages: ['English', 'French'], population: 38000000, flag: 'https://flagcdn.com/w80/ca.png' },
    { name: 'Morocco', code: 'MA', languages: ['Arabic', 'Berber'], population: 36000000, flag: 'https://flagcdn.com/w80/ma.png' },
    { name: 'Saudi Arabia', code: 'SA', languages: ['Arabic'], population: 34000000, flag: 'https://flagcdn.com/w80/sa.png' },
    { name: 'Uzbekistan', code: 'UZ', languages: ['Uzbek'], population: 33000000, flag: 'https://flagcdn.com/w80/uz.png' },
    { name: 'Peru', code: 'PE', languages: ['Spanish'], population: 32000000, flag: 'https://flagcdn.com/w80/pe.png' },
    { name: 'Angola', code: 'AO', languages: ['Portuguese'], population: 32000000, flag: 'https://flagcdn.com/w80/ao.png' },
    { name: 'Malaysia', code: 'MY', languages: ['Malay'], population: 32000000, flag: 'https://flagcdn.com/w80/my.png' },
    { name: 'Mozambique', code: 'MZ', languages: ['Portuguese'], population: 31000000, flag: 'https://flagcdn.com/w80/mz.png' },
    { name: 'Ghana', code: 'GH', languages: ['English'], population: 31000000, flag: 'https://flagcdn.com/w80/gh.png' },
    { name: 'Yemen', code: 'YE', languages: ['Arabic'], population: 29000000, flag: 'https://flagcdn.com/w80/ye.png' },
    { name: 'Nepal', code: 'NP', languages: ['Nepali'], population: 29000000, flag: 'https://flagcdn.com/w80/np.png' },
    { name: 'Venezuela', code: 'VE', languages: ['Spanish'], population: 28000000, flag: 'https://flagcdn.com/w80/ve.png' },
    { name: 'Madagascar', code: 'MG', languages: ['Malagasy', 'French'], population: 27000000, flag: 'https://flagcdn.com/w80/mg.png' },
    { name: 'Cameroon', code: 'CM', languages: ['French', 'English'], population: 26000000, flag: 'https://flagcdn.com/w80/cm.png' },
    { name: 'Côte d\'Ivoire', code: 'CI', languages: ['French'], population: 26000000, flag: 'https://flagcdn.com/w80/ci.png' },
    { name: 'North Korea', code: 'KP', languages: ['Korean'], population: 25000000, flag: 'https://flagcdn.com/w80/kp.png' },
    { name: 'Australia', code: 'AU', languages: ['English'], population: 25000000, flag: 'https://flagcdn.com/w80/au.png' },
    { name: 'Taiwan', code: 'TW', languages: ['Chinese'], population: 23000000, flag: 'https://flagcdn.com/w80/tw.png' },
    { name: 'Niger', code: 'NE', languages: ['French'], population: 24000000, flag: 'https://flagcdn.com/w80/ne.png' },
    { name: 'Sri Lanka', code: 'LK', languages: ['Sinhala', 'Tamil'], population: 21000000, flag: 'https://flagcdn.com/w80/lk.png' },
    { name: 'Burkina Faso', code: 'BF', languages: ['French'], population: 20000000, flag: 'https://flagcdn.com/w80/bf.png' },
    { name: 'Mali', code: 'ML', languages: ['French'], population: 20000000, flag: 'https://flagcdn.com/w80/ml.png' },
    { name: 'Romania', code: 'RO', languages: ['Romanian'], population: 19000000, flag: 'https://flagcdn.com/w80/ro.png' },
    { name: 'Chile', code: 'CL', languages: ['Spanish'], population: 19000000, flag: 'https://flagcdn.com/w80/cl.png' },
    { name: 'Kazakhstan', code: 'KZ', languages: ['Kazakh', 'Russian'], population: 18000000, flag: 'https://flagcdn.com/w80/kz.png' },
    { name: 'Zambia', code: 'ZM', languages: ['English'], population: 18000000, flag: 'https://flagcdn.com/w80/zm.png' },
    { name: 'Guatemala', code: 'GT', languages: ['Spanish'], population: 17000000, flag: 'https://flagcdn.com/w80/gt.png' },
    { name: 'Ecuador', code: 'EC', languages: ['Spanish'], population: 17000000, flag: 'https://flagcdn.com/w80/ec.png' },
    { name: 'Netherlands', code: 'NL', languages: ['Dutch'], population: 17000000, flag: 'https://flagcdn.com/w80/nl.png' },
    { name: 'Syria', code: 'SY', languages: ['Arabic'], population: 17000000, flag: 'https://flagcdn.com/w80/sy.png' },
    { name: 'Cambodia', code: 'KH', languages: ['Khmer'], population: 16000000, flag: 'https://flagcdn.com/w80/kh.png' },
    { name: 'Senegal', code: 'SN', languages: ['French'], population: 16000000, flag: 'https://flagcdn.com/w80/sn.png' },
    { name: 'Chad', code: 'TD', languages: ['French', 'Arabic'], population: 16000000, flag: 'https://flagcdn.com/w80/td.png' },
    { name: 'Somalia', code: 'SO', languages: ['Somali', 'Arabic'], population: 15000000, flag: 'https://flagcdn.com/w80/so.png' },
    { name: 'Zimbabwe', code: 'ZW', languages: ['English'], population: 14000000, flag: 'https://flagcdn.com/w80/zw.png' },
    { name: 'Guinea', code: 'GN', languages: ['French'], population: 13000000, flag: 'https://flagcdn.com/w80/gn.png' },
    { name: 'Rwanda', code: 'RW', languages: ['Kinyarwanda', 'English', 'French'], population: 12000000, flag: 'https://flagcdn.com/w80/rw.png' },
    { name: 'Benin', code: 'BJ', languages: ['French'], population: 12000000, flag: 'https://flagcdn.com/w80/bj.png' },
    { name: 'Burundi', code: 'BI', languages: ['Kirundi', 'French'], population: 11000000, flag: 'https://flagcdn.com/w80/bi.png' },
    { name: 'Tunisia', code: 'TN', languages: ['Arabic'], population: 11000000, flag: 'https://flagcdn.com/w80/tn.png' },
    { name: 'Bolivia', code: 'BO', languages: ['Spanish'], population: 11000000, flag: 'https://flagcdn.com/w80/bo.png' },
    { name: 'Belgium', code: 'BE', languages: ['Dutch', 'French', 'German'], population: 11000000, flag: 'https://flagcdn.com/w80/be.png' },
    { name: 'Haiti', code: 'HT', languages: ['French', 'Haitian Creole'], population: 11000000, flag: 'https://flagcdn.com/w80/ht.png' },
    { name: 'Cuba', code: 'CU', languages: ['Spanish'], population: 11000000, flag: 'https://flagcdn.com/w80/cu.png' },
    { name: 'South Sudan', code: 'SS', languages: ['English'], population: 11000000, flag: 'https://flagcdn.com/w80/ss.png' },
    { name: 'Dominican Republic', code: 'DO', languages: ['Spanish'], population: 10000000, flag: 'https://flagcdn.com/w80/do.png' },
    { name: 'Czech Republic', code: 'CZ', languages: ['Czech'], population: 10000000, flag: 'https://flagcdn.com/w80/cz.png' },
    { name: 'Greece', code: 'GR', languages: ['Greek'], population: 10000000, flag: 'https://flagcdn.com/w80/gr.png' },
    { name: 'Jordan', code: 'JO', languages: ['Arabic'], population: 10000000, flag: 'https://flagcdn.com/w80/jo.png' },
    { name: 'Portugal', code: 'PT', languages: ['Portuguese'], population: 10000000, flag: 'https://flagcdn.com/w80/pt.png' },
    { name: 'Azerbaijan', code: 'AZ', languages: ['Azerbaijani'], population: 10000000, flag: 'https://flagcdn.com/w80/az.png' },
    { name: 'Sweden', code: 'SE', languages: ['Swedish'], population: 10000000, flag: 'https://flagcdn.com/w80/se.png' },
    { name: 'Honduras', code: 'HN', languages: ['Spanish'], population: 9000000, flag: 'https://flagcdn.com/w80/hn.png' },
    { name: 'United Arab Emirates', code: 'AE', languages: ['Arabic'], population: 9000000, flag: 'https://flagcdn.com/w80/ae.png' },
    { name: 'Hungary', code: 'HU', languages: ['Hungarian'], population: 9000000, flag: 'https://flagcdn.com/w80/hu.png' },
    { name: 'Tajikistan', code: 'TJ', languages: ['Tajik'], population: 9000000, flag: 'https://flagcdn.com/w80/tj.png' },
    { name: 'Belarus', code: 'BY', languages: ['Belarusian', 'Russian'], population: 9000000, flag: 'https://flagcdn.com/w80/by.png' },
    { name: 'Austria', code: 'AT', languages: ['German'], population: 8000000, flag: 'https://flagcdn.com/w80/at.png' },
    { name: 'Papua New Guinea', code: 'PG', languages: ['English', 'Tok Pisin', 'Hiri Motu'], population: 8000000, flag: 'https://flagcdn.com/w80/pg.png' },
    { name: 'Switzerland', code: 'CH', languages: ['German', 'French', 'Italian', 'Romansh'], population: 8000000, flag: 'https://flagcdn.com/w80/ch.png' },
    { name: 'Israel', code: 'IL', languages: ['Hebrew'], population: 8000000, flag: 'https://flagcdn.com/w80/il.png' },
    { name: 'Togo', code: 'TG', languages: ['French'], population: 8000000, flag: 'https://flagcdn.com/w80/tg.png' },
    { name: 'Sierra Leone', code: 'SL', languages: ['English'], population: 7000000, flag: 'https://flagcdn.com/w80/sl.png' },
    { name: 'Hong Kong', code: 'HK', languages: ['Chinese', 'English'], population: 7000000, flag: 'https://flagcdn.com/w80/hk.png' },
    { name: 'Laos', code: 'LA', languages: ['Lao'], population: 7000000, flag: 'https://flagcdn.com/w80/la.png' },
    { name: 'Paraguay', code: 'PY', languages: ['Spanish', 'Guaraní'], population: 7000000, flag: 'https://flagcdn.com/w80/py.png' },
    { name: 'Bulgaria', code: 'BG', languages: ['Bulgarian'], population: 7000000, flag: 'https://flagcdn.com/w80/bg.png' },
    { name: 'Libya', code: 'LY', languages: ['Arabic'], population: 6000000, flag: 'https://flagcdn.com/w80/ly.png' },
    { name: 'Lebanon', code: 'LB', languages: ['Arabic'], population: 6000000, flag: 'https://flagcdn.com/w80/lb.png' },
    { name: 'Nicaragua', code: 'NI', languages: ['Spanish'], population: 6000000, flag: 'https://flagcdn.com/w80/ni.png' },
    { name: 'Kyrgyzstan', code: 'KG', languages: ['Kyrgyz', 'Russian'], population: 6000000, flag: 'https://flagcdn.com/w80/kg.png' },
    { name: 'El Salvador', code: 'SV', languages: ['Spanish'], population: 6000000, flag: 'https://flagcdn.com/w80/sv.png' },
    { name: 'Turkmenistan', code: 'TM', languages: ['Turkmen'], population: 6000000, flag: 'https://flagcdn.com/w80/tm.png' },
    { name: 'Singapore', code: 'SG', languages: ['English', 'Malay', 'Chinese', 'Tamil'], population: 5000000, flag: 'https://flagcdn.com/w80/sg.png' },
    { name: 'Denmark', code: 'DK', languages: ['Danish'], population: 5000000, flag: 'https://flagcdn.com/w80/dk.png' },
    { name: 'Finland', code: 'FI', languages: ['Finnish', 'Swedish'], population: 5000000, flag: 'https://flagcdn.com/w80/fi.png' },
    { name: 'Congo', code: 'CG', languages: ['French'], population: 5000000, flag: 'https://flagcdn.com/w80/cg.png' },
    { name: 'Slovakia', code: 'SK', languages: ['Slovak'], population: 5000000, flag: 'https://flagcdn.com/w80/sk.png' },
    { name: 'Norway', code: 'NO', languages: ['Norwegian'], population: 5000000, flag: 'https://flagcdn.com/w80/no.png' },
    { name: 'Oman', code: 'OM', languages: ['Arabic'], population: 5000000, flag: 'https://flagcdn.com/w80/om.png' },
    { name: 'Palestine', code: 'PS', languages: ['Arabic'], population: 5000000, flag: 'https://flagcdn.com/w80/ps.png' },
    { name: 'Costa Rica', code: 'CR', languages: ['Spanish'], population: 5000000, flag: 'https://flagcdn.com/w80/cr.png' },
    { name: 'Liberia', code: 'LR', languages: ['English'], population: 5000000, flag: 'https://flagcdn.com/w80/lr.png' },
    { name: 'Ireland', code: 'IE', languages: ['English', 'Irish'], population: 4000000, flag: 'https://flagcdn.com/w80/ie.png' },
    { name: 'Central African Republic', code: 'CF', languages: ['French', 'Sango'], population: 4000000, flag: 'https://flagcdn.com/w80/cf.png' },
    { name: 'New Zealand', code: 'NZ', languages: ['English', 'Maori'], population: 4000000, flag: 'https://flagcdn.com/w80/nz.png' },
    { name: 'Mauritania', code: 'MR', languages: ['Arabic'], population: 4000000, flag: 'https://flagcdn.com/w80/mr.png' },
    { name: 'Panama', code: 'PA', languages: ['Spanish'], population: 4000000, flag: 'https://flagcdn.com/w80/pa.png' },
    { name: 'Kuwait', code: 'KW', languages: ['Arabic'], population: 4000000, flag: 'https://flagcdn.com/w80/kw.png' },
    { name: 'Croatia', code: 'HR', languages: ['Croatian'], population: 4000000, flag: 'https://flagcdn.com/w80/hr.png' },
    { name: 'Moldova', code: 'MD', languages: ['Romanian'], population: 3000000, flag: 'https://flagcdn.com/w80/md.png' },
    { name: 'Georgia', code: 'GE', languages: ['Georgian'], population: 3000000, flag: 'https://flagcdn.com/w80/ge.png' },
    { name: 'Eritrea', code: 'ER', languages: ['Tigrinya', 'Arabic', 'English'], population: 3000000, flag: 'https://flagcdn.com/w80/er.png' },
    { name: 'Uruguay', code: 'UY', languages: ['Spanish'], population: 3000000, flag: 'https://flagcdn.com/w80/uy.png' },
    { name: 'Bosnia and Herzegovina', code: 'BA', languages: ['Bosnian', 'Croatian', 'Serbian'], population: 3000000, flag: 'https://flagcdn.com/w80/ba.png' },
    { name: 'Mongolia', code: 'MN', languages: ['Mongolian'], population: 3000000, flag: 'https://flagcdn.com/w80/mn.png' },
    { name: 'Armenia', code: 'AM', languages: ['Armenian'], population: 2000000, flag: 'https://flagcdn.com/w80/am.png' },
    { name: 'Jamaica', code: 'JM', languages: ['English'], population: 2000000, flag: 'https://flagcdn.com/w80/jm.png' },
    { name: 'Qatar', code: 'QA', languages: ['Arabic'], population: 2000000, flag: 'https://flagcdn.com/w80/qa.png' },
    { name: 'Albania', code: 'AL', languages: ['Albanian'], population: 2000000, flag: 'https://flagcdn.com/w80/al.png' },
    { name: 'Puerto Rico', code: 'PR', languages: ['Spanish', 'English'], population: 2000000, flag: 'https://flagcdn.com/w80/pr.png' },
    { name: 'Lithuania', code: 'LT', languages: ['Lithuanian'], population: 2000000, flag: 'https://flagcdn.com/w80/lt.png' },
    { name: 'Namibia', code: 'NA', languages: ['English'], population: 2000000, flag: 'https://flagcdn.com/w80/na.png' },
    { name: 'Gambia', code: 'GM', languages: ['English'], population: 2000000, flag: 'https://flagcdn.com/w80/gm.png' },
    { name: 'Botswana', code: 'BW', languages: ['English', 'Tswana'], population: 2000000, flag: 'https://flagcdn.com/w80/bw.png' },
    { name: 'Gabon', code: 'GA', languages: ['French'], population: 2000000, flag: 'https://flagcdn.com/w80/ga.png' },
    { name: 'Lesotho', code: 'LS', languages: ['Sotho', 'English'], population: 2000000, flag: 'https://flagcdn.com/w80/ls.png' },
    { name: 'North Macedonia', code: 'MK', languages: ['Macedonian'], population: 2000000, flag: 'https://flagcdn.com/w80/mk.png' },
    { name: 'Slovenia', code: 'SI', languages: ['Slovenian'], population: 2000000, flag: 'https://flagcdn.com/w80/si.png' },
    { name: 'Guinea-Bissau', code: 'GW', languages: ['Portuguese'], population: 1000000, flag: 'https://flagcdn.com/w80/gw.png' },
    { name: 'Latvia', code: 'LV', languages: ['Latvian'], population: 1000000, flag: 'https://flagcdn.com/w80/lv.png' },
    { name: 'Bahrain', code: 'BH', languages: ['Arabic'], population: 1000000, flag: 'https://flagcdn.com/w80/bh.png' },
    { name: 'Equatorial Guinea', code: 'GQ', languages: ['Spanish', 'French', 'Portuguese'], population: 1000000, flag: 'https://flagcdn.com/w80/gq.png' },
    { name: 'Trinidad and Tobago', code: 'TT', languages: ['English'], population: 1000000, flag: 'https://flagcdn.com/w80/tt.png' },
    { name: 'Estonia', code: 'EE', languages: ['Estonian'], population: 1000000, flag: 'https://flagcdn.com/w80/ee.png' },
    { name: 'Timor-Leste', code: 'TL', languages: ['Tetum', 'Portuguese'], population: 1000000, flag: 'https://flagcdn.com/w80/tl.png' },
    { name: 'Mauritius', code: 'MU', languages: ['English', 'French'], population: 1000000, flag: 'https://flagcdn.com/w80/mu.png' },
    { name: 'Cyprus', code: 'CY', languages: ['Greek', 'Turkish'], population: 1000000, flag: 'https://flagcdn.com/w80/cy.png' },
    { name: 'Eswatini', code: 'SZ', languages: ['Swazi', 'English'], population: 1000000, flag: 'https://flagcdn.com/w80/sz.png' },
    { name: 'Djibouti', code: 'DJ', languages: ['French', 'Arabic'], population: 1000000, flag: 'https://flagcdn.com/w80/dj.png' },
    { name: 'Fiji', code: 'FJ', languages: ['English', 'Fijian'], population: 800000, flag: 'https://flagcdn.com/w80/fj.png' },
    { name: 'Reunion', code: 'RE', languages: ['French'], population: 800000, flag: 'https://flagcdn.com/w80/re.png' },
    { name: 'Comoros', code: 'KM', languages: ['Comorian', 'French', 'Arabic'], population: 800000, flag: 'https://flagcdn.com/w80/km.png' },
    { name: 'Guyana', code: 'GY', languages: ['English'], population: 700000, flag: 'https://flagcdn.com/w80/gy.png' },
    { name: 'Bhutan', code: 'BT', languages: ['Dzongkha'], population: 700000, flag: 'https://flagcdn.com/w80/bt.png' },
    { name: 'Solomon Islands', code: 'SB', languages: ['English'], population: 600000, flag: 'https://flagcdn.com/w80/sb.png' },
    { name: 'Macau', code: 'MO', languages: ['Chinese', 'Portuguese'], population: 600000, flag: 'https://flagcdn.com/w80/mo.png' },
    { name: 'Montenegro', code: 'ME', languages: ['Montenegrin'], population: 600000, flag: 'https://flagcdn.com/w80/me.png' },
    { name: 'Luxembourg', code: 'LU', languages: ['Luxembourgish', 'French', 'German'], population: 600000, flag: 'https://flagcdn.com/w80/lu.png' },
    { name: 'Western Sahara', code: 'EH', languages: ['Arabic'], population: 500000, flag: 'https://flagcdn.com/w80/eh.png' },
    { name: 'Suriname', code: 'SR', languages: ['Dutch'], population: 500000, flag: 'https://flagcdn.com/w80/sr.png' },
    { name: 'Cabo Verde', code: 'CV', languages: ['Portuguese'], population: 500000, flag: 'https://flagcdn.com/w80/cv.png' },
    { name: 'Maldives', code: 'MV', languages: ['Dhivehi'], population: 500000, flag: 'https://flagcdn.com/w80/mv.png' },
    { name: 'Malta', code: 'MT', languages: ['Maltese', 'English'], population: 500000, flag: 'https://flagcdn.com/w80/mt.png' },
    { name: 'Brunei', code: 'BN', languages: ['Malay'], population: 400000, flag: 'https://flagcdn.com/w80/bn.png' },
    { name: 'Guadeloupe', code: 'GP', languages: ['French'], population: 400000, flag: 'https://flagcdn.com/w80/gp.png' },
    { name: 'Belize', code: 'BZ', languages: ['English'], population: 400000, flag: 'https://flagcdn.com/w80/bz.png' },
    { name: 'Bahamas', code: 'BS', languages: ['English'], population: 300000, flag: 'https://flagcdn.com/w80/bs.png' },
    { name: 'Martinique', code: 'MQ', languages: ['French'], population: 300000, flag: 'https://flagcdn.com/w80/mq.png' },
    { name: 'Iceland', code: 'IS', languages: ['Icelandic'], population: 300000, flag: 'https://flagcdn.com/w80/is.png' },
    { name: 'Vanuatu', code: 'VU', languages: ['Bislama', 'English', 'French'], population: 300000, flag: 'https://flagcdn.com/w80/vu.png' },
    { name: 'French Guiana', code: 'GF', languages: ['French'], population: 200000, flag: 'https://flagcdn.com/w80/gf.png' },
    { name: 'Barbados', code: 'BB', languages: ['English'], population: 200000, flag: 'https://flagcdn.com/w80/bb.png' },
    { name: 'New Caledonia', code: 'NC', languages: ['French'], population: 200000, flag: 'https://flagcdn.com/w80/nc.png' },
    { name: 'French Polynesia', code: 'PF', languages: ['French'], population: 200000, flag: 'https://flagcdn.com/w80/pf.png' },
    { name: 'Samoa', code: 'WS', languages: ['Samoan', 'English'], population: 100000, flag: 'https://flagcdn.com/w80/ws.png' },
    { name: 'Saint Lucia', code: 'LC', languages: ['English'], population: 100000, flag: 'https://flagcdn.com/w80/lc.png' },
    { name: 'Guam', code: 'GU', languages: ['English'], population: 100000, flag: 'https://flagcdn.com/w80/gu.png' },
    { name: 'Curacao', code: 'CW', languages: ['Dutch', 'Papiamento', 'English'], population: 100000, flag: 'https://flagcdn.com/w80/cw.png' },
    { name: 'Kiribati', code: 'KI', languages: ['English', 'Gilbertese'], population: 100000, flag: 'https://flagcdn.com/w80/ki.png' },
    { name: 'Grenada', code: 'GD', languages: ['English'], population: 100000, flag: 'https://flagcdn.com/w80/gd.png' },
    { name: 'Micronesia', code: 'FM', languages: ['English'], population: 100000, flag: 'https://flagcdn.com/w80/fm.png' },
    { name: 'Aruba', code: 'AW', languages: ['Dutch', 'Papiamento'], population: 100000, flag: 'https://flagcdn.com/w80/aw.png' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', languages: ['English'], population: 100000, flag: 'https://flagcdn.com/w80/vc.png' },
    { name: 'Jersey', code: 'JE', languages: ['English', 'French'], population: 100000, flag: 'https://flagcdn.com/w80/je.png' },
    { name: 'Antigua and Barbuda', code: 'AG', languages: ['English'], population: 90000, flag: 'https://flagcdn.com/w80/ag.png' },
    { name: 'Seychelles', code: 'SC', languages: ['French', 'English', 'Seychellois Creole'], population: 90000, flag: 'https://flagcdn.com/w80/sc.png' },
    { name: 'Tonga', code: 'TO', languages: ['Tongan', 'English'], population: 90000, flag: 'https://flagcdn.com/w80/to.png' },
    { name: 'US Virgin Islands', code: 'VI', languages: ['English'], population: 90000, flag: 'https://flagcdn.com/w80/vi.png' },
    { name: 'Andorra', code: 'AD', languages: ['Catalan'], population: 70000, flag: 'https://flagcdn.com/w80/ad.png' },
    { name: 'Isle of Man', code: 'IM', languages: ['English', 'Manx'], population: 70000, flag: 'https://flagcdn.com/w80/im.png' },
    { name: 'Cayman Islands', code: 'KY', languages: ['English'], population: 60000, flag: 'https://flagcdn.com/w80/ky.png' },
    { name: 'Dominica', code: 'DM', languages: ['English'], population: 60000, flag: 'https://flagcdn.com/w80/dm.png' },
    { name: 'Bermuda', code: 'BM', languages: ['English'], population: 60000, flag: 'https://flagcdn.com/w80/bm.png' },
    { name: 'Guernsey', code: 'GG', languages: ['English', 'French'], population: 60000, flag: 'https://flagcdn.com/w80/gg.png' },
    { name: 'Greenland', code: 'GL', languages: ['Greenlandic'], population: 50000, flag: 'https://flagcdn.com/w80/gl.png' },
    { name: 'Marshall Islands', code: 'MH', languages: ['Marshallese', 'English'], population: 50000, flag: 'https://flagcdn.com/w80/mh.png' },
    { name: 'Saint Kitts and Nevis', code: 'KN', languages: ['English'], population: 50000, flag: 'https://flagcdn.com/w80/kn.png' },
    { name: 'Faroe Islands', code: 'FO', languages: ['Faroese'], population: 40000, flag: 'https://flagcdn.com/w80/fo.png' },
    { name: 'American Samoa', code: 'AS', languages: ['English', 'Samoan'], population: 40000, flag: 'https://flagcdn.com/w80/as.png' },
    { name: 'Turks and Caicos Islands', code: 'TC', languages: ['English'], population: 30000, flag: 'https://flagcdn.com/w80/tc.png' },
    { name: 'Saint Martin', code: 'MF', languages: ['French'], population: 30000, flag: 'https://flagcdn.com/w80/mf.png' },
    { name: 'Liechtenstein', code: 'LI', languages: ['German'], population: 30000, flag: 'https://flagcdn.com/w80/li.png' },
    { name: 'Monaco', code: 'MC', languages: ['French'], population: 30000, flag: 'https://flagcdn.com/w80/mc.png' },
    { name: 'San Marino', code: 'SM', languages: ['Italian'], population: 30000, flag: 'https://flagcdn.com/w80/sm.png' },
    { name: 'Gibraltar', code: 'GI', languages: ['English'], population: 30000, flag: 'https://flagcdn.com/w80/gi.png' },
    { name: 'British Virgin Islands', code: 'VG', languages: ['English'], population: 30000, flag: 'https://flagcdn.com/w80/vg.png' },
    { name: 'Palau', code: 'PW', languages: ['Palauan', 'English'], population: 10000, flag: 'https://flagcdn.com/w80/pw.png' },
    { name: 'Cook Islands', code: 'CK', languages: ['English', 'Maori'], population: 10000, flag: 'https://flagcdn.com/w80/ck.png' },
    { name: 'Anguilla', code: 'AI', languages: ['English'], population: 10000, flag: 'https://flagcdn.com/w80/ai.png' },
    { name: 'Tuvalu', code: 'TV', languages: ['Tuvaluan', 'English'], population: 10000, flag: 'https://flagcdn.com/w80/tv.png' },
    { name: 'Nauru', code: 'NR', languages: ['Nauruan', 'English'], population: 10000, flag: 'https://flagcdn.com/w80/nr.png' },
    { name: 'Vatican City', code: 'VA', languages: ['Italian', 'Latin'], population: 800, flag: 'https://flagcdn.com/w80/va.png' }
  ];

  // Improved search function - US और UK को खोजने के लिए
  const filteredCountries = allCountriesData.filter(country => {
    const searchLower = countrySearchQuery.toLowerCase();
    const countryNameLower = country.name.toLowerCase();
    const countryCodeLower = country.code.toLowerCase();

    // US को खोजने के लिए विशेष case
    if (searchLower === 'us') {
      return country.code === 'US' || 
             country.name.toLowerCase().includes('united states') ||
             country.name.toLowerCase().includes('usa');
    }

    // UK को खोजने के लिए विशेष case
    if (searchLower === 'uk') {
      return country.code === 'GB' || 
             country.name.toLowerCase().includes('united kingdom') ||
             country.name.toLowerCase().includes('britain');
    }

    // Regular search
    return countryNameLower.includes(searchLower) || 
           countryCodeLower.includes(searchLower);
  });

  // Initialize Google Translate
  useEffect(() => {
    // Load Google Translate script
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,nl,es,fr,de,it,ja,id,pt,hi,da,fi,no,sv,mr,bn,ko,zh-CN,ar,ru,tr,pl,vi,th',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src*="translate.google.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  // Use hardcoded data instead of API
  useEffect(() => {
    setCountries(allCountriesData);
    setLoading(false);
  }, []);

  // Change language using Google Translate
  const changeLanguage = (langCode: string) => {
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    }

    setPrimaryLanguage(langCode);

    // Add to selected languages if not already present
    if (!selectedLanguages.includes(langCode)) {
      setSelectedLanguages([...selectedLanguages, langCode]);
    }
  };

  const addLanguage = (code: string) => {
    if (!selectedLanguages.includes(code)) {
      setSelectedLanguages([...selectedLanguages, code]);
    }
    setShowAddLanguage(false);
    setSearchQuery('');
  };

  const removeLanguage = (code: string) => {
    if (code === 'en') {
      alert('Cannot remove English (default language)');
      return;
    }

    // If removing primary language, set English as primary
    if (code === primaryLanguage) {
      setPrimaryLanguage('en');
      changeLanguage('en');
    }

    setSelectedLanguages(selectedLanguages.filter(lang => lang !== code));
  };

  const handleCountryClick = (country: Country) => {
    console.log('Clicked country:', country.name, 'Code:', country.code);

    // Map country to language code
    const countryToLanguageMap: { [key: string]: string } = {
      // English speaking countries
      'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en', 'NZ': 'en', 'IE': 'en',
      // Chinese
      'CN': 'zh-CN', 'TW': 'zh-CN',
      // Hindi
      'IN': 'hi',
      // Spanish
      'MX': 'es', 'ES': 'es',
      // French
      'FR': 'fr',
      // German
      'DE': 'de',
      // Japanese
      'JP': 'ja',
      // Portuguese
      'BR': 'pt', 'PT': 'pt',
      // Russian
      'RU': 'ru',
      // Arabic
      'SA': 'ar', 'AE': 'ar',
      // Korean
      'KR': 'ko',
      // Italian
      'IT': 'it',
      // Dutch
      'NL': 'nl',
      // Turkish
      'TR': 'tr',
      // Indonesian
      'ID': 'id',
      // Thai
      'TH': 'th',
      // Vietnamese
      'VN': 'vi',
      // Polish
      'PL': 'pl'
    };

    const languageCode = countryToLanguageMap[country.code] || 'en';

    console.log('Selected language code:', languageCode);

    // Set only this one language (remove all others)
    setSelectedLanguages([languageCode]);

    // Set as primary language
    setPrimaryLanguage(languageCode);
    changeLanguage(languageCode);

    console.log('Selected country:', country.name, '- Language:', languageCode);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-3">
                <h2 className="text-sm font-semibold text-gray-700 mb-3 px-3">Settings</h2>
                <nav className="space-y-1">
                  <Link href="/settings">
                    <div className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
                      Account
                    </div>
                  </Link>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Privacy
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Display
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Email & Notifications
                  </a>
                  <Link href="/languages">
                    <div className="block px-3 py-2 text-sm text-red-600 bg-red-50 rounded font-medium cursor-pointer">
                      Languages
                    </div>
                  </Link>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Subscriptions & Billing
                  </a>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Language Settings</h1>

            <div className="bg-white rounded-lg shadow-sm">
              {/* Header with Add Button */}
              <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-sm font-semibold text-gray-900">Your Languages</h2>
                  <p className="text-xs text-gray-500 mt-1">Manage languages you want to see content in</p>
                </div>
              </div>

              {/* Add Language Panel */}
              {showAddLanguage && (
                <div className="p-5 border-b border-gray-200 bg-gray-50">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search languages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="max-h-64 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <style>{`
                      .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                      }
                    `}</style>
                    <div className="space-y-1">
                      {filteredAvailableLanguages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => addLanguage(language.code)}
                          className="w-full flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-colors text-left"
                        >
                          <div className={`w-8 h-8 ${language.color} rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0`}>
                            {language.code.substring(0, 2).toUpperCase()}
                          </div>
                          <span className="text-sm text-gray-900">{language.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Languages List */}
              <div className="max-h-[300px] overflow-y-auto scrollbar-hide divide-y divide-gray-200" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {languages.map((language) => (
                  <div key={language.code} className="p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${language.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                          {language.code.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900">{language.name}</span>
                            {primaryLanguage === language.code && (
                              <span className="flex items-center space-x-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                <Check className="w-3 h-3" />
                                <span>Primary</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {primaryLanguage !== language.code ? (
                          <>
                            <button
                              onClick={() => changeLanguage(language.code)}
                              className="px-4 py-1.5 border-2 border-blue-600 text-blue-600 text-sm font-medium rounded-full hover:bg-blue-50 transition-colors"
                            >
                              Set as primary
                            </button>
                            {language.code !== 'en' && (
                              <button
                                onClick={() => removeLanguage(language.code)}
                                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
                                title="Remove language"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </>
                        ) : (
                          language.code !== 'en' && (
                            <button
                              onClick={() => removeLanguage(language.code)}
                              className="px-4 py-1.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors flex items-center space-x-1"
                              title="Remove primary language"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span>Remove</span>
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Countries & Regions</h2>

              {/* Country Search Box */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search countries (e.g., US, UK, United States, United Kingdom)..."
                    value={countrySearchQuery}
                    onChange={(e) => setCountrySearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm">
                <div className="h-[850px] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading countries...</div>
                  ) : filteredCountries.length > 0 ? (
                    <div className="divide-y divide-gray-200">
                      {/* United States को पहले दिखाएं */}
                      {filteredCountries
                        .sort((a, b) => {
                          // US और UK को पहले दिखाएं
                          if (a.code === 'US') return -1;
                          if (b.code === 'US') return 1;
                          if (a.code === 'GB') return -1;
                          if (b.code === 'GB') return 1;
                          return b.population - a.population;
                        })
                        .map((country) => (
                          <button
                            key={country.code}
                            onClick={() => handleCountryClick(country)}
                            className="w-full p-4 hover:bg-gray-50 transition-colors text-left"
                          >
                            <div className="flex items-center space-x-3">
                              <img 
                                src={country.flag} 
                                alt={country.name}
                                className="w-8 h-6 object-cover rounded shadow-sm"
                              />
                              <div className="flex-1">
                                <span className="text-sm text-gray-900">{country.name}</span>
                                {country.languages.length > 0 && (
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {country.languages[0]}
                                  </p>
                                )}
                              </div>
                            </div>
                          </button>
                        ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      No countries found. Try searching for "US", "United States", "UK", or "United Kingdom"
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Implementation Notes */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">🔧 FIXED: US और UK दिखने का Issue</h3>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>✅ United States (US) और United Kingdom (GB) को hardcoded list में पहले position पर रखा है</li>
                <li>✅ Search function को improve किया है - अब "us", "uk", "united states", "united kingdom" search काम करते हैं</li>
                <li>✅ Country list को US और UK के लिए special sorting दी है</li>
                <li>✅ Search box में placeholder update किया है</li>
                <li>✅ Country select करने पर correct language set हो जाता है</li>
                <li>• Google Translate API integrated है</li>
                <li>• Primary language changes entire application को affect करते हैं</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}    import React, { useState, useEffect } from 'react';
import { MoreHorizontal, Search, Check, Plus, Trash2 } from 'lucide-react';
import { Link } from "wouter";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

interface Country {
  name: string;
  flag: string;
  code: string;
  languages: string[];
  population: number;
}

interface Language {
  code: string;
  name: string;
  color: string;
}

export default function QuoraLanguageSettings() {
  const [primaryLanguage, setPrimaryLanguage] = useState<string>('en');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['en']);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddLanguage, setShowAddLanguage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [countrySearchQuery, setCountrySearchQuery] = useState('');

  const allLanguages: Language[] = [
    { code: 'en', name: 'English', color: 'bg-blue-500' },
    { code: 'nl', name: 'Nederlands', color: 'bg-red-600' },
    { code: 'es', name: 'Español', color: 'bg-orange-500' },
    { code: 'fr', name: 'Français', color: 'bg-blue-700' },
    { code: 'de', name: 'Deutsch', color: 'bg-yellow-500' },
    { code: 'it', name: 'Italiano', color: 'bg-green-600' },
    { code: 'ja', name: '日本語', color: 'bg-red-500' },
    { code: 'id', name: 'Indonesia', color: 'bg-red-400' },
    { code: 'pt', name: 'Português', color: 'bg-green-700' },
    { code: 'hi', name: 'हिंदी', color: 'bg-teal-500' },
    { code: 'da', name: 'Dansk', color: 'bg-red-600' },
    { code: 'fi', name: 'Suomi', color: 'bg-blue-600' },
    { code: 'no', name: 'Norsk', color: 'bg-blue-800' },
    { code: 'sv', name: 'Svenska', color: 'bg-blue-500' },
    { code: 'mr', name: 'मराठी', color: 'bg-orange-600' },
    { code: 'bn', name: 'বাংলা', color: 'bg-red-700' },
    { code: 'ko', name: '한국어', color: 'bg-blue-400' },
    { code: 'zh-CN', name: '中文', color: 'bg-red-600' },
    { code: 'ar', name: 'العربية', color: 'bg-green-600' },
    { code: 'ru', name: 'Русский', color: 'bg-blue-700' },
    { code: 'tr', name: 'Türkçe', color: 'bg-red-500' },
    { code: 'pl', name: 'Polski', color: 'bg-red-600' },
    { code: 'vi', name: 'Tiếng Việt', color: 'bg-red-500' },
    { code: 'th', name: 'ไทย', color: 'bg-red-600' }
  ];

  const languages = allLanguages.filter(lang => selectedLanguages.includes(lang.code));
  const availableLanguages = allLanguages.filter(lang => !selectedLanguages.includes(lang.code));

  const filteredAvailableLanguages = availableLanguages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Hardcoded countries data - संशोधित version
  const allCountriesData: Country[] = [
    { name: 'United States', code: 'US', languages: ['English'], population: 331000000, flag: 'https://flagcdn.com/w80/us.png' },
    { name: 'United Kingdom', code: 'GB', languages: ['English'], population: 67000000, flag: 'https://flagcdn.com/w80/gb.png' },
    { name: 'China', code: 'CN', languages: ['Chinese'], population: 1402000000, flag: 'https://flagcdn.com/w80/cn.png' },
    { name: 'India', code: 'IN', languages: ['Hindi', 'English'], population: 1380000000, flag: 'https://flagcdn.com/w80/in.png' },
    { name: 'Indonesia', code: 'ID', languages: ['Indonesian'], population: 273000000, flag: 'https://flagcdn.com/w80/id.png' },
    { name: 'Pakistan', code: 'PK', languages: ['Urdu', 'English'], population: 220000000, flag: 'https://flagcdn.com/w80/pk.png' },
    { name: 'Brazil', code: 'BR', languages: ['Portuguese'], population: 212000000, flag: 'https://flagcdn.com/w80/br.png' },
    { name: 'Nigeria', code: 'NG', languages: ['English'], population: 206000000, flag: 'https://flagcdn.com/w80/ng.png' },
    { name: 'Bangladesh', code: 'BD', languages: ['Bengali'], population: 164000000, flag: 'https://flagcdn.com/w80/bd.png' },
    { name: 'Russia', code: 'RU', languages: ['Russian'], population: 144000000, flag: 'https://flagcdn.com/w80/ru.png' },
    { name: 'Mexico', code: 'MX', languages: ['Spanish'], population: 128000000, flag: 'https://flagcdn.com/w80/mx.png' },
    { name: 'Japan', code: 'JP', languages: ['Japanese'], population: 126000000, flag: 'https://flagcdn.com/w80/jp.png' },
    { name: 'Ethiopia', code: 'ET', languages: ['Amharic'], population: 114000000, flag: 'https://flagcdn.com/w80/et.png' },
    { name: 'Philippines', code: 'PH', languages: ['Filipino', 'English'], population: 109000000, flag: 'https://flagcdn.com/w80/ph.png' },
    { name: 'Egypt', code: 'EG', languages: ['Arabic'], population: 102000000, flag: 'https://flagcdn.com/w80/eg.png' },
    { name: 'Vietnam', code: 'VN', languages: ['Vietnamese'], population: 97000000, flag: 'https://flagcdn.com/w80/vn.png' },
    { name: 'DR Congo', code: 'CD', languages: ['French'], population: 89000000, flag: 'https://flagcdn.com/w80/cd.png' },
    { name: 'Turkey', code: 'TR', languages: ['Turkish'], population: 84000000, flag: 'https://flagcdn.com/w80/tr.png' },
    { name: 'Iran', code: 'IR', languages: ['Persian'], population: 83000000, flag: 'https://flagcdn.com/w80/ir.png' },
    { name: 'Germany', code: 'DE', languages: ['German'], population: 83000000, flag: 'https://flagcdn.com/w80/de.png' },
    { name: 'Thailand', code: 'TH', languages: ['Thai'], population: 69000000, flag: 'https://flagcdn.com/w80/th.png' },
    { name: 'France', code: 'FR', languages: ['French'], population: 65000000, flag: 'https://flagcdn.com/w80/fr.png' },
    { name: 'Italy', code: 'IT', languages: ['Italian'], population: 60000000, flag: 'https://flagcdn.com/w80/it.png' },
    { name: 'Tanzania', code: 'TZ', languages: ['Swahili', 'English'], population: 59000000, flag: 'https://flagcdn.com/w80/tz.png' },
    { name: 'South Africa', code: 'ZA', languages: ['English', 'Zulu', 'Xhosa'], population: 59000000, flag: 'https://flagcdn.com/w80/za.png' },
    { name: 'Myanmar', code: 'MM', languages: ['Burmese'], population: 54000000, flag: 'https://flagcdn.com/w80/mm.png' },
    { name: 'Kenya', code: 'KE', languages: ['Swahili', 'English'], population: 53000000, flag: 'https://flagcdn.com/w80/ke.png' },
    { name: 'South Korea', code: 'KR', languages: ['Korean'], population: 51000000, flag: 'https://flagcdn.com/w80/kr.png' },
    { name: 'Colombia', code: 'CO', languages: ['Spanish'], population: 50000000, flag: 'https://flagcdn.com/w80/co.png' },
    { name: 'Spain', code: 'ES', languages: ['Spanish'], population: 47000000, flag: 'https://flagcdn.com/w80/es.png' },
    { name: 'Uganda', code: 'UG', languages: ['English', 'Swahili'], population: 45000000, flag: 'https://flagcdn.com/w80/ug.png' },
    { name: 'Argentina', code: 'AR', languages: ['Spanish'], population: 45000000, flag: 'https://flagcdn.com/w80/ar.png' },
    { name: 'Algeria', code: 'DZ', languages: ['Arabic'], population: 43000000, flag: 'https://flagcdn.com/w80/dz.png' },
    { name: 'Sudan', code: 'SD', languages: ['Arabic', 'English'], population: 43000000, flag: 'https://flagcdn.com/w80/sd.png' },
    { name: 'Ukraine', code: 'UA', languages: ['Ukrainian'], population: 43000000, flag: 'https://flagcdn.com/w80/ua.png' },
    { name: 'Iraq', code: 'IQ', languages: ['Arabic', 'Kurdish'], population: 40000000, flag: 'https://flagcdn.com/w80/iq.png' },
    { name: 'Afghanistan', code: 'AF', languages: ['Pashto', 'Dari'], population: 38000000, flag: 'https://flagcdn.com/w80/af.png' },
    { name: 'Poland', code: 'PL', languages: ['Polish'], population: 38000000, flag: 'https://flagcdn.com/w80/pl.png' },
    { name: 'Canada', code: 'CA', languages: ['English', 'French'], population: 38000000, flag: 'https://flagcdn.com/w80/ca.png' },
    { name: 'Morocco', code: 'MA', languages: ['Arabic', 'Berber'], population: 36000000, flag: 'https://flagcdn.com/w80/ma.png' },
    { name: 'Saudi Arabia', code: 'SA', languages: ['Arabic'], population: 34000000, flag: 'https://flagcdn.com/w80/sa.png' },
    { name: 'Uzbekistan', code: 'UZ', languages: ['Uzbek'], population: 33000000, flag: 'https://flagcdn.com/w80/uz.png' },
    { name: 'Peru', code: 'PE', languages: ['Spanish'], population: 32000000, flag: 'https://flagcdn.com/w80/pe.png' },
    { name: 'Angola', code: 'AO', languages: ['Portuguese'], population: 32000000, flag: 'https://flagcdn.com/w80/ao.png' },
    { name: 'Malaysia', code: 'MY', languages: ['Malay'], population: 32000000, flag: 'https://flagcdn.com/w80/my.png' },
    { name: 'Mozambique', code: 'MZ', languages: ['Portuguese'], population: 31000000, flag: 'https://flagcdn.com/w80/mz.png' },
    { name: 'Ghana', code: 'GH', languages: ['English'], population: 31000000, flag: 'https://flagcdn.com/w80/gh.png' },
    { name: 'Yemen', code: 'YE', languages: ['Arabic'], population: 29000000, flag: 'https://flagcdn.com/w80/ye.png' },
    { name: 'Nepal', code: 'NP', languages: ['Nepali'], population: 29000000, flag: 'https://flagcdn.com/w80/np.png' },
    { name: 'Venezuela', code: 'VE', languages: ['Spanish'], population: 28000000, flag: 'https://flagcdn.com/w80/ve.png' },
    { name: 'Madagascar', code: 'MG', languages: ['Malagasy', 'French'], population: 27000000, flag: 'https://flagcdn.com/w80/mg.png' },
    { name: 'Cameroon', code: 'CM', languages: ['French', 'English'], population: 26000000, flag: 'https://flagcdn.com/w80/cm.png' },
    { name: 'Côte d\'Ivoire', code: 'CI', languages: ['French'], population: 26000000, flag: 'https://flagcdn.com/w80/ci.png' },
    { name: 'North Korea', code: 'KP', languages: ['Korean'], population: 25000000, flag: 'https://flagcdn.com/w80/kp.png' },
    { name: 'Australia', code: 'AU', languages: ['English'], population: 25000000, flag: 'https://flagcdn.com/w80/au.png' },
    { name: 'Taiwan', code: 'TW', languages: ['Chinese'], population: 23000000, flag: 'https://flagcdn.com/w80/tw.png' },
    { name: 'Niger', code: 'NE', languages: ['French'], population: 24000000, flag: 'https://flagcdn.com/w80/ne.png' },
    { name: 'Sri Lanka', code: 'LK', languages: ['Sinhala', 'Tamil'], population: 21000000, flag: 'https://flagcdn.com/w80/lk.png' },
    { name: 'Burkina Faso', code: 'BF', languages: ['French'], population: 20000000, flag: 'https://flagcdn.com/w80/bf.png' },
    { name: 'Mali', code: 'ML', languages: ['French'], population: 20000000, flag: 'https://flagcdn.com/w80/ml.png' },
    { name: 'Romania', code: 'RO', languages: ['Romanian'], population: 19000000, flag: 'https://flagcdn.com/w80/ro.png' },
    { name: 'Chile', code: 'CL', languages: ['Spanish'], population: 19000000, flag: 'https://flagcdn.com/w80/cl.png' },
    { name: 'Kazakhstan', code: 'KZ', languages: ['Kazakh', 'Russian'], population: 18000000, flag: 'https://flagcdn.com/w80/kz.png' },
    { name: 'Zambia', code: 'ZM', languages: ['English'], population: 18000000, flag: 'https://flagcdn.com/w80/zm.png' },
    { name: 'Guatemala', code: 'GT', languages: ['Spanish'], population: 17000000, flag: 'https://flagcdn.com/w80/gt.png' },
    { name: 'Ecuador', code: 'EC', languages: ['Spanish'], population: 17000000, flag: 'https://flagcdn.com/w80/ec.png' },
    { name: 'Netherlands', code: 'NL', languages: ['Dutch'], population: 17000000, flag: 'https://flagcdn.com/w80/nl.png' },
    { name: 'Syria', code: 'SY', languages: ['Arabic'], population: 17000000, flag: 'https://flagcdn.com/w80/sy.png' },
    { name: 'Cambodia', code: 'KH', languages: ['Khmer'], population: 16000000, flag: 'https://flagcdn.com/w80/kh.png' },
    { name: 'Senegal', code: 'SN', languages: ['French'], population: 16000000, flag: 'https://flagcdn.com/w80/sn.png' },
    { name: 'Chad', code: 'TD', languages: ['French', 'Arabic'], population: 16000000, flag: 'https://flagcdn.com/w80/td.png' },
    { name: 'Somalia', code: 'SO', languages: ['Somali', 'Arabic'], population: 15000000, flag: 'https://flagcdn.com/w80/so.png' },
    { name: 'Zimbabwe', code: 'ZW', languages: ['English'], population: 14000000, flag: 'https://flagcdn.com/w80/zw.png' },
    { name: 'Guinea', code: 'GN', languages: ['French'], population: 13000000, flag: 'https://flagcdn.com/w80/gn.png' },
    { name: 'Rwanda', code: 'RW', languages: ['Kinyarwanda', 'English', 'French'], population: 12000000, flag: 'https://flagcdn.com/w80/rw.png' },
    { name: 'Benin', code: 'BJ', languages: ['French'], population: 12000000, flag: 'https://flagcdn.com/w80/bj.png' },
    { name: 'Burundi', code: 'BI', languages: ['Kirundi', 'French'], population: 11000000, flag: 'https://flagcdn.com/w80/bi.png' },
    { name: 'Tunisia', code: 'TN', languages: ['Arabic'], population: 11000000, flag: 'https://flagcdn.com/w80/tn.png' },
    { name: 'Bolivia', code: 'BO', languages: ['Spanish'], population: 11000000, flag: 'https://flagcdn.com/w80/bo.png' },
    { name: 'Belgium', code: 'BE', languages: ['Dutch', 'French', 'German'], population: 11000000, flag: 'https://flagcdn.com/w80/be.png' },
    { name: 'Haiti', code: 'HT', languages: ['French', 'Haitian Creole'], population: 11000000, flag: 'https://flagcdn.com/w80/ht.png' },
    { name: 'Cuba', code: 'CU', languages: ['Spanish'], population: 11000000, flag: 'https://flagcdn.com/w80/cu.png' },
    { name: 'South Sudan', code: 'SS', languages: ['English'], population: 11000000, flag: 'https://flagcdn.com/w80/ss.png' },
    { name: 'Dominican Republic', code: 'DO', languages: ['Spanish'], population: 10000000, flag: 'https://flagcdn.com/w80/do.png' },
    { name: 'Czech Republic', code: 'CZ', languages: ['Czech'], population: 10000000, flag: 'https://flagcdn.com/w80/cz.png' },
    { name: 'Greece', code: 'GR', languages: ['Greek'], population: 10000000, flag: 'https://flagcdn.com/w80/gr.png' },
    { name: 'Jordan', code: 'JO', languages: ['Arabic'], population: 10000000, flag: 'https://flagcdn.com/w80/jo.png' },
    { name: 'Portugal', code: 'PT', languages: ['Portuguese'], population: 10000000, flag: 'https://flagcdn.com/w80/pt.png' },
    { name: 'Azerbaijan', code: 'AZ', languages: ['Azerbaijani'], population: 10000000, flag: 'https://flagcdn.com/w80/az.png' },
    { name: 'Sweden', code: 'SE', languages: ['Swedish'], population: 10000000, flag: 'https://flagcdn.com/w80/se.png' },
    { name: 'Honduras', code: 'HN', languages: ['Spanish'], population: 9000000, flag: 'https://flagcdn.com/w80/hn.png' },
    { name: 'United Arab Emirates', code: 'AE', languages: ['Arabic'], population: 9000000, flag: 'https://flagcdn.com/w80/ae.png' },
    { name: 'Hungary', code: 'HU', languages: ['Hungarian'], population: 9000000, flag: 'https://flagcdn.com/w80/hu.png' },
    { name: 'Tajikistan', code: 'TJ', languages: ['Tajik'], population: 9000000, flag: 'https://flagcdn.com/w80/tj.png' },
    { name: 'Belarus', code: 'BY', languages: ['Belarusian', 'Russian'], population: 9000000, flag: 'https://flagcdn.com/w80/by.png' },
    { name: 'Austria', code: 'AT', languages: ['German'], population: 8000000, flag: 'https://flagcdn.com/w80/at.png' },
    { name: 'Papua New Guinea', code: 'PG', languages: ['English', 'Tok Pisin', 'Hiri Motu'], population: 8000000, flag: 'https://flagcdn.com/w80/pg.png' },
    { name: 'Switzerland', code: 'CH', languages: ['German', 'French', 'Italian', 'Romansh'], population: 8000000, flag: 'https://flagcdn.com/w80/ch.png' },
    { name: 'Israel', code: 'IL', languages: ['Hebrew'], population: 8000000, flag: 'https://flagcdn.com/w80/il.png' },
    { name: 'Togo', code: 'TG', languages: ['French'], population: 8000000, flag: 'https://flagcdn.com/w80/tg.png' },
    { name: 'Sierra Leone', code: 'SL', languages: ['English'], population: 7000000, flag: 'https://flagcdn.com/w80/sl.png' },
    { name: 'Hong Kong', code: 'HK', languages: ['Chinese', 'English'], population: 7000000, flag: 'https://flagcdn.com/w80/hk.png' },
    { name: 'Laos', code: 'LA', languages: ['Lao'], population: 7000000, flag: 'https://flagcdn.com/w80/la.png' },
    { name: 'Paraguay', code: 'PY', languages: ['Spanish', 'Guaraní'], population: 7000000, flag: 'https://flagcdn.com/w80/py.png' },
    { name: 'Bulgaria', code: 'BG', languages: ['Bulgarian'], population: 7000000, flag: 'https://flagcdn.com/w80/bg.png' },
    { name: 'Libya', code: 'LY', languages: ['Arabic'], population: 6000000, flag: 'https://flagcdn.com/w80/ly.png' },
    { name: 'Lebanon', code: 'LB', languages: ['Arabic'], population: 6000000, flag: 'https://flagcdn.com/w80/lb.png' },
    { name: 'Nicaragua', code: 'NI', languages: ['Spanish'], population: 6000000, flag: 'https://flagcdn.com/w80/ni.png' },
    { name: 'Kyrgyzstan', code: 'KG', languages: ['Kyrgyz', 'Russian'], population: 6000000, flag: 'https://flagcdn.com/w80/kg.png' },
    { name: 'El Salvador', code: 'SV', languages: ['Spanish'], population: 6000000, flag: 'https://flagcdn.com/w80/sv.png' },
    { name: 'Turkmenistan', code: 'TM', languages: ['Turkmen'], population: 6000000, flag: 'https://flagcdn.com/w80/tm.png' },
    { name: 'Singapore', code: 'SG', languages: ['English', 'Malay', 'Chinese', 'Tamil'], population: 5000000, flag: 'https://flagcdn.com/w80/sg.png' },
    { name: 'Denmark', code: 'DK', languages: ['Danish'], population: 5000000, flag: 'https://flagcdn.com/w80/dk.png' },
    { name: 'Finland', code: 'FI', languages: ['Finnish', 'Swedish'], population: 5000000, flag: 'https://flagcdn.com/w80/fi.png' },
    { name: 'Congo', code: 'CG', languages: ['French'], population: 5000000, flag: 'https://flagcdn.com/w80/cg.png' },
    { name: 'Slovakia', code: 'SK', languages: ['Slovak'], population: 5000000, flag: 'https://flagcdn.com/w80/sk.png' },
    { name: 'Norway', code: 'NO', languages: ['Norwegian'], population: 5000000, flag: 'https://flagcdn.com/w80/no.png' },
    { name: 'Oman', code: 'OM', languages: ['Arabic'], population: 5000000, flag: 'https://flagcdn.com/w80/om.png' },
    { name: 'Palestine', code: 'PS', languages: ['Arabic'], population: 5000000, flag: 'https://flagcdn.com/w80/ps.png' },
    { name: 'Costa Rica', code: 'CR', languages: ['Spanish'], population: 5000000, flag: 'https://flagcdn.com/w80/cr.png' },
    { name: 'Liberia', code: 'LR', languages: ['English'], population: 5000000, flag: 'https://flagcdn.com/w80/lr.png' },
    { name: 'Ireland', code: 'IE', languages: ['English', 'Irish'], population: 4000000, flag: 'https://flagcdn.com/w80/ie.png' },
    { name: 'Central African Republic', code: 'CF', languages: ['French', 'Sango'], population: 4000000, flag: 'https://flagcdn.com/w80/cf.png' },
    { name: 'New Zealand', code: 'NZ', languages: ['English', 'Maori'], population: 4000000, flag: 'https://flagcdn.com/w80/nz.png' },
    { name: 'Mauritania', code: 'MR', languages: ['Arabic'], population: 4000000, flag: 'https://flagcdn.com/w80/mr.png' },
    { name: 'Panama', code: 'PA', languages: ['Spanish'], population: 4000000, flag: 'https://flagcdn.com/w80/pa.png' },
    { name: 'Kuwait', code: 'KW', languages: ['Arabic'], population: 4000000, flag: 'https://flagcdn.com/w80/kw.png' },
    { name: 'Croatia', code: 'HR', languages: ['Croatian'], population: 4000000, flag: 'https://flagcdn.com/w80/hr.png' },
    { name: 'Moldova', code: 'MD', languages: ['Romanian'], population: 3000000, flag: 'https://flagcdn.com/w80/md.png' },
    { name: 'Georgia', code: 'GE', languages: ['Georgian'], population: 3000000, flag: 'https://flagcdn.com/w80/ge.png' },
    { name: 'Eritrea', code: 'ER', languages: ['Tigrinya', 'Arabic', 'English'], population: 3000000, flag: 'https://flagcdn.com/w80/er.png' },
    { name: 'Uruguay', code: 'UY', languages: ['Spanish'], population: 3000000, flag: 'https://flagcdn.com/w80/uy.png' },
    { name: 'Bosnia and Herzegovina', code: 'BA', languages: ['Bosnian', 'Croatian', 'Serbian'], population: 3000000, flag: 'https://flagcdn.com/w80/ba.png' },
    { name: 'Mongolia', code: 'MN', languages: ['Mongolian'], population: 3000000, flag: 'https://flagcdn.com/w80/mn.png' },
    { name: 'Armenia', code: 'AM', languages: ['Armenian'], population: 2000000, flag: 'https://flagcdn.com/w80/am.png' },
    { name: 'Jamaica', code: 'JM', languages: ['English'], population: 2000000, flag: 'https://flagcdn.com/w80/jm.png' },
    { name: 'Qatar', code: 'QA', languages: ['Arabic'], population: 2000000, flag: 'https://flagcdn.com/w80/qa.png' },
    { name: 'Albania', code: 'AL', languages: ['Albanian'], population: 2000000, flag: 'https://flagcdn.com/w80/al.png' },
    { name: 'Puerto Rico', code: 'PR', languages: ['Spanish', 'English'], population: 2000000, flag: 'https://flagcdn.com/w80/pr.png' },
    { name: 'Lithuania', code: 'LT', languages: ['Lithuanian'], population: 2000000, flag: 'https://flagcdn.com/w80/lt.png' },
    { name: 'Namibia', code: 'NA', languages: ['English'], population: 2000000, flag: 'https://flagcdn.com/w80/na.png' },
    { name: 'Gambia', code: 'GM', languages: ['English'], population: 2000000, flag: 'https://flagcdn.com/w80/gm.png' },
    { name: 'Botswana', code: 'BW', languages: ['English', 'Tswana'], population: 2000000, flag: 'https://flagcdn.com/w80/bw.png' },
    { name: 'Gabon', code: 'GA', languages: ['French'], population: 2000000, flag: 'https://flagcdn.com/w80/ga.png' },
    { name: 'Lesotho', code: 'LS', languages: ['Sotho', 'English'], population: 2000000, flag: 'https://flagcdn.com/w80/ls.png' },
    { name: 'North Macedonia', code: 'MK', languages: ['Macedonian'], population: 2000000, flag: 'https://flagcdn.com/w80/mk.png' },
    { name: 'Slovenia', code: 'SI', languages: ['Slovenian'], population: 2000000, flag: 'https://flagcdn.com/w80/si.png' },
    { name: 'Guinea-Bissau', code: 'GW', languages: ['Portuguese'], population: 1000000, flag: 'https://flagcdn.com/w80/gw.png' },
    { name: 'Latvia', code: 'LV', languages: ['Latvian'], population: 1000000, flag: 'https://flagcdn.com/w80/lv.png' },
    { name: 'Bahrain', code: 'BH', languages: ['Arabic'], population: 1000000, flag: 'https://flagcdn.com/w80/bh.png' },
    { name: 'Equatorial Guinea', code: 'GQ', languages: ['Spanish', 'French', 'Portuguese'], population: 1000000, flag: 'https://flagcdn.com/w80/gq.png' },
    { name: 'Trinidad and Tobago', code: 'TT', languages: ['English'], population: 1000000, flag: 'https://flagcdn.com/w80/tt.png' },
    { name: 'Estonia', code: 'EE', languages: ['Estonian'], population: 1000000, flag: 'https://flagcdn.com/w80/ee.png' },
    { name: 'Timor-Leste', code: 'TL', languages: ['Tetum', 'Portuguese'], population: 1000000, flag: 'https://flagcdn.com/w80/tl.png' },
    { name: 'Mauritius', code: 'MU', languages: ['English', 'French'], population: 1000000, flag: 'https://flagcdn.com/w80/mu.png' },
    { name: 'Cyprus', code: 'CY', languages: ['Greek', 'Turkish'], population: 1000000, flag: 'https://flagcdn.com/w80/cy.png' },
    { name: 'Eswatini', code: 'SZ', languages: ['Swazi', 'English'], population: 1000000, flag: 'https://flagcdn.com/w80/sz.png' },
    { name: 'Djibouti', code: 'DJ', languages: ['French', 'Arabic'], population: 1000000, flag: 'https://flagcdn.com/w80/dj.png' },
    { name: 'Fiji', code: 'FJ', languages: ['English', 'Fijian'], population: 800000, flag: 'https://flagcdn.com/w80/fj.png' },
    { name: 'Reunion', code: 'RE', languages: ['French'], population: 800000, flag: 'https://flagcdn.com/w80/re.png' },
    { name: 'Comoros', code: 'KM', languages: ['Comorian', 'French', 'Arabic'], population: 800000, flag: 'https://flagcdn.com/w80/km.png' },
    { name: 'Guyana', code: 'GY', languages: ['English'], population: 700000, flag: 'https://flagcdn.com/w80/gy.png' },
    { name: 'Bhutan', code: 'BT', languages: ['Dzongkha'], population: 700000, flag: 'https://flagcdn.com/w80/bt.png' },
    { name: 'Solomon Islands', code: 'SB', languages: ['English'], population: 600000, flag: 'https://flagcdn.com/w80/sb.png' },
    { name: 'Macau', code: 'MO', languages: ['Chinese', 'Portuguese'], population: 600000, flag: 'https://flagcdn.com/w80/mo.png' },
    { name: 'Montenegro', code: 'ME', languages: ['Montenegrin'], population: 600000, flag: 'https://flagcdn.com/w80/me.png' },
    { name: 'Luxembourg', code: 'LU', languages: ['Luxembourgish', 'French', 'German'], population: 600000, flag: 'https://flagcdn.com/w80/lu.png' },
    { name: 'Western Sahara', code: 'EH', languages: ['Arabic'], population: 500000, flag: 'https://flagcdn.com/w80/eh.png' },
    { name: 'Suriname', code: 'SR', languages: ['Dutch'], population: 500000, flag: 'https://flagcdn.com/w80/sr.png' },
    { name: 'Cabo Verde', code: 'CV', languages: ['Portuguese'], population: 500000, flag: 'https://flagcdn.com/w80/cv.png' },
    { name: 'Maldives', code: 'MV', languages: ['Dhivehi'], population: 500000, flag: 'https://flagcdn.com/w80/mv.png' },
    { name: 'Malta', code: 'MT', languages: ['Maltese', 'English'], population: 500000, flag: 'https://flagcdn.com/w80/mt.png' },
    { name: 'Brunei', code: 'BN', languages: ['Malay'], population: 400000, flag: 'https://flagcdn.com/w80/bn.png' },
    { name: 'Guadeloupe', code: 'GP', languages: ['French'], population: 400000, flag: 'https://flagcdn.com/w80/gp.png' },
    { name: 'Belize', code: 'BZ', languages: ['English'], population: 400000, flag: 'https://flagcdn.com/w80/bz.png' },
    { name: 'Bahamas', code: 'BS', languages: ['English'], population: 300000, flag: 'https://flagcdn.com/w80/bs.png' },
    { name: 'Martinique', code: 'MQ', languages: ['French'], population: 300000, flag: 'https://flagcdn.com/w80/mq.png' },
    { name: 'Iceland', code: 'IS', languages: ['Icelandic'], population: 300000, flag: 'https://flagcdn.com/w80/is.png' },
    { name: 'Vanuatu', code: 'VU', languages: ['Bislama', 'English', 'French'], population: 300000, flag: 'https://flagcdn.com/w80/vu.png' },
    { name: 'French Guiana', code: 'GF', languages: ['French'], population: 200000, flag: 'https://flagcdn.com/w80/gf.png' },
    { name: 'Barbados', code: 'BB', languages: ['English'], population: 200000, flag: 'https://flagcdn.com/w80/bb.png' },
    { name: 'New Caledonia', code: 'NC', languages: ['French'], population: 200000, flag: 'https://flagcdn.com/w80/nc.png' },
    { name: 'French Polynesia', code: 'PF', languages: ['French'], population: 200000, flag: 'https://flagcdn.com/w80/pf.png' },
    { name: 'Samoa', code: 'WS', languages: ['Samoan', 'English'], population: 100000, flag: 'https://flagcdn.com/w80/ws.png' },
    { name: 'Saint Lucia', code: 'LC', languages: ['English'], population: 100000, flag: 'https://flagcdn.com/w80/lc.png' },
    { name: 'Guam', code: 'GU', languages: ['English'], population: 100000, flag: 'https://flagcdn.com/w80/gu.png' },
    { name: 'Curacao', code: 'CW', languages: ['Dutch', 'Papiamento', 'English'], population: 100000, flag: 'https://flagcdn.com/w80/cw.png' },
    { name: 'Kiribati', code: 'KI', languages: ['English', 'Gilbertese'], population: 100000, flag: 'https://flagcdn.com/w80/ki.png' },
    { name: 'Grenada', code: 'GD', languages: ['English'], population: 100000, flag: 'https://flagcdn.com/w80/gd.png' },
    { name: 'Micronesia', code: 'FM', languages: ['English'], population: 100000, flag: 'https://flagcdn.com/w80/fm.png' },
    { name: 'Aruba', code: 'AW', languages: ['Dutch', 'Papiamento'], population: 100000, flag: 'https://flagcdn.com/w80/aw.png' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', languages: ['English'], population: 100000, flag: 'https://flagcdn.com/w80/vc.png' },
    { name: 'Jersey', code: 'JE', languages: ['English', 'French'], population: 100000, flag: 'https://flagcdn.com/w80/je.png' },
    { name: 'Antigua and Barbuda', code: 'AG', languages: ['English'], population: 90000, flag: 'https://flagcdn.com/w80/ag.png' },
    { name: 'Seychelles', code: 'SC', languages: ['French', 'English', 'Seychellois Creole'], population: 90000, flag: 'https://flagcdn.com/w80/sc.png' },
    { name: 'Tonga', code: 'TO', languages: ['Tongan', 'English'], population: 90000, flag: 'https://flagcdn.com/w80/to.png' },
    { name: 'US Virgin Islands', code: 'VI', languages: ['English'], population: 90000, flag: 'https://flagcdn.com/w80/vi.png' },
    { name: 'Andorra', code: 'AD', languages: ['Catalan'], population: 70000, flag: 'https://flagcdn.com/w80/ad.png' },
    { name: 'Isle of Man', code: 'IM', languages: ['English', 'Manx'], population: 70000, flag: 'https://flagcdn.com/w80/im.png' },
    { name: 'Cayman Islands', code: 'KY', languages: ['English'], population: 60000, flag: 'https://flagcdn.com/w80/ky.png' },
    { name: 'Dominica', code: 'DM', languages: ['English'], population: 60000, flag: 'https://flagcdn.com/w80/dm.png' },
    { name: 'Bermuda', code: 'BM', languages: ['English'], population: 60000, flag: 'https://flagcdn.com/w80/bm.png' },
    { name: 'Guernsey', code: 'GG', languages: ['English', 'French'], population: 60000, flag: 'https://flagcdn.com/w80/gg.png' },
    { name: 'Greenland', code: 'GL', languages: ['Greenlandic'], population: 50000, flag: 'https://flagcdn.com/w80/gl.png' },
    { name: 'Marshall Islands', code: 'MH', languages: ['Marshallese', 'English'], population: 50000, flag: 'https://flagcdn.com/w80/mh.png' },
    { name: 'Saint Kitts and Nevis', code: 'KN', languages: ['English'], population: 50000, flag: 'https://flagcdn.com/w80/kn.png' },
    { name: 'Faroe Islands', code: 'FO', languages: ['Faroese'], population: 40000, flag: 'https://flagcdn.com/w80/fo.png' },
    { name: 'American Samoa', code: 'AS', languages: ['English', 'Samoan'], population: 40000, flag: 'https://flagcdn.com/w80/as.png' },
    { name: 'Turks and Caicos Islands', code: 'TC', languages: ['English'], population: 30000, flag: 'https://flagcdn.com/w80/tc.png' },
    { name: 'Saint Martin', code: 'MF', languages: ['French'], population: 30000, flag: 'https://flagcdn.com/w80/mf.png' },
    { name: 'Liechtenstein', code: 'LI', languages: ['German'], population: 30000, flag: 'https://flagcdn.com/w80/li.png' },
    { name: 'Monaco', code: 'MC', languages: ['French'], population: 30000, flag: 'https://flagcdn.com/w80/mc.png' },
    { name: 'San Marino', code: 'SM', languages: ['Italian'], population: 30000, flag: 'https://flagcdn.com/w80/sm.png' },
    { name: 'Gibraltar', code: 'GI', languages: ['English'], population: 30000, flag: 'https://flagcdn.com/w80/gi.png' },
    { name: 'British Virgin Islands', code: 'VG', languages: ['English'], population: 30000, flag: 'https://flagcdn.com/w80/vg.png' },
    { name: 'Palau', code: 'PW', languages: ['Palauan', 'English'], population: 10000, flag: 'https://flagcdn.com/w80/pw.png' },
    { name: 'Cook Islands', code: 'CK', languages: ['English', 'Maori'], population: 10000, flag: 'https://flagcdn.com/w80/ck.png' },
    { name: 'Anguilla', code: 'AI', languages: ['English'], population: 10000, flag: 'https://flagcdn.com/w80/ai.png' },
    { name: 'Tuvalu', code: 'TV', languages: ['Tuvaluan', 'English'], population: 10000, flag: 'https://flagcdn.com/w80/tv.png' },
    { name: 'Nauru', code: 'NR', languages: ['Nauruan', 'English'], population: 10000, flag: 'https://flagcdn.com/w80/nr.png' },
    { name: 'Vatican City', code: 'VA', languages: ['Italian', 'Latin'], population: 800, flag: 'https://flagcdn.com/w80/va.png' }
  ];

  // Improved search function - US और UK को खोजने के लिए
  const filteredCountries = allCountriesData.filter(country => {
    const searchLower = countrySearchQuery.toLowerCase();
    const countryNameLower = country.name.toLowerCase();
    const countryCodeLower = country.code.toLowerCase();
    
    // US को खोजने के लिए विशेष case
    if (searchLower === 'us') {
      return country.code === 'US' || 
             country.name.toLowerCase().includes('united states') ||
             country.name.toLowerCase().includes('usa');
    }
    
    // UK को खोजने के लिए विशेष case
    if (searchLower === 'uk') {
      return country.code === 'GB' || 
             country.name.toLowerCase().includes('united kingdom') ||
             country.name.toLowerCase().includes('britain');
    }
    
    // Regular search
    return countryNameLower.includes(searchLower) || 
           countryCodeLower.includes(searchLower);
  });

  // Initialize Google Translate
  useEffect(() => {
    // Load Google Translate script
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,nl,es,fr,de,it,ja,id,pt,hi,da,fi,no,sv,mr,bn,ko,zh-CN,ar,ru,tr,pl,vi,th',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src*="translate.google.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  // Use hardcoded data instead of API
  useEffect(() => {
    setCountries(allCountriesData);
    setLoading(false);
  }, []);

  // Change language using Google Translate
  const changeLanguage = (langCode: string) => {
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    }

    setPrimaryLanguage(langCode);

    // Add to selected languages if not already present
    if (!selectedLanguages.includes(langCode)) {
      setSelectedLanguages([...selectedLanguages, langCode]);
    }
  };

  const addLanguage = (code: string) => {
    if (!selectedLanguages.includes(code)) {
      setSelectedLanguages([...selectedLanguages, code]);
    }
    setShowAddLanguage(false);
    setSearchQuery('');
  };

  const removeLanguage = (code: string) => {
    if (code === 'en') {
      alert('Cannot remove English (default language)');
      return;
    }
    
    // If removing primary language, set English as primary
    if (code === primaryLanguage) {
      setPrimaryLanguage('en');
      changeLanguage('en');
    }
    
    setSelectedLanguages(selectedLanguages.filter(lang => lang !== code));
  };

  const handleCountryClick = (country: Country) => {
    console.log('Clicked country:', country.name, 'Code:', country.code);
    
    // Map country to language code
    const countryToLanguageMap: { [key: string]: string } = {
      // English speaking countries
      'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en', 'NZ': 'en', 'IE': 'en',
      // Chinese
      'CN': 'zh-CN', 'TW': 'zh-CN',
      // Hindi
      'IN': 'hi',
      // Spanish
      'MX': 'es', 'ES': 'es',
      // French
      'FR': 'fr',
      // German
      'DE': 'de',
      // Japanese
      'JP': 'ja',
      // Portuguese
      'BR': 'pt', 'PT': 'pt',
      // Russian
      'RU': 'ru',
      // Arabic
      'SA': 'ar', 'AE': 'ar',
      // Korean
      'KR': 'ko',
      // Italian
      'IT': 'it',
      // Dutch
      'NL': 'nl',
      // Turkish
      'TR': 'tr',
      // Indonesian
      'ID': 'id',
      // Thai
      'TH': 'th',
      // Vietnamese
      'VN': 'vi',
      // Polish
      'PL': 'pl'
    };

    const languageCode = countryToLanguageMap[country.code] || 'en';
    
    console.log('Selected language code:', languageCode);
    
    // Set only this one language (remove all others)
    setSelectedLanguages([languageCode]);
    
    // Set as primary language
    setPrimaryLanguage(languageCode);
    changeLanguage(languageCode);
    
    console.log('Selected country:', country.name, '- Language:', languageCode);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-3">
                <h2 className="text-sm font-semibold text-gray-700 mb-3 px-3">Settings</h2>
                <nav className="space-y-1">
                  <Link href="/settings">
                    <div className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded cursor-pointer">
                      Account
                    </div>
                  </Link>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Privacy
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Display
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Email & Notifications
                  </a>
                  <Link href="/languages">
                    <div className="block px-3 py-2 text-sm text-red-600 bg-red-50 rounded font-medium cursor-pointer">
                      Languages
                    </div>
                  </Link>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Subscriptions & Billing
                  </a>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Language Settings</h1>

            <div className="bg-white rounded-lg shadow-sm">
              {/* Header with Add Button */}
              <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-sm font-semibold text-gray-900">Your Languages</h2>
                  <p className="text-xs text-gray-500 mt-1">Manage languages you want to see content in</p>
                </div>
              </div>

              {/* Add Language Panel */}
              {showAddLanguage && (
                <div className="p-5 border-b border-gray-200 bg-gray-50">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search languages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="max-h-64 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <style>{`
                      .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                      }
                    `}</style>
                    <div className="space-y-1">
                      {filteredAvailableLanguages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => addLanguage(language.code)}
                          className="w-full flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-colors text-left"
                        >
                          <div className={`w-8 h-8 ${language.color} rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0`}>
                            {language.code.substring(0, 2).toUpperCase()}
                          </div>
                          <span className="text-sm text-gray-900">{language.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Languages List */}
              <div className="max-h-[300px] overflow-y-auto scrollbar-hide divide-y divide-gray-200" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {languages.map((language) => (
                  <div key={language.code} className="p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${language.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                          {language.code.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900">{language.name}</span>
                            {primaryLanguage === language.code && (
                              <span className="flex items-center space-x-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                <Check className="w-3 h-3" />
                                <span>Primary</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {primaryLanguage !== language.code ? (
                          <>
                            <button
                              onClick={() => changeLanguage(language.code)}
                              className="px-4 py-1.5 border-2 border-blue-600 text-blue-600 text-sm font-medium rounded-full hover:bg-blue-50 transition-colors"
                            >
                              Set as primary
                            </button>
                            {language.code !== 'en' && (
                              <button
                                onClick={() => removeLanguage(language.code)}
                                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
                                title="Remove language"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </>
                        ) : (
                          language.code !== 'en' && (
                            <button
                              onClick={() => removeLanguage(language.code)}
                              className="px-4 py-1.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors flex items-center space-x-1"
                              title="Remove primary language"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span>Remove</span>
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Countries & Regions</h2>
              
              {/* Country Search Box */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search countries (e.g., US, UK, United States, United Kingdom)..."
                    value={countrySearchQuery}
                    onChange={(e) => setCountrySearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm">
                <div className="h-[850px] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading countries...</div>
                  ) : filteredCountries.length > 0 ? (
                    <div className="divide-y divide-gray-200">
                      {/* United States को पहले दिखाएं */}
                      {filteredCountries
                        .sort((a, b) => {
                          // US और UK को पहले दिखाएं
                          if (a.code === 'US') return -1;
                          if (b.code === 'US') return 1;
                          if (a.code === 'GB') return -1;
                          if (b.code === 'GB') return 1;
                          return b.population - a.population;
                        })
                        .map((country) => (
                          <button
                            key={country.code}
                            onClick={() => handleCountryClick(country)}
                            className="w-full p-4 hover:bg-gray-50 transition-colors text-left"
                          >
                            <div className="flex items-center space-x-3">
                              <img 
                                src={country.flag} 
                                alt={country.name}
                                className="w-8 h-6 object-cover rounded shadow-sm"
                              />
                              <div className="flex-1">
                                <span className="text-sm text-gray-900">{country.name}</span>
                                {country.languages.length > 0 && (
                                  <p className="text-xs text-gray-500 mt-0.5">
                                    {country.languages[0]}
                                  </p>
                                )}
                              </div>
                            </div>
                          </button>
                        ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      No countries found. Try searching for "US", "United States", "UK", or "United Kingdom"
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Implementation Notes */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">🔧 FIXED: US और UK दिखने का Issue</h3>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>✅ United States (US) और United Kingdom (GB) को hardcoded list में पहले position पर रखा है</li>
                <li>✅ Search function को improve किया है - अब "us", "uk", "united states", "united kingdom" search काम करते हैं</li>
                <li>✅ Country list को US और UK के लिए special sorting दी है</li>
                <li>✅ Search box में placeholder update किया है</li>
                <li>✅ Country select करने पर correct language set हो जाता है</li>
                <li>• Google Translate API integrated है</li>
                <li>• Primary language changes entire application को affect करते हैं</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}    