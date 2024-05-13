import Book from "components/BookCard";
import Navigation from "components/Navigation";
import useGetFavouriteBooks from "hooks/useGetFavouriteBooks";

export default function Favourites() {
  const favourites = useGetFavouriteBooks();
  return (
    <>
      <div className="flex gap-4 justify-center items-baseline bg-primary sticky w-full top-0 pt-10 pb-4">
        <Navigation />
      </div>
      <div className="text-center px-24 bg-primary">
        {favourites.length === 0 && (
          <h2 className="text-3xl mt-8">No favourites yet</h2>
        )}
        <div className="py-16 grid gap-8 xs:gap-16 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
          {favourites.length > 0 &&
            favourites.map((book) => (
              <Book key={book.id} book={{ ...book }} readonly={true} />
            ))}
        </div>
      </div>
    </>
  );
}
