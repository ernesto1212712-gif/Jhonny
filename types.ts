
export interface Service {
  id: string;
  // Added 'extras' category to support additional services defined in constants.ts
  category: 'doxeo' | 'streaming' | 'programas' | 'extras';
  title: string;
  requirement: string;
  price: string;
  result: string;
  status: 'OPERATIVO' | 'MANTENIMIENTO';
  badge: 'STANDARD' | 'PREMIUM' | 'VIP' | 'FREEMIUM';
  icon: string;
  logoUrl?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
