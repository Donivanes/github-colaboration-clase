import { NavLink, Outlet } from 'react-router';

export const Navbar = () => {
  const navbarLink = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/pablo', label: 'Pablo' },
    { to: '/dogs', label: 'Dogs' },
    { to: '/raul', label: 'Raul' },
    { to: '/raul2', label: 'Raul2' },
  ];

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        {navbarLink.map((link) => (
          <NavLink
            to={link.to}
            end
            key={link.label}
            className="hover:text-gray-300"
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
};
