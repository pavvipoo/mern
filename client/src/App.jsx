
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Signup from './signup'



function App() {
  

return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/register'element={<Signup />}></Route>


    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;