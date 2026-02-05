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
            - BIENVENIDO AL CURSO VIP 🚀 (20 USD / 70 SOLES): Aprende a generar Crunchyroll, Disney+, DirecTV, CableGo. Escribir "!pagar" al WhatsApp para comprar.
            - DOXEO (26 COMANDOS): Los comandos más potentes de Perú. Desde /dni (3s) hasta Reconocimiento Facial (15s) y Meta Data (30s).
            - VENTA DE CUENTAS DE STREAMING: Precios competitivos para Netflix (10s), Disney (6s), YouTube (5s/12s), Max (6s), Prime (8s), Spotify (8s).
            
            - PROGRAMACIÓN & DESARROLLO:
                * Programa de Base de Datos: Archivos TXT con usuario:pass o correo:pass.
                * Panel Administrativo Pro: Control de inversión, ganancias y alertas de vencimiento por WhatsApp.
                * Arquitectura Web Avanzada: Diseños únicos según el negocio del cliente.
            
            Reglas de Respuesta:
            - Jhonny es el mejor programador y experto en Doxeo de Perú.
            - Usa español natural y fluido, muy seguro de sí mismo.
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