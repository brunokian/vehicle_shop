import MotoPage from "./pages/MotoPage";
import { Routes, Route } from "react-router-dom"
import InitialPage from "./pages/InitialPage";
import CarPage from "./pages/CarPage";


function App() {
  return (
    <Routes>
      <Route path='/' element={<InitialPage/>} />
      <Route path='/carPage' element={<CarPage />} />
      <Route path='/motoPage' element={<MotoPage/>} />
    </Routes>
  );
}

export default App;
