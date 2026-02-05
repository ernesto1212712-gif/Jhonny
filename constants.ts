
import { Service } from './types';

export const WHATSAPP_NUMBER = '51976680776';
export const SITE_NAME = 'JhonnyDoxeoVip';

export const CATEGORIES = [
  { id: 'doxeo', label: 'Doxeo & Inteligencia', icon: '🔍' },
  { id: 'streaming', label: 'Cuentas Streaming', icon: '🎬' },
  { id: 'programas', label: 'Programas & Desarrollo', icon: '💻' },
];

export const SERVICES: Service[] = [
  // --- DOXEO ---
  {
    id: 'reniec-base',
    category: 'doxeo',
    title: 'RENIEC BASE NV 3',
    requirement: 'DNI',
    price: '3 soles',
    result: 'IMAGEN DEL ROSTRO, FIRMA, HUELLAS Y LOS DATOS EN TEXTO',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '🪪'
  },
  {
    id: 'reniec-nombres',
    category: 'doxeo',
    title: 'RENIEC X NOMBRES',
    requirement: '/nm N¹|AP¹|AP²',
    price: '2 soles',
    result: 'FILTRO DE NOMBRES, TEXTO Y .txt',
    status: 'OPERATIVO',
    badge: 'FREEMIUM',
    icon: '🪪'
  },
  {
    id: 'osiptel',
    category: 'doxeo',
    title: 'OSIPTEL ONLINE',
    requirement: 'DNI, Celular o RUC',
    price: '5 soles',
    result: 'CONSULTA NÚMEROS POR DNI Y TELÉFONO O RUC EN NUESTRA BASE',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '📞'
  },
  {
    id: 'fiscalia',
    category: 'doxeo',
    title: 'MPFN FISCALIA ONLINE',
    requirement: 'DNI',
    price: '20 soles',
    result: 'VERIFICA SI UN DNI CUENTA CON CASOS FISCALES EN MPFN PDF',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '⚖️'
  },
  {
    id: 'denuncias',
    category: 'doxeo',
    title: 'DENUNCIAS ONLINE',
    requirement: 'DNI',
    price: '20 soles',
    result: 'VERIFICA SI UN DNI CUENTA CON DENUNCIAS EN FORMATO PDF',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '📜'
  },
  {
    id: 'metadata',
    category: 'doxeo',
    title: 'META DATA COMPLETE',
    requirement: 'DNI',
    price: '30 SOLES',
    result: 'BUSCA EN RENIEC, MINSA, OSIPTEL, SUNARP, SISFOH, SUNAT, ETC',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '➕'
  },

  // --- STREAMING ---
  {
    id: 'netflix',
    category: 'streaming',
    title: 'NETFLIX PREMIUM',
    requirement: 'PERFIL PRIVADO 4K',
    price: '10 soles',
    result: 'Acceso Ultra HD 4K con garantía total de stock y entrega inmediata.',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '🍿',
    logoUrl: 'https://www.vectorlogo.zone/logos/netflix/netflix-icon.svg'
  },
  {
    id: 'disney',
    category: 'streaming',
    title: 'DISNEY+ PREMIUM',
    requirement: 'CUENTA COMPLETA',
    price: '6 soles',
    result: 'Todo el contenido de Disney, Pixar, Marvel y Star en un solo lugar con la mejor calidad.',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '🏰',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg'
  },
  {
    id: 'youtube-pre',
    category: 'streaming',
    title: 'YOUTUBE PREMIUM',
    requirement: 'A TU CORREO',
    price: '5s (mes) / 12s (3 m)',
    result: 'Música ilimitada, sin anuncios y videos en segundo plano para tu comodidad.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '📺',
    logoUrl: 'https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg'
  },
  {
    id: 'canva-pro',
    category: 'streaming',
    title: 'CANVA PRO VIP',
    requirement: 'EQUIPO PREMIUM',
    price: '4 soles el mes / 10 soles 3 meses / 20 soles un año',
    result: 'Herramientas de diseño profesional desbloqueadas al 100%. Edita como un experto.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🎨',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Canva_Logo_2021.svg'
  },
  {
    id: 'chatgpt-plus',
    category: 'streaming',
    title: 'CHATGPT PLUS',
    requirement: 'CUENTA PRO',
    price: '10 soles mensual',
    result: 'Usa GPT-4o, DALL-E y análisis de datos sin restricciones de tiempo.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🤖',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
  },
  {
    id: 'capcut-pro',
    category: 'streaming',
    title: 'CAPCUT PRO',
    requirement: 'TU PROPIA CUENTA',
    price: '10 soles mensual',
    result: 'Edita videos nivel cine con efectos pro y sin marcas de agua molestas.',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '🎥',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/CapCut_logo.svg'
  },

  // --- PROGRAMAS & DESARROLLO ---
  {
    id: 'prog-base-datos',
    category: 'programas',
    title: 'BASE DE DATOS DOMINIO VIP',
    requirement: 'TXT (User:Pass / Mail:Pass)',
    price: 'COTIZACIÓN VIP',
    result: 'Extraemos información masiva por dominio (Netflix.com, Disney.com, etc). Te entregamos un archivo .txt profesional con credenciales correo:contraseña listo para usar.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '📂'
  },
  {
    id: 'prog-panel-admin',
    category: 'programas',
    title: 'STREAMING BUSINESS MANAGER',
    requirement: 'Panel Web Inteligente',
    price: 'COTIZACIÓN VIP',
    result: 'Control total: mira tus inversiones, ganancias reales, agrega clientes y recibe alertas automáticas por WhatsApp cuando una cuenta esté por vencer.',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '🖥️'
  },
  {
    id: 'serv-creacion-pag',
    category: 'programas',
    title: 'WEB DESIGN & VENTAS',
    requirement: 'Diseño a tu gusto',
    price: 'PRECIO SEGÚN NEGOCIO',
    result: 'Creamos la página web perfecta para tu nicho. Interfaz moderna y optimizada para que tus clientes vayan directo a tu WhatsApp personal.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🌐'
  },
  {
    id: 'prog-personalizado',
    category: 'programas',
    title: 'IDEA REALITY FACTORY',
    requirement: 'Tu idea hecha código',
    price: 'COTIZA TU SUEÑO',
    result: '¿Tienes una idea de juego o programa y no sabes programar? Nosotros lo hacemos realidad. Transformamos tus sueños en software funcional o APKs.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🛠️'
  }
];
