import bookCover from "../assets/imgs/example_book_cover.png";
import pdf from "../assets/pdf/audyt.pdf";

export const allBooks: Book[] = [
    {
        id: 1,
        title: "Siema",
        description: "Descirption of the book",
        img: bookCover,
        pdf: pdf,
    },
    {
        id: 2,
        title: "The Hunger Games",
        description: "Descirption of the book",
        img: bookCover,
        pdf: pdf,
    },
    {
        id: 3,
        title: "The Hunger Games",
        description: "Descirption of the book",
        img: bookCover,
        pdf: pdf,
    },
    {
        id: 4,
        title: "The Hunger Games",
        description: "Descirption of the book",
        img: bookCover,
        pdf: pdf,
    },
    {
        id: 5,
        title: "The Hunger Games",
        description: "Descirption of the book",
        img: bookCover,
        pdf: pdf,
    },
    {
        id: 6,
        title: "The Hunger Games",
        description: "Descirption of the book",
        img: bookCover,
        pdf: pdf,
    },
];

export const popularBooks = allBooks.slice(0, 3);
export const trendingBooks = allBooks.slice(4, 6);
