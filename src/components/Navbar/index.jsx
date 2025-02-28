import { NavLink, Outlet } from 'react-router';

export const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4">
        <NavLink to="/" end className="mr-4">
          Home
        </NavLink>
        <NavLink to="/about" end className="mr-4">
          About
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
