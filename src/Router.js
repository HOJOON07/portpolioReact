import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import MusciChart from "./pages/MusciChart";
import MusicPlayer from "./pages/MusicPlayer";
import Profile from "./pages/Profile";
import ProjectList from "./pages/ProjectList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MusciChart" element={<MusciChart />} />
        <Route path="/MusicPlayer" element={<MusicPlayer />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ProjectList" element={<ProjectList />} />
      </Routes>
    </BrowserRouter>
  );
}
