import { NavLink } from "react-router-dom";

export const Header = () => (
  <div>
  <div className="flex justify-start mt-5 mx-20">
    <nav>
      <NavLink className="text-lg text-gray-600 hover:text-blue-800 font-semibold"  to="/details">
        TV Show
      </NavLink>
      <NavLink className="ml-5 text-lg text-gray-600 hover:text-blue-800 font-semibold" to="/">
        Home
      </NavLink>
    </nav>
    </div>
    <hr className="mx-2" />
  </div>
);