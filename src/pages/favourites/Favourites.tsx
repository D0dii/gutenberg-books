import Book from "components/Book";
import useGetFavouriteBooks from "hooks/useGetFavouriteBooks";

export default function Favourites() {
  let favourites = useGetFavouriteBooks();
  return (
    <div className="text-center px-24 bg-primary">
      <div className="py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {favourites && favourites.map((book) => <Book key={book.id} book={{ ...book }} readonly={true} />)}
      </div>
    </div>
  );
}
