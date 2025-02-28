import { Routes, Route } from 'react-router';
import { Home } from './routes/Home';
import { Navbar } from './components/Navbar';
import { Pablo } from './routes/Pablo';

const App = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/pablo" element={<Pablo />} />
      </Route>
    </Routes>
  );
};

export default App;
