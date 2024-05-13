import { useNavigate } from "@tanstack/react-router";
import type { ChangeEvent } from "react";
import { Route } from "routes/index.lazy";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({ isPending }: { isPending: boolean }) {
  const { search } = Route.useSearch();
  const miliseconds = 1000;
  const navigate = useNavigate();
  const searchChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      void navigate({ search: { search: e.target.value } });
    },
    miliseconds,
  );
  return (
    <div>
      <input
        className="border-none rounded-md p-2 text-primary outline-none placeholder:text-secondary placeholder:italic"
        type="search"
        placeholder="Search for a book..."
        onChange={searchChange}
        defaultValue={search}
        disabled={isPending}
      />
    </div>
  );
}
