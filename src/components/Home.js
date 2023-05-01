import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';
import Pagination from './Pagination';
import Particles from 'particles.js';

function Home() {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [imagesPerPage] = useState(9);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${
        process.env.REACT_APP_PIXABAY_API_KEY
      }&q=${term}&image_type=photo&pretty=true&page=${currentPage + 1}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term, currentPage]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isloading && images.length === 0 && (
        <h1
          className="text-5xl 
               txt-center mx-auto mt-32"
        >
          Not Found
        </h1>
      )}

      {isloading ? (
        <h1 className="text-6xl  text-center mx-auto mt-32 ">
          Load<span className="text-blue-500">ing...</span>
        </h1>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cos-2 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}

      <Pagination
        className="text-white"
        pageCount={10} // you should replace 10 with the actual number of pages based on the API response
        onPageChange={handlePageClick}
      />
    </div>
  );
}

export default Home;
