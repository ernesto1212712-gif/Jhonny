
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
            2. STREAMING: Netflix (10s), Disney (6s), YouTube (5s/12s), Spotify (8s), Canva (4s/10s/20s), ChatGPT Plus (10s), CapCut Pro (10s). Destaca que "Se entrega" el acceso inmediato.
            3. PROGRAMAS & DESARROLLO (NUEVO): 
               - Base de Datos VIP: Entregamos TXT con user:pass o correo:pass de dominios específicos.
               - Panel Administrativo: Control total del negocio, inversiones, CRM y alertas de caducidad.
               - Páginas Web: Diseño optimizado para ventas directas a WhatsApp.
               - Proyectos a Medida: Hacemos realidad cualquier idea o juego con código personalizado. No necesitas saber programar.
            
            Reglas de Respuesta:
            - Usa lenguaje persuasivo y profesional ("floro").
            - Para programas, dile al cliente que Jhonny hará realidad su idea.
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
