import { Routes, Route } from 'react-router';
import { Home } from './routes/Home';
import { Navbar } from './components/Navbar';
import { Dogs } from './routes/Dogs';

const App = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="/dogs" element={<Dogs />} />
      </Route>
    </Routes>
  );
};

export default App;
