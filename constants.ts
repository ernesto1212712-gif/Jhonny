
import { Service } from './types';

export const WHATSAPP_NUMBER = '51976680776';
export const SITE_NAME = 'JhonnyDoxeoVip';

export const CATEGORIES = [
  { id: 'doxeo', label: 'Doxeo & Inteligencia', icon: '🔍' },
  { id: 'streaming', label: 'Cuentas Streaming', icon: '🎬' },
  { id: 'programas', label: 'Programas & Desarrollo', icon: '💻' },
];

export const SERVICES: Service[] = [
  // --- DOXEO (LOS 26 COMANDOS) ---
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
    id: 'denuncias-vehicular',
    category: 'doxeo',
    title: 'DENUNCIAS VEHICULAR',
    requirement: 'PLACA',
    price: '15 soles',
    result: 'VERIFICA SI UNA PLACA CUENTA CON DENUNCIAS EN FORMATO PDF',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '🚓'
  },
  {
    id: 'requisitoria',
    category: 'doxeo',
    title: 'REQUISITORIA ONLINE',
    requirement: 'DNI',
    price: '25 soles',
    result: 'VERIFICA SI UN DNI CUENTA CON REQUISITORIA EN FORMATO PDF',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '👮'
  },
  {
    id: 'requisitoria-vehicular',
    category: 'doxeo',
    title: 'REQUISITORIA VEHICULAR',
    requirement: 'PLACA',
    price: '20 soles',
    result: 'VERIFICA SI UNA PLACA CUENTA CON REQUISITORIA VEHICULAR EN PDF',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '🚔'
  },
  {
    id: 'redam',
    category: 'doxeo',
    title: 'REDAM (ALIMENTOS)',
    requirement: 'DNI',
    price: '15 soles',
    result: 'CONSULTA DEMANDAS POR ALIMENTOS CON FOTO Y DETALLES',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '⛓'
  },
  {
    id: 'sunat-empresas',
    category: 'doxeo',
    title: 'SUNAT EMPRESAS',
    requirement: 'DNI, RUC',
    price: '10 soles',
    result: 'CONSULTA EMPRESAS DE UNA PERSONA MEDIANTE DNI/RUC EN PDF',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '🏛️'
  },
  {
    id: 'reporte-consumos',
    category: 'doxeo',
    title: 'REPORTE CONSUMOS PDF',
    requirement: 'DNI, RUC',
    price: '5 soles',
    result: 'REPORTE DE CONSUMOS Y GASTOS (SUNAT) EN PDF',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '📊'
  },
  {
    id: 'sunarp-propiedades',
    category: 'doxeo',
    title: 'SUNARP PROPIEDADES',
    requirement: 'DNI, RUC',
    price: '5 soles',
    result: 'VERIFICA SI UN DNI CUENTA CON PROPIEDADES EN FORMATO PDF',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '🏘️'
  },
  {
    id: 'tive',
    category: 'doxeo',
    title: 'TIVE ORIGINAL',
    requirement: 'PLACA',
    price: '15 soles',
    result: 'CONSULTA LA TARJETA DE IDENTIFICACION VEHICULAR PDF',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '🚗'
  },
  {
    id: 'boleta-informativa',
    category: 'doxeo',
    title: 'BOLETA INFORMATIVA',
    requirement: 'PLACA',
    price: '15 soles',
    result: 'CONSULTA LA BOLETA INFORMATIVA VEHICULAR PDF',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '📄'
  },
  {
    id: 'ant-penales',
    category: 'doxeo',
    title: 'ANTECEDENTES PENALES',
    requirement: 'DNI',
    price: '20 soles',
    result: 'GENERA ANTECEDENTES PENALES EN PDF MEDIANTE DNI',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '📜'
  },
  {
    id: 'ant-policiales',
    category: 'doxeo',
    title: 'ANTECEDENTES POLICIALES',
    requirement: 'DNI',
    price: '5 soles',
    result: 'GENERA ANTECEDENTES POLICIALES EN PDF MEDIANTE DNI',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '📜'
  },
  {
    id: 'ant-judiciales',
    category: 'doxeo',
    title: 'ANTECEDENTES JUDICIALES',
    requirement: 'DNI',
    price: '15 soles',
    result: 'GENERA ANTECEDENTES JUDICIALES EN PDF MEDIANTE DNI',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '📜'
  },
  {
    id: 'sunedu',
    category: 'doxeo',
    title: 'SUNEDU TITULOS',
    requirement: 'DNI',
    price: '15 soles',
    result: 'CONSULTA TITULOS UNIVERSITARIOS EN SUNEDU MEDIANTE DNI',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '🎓'
  },
  {
    id: 'minedu',
    category: 'doxeo',
    title: 'MINEDU CERTIFICADO',
    requirement: 'DNI',
    price: '15 soles',
    result: 'CONSULTA MINEDU CERTIFICADO DE ESTUDIO EN FORMATO PDF',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🏫'
  },
  {
    id: 'arbol',
    category: 'doxeo',
    title: 'ARBOL GENEALOGICO',
    requirement: 'DNI',
    price: '10 soles',
    result: 'CONSULTA EL ARBOL GENEALOGICO EN PDF DE UNA PERSONA',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '🌳'
  },
  {
    id: 'sentinel',
    category: 'doxeo',
    title: 'REPORTE SENTINEL',
    requirement: 'DNI, RUC',
    price: '10 soles',
    result: 'CONSULTA EL REPORTE SENTINEL EN PDF DE UNA PERSONA',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '💰'
  },
  {
    id: 'mtc',
    category: 'doxeo',
    title: 'MTC LICENCIA',
    requirement: 'DNI',
    price: '15 soles',
    result: 'CONSULTA FICHA LICENCIA POR DNI EN FORMATO PDF',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '💎'
  },
  {
    id: 'revision',
    category: 'doxeo',
    title: 'REVISION TECNICA',
    requirement: 'PLACA',
    price: '15 soles',
    result: 'CONSULTA LA REVISION TECNICA MEDIANTE PLACA',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '🛠️'
  },
  {
    id: 'soat',
    category: 'doxeo',
    title: 'HISTORIAL SOAT',
    requirement: 'PLACA',
    price: '10 soles',
    result: 'CONSULTA SEGURO VEHICULAR HISTORIAL TEXTO POR PLACA',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '🛡️'
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
  {
    id: 'facial',
    category: 'doxeo',
    title: 'RECONOCIMIENTO FACIAL',
    requirement: 'FOTO NITIDA',
    price: '15 soles',
    result: 'BOTA PERSONAS SEGUN EL RECONOCIMIENTO FACIAL',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '👤'
  },

  // --- STREAMING (LOGOS ACTUALIZADOS SEGÚN IMAGENES) ---
  {
    id: 'netflix',
    category: 'streaming',
    title: 'NETFLIX PREMIUM',
    requirement: 'PERFIL PRIVADO 4K',
    price: '10 soles',
    result: 'Calidad Ultra HD para disfrutar tus series favoritas.',
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
    result: 'Acceso a todo el universo Disney y Star con la mejor calidad.',
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
    price: '5s (mes) / 12s (3 meses)',
    result: 'Sin publicidad, música de fondo y descargas ilimitadas.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '📺',
    logoUrl: 'https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg'
  },
  {
    id: 'hbo-max',
    category: 'streaming',
    title: 'MAX (HBO MAX)',
    requirement: 'PERFIL PRIVADO',
    price: '6 soles mensual',
    result: 'Warner Bros, HBO y cine de estreno directo en tu pantalla.',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '🎬',
    logoUrl: 'https://www.vectorlogo.zone/logos/hbo/hbo-icon.svg'
  },
  {
    id: 'prime-vid',
    category: 'streaming',
    title: 'PRIME VIDEO',
    requirement: 'CUENTA PROPIA',
    price: '8 soles mensual',
    result: 'Amazon Originals y los mejores clásicos sin anuncios.',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '📦',
    logoUrl: 'https://www.vectorlogo.zone/logos/amazon_prime/amazon_prime-icon.svg'
  },
  {
    id: 'spotify-pre',
    category: 'streaming',
    title: 'SPOTIFY PREMIUM',
    requirement: 'TU PROPIA CUENTA',
    price: '8 soles mensual',
    result: 'Toda tu música favorita en máxima calidad sin interrupciones.',
    status: 'OPERATIVO',
    badge: 'STANDARD',
    icon: '🎧',
    logoUrl: 'https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg'
  },
  {
    id: 'canva-pro',
    category: 'streaming',
    title: 'CANVA PRO',
    requirement: 'EQUIPO PREMIUM',
    price: '4s (mes) / 10s (3 meses) / 20s (año)',
    result: 'Desbloquea todas las herramientas de diseño pro y lleva tu creatividad al máximo.',
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
    result: 'Acceso a la inteligencia artificial más potente: GPT-4o y herramientas exclusivas.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🤖',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
  },
  {
    id: 'capcut-pro',
    category: 'streaming',
    title: 'CAPCUT PRO',
    requirement: 'TU CUENTA',
    price: '10 soles mensual',
    result: 'Edición de video avanzada sin límites ni marcas de agua con las mejores transiciones.',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '🎥',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/CapCut_logo.svg'
  },

  // --- PROGRAMAS & DESARROLLO (CON MÁS "FLORO" Y DETALLES) ---
  {
    id: 'prog-base-datos',
    category: 'programas',
    title: 'BASE DE DATOS DOMINIO VIP',
    requirement: 'Suministrado: Archivo TXT (User:Pass)',
    price: 'COTIZACIÓN VIP',
    result: 'Obtén bases de datos exclusivas extrayendo información de dominios específicos (Netflix.com, Disney.com, etc). Te entregamos un archivo TXT profesional con usuario:contraseña o correo:contraseña listo para usar.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '📂'
  },
  {
    id: 'prog-panel-admin',
    category: 'programas',
    title: 'PANEL ADM. STREAMING ELITE',
    requirement: 'Suministrado: Interfaz Moderna & Ordenada',
    price: 'COTIZACIÓN VIP',
    result: 'El centro de mando definitivo para tu negocio. Podrás ver cuánto inviertes, cuánto ganas en tiempo real, agregar clientes nuevos de forma masiva y recibir alertas automáticas cuando una cuenta esté por terminar. Maneja tu imperio como un profesional.',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '🖥️'
  },
  {
    id: 'serv-creacion-pag',
    category: 'programas',
    title: 'WEB DESIGN MASTERCLASS',
    requirement: 'Suministrado: Web Optimizada 100%',
    price: 'A TU GUSTO',
    result: 'Creamos la página web de tus sueños, diseñada a gusto del cliente y personalizada según tu nicho de mercado. Con una interfaz llamativa y mejorada, optimizada al 100% para que tus clientes vayan directo a tu WhatsApp personal y cierres ventas en segundos.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🌐'
  },
  {
    id: 'prog-personalizado',
    category: 'programas',
    title: 'PROYECTOS & JUEGOS REALITY',
    requirement: 'Suministrado: Desarrollo a Medida',
    price: 'SEGÚN COMPLEJIDAD',
    result: '¿Tienes una idea brillante pero no sabes programar? Aquí lo hacemos realidad. Desde programas complejos basados en tus necesidades hasta el juego que siempre quisiste crear. Hacemos que tus ideas se conviertan en código funcional y exitoso.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🛠️'
  }
];
