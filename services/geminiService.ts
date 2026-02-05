
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (history: Message[], prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          parts: [
            { text: `Eres el Asistente Inteligente de JhonnyDoxeoVip. Tu catálogo es de alto nivel:
            
            1. DOXEO: Investigación OSINT profesional (DNI, Placa, Antecedentes).
            2. STREAMING: 
               - Netflix (10s)
               - Disney (6s)
               - YouTube (5s/12s)
               - Spotify (8s)
               - Canva (4 soles el mes / 10 soles 3 meses / 20 soles un año)
               - ChatGPT Plus (10s)
               - CapCut Pro (10s)
            
            3. PROGRAMAS & DESARROLLO: 
               - Base de Datos VIP: TXT con credenciales.
               - Panel Administrativo: Control de negocio y alertas.
               - Páginas Web: Diseño optimizado para ventas.
               - Proyectos a Medida: Jhonny hace realidad cualquier idea o juego.
            
            Reglas de Respuesta:
            - Usa lenguaje persuasivo y profesional ("floro").
            - Para programas, destaca que Jhonny convertirá su idea en realidad.
            - Siempre dirigir al botón "Adquirir" o al WhatsApp 976680776.
            
            Contexto del chat: ${JSON.stringify(history)}
            Consulta del usuario: ${prompt}` }
          ]
        }
      ],
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Jhonny está ocupado codificando. Intenta de nuevo o contacta al WhatsApp.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error de enlace. Contacta a Jhonny directamente.";
  }
};
