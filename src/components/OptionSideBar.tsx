import { useLocation } from "react-router-dom";

interface OptionSideBarProps {
  name: string;
  path: string;
  icon: any;
}

export default function OptionSideBar({
  name,
  path,
  icon,
}: OptionSideBarProps) {

  const location = useLocation();
  console.log();
  console.log(location.pathname);
  return (
    <>
      <a
        className={`flex items-center px-4 py-2 mt-5 text-gray-700 ${
          location.pathname.split("/style-guide/")[1] === path && "bg-gray-100"
        } rounded-md`}
        href={path}
      >
        {icon}

        <span className="mx-4 font-medium">{name}</span>
      </a>
    </>
  );
}
