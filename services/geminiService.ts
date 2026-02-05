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
            - BIENVENIDO AL CURSO VIP 🚀 (20 USD / 70 SOLES): Aprende a generar Crunchyroll, Disney+, DirecTV, CableGo.
            - DOXEO (26 COMANDOS COMPLETOS): Desde /dni hasta Reconocimiento Facial avanzado.
            - VENTA DE CUENTAS DE STREAMING: Netflix, Disney, YouTube, ChatGPT Plus, Canva Pro, etc.
            - ARQUITECTURA & DESARROLLO: Creación de páginas web, Ingeniería de Software y Panel Administrativo Pro.
            - SERVICIOS EXTRAS: ¡IZIPAY A DOMINIO PROPIO! y BANEO DE WHATSAPP PERMANENTE (en menos de 24h).
            
            Reglas de Respuesta:
            - Jhonny es el mejor programador y experto en Doxeo y ciberseguridad de Perú.
            - Usa español natural, fluido y muy seguro de sí mismo.
            - Menciona la privacidad total y la rapidez del servicio.
            - Invita siempre a dar clic en "Adquirir" para ir al WhatsApp oficial.
            
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