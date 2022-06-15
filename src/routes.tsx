import { Cards as CardsIcon } from "phosphor-react";
import LayoutStyleGuide from "./pages/layouts/LayoutStyleGuide";
import StyleGuide from "./pages/styleGuide";
import Blogs from "./pages/styleGuide/Blogs";

// PAGES
export const RoutesPages = {
  StyleGuide: {
    path: "style-guide",
    name: "Style Guide",
    icon: null,
    component: <StyleGuide />,
    layouts: <LayoutStyleGuide />
  },
};

// COMPONENTES
export const RoutesComponents = {
  Blogs: {
    name: "Blogs",
    path: "blogs",
    icon: <CardsIcon />,
    component: <Blogs />,
  },
};
