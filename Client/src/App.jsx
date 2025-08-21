import { Routes, Route } from 'react-router-dom';
import Chessgame from './components/Chessgame';
import Home from './components/Home';
// import GameHistory from './components/GameHistory';
// import Settings from './components/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Chessgame />} />
      {/* <Route path="/history" element={<GameHistory />} />
      <Route path="/settings" element={<Settings />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
export default App;
