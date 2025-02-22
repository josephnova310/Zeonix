import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      calculator: 'Calculator',
      companies: 'Companies',
      loans: 'Loans',
      settings: 'Settings',
      solarCalculator: 'Solar Panel Calculator',
      location: 'Location',
      detectLocation: 'Detect My Location',
      searchLocation: 'Search location',
      or: 'OR',
      landArea: 'Land Area (sq meters)',
      enterLandArea: 'Enter land area',
      coverage: 'Coverage Percentage (%)',
      enterCoverage: 'Enter coverage percentage',
      calculate: 'Calculate',
      results: 'Results',
      numberOfPanels: 'Number of Panels',
      totalPower: 'Total Power',
      solarIrradiance: 'Average Solar Irradiance',
      estimatedCost: 'Estimated Cost',
      phone: 'Phone',
      email: 'Email',
      bookSlot: 'Book Consultation',
      loanSchemes: 'Loan Schemes',
      emiCalculator: 'EMI Calculator',
      interestRate: 'Interest Rate',
      maxTenure: 'Maximum Tenure',
      maxAmount: 'Maximum Amount',
      years: 'years',
      loanAmount: 'Loan Amount',
      enterLoanAmount: 'Enter loan amount',
      loanTenure: 'Loan Tenure',
      enterTenure: 'Enter tenure in years',
      calculateEMI: 'Calculate EMI',
      monthlyEMI: 'Monthly EMI',
      language: 'Language',
      weatherForecast: 'Weather Forecast',
      recommendedWeek: 'Recommended Installation Week',
      bestDays: 'Best Days for Installation',
    },
  },
  hi: {
    translation: {
      calculator: 'कैलकुलेटर',
      companies: 'कंपनियां',
      loans: 'ऋण',
      settings: 'सेटिंग्स',
      solarCalculator: 'सोलर पैनल कैलकुलेटर',
      location: 'स्थान',
      detectLocation: 'मेरा स्थान पता करें',
      searchLocation: 'स्थान खोजें',
      or: 'या',
      landArea: 'भूमि क्षेत्र (वर्ग मीटर)',
      enterLandArea: 'भूमि क्षेत्र दर्ज करें',
      coverage: 'कवरेज प्रतिशत (%)',
      enterCoverage: 'कवरेज प्रतिशत दर्ज करें',
      calculate: 'गणना करें',
      results: 'परिणाम',
      numberOfPanels: 'पैनलों की संख्या',
      totalPower: 'कुल बिजली',
      solarIrradiance: 'औसत सौर विकिरण',
      estimatedCost: 'अनुमानित लागत',
      phone: 'फोन',
      email: 'ईमेल',
      bookSlot: 'परामर्श बुक करें',
      loanSchemes: 'ऋण योजनाएं',
      emiCalculator: 'ईएमआई कैलकुलेटर',
      interestRate: 'ब्याज दर',
      maxTenure: 'अधिकतम अवधि',
      maxAmount: 'अधिकतम राशि',
      years: 'साल',
      loanAmount: 'ऋण राशि',
      enterLoanAmount: 'ऋण राशि दर्ज करें',
      loanTenure: 'ऋण अवधि',
      enterTenure: 'अवधि वर्षों में दर्ज करें',
      calculateEMI: 'ईएमआई की गणना करें',
      monthlyEMI: 'मासिक ईएमआई',
      language: 'भाषा',
      weatherForecast: 'मौसम का पूर्वानुमान',
      recommendedWeek: 'अनुशंसित स्थापना सप्ताह',
      bestDays: 'स्थापना के लिए सर्वोत्तम दिन',
    },
  },
  ml: {
    translation: {
      calculator: 'കാൽക്കുലേറ്റർ',
      companies: 'കമ്പനികൾ',
      loans: 'വായ്പകൾ',
      settings: 'ക്രമീകരണങ്ങൾ',
      solarCalculator: 'സോളാർ പാനൽ കാൽക്കുലേറ്റർ',
      location: 'സ്ഥലം',
      detectLocation: 'എന്റെ സ്ഥലം കണ്ടെത്തുക',
      searchLocation: 'സ്ഥലം തിരയുക',
      or: 'അല്ലെങ്കിൽ',
      landArea: 'ഭൂമിയുടെ വിസ്തീർണ്ണം (ചതുരശ്ര മീറ്റർ)',
      enterLandArea: 'ഭൂമിയുടെ വിസ്തീർണ്ണം നൽകുക',
      coverage: 'കവറേജ് ശതമാനം (%)',
      enterCoverage: 'കവറേജ് ശതമാനം നൽകുക',
      calculate: 'കണക്കാക്കുക',
      results: 'ഫലങ്ങൾ',
      numberOfPanels: 'പാനലുകളുടെ എണ്ണം',
      totalPower: 'ആകെ പവർ',
      solarIrradiance: 'ശരാശരി സൗരോർജ്ജ വികിരണം',
      estimatedCost: 'ഏകദേശ ചെലവ്',
      phone: 'ഫോൺ',
      email: 'ഇമെയിൽ',
      bookSlot: 'കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക',
      loanSchemes: 'വായ്പാ പദ്ധതികൾ',
      emiCalculator: 'ഇഎംഐ കാൽക്കുലേറ്റർ',
      interestRate: 'പലിശ നിരക്ക്',
      maxTenure: 'പരമാവധി കാലാവധി',
      maxAmount: 'പരമാവധി തുക',
      years: 'വർഷം',
      loanAmount: 'വായ്പാ തുക',
      enterLoanAmount: 'വായ്പാ തുക നൽകുക',
      loanTenure: 'വായ്പാ കാലാവധി',
      enterTenure: 'കാലാവധി വർഷങ്ങളിൽ നൽകുക',
      calculateEMI: 'ഇഎംഐ കണക്കാക്കുക',
      monthlyEMI: 'പ്രതിമാസ ഇഎംഐ',
      language: 'ഭാഷ',
      weatherForecast: 'കാലാവസ്ഥ പ്രവചനം',
      recommendedWeek: 'ശുപാർശ ചെയ്ത ഇൻസ്റ്റലേഷൻ ആഴ്ച',
      bestDays: 'ഇൻസ്റ്റലേഷന് ഏറ്റവും അനുയോജ്യമായ ദിവസങ്ങൾ',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;