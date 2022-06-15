import { Cards as CardsIcon } from "phosphor-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavBar } from "../../components/Navbars";

import { RoutesComponents, RoutesPages } from "../../routes";

export default function LayoutStyleGuide() {
  const [active, setActive] = useState(RoutesPages.StyleGuide.name);

  const optionSideBar = [
    {
      path: "",
      name: RoutesPages.StyleGuide.name,
      icon: RoutesPages.StyleGuide.icon,
    },
    {
      path: RoutesComponents.Blogs.path,
      name: RoutesComponents.Blogs.name,
      icon: RoutesComponents.Blogs.icon,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="pt-12 lg:flex">
        <div className="flex flex-col w-full px-4 py-8 overflow-y-auto border-b lg:border-r lg:h-screen lg:w-64 bg-white">
          <div className="flex flex-col justify-between mt-6">
            <aside>
              <ul>
                <li>
                  {optionSideBar.map((props, index) => (
                    <Link
                      key={index}
                      className={`flex items-center px-4 py-2 mt-5 text-gray-700 ${
                        props.name === active && "bg-gray-100"
                      } rounded-md`}
                      to={props.path}
                      onClick={() => setActive(props.name)}
                    >
                      {props.icon}

                      <span className="mx-4 font-medium">{props.name}</span>
                    </Link>
                  ))}
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
