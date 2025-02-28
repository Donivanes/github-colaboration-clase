import { Routes, Route } from 'react-router';
import { Home } from './routes/Home';
import { Navbar } from './components/Navbar';
import { About } from './routes/About';

const App = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
