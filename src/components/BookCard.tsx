import { Link } from "@tanstack/react-router";
import useGetFavouriteBooks from "hooks/useGetFavouriteBooks";
import { useState } from "react";
import updateFavouriteBooks from "utils/updateFavouriteBooks";

import type { Book } from "../types";

interface props {
  book: Book;
  readonly?: boolean;
}

export default function BookCard({ book, readonly = false }: props) {
  const favourites = useGetFavouriteBooks();
  const [favourite, setFavourite] = useState(
    favourites.filter((favouriteBook: Book) => favouriteBook.id === book.id)
      .length > 0,
  );
  function handleStarClick() {
    updateFavouriteBooks(book);
    setFavourite(!favourite);
  }
  return (
    <div className="flex flex-col gap-2 items-center bg-secondary pb-2 rounded-md overflow-hidden w-52">
      <Link
        to={book.formats["text/html"]}
        target="_blank"
        className="w-full"
        title="Read book"
      >
        <img
          alt={`${book.title} book`}
          className="object-cover w-52 h-80 block"
          src={book.formats["image/jpeg"]}
        />
      </Link>
      <div className="flex items-center gap-1 justify-between w-full h-full px-2">
        <div className="w-full">
          <h2 className="py-2">{book.title}</h2>
          <h3 className="text-sm">
            {book.authors.map((author) => (
              <div key={author.name}>{author.name}</div>
            ))}
          </h3>
        </div>
        {readonly ? (
          <i className="fa-solid fa-star" />
        ) : favourite ? (
          <button onClick={handleStarClick}>
            <i
              className="fa-solid fa-star cursor-pointer"
              title="Remove from favourites"
              data-testid="favourite"
            />
          </button>
        ) : (
          <button onClick={handleStarClick}>
            <i
              className="fa-regular fa-star cursor-pointer"
              title="Add to favourites"
              data-testid="not-favourite"
            />
          </button>
        )}
      </div>
    </div>
  );
}
