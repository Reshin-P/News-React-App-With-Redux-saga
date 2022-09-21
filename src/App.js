
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  LandingScreen  from "./Screens/LandingScreen";
import SingleNews from "./Screens/SingleNews";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/news/:id" element={<SingleNews />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;