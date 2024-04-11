import { useNavigate } from "@tanstack/react-router";

export default function Pager({ search, page, next }: { search: string; page: number; next: boolean }) {
  const navigate = useNavigate();
  function handlePrevious() {
    navigate({ search: { search: search, page: page - 1 } });
  }
  function handleNext() {
    navigate({ search: { search: search, page: page + 1 } });
  }

  return (
    <div className="flex justify-center items-center gap-4 pb-4">
      {page > 1 && (
        <button onClick={handlePrevious} className="bg-secondary text-white px-4 py-2 rounded-lg">
          Previous
        </button>
      )}
      {next && (
        <button onClick={handleNext} className="bg-secondary text-white px-4 py-2 rounded-lg">
          Next
        </button>
      )}
    </div>
  );
}
