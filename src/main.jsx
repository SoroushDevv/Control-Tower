import { createRoot } from 'react-dom/client'
import './index.css'
import './output.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'
import { SidebarProvider } from './Contexts/SideBarState.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <SidebarProvider>

      <App />
      </SidebarProvider>
    </ThemeProvider>
  </BrowserRouter>

)
