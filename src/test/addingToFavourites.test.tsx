import { fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "test/test-utils";
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
  await waitFor(() => {
    const notFavouriteStar = screen.getByTestId("not-favourite");
    expect(notFavouriteStar).toBeInTheDocument();
    fireEvent.click(notFavouriteStar);
  });
  await waitFor(() => {
    const favouriteStar = screen.getByTestId("favourite");
    expect(favouriteStar).toBeInTheDocument();
    fireEvent.click(favouriteStar);
  });
  await waitFor(() => {
    const notFavouriteStar = screen.getByTestId("not-favourite");
    expect(notFavouriteStar).toBeInTheDocument();
  });
});

test("test adding/deleting to/from favourites", async () => {
  // ARRANGE
  render(<Book book={dummyBook} />);

  let favourites = localStorage.getItem("favourites");

  expect(favourites).toBe("[]");

  await waitFor(() => {
    const notFavouriteStar = screen.getByTestId("not-favourite");
    expect(notFavouriteStar).toBeInTheDocument();
    fireEvent.click(notFavouriteStar);
  });

  let favourites2 = JSON.parse(localStorage.getItem("favourites") as string);
  expect(favourites2).toEqual([dummyBook]);

  await waitFor(() => {
    const favouriteStar = screen.getByTestId("favourite");
    expect(favouriteStar).toBeInTheDocument();
    fireEvent.click(favouriteStar);
  });

  let favourites3 = localStorage.getItem("favourites");
  expect(favourites3).toBe("[]");
});
