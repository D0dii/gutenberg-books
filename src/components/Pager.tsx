export default function Pager({ page, next }: { page: number; next: boolean }) {
  function handlePrevious() {
    let params = new URLSearchParams(window.location.search);
    params.set("page", (page - 1).toString());
    window.location.search = params.toString();
  }
  function handleNext() {
    let params = new URLSearchParams(window.location.search);
    params.set("page", (page + 1).toString());
    window.location.search = params.toString();
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
