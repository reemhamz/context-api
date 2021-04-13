import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

// function BookList() {
//     return (
//         <ThemeContext.Consumer>{(context) => {
//             const { isLightTheme, light, dark } = context;
//             const theme = isLightTheme ? light : dark;
//             return (
//                 <div className="bookList" style={{color: theme.syntax, background: theme.bg}}>
//                 <ul>
//                   <li style={{background: theme.ui}}>Harry Potter</li>
//                   <li style={{background: theme.ui}}>Twilight</li>
//                   <li style={{background: theme.ui}}>The Alchemist</li>
//                 </ul>
//               </div>
//             );
//       }}

//       </ThemeContext.Consumer>
//     );
// }

function BookList() {
  const { books } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  console.log(books);
  return (
    <div
      className="bookList"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return <li style={{ background: theme.ui }}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
}
export default BookList;
