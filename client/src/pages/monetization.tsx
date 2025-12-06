import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface Country {
  name: string;
  code: string;
  flag: string;
}

export default function CountrySelector() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        const formattedCountries = data.map((country: any) => ({
          name: country.name.common,
          code: country.cca2.toLowerCase(),
          flag: country.flags.png || country.flags.svg || `https://flagcdn.com/w80/${country.cca2.toLowerCase()}.png`
        })).sort((a: Country, b: Country) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching countries:', err);
        const fallbackCountries = [
          { name: 'India', code: 'in', flag: 'https://flagcdn.com/w80/in.png' },
          { name: 'United States', code: 'us', flag: 'https://flagcdn.com/w80/us.png' },
          { name: 'United Kingdom', code: 'gb', flag: 'https://flagcdn.com/w80/gb.png' },
          { name: 'Canada', code: 'ca', flag: 'https://flagcdn.com/w80/ca.png' },
          { name: 'Australia', code: 'au', flag: 'https://flagcdn.com/w80/au.png' },
          { name: 'Germany', code: 'de', flag: 'https://flagcdn.com/w80/de.png' },
          { name: 'France', code: 'fr', flag: 'https://flagcdn.com/w80/fr.png' },
          { name: 'Japan', code: 'jp', flag: 'https://flagcdn.com/w80/jp.png' },
          { name: 'China', code: 'cn', flag: 'https://flagcdn.com/w80/cn.png' },
          { name: 'Brazil', code: 'br', flag: 'https://flagcdn.com/w80/br.png' },
          { name: 'Mexico', code: 'mx', flag: 'https://flagcdn.com/w80/mx.png' },
          { name: 'Italy', code: 'it', flag: 'https://flagcdn.com/w80/it.png' },
          { name: 'Spain', code: 'es', flag: 'https://flagcdn.com/w80/es.png' },
          { name: 'Russia', code: 'ru', flag: 'https://flagcdn.com/w80/ru.png' },
          { name: 'South Korea', code: 'kr', flag: 'https://flagcdn.com/w80/kr.png' },
          { name: 'Netherlands', code: 'nl', flag: 'https://flagcdn.com/w80/nl.png' },
          { name: 'Switzerland', code: 'ch', flag: 'https://flagcdn.com/w80/ch.png' },
          { name: 'Sweden', code: 'se', flag: 'https://flagcdn.com/w80/se.png' },
          { name: 'Norway', code: 'no', flag: 'https://flagcdn.com/w80/no.png' },
          { name: 'Denmark', code: 'dk', flag: 'https://flagcdn.com/w80/dk.png' },
          { name: 'Finland', code: 'fi', flag: 'https://flagcdn.com/w80/fi.png' },
          { name: 'Belgium', code: 'be', flag: 'https://flagcdn.com/w80/be.png' },
          { name: 'Austria', code: 'at', flag: 'https://flagcdn.com/w80/at.png' },
          { name: 'Poland', code: 'pl', flag: 'https://flagcdn.com/w80/pl.png' },
          { name: 'Singapore', code: 'sg', flag: 'https://flagcdn.com/w80/sg.png' },
          { name: 'United Arab Emirates', code: 'ae', flag: 'https://flagcdn.com/w80/ae.png' },
          { name: 'Saudi Arabia', code: 'sa', flag: 'https://flagcdn.com/w80/sa.png' },
          { name: 'Turkey', code: 'tr', flag: 'https://flagcdn.com/w80/tr.png' },
          { name: 'Argentina', code: 'ar', flag: 'https://flagcdn.com/w80/ar.png' },
          { name: 'South Africa', code: 'za', flag: 'https://flagcdn.com/w80/za.png' },
          { name: 'Pakistan', code: 'pk', flag: 'https://flagcdn.com/w80/pk.png' },
          { name: 'Bangladesh', code: 'bd', flag: 'https://flagcdn.com/w80/bd.png' },
          { name: 'Indonesia', code: 'id', flag: 'https://flagcdn.com/w80/id.png' },
          { name: 'Thailand', code: 'th', flag: 'https://flagcdn.com/w80/th.png' },
          { name: 'Malaysia', code: 'my', flag: 'https://flagcdn.com/w80/my.png' },
          { name: 'Vietnam', code: 'vn', flag: 'https://flagcdn.com/w80/vn.png' },
          { name: 'Philippines', code: 'ph', flag: 'https://flagcdn.com/w80/ph.png' },
          { name: 'Egypt', code: 'eg', flag: 'https://flagcdn.com/w80/eg.png' },
          { name: 'Nigeria', code: 'ng', flag: 'https://flagcdn.com/w80/ng.png' },
          { name: 'Kenya', code: 'ke', flag: 'https://flagcdn.com/w80/ke.png' },
          { name: 'New Zealand', code: 'nz', flag: 'https://flagcdn.com/w80/nz.png' },
          { name: 'Ireland', code: 'ie', flag: 'https://flagcdn.com/w80/ie.png' },
          { name: 'Portugal', code: 'pt', flag: 'https://flagcdn.com/w80/pt.png' },
          { name: 'Greece', code: 'gr', flag: 'https://flagcdn.com/w80/gr.png' },
          { name: 'Czech Republic', code: 'cz', flag: 'https://flagcdn.com/w80/cz.png' },
          { name: 'Israel', code: 'il', flag: 'https://flagcdn.com/w80/il.png' },
          { name: 'Chile', code: 'cl', flag: 'https://flagcdn.com/w80/cl.png' },
          { name: 'Colombia', code: 'co', flag: 'https://flagcdn.com/w80/co.png' },
          { name: 'Peru', code: 'pe', flag: 'https://flagcdn.com/w80/pe.png' },
          { name: 'Venezuela', code: 've', flag: 'https://flagcdn.com/w80/ve.png' }
        ].sort((a, b) => a.name.localeCompare(b.name));

        setCountries(fallbackCountries);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    setSearchTerm(country.name);
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    if (selectedCountry) {
      console.log('Selected country:', selectedCountry);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 relative">
        <button className="absolute top-6 left-6 text-gray-600 hover:text-gray-800 transition-colors">
          <X size={24} />
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-8">
          Select your country of residence
        </h1>

        <div className="relative mb-6">
          <div
            onClick={handleInputClick}
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg cursor-pointer bg-white flex items-center justify-between hover:border-gray-400 transition-colors"
          >
            {selectedCountry ? (
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-gray-200 bg-gray-100 flex items-center justify-center">
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedCountry.name)}&background=random&size=80`;
                    }}
                  />
                </div>
                <span className="text-gray-900">{selectedCountry.name}</span>
              </div>
            ) : (
              <span className="text-gray-400">Select a country</span>
            )}
            <ChevronDown
              className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              size={20}
            />
          </div>

          {isOpen && (
            <div className="absolute z-10 w-full mt-2 border border-gray-300 rounded-lg max-h-80 overflow-hidden bg-white shadow-lg">
              <div className="p-3 border-b border-gray-200 sticky top-0 bg-white">
                <input
                  type="text"
                  placeholder="Search country..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={(e) => e.stopPropagation()}
                  autoFocus
                />
              </div>

              <div className="overflow-y-auto max-h-64">
                {loading ? (
                  <div className="p-4 text-center text-gray-500">Loading countries...</div>
                ) : filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <div
                      key={country.code}
                      onClick={() => handleSelect(country)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-gray-200 bg-gray-100 flex items-center justify-center">
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(country.name)}&background=random&size=80`;
                          }}
                        />
                      </div>
                      <span className="text-gray-800 text-base">{country.name}</span>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">No countries found</div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!selectedCountry}
            className={`px-8 py-3 rounded-full text-white font-medium text-lg transition-colors ${
              selectedCountry
                ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Submit
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-400 text-center">
          {countries.length} countries available
        </div>
      </div>
    </div>
  );
}
