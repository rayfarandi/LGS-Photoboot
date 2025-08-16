import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '../views/HomeView';
import PhotoBoothView from '../views/PhotoBoothView';
import GuideView from '../views/GuideView';
import SupportView from '../views/SupportView';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/photobooth" element={<PhotoBoothView />} />
        <Route path="/guide" element={<GuideView />} />
        <Route path="/support" element={<SupportView />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;