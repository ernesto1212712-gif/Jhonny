
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

  // --- STREAMING (LOGOS PREMIUM SEGÚN IMAGENES) ---
  {
    id: 'netflix',
    category: 'streaming',
    title: 'NETFLIX PREMIUM',
    requirement: 'PERFIL PRIVADO 4K',
    price: '10 soles',
    result: 'Acceso Ultra HD 4K con garantía total de stock.',
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
    result: 'Todo el contenido de Disney, Pixar, Marvel y Star en un solo lugar.',
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
    result: 'Música ilimitada, sin anuncios y videos en segundo plano.',
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
    price: '4s / 10s / 20s',
    result: 'Herramientas de diseño profesional desbloqueadas al 100%.',
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
    result: 'Usa GPT-4o, DALL-E y análisis de datos sin restricciones.',
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
    result: 'Edita videos nivel cine con efectos pro y sin marcas de agua.',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '🎥',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/CapCut_logo.svg'
  },

  // --- PROGRAMAS & DESARROLLO (MÁXIMO FLORO COMERCIAL) ---
  {
    id: 'prog-base-datos',
    category: 'programas',
    title: 'BASE DE DATOS DOMINIO VIP',
    requirement: 'TXT (User:Pass / Mail:Pass)',
    price: 'COTIZACIÓN VIP',
    result: '¿Necesitas datos específicos? Extraemos información masiva por dominio (Netflix.com, Disney.com, etc). Te entregamos un archivo .txt profesional listo para usar con credenciales válidas. ¡Directo al grano!',
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
    result: 'Toma el control total de tu imperio de streaming. Con este panel verás cuánto inviertes, cuánto ganas, agregarás clientes en segundos y el sistema te avisará automáticamente por WhatsApp cuando una cuenta esté por vencer. ¡No pierdas ni una sola venta!',
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
    result: 'Creamos la página web que tu negocio merece. Interfaz llamativa, moderna y ultra-optimizada para que tus clientes no pierdan tiempo y vayan directo a cerrar el trato en tu WhatsApp personal. ¡Si no vende, no sirve, y nosotros hacemos que venda!',
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
    result: '¿Tienes una idea millonaria o quieres crear tu propio juego y no sabes programar? ¡Acá somos expertos en hacer realidad lo imposible! Cuéntanos tu proyecto y nosotros lo transformamos en software funcional, APKs o aplicaciones web desde cero.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🛠️'
  }
];
