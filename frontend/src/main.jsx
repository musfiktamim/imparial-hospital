import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Toaster } from 'sonner'
import {Toaster} from "sonner"
import { MediaProvider } from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MediaProvider>
    <Toaster />
      <App />
  </MediaProvider>,
)
