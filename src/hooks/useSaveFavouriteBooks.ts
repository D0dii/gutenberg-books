export default function useSaveFavouriteBooks(book: Book, favourites: Book[]) {
  if (favourites?.filter((favourite: Book) => favourite.id === book.id).length > 0) {
    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites.filter((favourite: Book) => favourite.id !== book.id))
    );
  } else {
    localStorage.setItem("favourites", JSON.stringify([...favourites, book]));
  }
}
