import { AppData, FAQ, AppSettings } from '../types';

const STORAGE_KEY = 'echogis1-data';

const defaultData: AppData = {
  faqs: [
    {
      id: '1',
      question: 'Comment accéder aux plannings de service ?',
      answer: 'Les plannings de service sont disponibles sur l\'intranet dans la section "Plannings". Vous pouvez les consulter en ligne ou les télécharger au format PDF.',
      category: 'Plannings',
      keywords: ['planning', 'service', 'horaires'],
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z'
    },
    {
      id: '2',
      question: 'Procédure pour les demandes de congés ?',
      answer: 'Les demandes de congés doivent être effectuées via le formulaire dédié sur l\'intranet, au minimum 15 jours avant la date souhaitée. Votre chef d\'unité validera la demande.',
      category: 'RH',
      keywords: ['congés', 'vacances', 'demande'],
      createdAt: '2024-01-16T14:30:00Z',
      updatedAt: '2024-01-16T14:30:00Z'
    }
  ],
  companies: [
    { id: '7', name: '7 CCL' },
    { id: '9', name: '9 CCL' },
    { id: '10', name: '10 CCL' },
    { id: '12', name: '12 CCL' },
    { id: '13', name: '13 CCL' },
    { id: '14', name: '14 CCL' },
    { id: '20', name: '20 CCL' },
    { id: '24', name: '24 CCL' },
    { id: '26', name: '26 CCL' },
    { id: 'emgis1', name: 'EMGIS1' }
  ],
  settings: {
    adminCode: 'pompiers',
    contactEmail: 'admin@gis1.fr',
    meetingDates: [
      {
        type: 'CPUE',
        unit: '7 CCL',
        date: '2024-02-15'
      },
      {
        type: 'CPC',
        unit: '9 CCL',
        date: '2024-02-20'
      },
      {
        type: 'CPUE',
        unit: 'EMGIS1',
        date: '2024-02-25'
      }
    ]
  }
};

export const loadData = (): AppData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      // Merge with default data to ensure all properties exist
      return {
        ...defaultData,
        ...data,
        settings: {
          ...defaultData.settings,
          ...data.settings
        }
      };
    }
  } catch (error) {
    console.error('Error loading data:', error);
  }
  return defaultData;
};

export const saveData = (data: AppData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

export const exportData = (data: AppData = loadData()): string => {
  const iso = new Date().toISOString().replace(/[:.]/g, '-');
  const fileName = `SAUVEGARDE_ECHOGIS1-${iso}.json`;
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  return fileName;
};

export const importData = (file: File): Promise<AppData> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target?.result as string);
        const current = loadData();

        let importedFaqs: FAQ[] = [];
        let importedData: Partial<AppData> = {};

        if (Array.isArray(parsed)) {
          importedFaqs = parsed.map((item, idx) => ({
            id: `import-${Date.now()}-${idx}`,
            question: item.question ?? item.Question ?? '',
            answer: item.answer ?? item.réponse ?? item.Réponse ?? '',
            category: item.compagnie ?? item.category ?? 'Importé',
            keywords: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }));
        } else {
          importedData = parsed as AppData;
          importedFaqs = (importedData.faqs ?? []) as FAQ[];
        }

        const merged: AppData = {
          ...current,
          ...importedData,
          faqs: [...current.faqs, ...importedFaqs]
        };
        saveData(merged);
        resolve(merged);
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsText(file);
  });
};