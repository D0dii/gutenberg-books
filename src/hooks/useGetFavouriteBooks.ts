import type { Book } from "../types";

export default function useGetFavouriteBooks(): Book[] {
  const favouritesFromStorage = localStorage.getItem("favourites");
  let favourites: Book[];
  if (favouritesFromStorage !== null) {
    favourites = JSON.parse(favouritesFromStorage) as Book[];
  } else {
    favourites = [];
  }
  return favourites;
}
