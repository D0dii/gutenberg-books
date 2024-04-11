import { useState } from "react";
import useGetFavouriteBooks from "../hooks/useGetFavouriteBooks";
import useSaveFavouriteBooks from "../hooks/useSaveFavouriteBooks";

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
    <div className="flex flex-col gap-2 items-center bg-white pb-2 rounded-2xl overflow-hidden">
      <img alt={`Image of ${book.title} book`} className="w-full h-72" src={book.formats["image/jpeg"]}></img>

      <div className="flex items-center gap-1 justify-between w-full h-full px-2">
        <div className="w-full">
          <h2>{book.title}</h2>
          <h3>
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
        {/* {favourite === true ? (
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
        )} */}
      </div>
    </div>
  );
}
