const API_ENDPOINTS = {
    auth: {
        login: "/auth/login",
        refreshToken: "/auth/refreshToken",
        register: "/auth/register",
        regusterByAdmin: "/auth/registerByAdmin",
        changePassword: "/auth/changePassword",
    },
    books: {
        getBooks: "/books",
        getBook: "/books/book",
        getBooksHistory: "/books/history",
        addBook: "/books/create",
        editBook: "/books/update",
        deleteBook: "/books/delete",
    },
    user: {
        getUser: "/user",
        deleteUser: "/user/delete",
        updateUser: "/user/update",
    },
    userLibrary: {
        getUserLibrary: "/userLibrary",
        getUserLibraryHistory: "/userLibrary/history",
        updateBookInLibrary: "/userLibrary/update",
    },
    users: {
        getUsers: "/users",
    },
};

export default API_ENDPOINTS;
