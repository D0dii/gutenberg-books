import { useSearch } from "@tanstack/react-router";
import Book from "components/Book";
import Pager from "components/Pager";
import SearchBar from "components/SearchBar";
import { useFetch } from "hooks/useFetch";

export default function Home() {
  let params = useSearch({ strict: false });
  let page = params.page ?? 1;
  let search = params.search ?? "";

  const { data, isPending, error } = useFetch(`https://Gutendex.com/books/?page=${page}&search=${search}`);

  if (isPending)
    return (
      <div className="text-center px-24 bg-primary">
        <SearchBar />
        Loading...
      </div>
    );
  if (error) return <>{error}</>;
  if (data) {
    console.log(data);
  }
  return (
    <div className="text-center px-24 bg-primary">
      <SearchBar />
      <div className="py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data && data.results.map((result) => <Book key={result.id} book={{ ...result }} />)}
      </div>
      <Pager search={search} page={page} next={data && data.next !== null ? true : false} />
    </div>
  );
}
