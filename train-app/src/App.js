import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Welcome from './pages/welcome';

function App(){
  return(
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Welcome/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;