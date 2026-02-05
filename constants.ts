
import { Service } from './types';

export const WHATSAPP_NUMBER = '51976680776';
export const SITE_NAME = 'JhonnyDoxeoVip';

export const CATEGORIES = [
  { id: 'doxeo', label: ' COMANDOS DE DOXEO (26)', icon: '🔍' },
  { id: 'streaming', label: 'Cuentas Streaming', icon: '🎬' },
  { id: 'programas', label: 'Programación & Desarrollo', icon: '💻' },
];

export const SERVICES: Service[] = [
  // --- DOXEO & INTELIGENCIA (LOS 26 COMANDOS EXACTOS) ---
  { id: 'c1', category: 'doxeo', title: 'RENIEC BASE NV 3', requirement: 'DNI', price: '3 soles', result: 'IMAGEN DEL ROSTRO, FIRMA, HUELLAS Y LOS DATOS EN TEXTO COMPLETO.', status: 'OPERATIVO', badge: 'STANDARD', icon: '🪪' },
  { id: 'c2', category: 'doxeo', title: 'RENIEC X NOMBRES', requirement: '/nm N¹|AP¹|AP²', price: '2 soles', result: 'FILTRO DE NOMBRES, TEXTO Y FORMATO .TXT PARA TU BASE.', status: 'OPERATIVO', badge: 'FREEMIUM', icon: '🪪' },
  { id: 'c3', category: 'doxeo', title: 'OSIPTEL ONLINE', requirement: 'DNI / CELULAR / RUC', price: '5 soles', result: 'CONSULTA NÚMEROS POR DNI Y TELÉFONO O RUC EN NUESTRA BASE DE TELEFONÍA.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '📞' },
  { id: 'c4', category: 'doxeo', title: 'MPFN FISCALIA ONLINE', requirement: 'DNI', price: '20 soles', result: 'VERIFICA SI UN DNI CUENTA CON CASOS FISCALES EN MPFN (FORMATO PDF).', status: 'OPERATIVO', badge: 'PREMIUM', icon: '⚖️' },
  { id: 'c5', category: 'doxeo', title: 'DENUNCIAS ONLINE', requirement: 'DNI', price: '20 soles', result: 'VERIFICA SI UN DNI CUENTA CON DENUNCIAS EN FORMATO PDF.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '⚖️' },
  { id: 'c6', category: 'doxeo', title: 'DENUNCIAS VEHICULAR', requirement: 'PLACA', price: '15 soles', result: 'VERIFICA SI UNA PLACA CUENTA CON DENUNCIAS EN FORMATO PDF.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '🚗' },
  { id: 'c7', category: 'doxeo', title: 'REQUISITORIA ONLINE', requirement: 'DNI', price: '25 soles', result: 'VERIFICA SI UN DNI CUENTA CON REQUISITORIA EN FORMATO PDF.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '🚔' },
  { id: 'c8', category: 'doxeo', title: 'REQUISITORIA VEHICULAR', requirement: 'PLACA', price: '20 soles', result: 'VERIFICA SI UNA PLACA CUENTA CON REQUISITORIA VEHICULAR EN PDF.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '🚗' },
  { id: 'c9', category: 'doxeo', title: 'REDAM (ALIMENTOS)', requirement: 'DNI', price: '15 soles', result: 'CONSULTA DEMANDAS POR ALIMENTOS CON FOTO Y DETALLES.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '👶' },
  { id: 'c10', category: 'doxeo', title: 'SUNAT EMPRESAS', requirement: 'DNI / RUC', price: '10 soles', result: 'CONSULTA EMPRESAS DE UNA PERSONA MEDIANTE DNI/RUC EN PDF.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '🏛️' },
  { id: 'c11', category: 'doxeo', title: 'REPORTE CONSUMOS PDF', requirement: 'DNI / RUC', price: '5 soles', result: 'REPORTE DE CONSUMOS Y GASTOS (SUNAT) EN PDF.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '🏛️' },
  { id: 'c12', category: 'doxeo', title: 'SUNARP PROPIEDADES', requirement: 'DNI / RUC', price: '5 soles', result: 'VERIFICA SI UN DNI CUENTA CON PROPIEDADES EN FORMATO PDF.', status: 'OPERATIVO', badge: 'STANDARD', icon: '🏘️' },
  { id: 'c13', category: 'doxeo', title: 'TIVE ORIGINAL', requirement: 'PLACA', price: '15 soles', result: 'TARJETA DE IDENTIFICACIÓN VEHICULAR PDF MEDIANTE PLACA.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '🚗' },
  { id: 'c14', category: 'doxeo', title: 'BOLETA INFORMATIVA', requirement: 'PLACA', price: '15 soles', result: 'CONSULTA LA BOLETA INFORMATIVA VEHICULAR PDF MEDIANTE PLACA.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '🚗' },
  { id: 'c15', category: 'doxeo', title: 'ANTECEDENTES PENALES', requirement: 'DNI', price: '20 soles', result: 'GENERA ANTECEDENTES PENALES EN PDF MEDIANTE DNI.', status: 'OPERATIVO', badge: 'STANDARD', icon: '📜' },
  { id: 'c16', category: 'doxeo', title: 'ANTECEDENTES POLICIALES', requirement: 'DNI', price: '5 soles', result: 'GENERA ANTECEDENTES POLICIALES EN PDF MEDIANTE DNI.', status: 'OPERATIVO', badge: 'STANDARD', icon: '📜' },
  { id: 'c17', category: 'doxeo', title: 'ANTECEDENTES JUDICIALES', requirement: 'DNI', price: '15 soles', result: 'GENERA ANTECEDENTES JUDICIALES EN PDF MEDIANTE DNI.', status: 'OPERATIVO', badge: 'STANDARD', icon: '📜' },
  { id: 'c18', category: 'doxeo', title: 'SUNEDU TÍTULOS', requirement: 'DNI', price: '15 soles', result: 'CONSULTA TÍTULOS UNIVERSITARIOS EN SUNEDU MEDIANTE DNI.', status: 'OPERATIVO', badge: 'STANDARD', icon: '👨‍🎓' },
  { id: 'c19', category: 'doxeo', title: 'MINEDU CERTIFICADO', requirement: 'DNI', price: '15 soles', result: 'CONSULTA MINEDU CERTIFICADO DE ESTUDIO EN FORMATO PDF.', status: 'OPERATIVO', badge: 'VIP', icon: '👨‍🏫' },
  { id: 'c20', category: 'doxeo', title: 'ÁRBOL GENEALÓGICO', requirement: 'DNI', price: '10 soles', result: 'CONSULTA EL ÁRBOL GENEALÓGICO EN PDF DE UNA PERSONA MEDIANTE DNI.', status: 'OPERATIVO', badge: 'STANDARD', icon: '🌳' },
  { id: 'c21', category: 'doxeo', title: 'REPORTE SENTINEL', requirement: 'DNI / RUC', price: '10 soles', result: 'CONSULTA EL REPORTE SENTINEL EN PDF MEDIANTE DNI/RUC.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '💰' },
  { id: 'c22', category: 'doxeo', title: 'MTC LICENCIA', requirement: 'DNI', price: '15 soles', result: 'CONSULTA FICHA DE LICENCIA POR DNI EN FORMATO PDF.', status: 'OPERATIVO', badge: 'STANDARD', icon: '💎' },
  { id: 'c23', category: 'doxeo', title: 'REVISIÓN TÉCNICA', requirement: 'PLACA', price: '15 soles', result: 'CONSULTA LA REVISIÓN TÉCNICA MEDIANTE PLACA.', status: 'OPERATIVO', badge: 'STANDARD', icon: '💎' },
  { id: 'c24', category: 'doxeo', title: 'HISTORIAL SOAT', requirement: 'PLACA', price: '10 soles', result: 'CONSULTA SEGURO VEHICULAR HISTORIAL TEXTO MEDIANTE PLACA.', status: 'OPERATIVO', badge: 'STANDARD', icon: '💎' },
  { id: 'c25', category: 'doxeo', title: 'META DATA ELITE', requirement: 'DNI', price: '30 soles', result: 'BÚSQUEDA INTEGRAL EN RENIEC, MINSA, OSIPTEL, SUNARP, SISFOH, SUNAT ETC.', status: 'OPERATIVO', badge: 'STANDARD', icon: '➕' },
  { id: 'c26', category: 'doxeo', title: 'RECONOCIMIENTO FACIAL', requirement: 'FOTO NÍTIDA', price: '15 soles', result: 'ENCUENTRA PERSONAS MEDIANTE RECONOCIMIENTO FACIAL AVANZADO.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '➕' },

  // --- STREAMING (CON PRECIOS ACTUALIZADOS) ---
  { id: 's1', category: 'streaming', title: 'NETFLIX PREMIUM', requirement: 'CUENTA PRIVADA', price: '10 soles', result: 'ULTRA HD 4K, GARANTÍA TOTAL, SIN CAÍDAS.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '🍿', logoUrl: 'https://www.vectorlogo.zone/logos/netflix/netflix-icon.svg' },
  { id: 's2', category: 'streaming', title: 'DISNEY+ PREMIUM', requirement: 'CUENTA COMPLETA', price: '6 soles', result: 'CALIDAD 4K CON TODO EL CATÁLOGO DE MARVEL Y STAR.', status: 'OPERATIVO', badge: 'STANDARD', icon: '🏰', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
  { id: 's3', category: 'streaming', title: 'YOUTUBE PREMIUM', requirement: 'A TU CORREO', price: '5s (mes) / 12s (3 meses)', result: 'SIN ANUNCIOS, YOUTUBE MUSIC INCLUIDO.', status: 'OPERATIVO', badge: 'VIP', icon: '📺', logoUrl: 'https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg' },
  { id: 's4', category: 'streaming', title: 'MAX (HBO MAX)', requirement: 'PLAN PLATINO', price: '6 soles mensual', result: 'MÁXIMA CALIDAD 4K PARA DISFRUTAR HBO.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '🎬', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
  { id: 's5', category: 'streaming', title: 'PRIME VIDEO', requirement: 'CUENTA PRIVADA', price: '8 soles mensual', result: 'LO MEJOR DE AMAZON EN ALTA DEFINICIÓN.', status: 'OPERATIVO', badge: 'STANDARD', icon: '📦', logoUrl: 'https://www.vectorlogo.zone/logos/amazon_prime/amazon_prime-icon.svg' },
  { id: 's6', category: 'streaming', title: 'SPOTIFY PREMIUM', requirement: 'A TU CUENTA', price: '8 soles mensual', result: 'MÚSICA SIN LÍMITES Y CALIDAD EXTREMA.', status: 'OPERATIVO', badge: 'STANDARD', icon: '🎵', logoUrl: 'https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg' },
  { id: 's7', category: 'streaming', title: 'CANVA PRO VIP', requirement: 'EQUIPO ELITE', price: '4s (1m) / 10s (3m) / 20s (1a)', result: 'RECURSOS PREMIUM DESBLOQUEADOS PARA DISEÑO.', status: 'OPERATIVO', badge: 'VIP', icon: '🎨', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Canva_Logo_2021.svg' },
  { id: 's8', category: 'streaming', title: 'CHATGPT PLUS', requirement: 'IA AVANZADA', price: '10 soles mensual', result: 'ACCESO A GPT-4 Y GENERACIÓN DE IMÁGENES.', status: 'OPERATIVO', badge: 'VIP', icon: '🤖', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  { id: 's9', category: 'streaming', title: 'CAPCUT PRO', requirement: 'EDICIÓN VIP', price: '10 soles mensual', result: 'HERRAMIENTAS DE EDICIÓN PROFESIONAL.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '✂️', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Capcut_logo.svg' },
  { id: 's10', category: 'streaming', title: 'CRUNCHYROLL MEGA FAN', requirement: 'PLAN MEGA FAN', price: '5s (1m) / 12s (3m) / 25s (1a)', result: 'EL MEJOR ANIME SIN ANUNCIOS Y ESTRENOS.', status: 'OPERATIVO', badge: 'PREMIUM', icon: '🍣', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.svg' },

  // --- PROGRAMAS & DESARROLLO (MODERNIZADO) ---
  {
    id: 'curso-generacion',
    category: 'programas',
    title: 'BIENVENIDO AL CURSO VIP 🚀',
    requirement: 'APRENDE A GENERAR CUENTAS',
    price: '20 USD / 70 SOLES',
    result: 'Aprenderás fácil y rápido a generar Crunchyroll, Disney+, DirecTV, CableGo y más. Acceso legal inmediato, actualizaciones constantes de por vida y soporte exclusivo. Requiere PC/Laptop y conexión estable.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🎓'
  },
  {
    id: 'prog-base-datos',
    category: 'programas',
    title: 'PROGRAMA DE BASE DE DATOS',
    requirement: 'ARCHIVO TXT ELITE',
    price: 'COTIZA TU DOMINIO',
    result: 'Archivos .TXT ultra filtrados con formato [usuario:contraseña] o [correo:contraseña] de las páginas o dominios que necesites para tu negocio o auditoría.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '📂'
  },
  {
    id: 'panel-administrativo',
    category: 'programas',
    title: 'PANEL ADMINISTRATIVO PRO',
    requirement: 'CONTROL TOTAL BIZ',
    price: 'DESDE 100 SOLES',
    result: 'Maneja tu negocio como un profesional: mira cuánto inviertes, cuánto ganas, agrega clientes y recibe alertas por WhatsApp cuando una cuenta de streaming esté por vencer.',
    status: 'OPERATIVO',
    badge: 'PREMIUM',
    icon: '📈'
  },
  {
    id: 'paginas-web-pro',
    category: 'programas',
    title: 'CREACIÓN DE PÁGINAS WEB',
    requirement: 'TU NEGOCIO ONLINE',
    price: 'DESDE 150 SOLES',
    result: 'Creamos tu página web a gusto del cliente según su negocio (Ventas, Portfolio, OSINT, etc). Diseño moderno, rápido y optimizado para ventas.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🌐'
  },
  {
    id: 'proyecto-medida',
    category: 'programas',
    title: 'HACEMOS TU IDEA REALIDAD',
    requirement: 'PROYECTOS Y JUEGOS',
    price: 'COTIZA TU VISIÓN',
    result: '¿Tienes una idea de un juego o aplicación y no sabes programar? Nosotros lo hacemos por ti. Desde sistemas complejos hasta juegos adictivos, convertimos tu visión en código real.',
    status: 'OPERATIVO',
    badge: 'VIP',
    icon: '🧠'
  }
];
