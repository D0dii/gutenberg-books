import Book from "components/Book";
import BookFallback from "components/BookFallback";
import Navigation from "components/Navigation";
import Pager from "components/Pager";
import SearchBar from "components/SearchBar";
import { useFetch } from "hooks/useFetch";
import { Route } from "routes/index.lazy";

export default function Home() {
  const bookFallbacks = Array.from({ length: 20 }, (_, i) => <BookFallback key={i} />);
  let { page, search } = Route.useSearch();
  page = page || 1;
  search = search || "";

  const { data, isPending, error } = useFetch(`https://Gutendex.com/books/?page=${page}&search=${search}`);
  if (error) return <>{error}</>;
  if (data) {
    console.log(data);
  }
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-baseline bg-primary sticky top-0 pt-10 pb-4 w-full">
        <SearchBar isPending={isPending} />
        <Navigation />
        <Pager
          search={search}
          page={page}
          next={data && data.next !== null ? true : false}
          isPending={isPending}
        />
      </div>
      <div className="text-center px-24">
        {isPending ? (
          <div className="py-16 grid gap-8 xs:gap-16 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-20 justify-items-center">
            {bookFallbacks.map((bookFallback) => bookFallback)}
          </div>
        ) : (
          <>
            {data && (
              <h2 className="text-3xl mt-8">
                Showing {data?.results.length} of {data?.count} results
              </h2>
            )}
            <div className="py-16 grid gap-8 xs:gap-16 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
              {data && data.results.map((result) => <Book key={result.id} book={{ ...result }} />)}
            </div>
          </>
        )}
      </div>
    </>
  );
}
