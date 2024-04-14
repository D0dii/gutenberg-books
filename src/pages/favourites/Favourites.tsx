import Book from "components/Book";
import Navigation from "components/Navigation";
import useGetFavouriteBooks from "hooks/useGetFavouriteBooks";

export default function Favourites() {
  let favourites = useGetFavouriteBooks();
  return (
    <>
      <div className="flex gap-4 justify-center items-baseline bg-primary fixed w-full top-0 pt-10 pb-4">
        <Navigation />
      </div>
      <div className="text-center px-24 bg-primary mt-20">
        <div className="py-16 grid gap-8 xs:gap-16 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {favourites && favourites.map((book) => <Book key={book.id} book={{ ...book }} readonly={true} />)}
        </div>
      </div>
    </>
  );
}
