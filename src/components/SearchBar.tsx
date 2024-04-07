export default function SearchBar() {
  function searchChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    let params = new URLSearchParams(window.location.search);
    params.set("page", "1");
    params.set("search", e.target.value);
    console.log(params);
    window.location.search = params.toString();
  }
  return (
    <div className="bg-secondary">
      <input
        className="border-solid border-green-400 border-2"
        type="search"
        placeholder="Search.."
        value={new URLSearchParams(window.location.search).get("search") ?? ""}
        onChange={searchChange}
      ></input>
    </div>
  );
}
