import type {
  ContentRating,
  Game,
  GameEdition,
  GameFeature,
  SupportedLanguage,
  SystemRequirements,
} from '../types/game';

const systemRequirements: SystemRequirements = {
  minimum: {
    level: 'minimum',
    operatingSystem: 'Windows 10 64-bit',
    processor: 'Intel Core i5-8400 / AMD Ryzen 5 2600',
    memory: '12 GB RAM',
    graphics: 'NVIDIA GTX 1060 6 GB / AMD RX 580',
    storage: '80 GB available space',
    directX: 'Version 12',
  },
  recommended: {
    level: 'recommended',
    operatingSystem: 'Windows 11 64-bit',
    processor: 'Intel Core i7-12700 / AMD Ryzen 7 5800X',
    memory: '16 GB RAM',
    graphics: 'NVIDIA RTX 3070 / AMD RX 6800',
    storage: '80 GB SSD space',
    directX: 'Version 12',
  },
  rayTracingUltra: {
    level: 'ray-tracing-ultra',
    operatingSystem: 'Windows 11 64-bit',
    processor: 'Intel Core i9-13900K / AMD Ryzen 9 7950X',
    memory: '32 GB RAM',
    graphics: 'NVIDIA RTX 4080 / AMD RX 7900 XTX',
    storage: '80 GB NVMe SSD space',
    directX: 'Version 12 Ultimate',
  },
};

const languages: SupportedLanguage[] = [
  {
    code: 'en',
    name: 'English',
    audio: true,
    subtitles: true,
    interface: true,
  },
  {
    code: 'es',
    name: 'Spanish',
    audio: true,
    subtitles: true,
    interface: true,
  },
  {
    code: 'fr',
    name: 'French',
    audio: true,
    subtitles: true,
    interface: true,
  },
  {
    code: 'ja',
    name: 'Japanese',
    audio: true,
    subtitles: true,
    interface: true,
  },
];

const matureRating: ContentRating = {
  organization: 'ESRB',
  rating: 'M',
  minimumAge: 17,
  descriptors: ['Blood and Gore', 'Strong Language', 'Violence'],
  description: 'Content is generally suitable for ages 17 and up.',
};

const editions = (
  standardPrice: number,
  ultimatePrice: number,
  includedUltimateContent: string[],
): GameEdition[] => [
  {
    id: 'standard',
    name: 'Standard Edition',
    description: 'The complete base game.',
    price: standardPrice,
    originalPrice: standardPrice,
    includedContent: ['Base game'],
    discountPercentage: 0,
  },
  {
    id: 'ultimate',
    name: 'Ultimate Edition',
    description: 'The full experience with bonus content and expansions.',
    price: ultimatePrice,
    originalPrice: ultimatePrice,
    includedContent: ['Base game', ...includedUltimateContent],
    discountPercentage: 0,
  },
];

const commonFeatures: GameFeature[] = [
  {
    id: 'ray-tracing',
    title: 'Advanced Ray Tracing',
    description: 'Dynamic lighting, reflections, and shadows bring every scene to life.',
    icon: 'sun',
    color: '#f59e0b',
  },
  {
    id: 'adaptive-world',
    title: 'Living World',
    description: 'A reactive world that changes with your choices and discoveries.',
    icon: 'globe',
    color: '#3b82f6',
  },
  {
    id: 'character-customization',
    title: 'Deep Customization',
    description: 'Build a unique character with flexible skills and equipment.',
    icon: 'sliders',
    color: '#8b5cf6',
  },
];

export const dummyGames: Game[] = [
  {
    id: 'neon-horizon',
    title: 'Neon Horizon',
    subtitle: 'The city remembers everything',
    developer: 'Afterlight Interactive',
    publisher: 'Nova Forge',
    releaseDate: '2025-04-18',
    enhancedYear: 2026,
    genres: ['Open World', 'Cyberpunk', 'Story Rich', 'Sci-Fi'],
    rating: { label: 'Very Positive', percentage: 94 },
    reviewCount: 18542,
    reviewScore: 9.2,
    description:
      'Explore the vertical streets of Arcadia, a neon metropolis controlled by rival corporations, and uncover the memory at the heart of its digital uprising.',
    coverImage:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',
    gallery: [
      {
        id: 'neon-horizon-1',
        src: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85',
        alt: 'A futuristic city glowing at night',
        type: 'image',
      },
      {
        id: 'neon-horizon-2',
        src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=85',
        alt: 'Dense city skyline from above',
        type: 'image',
      },
    ],
    editions: editions(59.99, 89.99, ['Phantom Protocol expansion', 'Digital art book']),
    features: commonFeatures,
    languages,
    contentRating: matureRating,
    systemRequirements,
  },
  {
    id: 'echoes-of-elysium',
    title: 'Echoes of Elysium',
    subtitle: 'Reclaim a fallen paradise',
    developer: 'Pale Moon Studios',
    publisher: 'Northstar Games',
    releaseDate: '2025-09-12',
    genres: ['Open World', 'Action RPG', 'Story Rich'],
    rating: { label: 'Overwhelmingly Positive', percentage: 97 },
    reviewCount: 24890,
    reviewScore: 9.6,
    description:
      'Journey across the shattered islands of Elysium as a guardian bound to an ancient power. Every alliance, battle, and sacrifice shapes the fate of the realm.',
    coverImage:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85',
    gallery: [
      {
        id: 'elysium-1',
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
        alt: 'Mountain peaks rising above a misty valley',
        type: 'image',
      },
      {
        id: 'elysium-2',
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85',
        alt: 'A vast fantasy wilderness at sunset',
        type: 'image',
      },
    ],
    editions: editions(69.99, 99.99, ['Sunken Kingdom expansion', 'Elysian armor set']),
    features: commonFeatures,
    languages,
    contentRating: matureRating,
    systemRequirements,
  },
  {
    id: 'frontier-zero',
    title: 'Frontier Zero',
    subtitle: 'Beyond the last known star',
    developer: 'Orbitline',
    publisher: 'Vela Interactive',
    releaseDate: '2026-02-06',
    genres: ['Open World', 'Sci-Fi', 'First-Person'],
    rating: { label: 'Mostly Positive', percentage: 86 },
    reviewCount: 11306,
    reviewScore: 8.5,
    description:
      'Captain a modular exploration vessel and chart an unpredictable galaxy filled with abandoned colonies, strange phenomena, and civilizations on the brink.',
    coverImage:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85',
    gallery: [
      {
        id: 'frontier-zero-1',
        src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=85',
        alt: 'Astronaut working above Earth',
        type: 'image',
      },
      {
        id: 'frontier-zero-2',
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85',
        alt: 'The curve of Earth seen from space',
        type: 'image',
      },
    ],
    editions: editions(49.99, 74.99, ['Outer Rim mission pack', 'Founders cosmetic bundle']),
    features: commonFeatures,
    languages,
    contentRating: {
      organization: 'ESRB',
      rating: 'T',
      minimumAge: 13,
      descriptors: ['Language', 'Mild Violence'],
      description: 'Content is generally suitable for ages 13 and up.',
    },
    systemRequirements,
  },
  {
    id: 'ashfall-protocol',
    title: 'Ashfall Protocol',
    subtitle: 'Survive what comes after',
    developer: 'Iron Vale',
    publisher: 'Black Ridge Publishing',
    releaseDate: '2024-11-22',
    genres: ['First-Person', 'Sci-Fi', 'Action RPG'],
    rating: { label: 'Very Positive', percentage: 91 },
    reviewCount: 15321,
    reviewScore: 8.9,
    description:
      'Lead a rescue crew beneath a volcanic research city after an unexplained disaster. Manage scarce resources, uncover the truth, and escape the rising ash.',
    coverImage:
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85',
    gallery: [
      {
        id: 'ashfall-1',
        src: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=85',
        alt: 'A dark and atmospheric forest',
        type: 'image',
      },
      {
        id: 'ashfall-2',
        src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1600&q=85',
        alt: 'Sunlight cutting through a dense forest',
        type: 'image',
      },
    ],
    editions: editions(54.99, 79.99, ['Dark Below expansion', 'Survival equipment pack']),
    features: commonFeatures,
    languages,
    contentRating: matureRating,
    systemRequirements,
  },
  {
    id: 'velocity-drift',
    title: 'Velocity Drift',
    subtitle: 'Own the night',
    developer: 'Redline Collective',
    publisher: 'Turbo Works',
    releaseDate: '2025-07-03',
    genres: ['Open World', 'Ray Tracing', 'Story Rich'],
    rating: { label: 'Very Positive', percentage: 92 },
    reviewCount: 9874,
    reviewScore: 8.8,
    description:
      'Build your reputation in an underground racing world where every district has its own crews, shortcuts, rivalries, and stories waiting after dark.',
    coverImage:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85',
    gallery: [
      {
        id: 'velocity-drift-1',
        src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=85',
        alt: 'A sports car ready to race',
        type: 'image',
      },
      {
        id: 'velocity-drift-2',
        src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=85',
        alt: 'A performance car on an open road',
        type: 'image',
      },
    ],
    editions: editions(59.99, 84.99, ['Midnight Run expansion', 'Five exclusive vehicles']),
    features: commonFeatures,
    languages,
    contentRating: {
      organization: 'ESRB',
      rating: 'T',
      minimumAge: 13,
      descriptors: ['Language', 'Violence'],
      description: 'Content is generally suitable for ages 13 and up.',
    },
    systemRequirements,
  },
  {
    id: 'specter-division',
    title: 'Specter Division',
    subtitle: 'No signal. No backup.',
    developer: 'Cold Signal',
    publisher: 'Nova Forge',
    releaseDate: '2026-06-19',
    genres: ['Cyberpunk', 'First-Person', 'Action RPG'],
    rating: { label: 'Positive', percentage: 83 },
    reviewCount: 6420,
    reviewScore: 8.1,
    description:
      'As an elite covert operative, infiltrate a city cut off from the outside world. Improvise with advanced tools, stay unseen, and decide who deserves the truth.',
    coverImage:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',
    gallery: [
      {
        id: 'specter-division-1',
        src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=85',
        alt: 'A skyline shrouded in atmospheric darkness',
        type: 'image',
      },
      {
        id: 'specter-division-2',
        src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85',
        alt: 'A modern high-rise cityscape',
        type: 'image',
      },
    ],
    editions: editions(64.99, 94.99, ['Black Site campaign', 'Covert operative gear']),
    features: commonFeatures,
    languages,
    contentRating: matureRating,
    systemRequirements,
  },
];

export const games = dummyGames;
export default dummyGames;