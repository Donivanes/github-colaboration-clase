import { Routes, Route } from 'react-router';
import { Home } from './routes/Home';
import { Navbar } from './components/Navbar';
import { Dogs } from './routes/Dogs';
import { About } from './routes/About';
import { Pablo } from './routes/Pablo';

const App = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pablo" element={<Pablo />} />
        <Route path="/dogs" element={<Dogs />} />
      </Route>
    </Routes>
  );
};

export default App;
