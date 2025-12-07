import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Search, Globe, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LanguagesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', selected: true },
    { code: 'es', name: 'Spanish', nativeName: 'Español', selected: false },
    { code: 'fr', name: 'French', nativeName: 'Français', selected: false },
    { code: 'de', name: 'German', nativeName: 'Deutsch', selected: false },
    { code: 'it', name: 'Italian', nativeName: 'Italiano', selected: false },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português', selected: false },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', selected: false },
    { code: 'zh', name: 'Chinese', nativeName: '中文', selected: false },
    { code: 'ja', name: 'Japanese', nativeName: '日本語', selected: false },
    { code: 'ko', name: 'Korean', nativeName: '한국어', selected: false },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', selected: false },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', selected: false },
  ];

  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppShell>
      <div className="bg-white dark:bg-card rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold mb-2">Languages</h1>
          <p className="text-muted-foreground text-sm">
            Select your preferred language for the interface and content.
          </p>
        </div>
        
        <div className="p-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search languages..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLanguages.map((lang) => (
              <div 
                key={lang.code}
                className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors hover:bg-accent/50 ${
                  lang.selected ? 'border-primary/50 bg-primary/5' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">{lang.name}</div>
                    <div className="text-xs text-muted-foreground">{lang.nativeName}</div>
                  </div>
                </div>
                {lang.selected && (
                  <Check className="h-5 w-5 text-primary" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
