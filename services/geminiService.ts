import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

export const getAIResponse = async (history: Message[], prompt: string) => {
  try {
    // Inicializamos el cliente dentro de la función para garantizar que use el proceso actual de Vercel
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [
            { text: `Eres el Asistente Inteligente de JhonnyDoxeoVip. Tu catálogo es de alto nivel:
            
            1. DOXEO: Investigación OSINT profesional (DNI, Placa, Antecedentes).
            2. STREAMING: 
               - Netflix (10 soles)
               - Disney (6 soles)
               - YouTube (5 soles el mes / 12 soles 3 meses)
               - Canva (4 soles el mes / 10 soles 3 meses / 20 soles un año)
               - ChatGPT Plus (10 soles)
               - CapCut Pro (10 soles)
            
            3. PROGRAMAS & DESARROLLO: 
               - Base de Datos VIP: TXT con credenciales.
               - Panel Administrativo: Control de negocio y alertas por WhatsApp.
               - Páginas Web: Diseño moderno para ventas directas.
               - Proyectos a Medida: Jhonny programa cualquier idea o APK.
            
            Reglas de Respuesta:
            - Usa lenguaje muy persuasivo y profesional.
            - Siempre menciona que los pagos son seguros y la entrega es inmediata.
            - Dirige al usuario al botón "Adquirir" de la tarjeta o al WhatsApp 976680776.
            
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

    const text = response.text;
    return text || "Jhonny está ocupado mejorando los sistemas. Intenta de nuevo en unos segundos.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error de conexión con el núcleo de IA. Por favor, contacta a Jhonny directamente por WhatsApp.";
  }
};