
export interface Service {
  id: string;
  category: 'doxeo' | 'streaming' | 'programas';
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
