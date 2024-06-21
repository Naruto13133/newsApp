// import React, { useEffect } from "react";
// import Note from "../Notes/note";
// // import TestCard from '../testCard/TestCard'
// // import { useUrlParam } from "../../Utils/UrlParam/UrlParamContext";

// function NoteContainer({ country, data, category , numberOfArticle }) {
//   console.log("3wdskvhddvkjdsnvuodsvbdsuvbds");
//   console.log(country);
//   console.log(data);
//   console.log("3wdskvhddvkjdsnvuodsvbdsuvbds");
//   const [children, setChildren] = React.useState([]);
//   const [heading,setHeading] = React.useState("");

//   // const handleDelete = (idToDelete) => {
//   //   if (children.length >= 1) {
//   //     setChildren(children.filter((child) => child.id !== idToDelete));
//   //   }
//   // };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
//         let response;
//         //!! is use to check string has some value and (void 0) is use at the place of undefined
//         if
//         ( (!!country  && country != void 0 )
//           && (!!data && data != undefined )
//           && (!!category  && category != undefined) )
//            {
//             setHeading(`News Related to '${data}' in ${category}`)
//           response = await fetch(
//             // `https://newsapi.org/v2/top-headlines?q=${data}&country=${country}&category=${category}&shortby=popularity&apiKey=e2c8e407cc2644c186c706b876dda0e1`
//             `https://newsapi.org/v2/top-headlines?country=in&category=${category}&shortby=popularity&apiKey=e2c8e407cc2644c186c706b876dda0e1`
//           );
//         } else if (
//            (!!data  && data != undefined )
//           && (category === "" || category === undefined) 
//         ) {
//           setHeading(`Result for '${data}' `)
//           response = await fetch(
//             `https://newsapi.org/v2/top-headlines?q=${data}&country=${country}&apiKey=e2c8e407cc2644c186c706b876dda0e1`
//           );
//         }else if (
//           (country != "" && country != undefined)
//           && (!!category  && category != undefined) 
//           && (data === "" || data === undefined) 
//         ) {
//           response = await fetch(
//             setHeading( `${category}`)
//             `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e2c8e407cc2644c186c706b876dda0e1`
//           );
//         }else if (
//           (data != "" && data != undefined)
//           && (!!country  && country != undefined )
//           && (category === "" || category === undefined) 
//         ) {
//           response = await fetch(
//             `https://newsapi.org/v2/top-headlines?q=${data}&country=${country}&apiKey=e2c8e407cc2644c186c706b876dda0e1`
//           );
//         } else if (
//           (data === "" || data === undefined) && (country != "" || country != undefined) ) {
//           response = await fetch(
//             `https://newsapi.org/v2/top-headlines?country=in&apiKey=e2c8e407cc2644c186c706b876dda0e1`
//           );
//         }
//         //  response = await fetch(`https://newsapi.org/v2/top-headlines?q=${data}&apiKey=e2c8e407cc2644c186c706b876dda0e1`);

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const jsonData = await response.json();
//         console.log(jsonData.articles);
//         setChildren(
//           jsonData.articles.filter(
//             (element) => element.title != null || element.description != null
//           )
//         );
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, [country, data, category]);

//   // const data = {
//   //   key1: 'value1',
//   //   key2: 'value2'
//   // };

//   // const fetchData = async () => {
//   //      try {fetch("http://localhost:8080/verify", {
//   //   method: 'POST',
//   //   headers: {
//   //     'Content-Type': 'application/json'
//   //   },
//   //   body: JSON.stringify(data)
//   // })
//   // .then(response => {
//   //   if (!response.ok) {
//   //     throw new Error('Network response was not ok');
//   //   }
//   //   return response.json();
//   // })
//   // .then(data => {
//   //   console.log('Success:', data);
//   // })
//   // .catch(error => {
//   //   console.error('Error:', error);
//   // });} catch (error) {
//   //       console.error('Error fetching data:', error);
//   //     }
//   //   }
//   // console.log(children[0].url)
  

//   return (
//     <div
//       style={{
//         fontsize: "x-large",
//         fontWeight: 700,
//       }}
//       className="note-container"
//     >
//       <h2>{heading}</h2>

//       <div className=" note-container_notes custom-scroll">
//         <div>
//           {/* <button 
//           style={{
//             border:'none',
//             borderRadius:'20%',
//             width :80,
//             height:50,
//             fontSize:'x-large',
//             fontWeight:600,
//             backgroundColor:'darksalmon',
//             color:'khaki'
//           }}
//           onClick={fetchData}>ADD</button> */}
//           {/* <button onClick={fetchData}>ADD</button> */}
//         </div>
//         <div
//           className="b"
//           // This is how we make the display grid
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))",
//             justifyContent: "center",
//             justifyItems: "center",
//           }}
//         >
//           {/* { children
//             .filter(
//               (child) =>
//                 child.url != undefined &&
//                 child.title != "[Removed]" &&
//                 child.title != null &&
//                 child.title != "" &&
//                 child.url != null &&
//                 child.url != "" &&
//                 child.description != "[Removed]" &&
//                 child.description != null &&
//                 child.description != "" &&
//                 child.url != undefined &&
//                 child.title != undefined &&
//                 child.description != undefined
//             )
//             .map((child) => (
//               <Note
//                 ImageUrl={child.urlToImage}
//                 url={child.url}
//                 head={child.title}
//                 text={child.description}
//                 time={child.author + "  " + child.publishedAt}
//                 id={child.url}
//                 key={child.url}
//                 child={child}
//                 onDelete={() => handleDelete(child.id)}
//               />
//             ))} */}

// {children.length > 0 ? (
//   children
//     .filter(
//       (child) =>
//         child.url != undefined &&
//         child.title != "[Removed]" &&
//         child.title != null &&
//         child.title != "" &&
//         child.url != null &&
//         child.url != "" &&
//         child.description != "[Removed]" &&
//         child.description != null &&
//         child.description != "" &&
//         child.url != undefined &&
//         child.title != undefined &&
//         child.description != undefined
//     )
//     .map((child) => (
//       <Note
//         ImageUrl={child.urlToImage}
//         url={child.url}
//         head={child.title}
//         text={child.description}
//         time={child.author + "  " + child.publishedAt}
//         id={child.url}
//         key={child.url}
//         child={child}
//         onDelete={() => handleDelete(child.id)}
//       />
//     ))
// ) : (
//   <p>News not found</p>
// )}

//         </div>
//       </div>
//     </div>
//   );
// }

// export default NoteContainer;
//44444444444444444444444444444444444444444444444444444
// import React, { useEffect, useState,lazy,Suspense,useMemo } from "react";
// import Note from "../Notes/note";

// function NoteContainer({ data, category }) {
//   const [children, setChildren] = useState([]);
//   const [heading, setHeading] = useState("");

  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e2c8e407cc2644c186c706b876dda0e1`;

//         if (data && category) {
//           url += `&q=${data}&category=${category}`;
//           setHeading(`News Related to '${data}' in ${category}`);
//         } else if (data) {
//           url += `&q=${data}`;
//           setHeading(`Result for '${data}'`);
//         } else if (category) {
//           url += `&category=${category}&pageSize=6`;
//           setHeading(`${category}`);
//         }

//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const jsonData = await response.json();
//         setChildren(
//           jsonData.articles.filter(
//             (element) =>
//               element.title != null ||
//               element.description != null ||
//               element.url != null 
//               // element.urlToImage != null
//           )
//         );
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     lazy(fetchData());
//   }, []);
  

//   return (
//     <div 
//     style={{
//       fontsize:'x-large',
//       fontWeight:700
//     }} className="note-container">
//       <h2>{heading}</h2>
//       <div 
//       className="note-container_notes custom-scroll">
//         <div className="b"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))",
//           justifyContent: "center",
//           justifyItems: "center",
//         }}>
//           {children.length > 0 ? (
//             children.map((child) => (
//               <Note
//                 // ImageUrl={child.urlToImage}
//                 url={child.url}
//                 head={child.title}
//                 text={child.description}
//                 time={child.author + "  " + child.publishedAt}
//                 // id={child.url}
//                 key={child.url}
//                 // child={child}
//               />
//             ))
//           ) : (
//             <p>News not found</p>
//           )}
//         </div>
//       </div>
//     </div>
    
//   );
// }

// export default NoteContainer;


import React, { useEffect, useState, useMemo } from "react";
import Note from "../Notes/note";

function NoteContainer({ data, category }) {
  const [heading, setHeading] = useState("");
  const [children, setChildren] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e2c8e407cc2644c186c706b876dda0e1`;

        if (data && category) {
          url += `&q=${data}&category=${category}`;
          setHeading(`News Related to '${data}' in ${category}`);
        } else if (data) {
          const regex = /[^&=]+(?=&|$)/g;
          const matches = data.match(regex);
          
          url += `&q=${data}`;
        matches[1] != void 0 ||  setHeading(`Result for '${matches[0]}' `);
        matches[1] === void 0 ||  setHeading(`Result for '${matches[0]}' in '${matches[1]}'`);


        } else if (category) {
          url += `&category=${category}&pageSize=6`;
          setHeading(`${category}`);
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setChildren(
          jsonData.articles.filter(
            (element) =>
              element.title != null ||
              element.description != null ||
              element.url != null 
              // element.urlToImage != null
          )
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Removed lazy function call here
  }, [data, category]);

  // Memoize the filtered children array
  const filteredChildren = useMemo(() => {
    return children.filter(child => 
      child.title !== null || child.description !== null || child.url !== null
      // child.urlToImage !== null
    );
  }, [children]);

  return (
    <div 
    style={{
      fontsize:'x-large',
      fontWeight:700
    }} className="note-container">
      <h2>{heading}</h2>
      <div 
      className="note-container_notes custom-scroll">
        <div className="b"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))",
          justifyContent: "center",
          justifyItems: "center",
        }}>
          {filteredChildren.length > 0 ? (
            filteredChildren.map((child) => (
              <Note
                // ImageUrl={child.urlToImage}
                url={child.url}
                head={child.title}
                text={child.description}
                time={child.author + "  " + child.publishedAt}
                // id={child.url}
                key={child.url}
                // child={child}
              />
            ))
          ) : (
            <p>News not found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteContainer;
