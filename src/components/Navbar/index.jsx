import { NavLink, Outlet } from 'react-router';

export const Navbar = () => {
  return (
    <>
      <nav className='bg-gray-800 text-white p-4 flex gap-4'>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/pablo" end>
          Pablo
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
