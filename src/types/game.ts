export type GameGenre =
  | 'Open World'
  | 'Cyberpunk'
  | 'Story Rich'
  | 'Sci-Fi'
  | 'First-Person'
  | 'Ray Tracing'
  | 'Action RPG';

export type GameEditionType = 'standard' | 'ultimate';

export interface Game {
  id: string;
  title: string;
  subtitle?: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  enhancedYear?: number;
  genres: GameGenre[];
  rating: ReviewRating;
  reviewCount: number;
  reviewScore: number;
  description: string;
  coverImage: string;
  trailerUrl?: string;
  gallery: GalleryImage[];
  editions: GameEdition[];
  features: GameFeature[];
  languages: SupportedLanguage[];
  contentRating: ContentRating;
  systemRequirements: SystemRequirements;
}

export interface ReviewRating {
  label: string;
  percentage: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  type: 'image' | 'video';
}

export interface GameEdition {
  id: GameEditionType;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  includedContent: string[];
  discountPercentage: number;
}

export interface Pricing {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  currency: 'USD' | 'EUR' | 'GBP' | 'ZAR';
}

export interface Promotion {
  active: boolean;
  discountPercentage: number;
  expiresAt?: string;
  label: string;
}

export interface GameFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color?: string;
}

export interface Expansion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  characters: string[];
}

export interface SupportedLanguage {
  code: string;
  name: string;
  audio: boolean;
  subtitles: boolean;
  interface: boolean;
}

export type RequirementLevel = 'minimum' | 'recommended' | 'ray-tracing-ultra';

export interface SystemRequirementProfile {
  level: RequirementLevel;
  operatingSystem: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
  directX: string;
}

export interface SystemRequirements {
  minimum: SystemRequirementProfile;
  recommended: SystemRequirementProfile;
  rayTracingUltra: SystemRequirementProfile;
}

export interface ContentRating {
  organization: 'ESRB' | 'PEGI';
  rating: string;
  minimumAge: number;
  descriptors: string[];
  description: string;
}
