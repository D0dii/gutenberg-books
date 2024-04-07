type Book = {
  id: number;
  title: string;
  authors: Author[];
  bookshelves: string[];
  formats: any;
  languages: string[];
  subjects: string[];
  translators: Author[];
  copyright?: boolean;
};

type Author = {
  birthYear?: number;
  name: string;
  deathYear?: number;
};
