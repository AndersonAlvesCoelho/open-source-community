import { Route, Routes } from "react-router-dom";
import {  RoutesPages } from "../routes";

export default () => (
  <Routes>
    <Route
      path={RoutesPages.StyleGuide.path}
      element={RoutesPages.StyleGuide.layouts}
    >
      <Route index element={RoutesPages.StyleGuide.component} />
      <Route
        path={RoutesPages.Typography.path}
        element={RoutesPages.Typography.component}
      />
      <Route
        path={RoutesPages.Blogs.path}
        element={RoutesPages.Blogs.component}
      />
    </Route>

    {/* <Redirect to={Routes.NotFound.path} /> */}
  </Routes>
);
