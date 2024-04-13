import Book from "components/Book";
import Pager from "components/Pager";
import SearchBar from "components/SearchBar";
import { useFetch } from "hooks/useFetch";
import { Route } from "routes/index.lazy";

export default function Home() {
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
      <SearchBar isPending={isPending} />
      {isPending ? (
        <div className="mt-8 text-2xl">Loading...</div>
      ) : (
        <>
          {" "}
          <div className="py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data && data.results.map((result) => <Book key={result.id} book={{ ...result }} />)}
          </div>
          <Pager search={search} page={page} next={data && data.next !== null ? true : false} />
        </>
      )}
    </div>
  );
}
