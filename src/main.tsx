import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import App from './App'
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className="text-foreground bg-background min-h-screen">
          <App />
        </main>
      </NextThemesProvider>
    </HeroUIProvider>
  </React.StrictMode>,
)