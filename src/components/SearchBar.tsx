import { useNavigate } from "@tanstack/react-router";
import { useDebouncedCallback } from "use-debounce";
import { Route } from "routes/index.lazy";

export default function SearchBar({ isPending }: { isPending: boolean }) {
  let { search } = Route.useSearch();
  const navigate = useNavigate();
  const searchChange = useDebouncedCallback((e: any) => {
    navigate({ search: { search: e.target.value } });
  }, 1000);
  return (
    <div>
      <input
        className="border-none rounded-md p-2 text-primary outline-none placeholder:text-secondary placeholder:italic"
        type="search"
        placeholder="Search for a book..."
        onChange={searchChange}
        defaultValue={search ?? ""}
        disabled={isPending}
      ></input>
    </div>
  );
}
