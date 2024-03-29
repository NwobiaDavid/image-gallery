import React, { useState } from "react";

const ImageSearch = ({searchText}) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }


  return (
    <div className=" max-w-sm rounded overflow-hidden pt-3 mb-6 mx-auto flex items-center place-content-center">
      
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center mx-1 rounded-lg border-2 border-blue-500 py-1">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 mx-1 bg-blue-500 hover:bg-blue-700 text-sm  text-white py-2 px-3 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
