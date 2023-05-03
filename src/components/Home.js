import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';
import Pagination from './Pagination';


function Home() {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [totalPages, setTotalPages] = useState(0);


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
        setImagesLoaded(true);
        setTotalPages(Math.ceil(data.totalHits / 20));
      })
      .catch((err) => console.log(err));
  }, [term, currentPage]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="container mx-auto bg-slate-900 w-[100vw] h-100">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isloading && images.length === 0 && (
        <h1
          className="text-5xl text-white
               text-center mx-auto mt-32"
        >
          Not Found
        </h1>
      )}

      {isloading ? (
        <div className='h-[100vh]'>
          <h1 className="text-6xl text-white h-[100vh] text-center mx-auto mt-32 ">
            Load<span className="text-blue-500">ing...</span>
          </h1>
        </div>
      ) : (
        <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cos-2 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
         {imagesLoaded && (
          <Pagination
            className="text-white"
            pageCount={totalPages} // you should replace 10 with the actual number of pages based on the API response
            onPageChange={handlePageClick}
            disabled={images.length === 0}
          />
        )}
        </>
        
      )}
    </div>
  );
}

export default Home;
