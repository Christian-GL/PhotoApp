
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import './index.css'
import { store } from './store'
import { PageSearchPhotos } from './pages/searchPhotos/searchPhotos.jsx'
import { PageMyPhotos } from './pages/myPhotos/myPhotos.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='' element={<PageSearchPhotos />} />
        <Route path='/myPhotos' element={<PageMyPhotos />} />
      </Routes>
    </Provider>
  </BrowserRouter >
)