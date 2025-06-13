import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { newStore } from './HTTP/Store.jsx'
import { CrudStore } from './CRUD2/Redux/CrudStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/*} <Provider store={newStore}>*/}
   <Provider store={CrudStore}>
      <App />
    </Provider>
  </StrictMode>,
)
