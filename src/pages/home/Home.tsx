import Book from "components/Book";
import Pager from "components/Pager";
import SearchBar from "components/SearchBar";
import { useFetch } from "hooks/useFetch";

export default function Home() {
  let params = new URLSearchParams(window.location.search);
  let page = 1;
  if (params.get("page")) {
    page = parseInt(params.get("page") as string);
  }
  let search = "";
  if (params.get("search")) {
    search = params.get("search") as string;
  }

  const { data, isPending, error } = useFetch(`https://Gutendex.com/books/?page=${page}&search=${search}`);

  if (isPending) return <div>Loading...</div>;
  if (error) return <>{error}</>;
  if (data) {
    console.log(data);
  }
  return (
    <div className="text-center px-24 bg-primary">
      <SearchBar />
      <div className="py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data && data.results.map((result) => <Book key={result.id} {...result} />)}
      </div>
      <Pager page={page} next={data && data.next !== null ? true : false} />
    </div>
  );
}
