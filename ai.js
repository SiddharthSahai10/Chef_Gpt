const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients and suggests a recipe. Format the response in markdown.
`;

export async function getRecipeFromCohere(ingredientsArr) {
  // Try to get API key from environment variables (works locally)
  let HF_TOKEN = import.meta.env.VITE_OPENROUTER_API_KEY;
  
  // Debug logging
  console.log("🔍 Environment check:");
  console.log("- VITE_OPENROUTER_API_KEY exists:", !!import.meta.env.VITE_OPENROUTER_API_KEY);
  console.log("- VITE_OPENROUTER_API_KEY length:", import.meta.env.VITE_OPENROUTER_API_KEY?.length || 0);
  console.log("- Mode:", import.meta.env.MODE);
  console.log("- Base URL:", import.meta.env.BASE_URL);
  
  // Fallback for development (remove this in production)
  if (!HF_TOKEN) {
    console.warn("API key not found in environment variables. Using fallback for development.");
    // You can temporarily uncomment the line below for testing, but remove it before pushing to production
    // HF_TOKEN = "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";
  }
  
  if (!HF_TOKEN) {
    throw new Error("API key not configured. Please set up your OpenRouter API key for deployment.");
  }
  
  const ingredientsString = ingredientsArr.join(", ");

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredientsString}. What recipe can I make?` }
      ],
      max_tokens: 500,
      temperature: 0.7
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error("❌ OpenRouter API Error:", errText);
    throw new Error(`OpenRouter API error: ${response.status} ${errText}`);
  }

  const result = await response.json();
  return result.choices?.[0]?.message?.content || "No recipe generated.";
}
