# Chef Claude - AI Recipe Generator

A React-based web application that generates recipes based on available ingredients using OpenRouter AI.

## Features

- Add ingredients to create a recipe
- AI-powered recipe generation
- Modern, responsive UI
- Real-time recipe suggestions

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory:
   ```
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```
4. Run the development server: `npm run dev`

## Deployment

The app is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Technologies Used

- React
- Vite
- OpenRouter AI API
- CSS3

## Contributing

Feel free to submit issues and enhancement requests!

---

*Updated API key configuration for improved reliability*

## 🚀 Live Demo

Visit: [https://siddharthsahai10.github.io/Chef_Gpt/](https://siddharthsahai10.github.io/Chef_Gpt/)

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/siddharthsahai10/Chef_Gpt.git
   cd Chef_Gpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Set up GitHub Secrets**
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Add a new repository secret:
     - Name: `VITE_OPENROUTER_API_KEY`
     - Value: Your OpenRouter API key

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Update for GitHub Pages deployment"
   git push origin main
   ```

3. **GitHub Actions will automatically deploy**
   - The workflow will build and deploy your app
   - Check the Actions tab in your repository for deployment status

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🔧 Configuration

- **Base URL**: The app is configured for the `/Chef_Gpt/` base path
- **Environment Variables**: Use `VITE_` prefix for client-side variables
- **API**: Uses OpenRouter API for recipe generation

## 📝 Notes

- The app requires an OpenRouter API key to function
- For local development, use the `.env` file
- For GitHub Pages deployment, use GitHub Secrets
- The app will show an error message if the API key is not configured

## 🐛 Troubleshooting

If you see a blank screen on GitHub Pages:
1. Check that the repository name matches the base path in `vite.config.js`
2. Ensure the GitHub Actions workflow completed successfully
3. Verify that the API key is set in GitHub Secrets
4. Check the browser console for any JavaScript errors
