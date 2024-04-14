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
    <div className="text-center px-24">
      <div className="flex gap-4 justify-center items-baseline bg-primary sticky top-0 pt-10 pb-4">
        <SearchBar isPending={isPending} />
        <Navigation />
        <Pager
          search={search}
          page={page}
          next={data && data.next !== null ? true : false}
          isPending={isPending}
        />
      </div>
      {isPending ? (
        <div className="py-16 grid gap-8 xs:gap-16 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {bookFallbacks.map((bookFallback) => bookFallback)}
        </div>
      ) : (
        <>
          {data && (
            <h2 className="text-3xl mt-8">
              Showing {data?.results.length} of {data?.count} results
            </h2>
          )}
          <div className="py-16 grid gap-8 xs:gap-16 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data && data.results.map((result) => <Book key={result.id} book={{ ...result }} />)}
          </div>
        </>
      )}
    </div>
  );
}
