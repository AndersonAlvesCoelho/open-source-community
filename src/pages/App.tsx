import { Route, Routes } from "react-router-dom";
import { RoutesComponents, RoutesPages } from "../routes";

export default () => (
  <Routes>
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

    {/* <Redirect to={Routes.NotFound.path} /> */}
  </Routes>
);
