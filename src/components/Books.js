import React, { useContext, Fragment } from "react";
import { Context } from "../context/Context";
import Book from "./Book";

const Books = () => {
  const { books, clearSearch, searchedBooks, searchString } =
    useContext(Context);

  return (
    <div className="container">
      <h5
        style={{ marginLeft: "20px", color: "#000", fontWeight: "200" }}
        className=" text-center mb-3"
      >
        {searchString === null ? (
          "All Books"
        ) : (
          <Fragment>
            {" "}
            Searching for '{searchString}'
            <span onClick={() => clearSearch()} class="btn btn-danger ml-2">
              X
            </span>
          </Fragment>
        )}
      </h5>

      <div className="row">
        {searchedBooks.length === 0
          ? books.map((book) => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })
          : searchedBooks.map((book) => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })}
      </div>
    </div>
  );
};

export default Books;
