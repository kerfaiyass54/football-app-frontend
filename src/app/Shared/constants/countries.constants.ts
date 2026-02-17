// =========================
// Types
// =========================

export type Continent =
  | 'Africa'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'South America'
  | 'Oceania';

export interface Country {
  name: string;
  code: string; // ISO 3166-1 alpha-2
  flag: string; // Emoji flag
}

// =========================
// Helper to generate flag from ISO2
// =========================

const getFlagEmoji = (countryCode: string): string =>
  countryCode
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );

// =========================
// Countries by Continent
// =========================

export const COUNTRIES_BY_CONTINENT: Record<Continent, Country[]> = {
  Africa: [
    { name: 'Tunisia', code: 'TN', flag: getFlagEmoji('TN') },
    { name: 'Algeria', code: 'DZ', flag: getFlagEmoji('DZ') },
    { name: 'Morocco', code: 'MA', flag: getFlagEmoji('MA') },
    { name: 'Egypt', code: 'EG', flag: getFlagEmoji('EG') },
    { name: 'Nigeria', code: 'NG', flag: getFlagEmoji('NG') },
    { name: 'South Africa', code: 'ZA', flag: getFlagEmoji('ZA') },
    { name: 'Kenya', code: 'KE', flag: getFlagEmoji('KE') },
    { name: 'Senegal', code: 'SN', flag: getFlagEmoji('SN') },
    { name: 'Ghana', code: 'GH', flag: getFlagEmoji('GH') },
    { name: 'Ethiopia', code: 'ET', flag: getFlagEmoji('ET') },
  ],

  Asia: [
    { name: 'China', code: 'CN', flag: getFlagEmoji('CN') },
    { name: 'Japan', code: 'JP', flag: getFlagEmoji('JP') },
    { name: 'India', code: 'IN', flag: getFlagEmoji('IN') },
    { name: 'South Korea', code: 'KR', flag: getFlagEmoji('KR') },
    { name: 'Indonesia', code: 'ID', flag: getFlagEmoji('ID') },
    { name: 'Saudi Arabia', code: 'SA', flag: getFlagEmoji('SA') },
    { name: 'United Arab Emirates', code: 'AE', flag: getFlagEmoji('AE') },
    { name: 'Turkey', code: 'TR', flag: getFlagEmoji('TR') },
    { name: 'Thailand', code: 'TH', flag: getFlagEmoji('TH') },
    { name: 'Vietnam', code: 'VN', flag: getFlagEmoji('VN') },
  ],

  Europe: [
    { name: 'France', code: 'FR', flag: getFlagEmoji('FR') },
    { name: 'Germany', code: 'DE', flag: getFlagEmoji('DE') },
    { name: 'Italy', code: 'IT', flag: getFlagEmoji('IT') },
    { name: 'Spain', code: 'ES', flag: getFlagEmoji('ES') },
    { name: 'United Kingdom', code: 'GB', flag: getFlagEmoji('GB') },
    { name: 'Portugal', code: 'PT', flag: getFlagEmoji('PT') },
    { name: 'Netherlands', code: 'NL', flag: getFlagEmoji('NL') },
    { name: 'Belgium', code: 'BE', flag: getFlagEmoji('BE') },
    { name: 'Switzerland', code: 'CH', flag: getFlagEmoji('CH') },
    { name: 'Sweden', code: 'SE', flag: getFlagEmoji('SE') },
  ],

  'North America': [
    { name: 'United States', code: 'US', flag: getFlagEmoji('US') },
    { name: 'Canada', code: 'CA', flag: getFlagEmoji('CA') },
    { name: 'Mexico', code: 'MX', flag: getFlagEmoji('MX') },
    { name: 'Cuba', code: 'CU', flag: getFlagEmoji('CU') },
    { name: 'Jamaica', code: 'JM', flag: getFlagEmoji('JM') },
    { name: 'Panama', code: 'PA', flag: getFlagEmoji('PA') },
  ],

  'South America': [
    { name: 'Brazil', code: 'BR', flag: getFlagEmoji('BR') },
    { name: 'Argentina', code: 'AR', flag: getFlagEmoji('AR') },
    { name: 'Colombia', code: 'CO', flag: getFlagEmoji('CO') },
    { name: 'Chile', code: 'CL', flag: getFlagEmoji('CL') },
    { name: 'Peru', code: 'PE', flag: getFlagEmoji('PE') },
    { name: 'Uruguay', code: 'UY', flag: getFlagEmoji('UY') },
  ],

  Oceania: [
    { name: 'Australia', code: 'AU', flag: getFlagEmoji('AU') },
    { name: 'New Zealand', code: 'NZ', flag: getFlagEmoji('NZ') },
    { name: 'Fiji', code: 'FJ', flag: getFlagEmoji('FJ') },
    { name: 'Papua New Guinea', code: 'PG', flag: getFlagEmoji('PG') },
  ],
};
