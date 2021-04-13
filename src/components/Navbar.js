import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
// function Navbar() {
//   return (
//     <AuthContext.Consumer>
//       {(authContext) => (
//         <ThemeContext.Consumer>
//           {(themeContext) => {
//             const { isAuthenticated, toggleAuth } = authContext;
//             const { isLightTheme, light, dark } = themeContext;
//             const theme = isLightTheme ? light : dark;
//             return (
//               <nav style={{ background: theme.ui, color: theme.syntax }}>
//                 <h1>Context app</h1>
//                 <span onClick={toggleAuth}>
//                   {isAuthenticated ? "Logged in" : "Logged Out"}
//                 </span>
//                 <ul>
//                   <li>Home</li>
//                   <li>About</li>
//                   <li>Contact</li>
//                 </ul>
//               </nav>
//             );
//           }}
//         </ThemeContext.Consumer>
//       )}
//     </AuthContext.Consumer>
//   );
// }

function Navbar() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context app</h1>
      <span onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged Out"}
      </span>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
export default Navbar;
