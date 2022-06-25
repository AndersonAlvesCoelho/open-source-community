import { Cards, TextAa } from "phosphor-react";
import LayoutStyleGuide from "./pages/layouts/LayoutStyleGuide";
import StyleGuide from "./pages/styleGuide";
import Blogs from "./pages/styleGuide/Blogs";
import Typography from "./pages/styleGuide/Typography";

// PAGES
export const RoutesPages = {
  StyleGuide: {
    path: "style-guide",
    name: "Style Guide",
    icon: null,
    component: <StyleGuide />,
    layouts: <LayoutStyleGuide />
  },
  Blogs: {
    name: "Blogs",
    path: "blogs",
    icon: <Cards />,
    component: <Blogs />,
  },
  Typography: {
    name: "Typography",
    path: "typographys",
    icon: <TextAa />,
    component: <Typography />,
  },
};


