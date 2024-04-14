import { useState } from "react";
import useGetFavouriteBooks from "../hooks/useGetFavouriteBooks";
import useSaveFavouriteBooks from "../hooks/useSaveFavouriteBooks";
import { Link } from "@tanstack/react-router";

type props = { book: Book } & { readonly?: boolean };

export default function Book({ book, readonly = false }: props) {
  let favourites = useGetFavouriteBooks();
  const [favourite, setFavourite] = useState(
    favourites.filter((favourite: Book) => favourite.id === book.id).length > 0
  );
  function handleStarClick() {
    favourites = useGetFavouriteBooks();
    useSaveFavouriteBooks(book, favourites);
    setFavourite(!favourite);
  }
  return (
    <div className="flex flex-col gap-2 items-center bg-secondary pb-2 rounded-md overflow-hidden w-42">
      <Link to="/book" search={{ ID: book.id }} className="w-full" title="Go to book page">
        <img
          alt={`Image of ${book.title} book`}
          className="object-cover"
          src={book.formats["image/jpeg"]}
        ></img>
      </Link>
      <div className="flex items-center gap-1 justify-between w-full h-full px-2">
        <div className="w-full">
          <h2 className="py-2">{book.title}</h2>
          <h3 className="text-sm">
            {book.authors.map((author) => (
              <div>{author.name}</div>
            ))}
          </h3>
        </div>
        {readonly === true ? (
          <i className="fa-solid fa-star"></i>
        ) : favourite === true ? (
          <i
            className="fa-solid fa-star cursor-pointer"
            onClick={handleStarClick}
            title="remove from favourites"
          ></i>
        ) : (
          <i
            className="fa-regular fa-star cursor-pointer"
            onClick={handleStarClick}
            title="add to favourites"
          ></i>
        )}
      </div>
    </div>
  );
}
