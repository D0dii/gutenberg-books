import { useNavigate, useSearch } from "@tanstack/react-router";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  let params = useSearch({ strict: false });
  const navigate = useNavigate();

  const searchChange = useDebouncedCallback((e: any) => {
    navigate({ search: { search: e.target.value } });
  }, 1000);
  return (
    <div className="bg-secondary">
      <input
        className="border-solid border-green-400 border-2"
        type="search"
        placeholder="Search.."
        onChange={searchChange}
        defaultValue={params.search ?? ""}
      ></input>
    </div>
  );
}
