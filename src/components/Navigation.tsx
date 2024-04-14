import { Link } from "@tanstack/react-router";

export default function Navigation() {
  return (
    <div className="p-2 flex gap-2 bg-secondary rounded-lg">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/favourites" className="[&.active]:font-bold">
        Favourites
      </Link>{" "}
    </div>
  );
}
