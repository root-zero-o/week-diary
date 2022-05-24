// Route
import { Route, Routes } from 'react-router-dom';

// Components
import Home from './pages/home';
import MyWeek from './pages/MyWeek';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MyWeek/:MyWeek" element={<MyWeek />} />
    </Routes>
  );
};

export default App;
