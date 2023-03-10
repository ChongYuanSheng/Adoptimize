import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adoptions from '../../screens/Adoptions'
import AllPets from '../../screens/AllPets'
import Prescreening from '../../screens/Prescreening';
import Contract from '../../screens/Contract';
import Contract2 from "../../screens/Contract2";
import PetDetails from '../../screens/PetDetails';
import AdoptionDetail from '../../screens/AdoptionDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AllPets />} />
      <Route path="/Adoptions" element={<Adoptions />} />
      <Route path="/PreScreeningQuestions" element={<Prescreening />} />
      <Route path="/AdoptionContract" element={<Contract2 />} />
      <Route path="/PetDetails" element={<PetDetails />} />
      <Route path="/AdoptionDetails" element={<AdoptionDetail />} />
    </Routes>
  );
}

export default AppRoutes