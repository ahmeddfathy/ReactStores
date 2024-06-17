
import { Route , Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Store from "./Components/store";
import Storedetails from "./Components/storedetails";

function App() {
  return (
    <>
     <Navbar />
  
   <Routes>
 
   <Route path="store" element={<Store />} />
   <Route path="/" element={<Store />} />
   <Route path="store/:products" element={<Storedetails />} />

   </Routes>
 
  

</>
);
}
export default App;

