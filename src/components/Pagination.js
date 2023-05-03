import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={"flex justify-center mt-6 text-white py-4"}
      pageClassName={"mx-2 text-lg hover:text-blue-600"}
      activeClassName={"text-blue-600 font-bold"}
      previousClassName={"mr-2 text-white text-lg hover:text-blue-600"}
      nextClassName={"ml-2 text-white text-lg hover:text-blue-600"}
      disabledClassName={"text-gray-400"}
      breakClassName={"ml-2"}
      breakLabel={"..."}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      previousLabel={"Previous"}
      nextLabel={"Next"}
    />
  );
}

export default Pagination;
