import { HomeIcon, StarIcon } from "assets";
import { CloseIconStyled, BackgroundExample } from "./styles";
import { useSelector } from "react-redux";

export const About = () => {
  const count = useSelector((state) => state.counter.count);
  const books = useSelector((state) => state.books.books);

  console.log(books);
  return (
    <>
      {!books && <div>NULL</div>}

      {books && (
        <ul>
          {books.map((book) => (
            <li key={book.isbn13}>{book.title}</li>
          ))}
        </ul>
      )}
      <h1 style={{ textAlign: "center" }}>{count}</h1>
      <h1>About Page</h1>
      <CloseIconStyled />
      <HomeIcon />
      <StarIcon />
      <BackgroundExample />
    </>
  );
};
