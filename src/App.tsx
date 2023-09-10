import { Route, Routes } from 'react-router-dom'
import './App.css'
import BooksList from './screens/BooksList'
import BookDetail from './screens/BookDetail'
import SiteLayout from './layouts/SiteLayout'
import { Provider } from 'react-redux'
import store from './API/store'

function App() {


  return (
    
    <Routes>
      <Route element={<SiteLayout/>}>
        <Route path='' element={<BooksList/>}/>
        <Route path='/book/:id' element={<BookDetail/>}/>
      </Route>
    </Routes>
   
  )
}

export default App
