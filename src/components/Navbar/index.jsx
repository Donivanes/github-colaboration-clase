import { NavLink, Outlet } from 'react-router';

export const Navbar = () => {
  return (
    <>
      <nav className='flex bg-gray-800 text-white p-4 gap-2'>
      <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/dogs" end>
          Dogs
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
