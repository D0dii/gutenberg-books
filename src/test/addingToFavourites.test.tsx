import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Book from "components/Book";

const dummyBook = {
  title: "The Great Gatsby",
  authors: [{ name: "F. Scott Fitzgerald" }],
  bookshelves: ["Best Books Ever"],
  formats: {},
  languages: ["en"],
  subjects: ["fiction"],
  translators: [],
  id: 5,
};

test("test changing star when adding/deleting to/from favourites", async () => {
  // ARRANGE
  render(<Book book={dummyBook} />);

  // ACT
  const notFavouriteStar = screen.getByTestId("not-favourite");
  expect(notFavouriteStar).toBeInTheDocument();
  fireEvent.click(notFavouriteStar);
  const favouriteStar = screen.getByTestId("favourite");
  expect(favouriteStar).toBeInTheDocument();
  fireEvent.click(favouriteStar);
  const notFavouriteStar2 = screen.getByTestId("not-favourite");
  expect(notFavouriteStar2).toBeInTheDocument();
});

test("test adding/deleting to/from favourites", async () => {
  // ARRANGE
  render(<Book book={dummyBook} />);

  let favourites = localStorage.getItem("favourites");

  expect(favourites).toBe("[]");

  const notFavouriteStar = screen.getByTestId("not-favourite");
  expect(notFavouriteStar).toBeInTheDocument();
  fireEvent.click(notFavouriteStar);

  let favourites2 = JSON.parse(localStorage.getItem("favourites") as string);
  expect(favourites2).toEqual([dummyBook]);

  const favouriteStar = screen.getByTestId("favourite");
  expect(favouriteStar).toBeInTheDocument();
  fireEvent.click(favouriteStar);

  let favourites3 = localStorage.getItem("favourites");
  expect(favourites3).toBe("[]");
});
