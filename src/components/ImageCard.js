import React from 'react';

const ImageCard = ({ image }) => {
const tags =image.tags.split(',');


    return ( 
        <div className='max-w-sm m-5 rounded ml-12
        overflow-hidden lg:hover:scale-110  duration-500 shadow-lg'>
      <img src={image.webformatURL} className='w-full' alt="" />
      <div className='px-6 py-4'>
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
    </div>
     )
}
 
export default ImageCard;