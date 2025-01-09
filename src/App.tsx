import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Combine from './pages/Combine';
import Videos from './pages/Videos';
import Help from './pages/Help';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <Layout isDark={isDark} toggleTheme={() => setIsDark(!isDark)}>
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/combine" element={<Combine isDark={isDark} />} />
          <Route path="/videos" element={<Videos isDark={isDark} />} />
          <Route path="/help" element={<Help isDark={isDark} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;