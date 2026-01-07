
import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the digital concierge and sommelier for "L'Essence Gastronomique", an ultra-premium, modern restaurant.
Your tone is elegant, helpful, and sophisticated.
You know the menu perfectly: ${JSON.stringify(MENU_ITEMS)}.
You can recommend wine pairings, explain dietary restrictions, and help guests choose a dish based on their mood.
If a guest asks about something not on the menu, politely steer them back to our offerings.
Keep responses concise but evocative.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // Note: In this version of the SDK, we send the message. 
    // For simplicity in this demo, we'll just use a single prompt with context if history management is complex.
    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Forgive me, I am momentarily indisposed. How else may I assist you with our menu?";
  }
};
