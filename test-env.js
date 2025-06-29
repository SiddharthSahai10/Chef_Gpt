// Simple test to check if environment variables are loaded
import dotenv from 'dotenv';
dotenv.config();

console.log("Testing environment variables...");
console.log("VITE_OPENROUTER_API_KEY exists:", !!process.env.VITE_OPENROUTER_API_KEY);
console.log("VITE_OPENROUTER_API_KEY length:", process.env.VITE_OPENROUTER_API_KEY?.length || 0);
console.log("NODE_ENV:", process.env.NODE_ENV); 