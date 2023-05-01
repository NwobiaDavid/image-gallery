import React from 'react';
import { Link } from 'react-router-dom';
import imagePage from './imagePage';

const ImageCard = ({ image }) => {
const tags =image.tags.split(',');

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = image.largeImageURL;
  link.download = image.tags.split(',')[0];
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

    return ( 
       <div className='max-w-sm m-5 rounded-lg ml-12 hover:shadow-gray-100 cursor-pointer
        overflow-hidden lg:hover:scale-110  duration-500 shadow-lg shadow-blackgit'>


      <img src={image.webformatURL} className='w-full' alt="" 
      />
       
      

      <div className='px-6 py-4 text-white'>
        <div className="font-bold text-blue-700 text-xl">
          photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>

      <div className="px-6 py-4">
       {tags.map((tag, index )=> (
         <span key={index} className="inline-block bg-gray-200 rounded-full px-3 
         py-1 text-sm m-1 font-semibold text-gray-700 mr-2">
             #{tag}
         </span>
       ))}
      </div>

      <div className="px-6 my-3 pt-4 pb-2">
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download
        </button>
      </div>
    </div>
    
     )
}
 
export default ImageCard;