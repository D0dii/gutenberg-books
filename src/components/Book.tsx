import { useState } from "react";
import useGetFavouriteBooks from "../hooks/useGetFavouriteBooks";
import useSaveFavouriteBooks from "../hooks/useSaveFavouriteBooks";

export default function Book({
  id,
  title,
  authors,
  bookshelves,
  formats,
  languages,
  subjects,
  translators,
  copyright,
}: Book) {
  let favourites = useGetFavouriteBooks();
  const [favourite, setFavourite] = useState(
    favourites.filter((favourite: Book) => favourite.id === id).length > 0
  );
  function handleStarClick() {
    favourites = useGetFavouriteBooks();
    useSaveFavouriteBooks(
      { id, title, authors, bookshelves, formats, languages, subjects, translators, copyright },
      favourites
    );
    setFavourite(!favourite);
  }
  return (
    <div className="flex flex-col gap-2 items-center bg-white pb-2 rounded-2xl overflow-hidden">
      <img alt={`Image of ${title} book`} className="w-full h-72" src={formats["image/jpeg"]}></img>

      <div className="flex items-center gap-1 justify-between w-full h-full px-2">
        <div className="w-full">
          <h2>{title}</h2>
          <h3>
            {authors.map((author) => (
              <div>{author.name}</div>
            ))}
          </h3>
        </div>
        {favourite === true ? (
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
