import { Route, Routes } from "react-router-dom";
import { RoutesPath } from "../routes";

// PAGES
import StyleGuide from "./StyleGuide";
import Cards from "./Cards";

// const RouteWithoutTemplate = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => (
//         <>
//           <Component {...props} />
//         </>
//       )}
//     />
//   );
// };

export default () => (
  <Routes>
    <Route path="/" element={<h1>Hello Word</h1>} />
    <Route path="/style-guide/cards" element={<Cards />} />
    <Route path="/style-guide" element={<StyleGuide />} />
    
    {/* <Redirect to={Routes.NotFound.path} /> */}
  </Routes>
);
