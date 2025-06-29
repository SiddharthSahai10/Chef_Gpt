const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients and suggests a recipe. Format the response in markdown.
`;

export async function getRecipeFromCohere(ingredientsArr) {
  // Try to get API key from environment variables (works locally)
  let HF_TOKEN = import.meta.env.VITE_OPENROUTER_API_KEY;
  
  // If not available, try to get from a public config (for GitHub Pages)
  if (!HF_TOKEN) {
    // For GitHub Pages, you'll need to set this as a GitHub Secret and use it in your build process
    // For now, we'll show an error message
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
