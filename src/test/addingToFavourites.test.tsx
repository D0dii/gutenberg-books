import "@testing-library/jest-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import BookCard from "components/BookCard";
import type { Book } from "src/types";
import { render } from "test/test-utils";

const dummyBook: Book = {
  title: "The Great Gatsby",
  authors: [{ name: "F. Scott Fitzgerald" }],
  bookshelves: ["Best Books Ever"],
  formats: {
    "text/html": "https://www.gutenberg.org/ebooks/64317",
    "image/jpeg":
      "https://www.gutenberg.org/cache/epub/64317/pg64317.cover.medium.jpg",
  },
  languages: ["en"],
  subjects: ["fiction"],
  translators: [],
  id: 5,
};

it("test changing star when adding/deleting to/from favourites", async () => {
  // ARRANGE
  render(<BookCard book={dummyBook} />);

  // ACT
  const notFavouriteStar = await screen.findByTestId("not-favourite");
  await waitFor(() => {
    expect(notFavouriteStar).toBeInTheDocument();
  });
  fireEvent.click(notFavouriteStar);
  const favouriteStar = await screen.findByTestId("favourite");
  await waitFor(() => {
    expect(favouriteStar).toBeInTheDocument();
  });
  fireEvent.click(favouriteStar);
  const notFavouriteStar2 = await screen.findByTestId("not-favourite");
  await waitFor(() => {
    expect(notFavouriteStar2).toBeInTheDocument();
  });
});

it("test adding/deleting to/from favourites", async () => {
  // ARRANGE
  render(<BookCard book={dummyBook} />);

  const favourites = localStorage.getItem("favourites");

  expect(favourites).toBe("[]");

  const notFavouriteStar = await screen.findByTestId("not-favourite");
  await waitFor(() => {
    expect(notFavouriteStar).toBeInTheDocument();
  });
  fireEvent.click(notFavouriteStar);

  const favourites2 = JSON.parse(
    localStorage.getItem("favourites") as string,
  ) as Book[];
  expect(favourites2).toEqual([dummyBook]);
  const favouriteStar = await screen.findByTestId("favourite");
  await waitFor(() => {
    expect(favouriteStar).toBeInTheDocument();
  });
  fireEvent.click(favouriteStar);

  const favourites3 = localStorage.getItem("favourites");
  expect(favourites3).toBe("[]");
});
