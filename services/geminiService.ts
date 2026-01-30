
import { GoogleGenAI, Type } from "@google/genai";

// Standardized GoogleGenAI client initialization and content generation logic for chat advice
export const generateVFXAdvice = async (prompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  // Always initialize GoogleGenAI with a configuration object and the direct process.env.API_KEY string
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [...history, { role: 'user', parts: [{ text: prompt }] }],
    config: {
      systemInstruction: `You are the MOTA Solution Engine AI, a senior VFX consultant for global film productions. 
      Your goal is to help users navigate the complex landscape of visual effects. 
      You provide advice on tax incentives, workflow optimization, studio selection, and technical problem-solving.
      Be professional, concise, and highly knowledgeable about the global VFX industry (locations like London, Vancouver, Montreal, Seoul, Mumbai, etc.).`,
      temperature: 0.7,
      topP: 0.8,
    },
  });

  // Access the text property directly (not a method)
  return response.text;
};

// Standardized GoogleGenAI client initialization and schema-based JSON generation for recommendations
export const getStudioRecommendations = async (projectDetails: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: projectDetails,
    config: {
      systemInstruction: "Based on the project details, suggest 3 fictional but realistic high-quality VFX studios with specific specialties and locations.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            specialty: { type: Type.STRING },
            location: { type: Type.STRING },
            reason: { type: Type.STRING }
          },
          required: ["name", "specialty", "location", "reason"]
        }
      }
    }
  });

  // Use the text property and handle potential undefined values with a default JSON string
  return JSON.parse(response.text?.trim() || '[]');
};
