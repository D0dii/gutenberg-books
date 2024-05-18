export interface Book {
  id: number;
  title: string;
  authors: Author[];
  bookshelves: string[];
  formats: {
    ["text/html"]: string;
    ["image/jpeg"]: string;
  };
  languages: string[];
  subjects: string[];
  translators: Author[];
  copyright?: boolean;
}

interface Author {
  birthYear?: number;
  name: string;
  deathYear?: number;
}
