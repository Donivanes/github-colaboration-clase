import { Routes, Route } from 'react-router';
import { Home } from './routes/Home';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
