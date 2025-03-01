import { NavLink } from "react-router";

export const Raul2 = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            This page is from Raul2
          </h1>

          <button className="bg-white text-purple-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-full shadow-lg transition duration-300">
            <NavLink to="/"> Go to home</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}