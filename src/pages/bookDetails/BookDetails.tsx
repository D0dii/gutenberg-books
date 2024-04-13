import { useFetch } from "hooks/useFetch";
import { Route } from "routes/book.lazy";

export default function BookDetails() {
  let { ID } = Route.useSearch();
  if (!ID) return <div>Invalid ID</div>;
  const { data, isPending, error } = useFetch(`https://Gutendex.com/books?ids=${ID}`);
  if (error) return <>{error}</>;
  if (!isPending) {
    console.log(data);
  }
  return (
    <div className="text-center px-24 pt-4 flex flex-col items-center">
      <h2 className="text-4xl mb-1">{data?.results[0].title}</h2>
      <h3 className="text-2xl mb-4">{data?.results[0].authors.map((author) => <div>{author.name}</div>)}</h3>
      <img
        alt={`Image of ${data?.results[0].title} book`}
        className="w-72 h-72 rounded-xl"
        src={data?.results[0].formats["image/jpeg"]}
      ></img>
      <a
        href={data?.results[0].formats["text/html"]}
        target="_blank"
        className="mt-4 p-2 bg-secondary rounded-lg"
      >
        Read book
      </a>
    </div>
  );
}
