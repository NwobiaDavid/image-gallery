// import React, { useState, useEffect }  from "react";
// import ImageCard from "./ImageCard";
// import ImageSearch from "./ImageSearch";

// function imagePage() {

// 	const [images, setImages] = useState([]);
// 	const [isloading, setIsLoading] = useState(true);
// 	const [term, setTerm] = useState("");
  
// 	useEffect(() => {
// 	  fetch(
// 		`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
// 	  )
// 		.then((res) => res.json())
// 		.then((data) => {
// 		  setImages(data.hits);
// 		  setIsLoading(false);
// 		})
// 		.catch((err) => console.log(err));
// 	}, [term]);

// return (
// 	// <div>
// 	// <h1>image display here</h1>
// 	// </div>



// <div className="container mx-auto">
// <ImageSearch searchText={(text) => setTerm(text)} />

// {!isloading && images.length === 0 && (
//   <h1
// 	className="text-5xl 
//  txt-center mx-auto mt-32"
//   >
// 	Not Found
//   </h1>
// )}

// {isloading ? (
//   <h1 className="text-6xl  text-center mx-auto mt-32 ">
// 	Load<span className="text-blue-500">ing...</span>
//   </h1>
// ) : (
//   <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cos-2 gap-4">
// 	{images.map((image) => (
// 	  <ImageCard key={image.id} image={image} />
// 	))}
//   </div>
// )}
// </div>


// );
// }

// export default imagePage;
