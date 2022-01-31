
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import Main from "./pages/Main";
import FeaturedUsers from "./pages/FeaturedUsers";

import './App.css';

function App() {
  return (
    <MainLayout>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Main />}
          />

          <Route
            path='/featured'
            element={<FeaturedUsers />}
          />
        </Routes>
      </Router>
    </MainLayout>
  );
}

export default App;
