import type { Book } from "../types";

export default function updateFavouriteBooks(book: Book) {
  const favouritesFromStorage = localStorage.getItem("favourites");
  let favourites: Book[];
  if (favouritesFromStorage !== null) {
    favourites = JSON.parse(favouritesFromStorage) as Book[];
  } else {
    favourites = [];
  }
  if (
    favourites.filter((favourite: Book) => favourite.id === book.id).length > 0
  ) {
    localStorage.setItem(
      "favourites",
      JSON.stringify(
        favourites.filter((favourite: Book) => favourite.id !== book.id),
      ),
    );
  } else {
    localStorage.setItem("favourites", JSON.stringify([...favourites, book]));
  }
}
