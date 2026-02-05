
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

export const getAIResponse = async (history: Message[], prompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [
            { text: `Eres el Asistente Inteligente de JhonnyDoxeoVip. Tu catálogo es ELITE y debes usar un tono profesional, vendedor y con mucho "floro" persuasivo.
            
            PRODUCTOS DESTACADOS:
            - CURSO DE GENERACIÓN DE CUENTAS (20 USD / 70 SOLES): Pago único de por vida. Aprende a sacar Crunchyroll, Disney+, DirecTV, CableGo. Escribir "!pagar" al WhatsApp para comprar.
            - 26 COMANDOS OSINT: Los comandos más potentes de Perú. Desde /dni (3s) hasta Reconocimiento Facial (15s) y Meta Data (30s).
            - STREAMING PRECIOS FIJOS:
                * Netflix: 10 soles
                * Disney: 6 soles
                * YouTube: 5 (mes) / 12 (3 meses)
                * Max (HBO): 6 soles
                * Prime Video: 8 soles
                * Spotify: 8 soles
                * Canva: 4 (1m) / 10 (3m) / 20 (año)
                * ChatGPT Plus / CapCut Pro: 10 soles
                * Crunchyroll: 5 (mes) / 12 (3m) / 25 (año)
            
            - PROGRAMACIÓN VIP:
                * Bases de Datos: Archivos TXT con usuario:pass o correo:pass.
                * Panel Administrativo: Control de inversión, ganancias y alertas de vencimiento por WhatsApp.
                * Páginas Web: Diseños únicos según el negocio del cliente.
                * Ideas/Juegos: "No sabes programar? Nosotros lo hacemos". Convertimos cualquier idea o juego en realidad.
            
            Reglas de Respuesta:
            - Jhonny es el mejor programador y experto OSINT.
            - Usa español natural y fluido.
            - Invita siempre a dar clic en "Adquirir" para ir al WhatsApp.
            
            Historial previo: ${JSON.stringify(history.slice(-5))}
            Pregunta actual: ${prompt}` }
          ]
        }
      ],
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });

    return response.text || "Jhonny está ajustando los servidores. Reintenta en un momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error de enlace con el satélite de IA. Contacta a Jhonny por WhatsApp.";
  }
};
