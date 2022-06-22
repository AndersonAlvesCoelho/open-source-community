import { Route, Routes, Navigate } from "react-router-dom";
import { RoutesComponents, RoutesPages } from "../routes";

export default () => (
  <Routes>
    <Route path="/" element={<Navigate replace to={RoutesPages.StyleGuide.path} />} />
    <Route
      path={RoutesPages.StyleGuide.path}
      element={RoutesPages.StyleGuide.layouts}
    >
      <Route index element={RoutesPages.StyleGuide.component} />
      <Route
        path={RoutesComponents.Blogs.path}
        element={RoutesComponents.Blogs.component}
      />
    </Route>

  </Routes>
);
