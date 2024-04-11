export default function useGetFavouriteBooks() {
  let favourites: any = localStorage.getItem("favourites");
  if (favourites) {
    favourites = JSON.parse(favourites);
  } else {
    favourites = [];
  }
  return favourites as Book[];
}
