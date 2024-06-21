// import { useContext,createContext, useState } from "react";

// const UrlParamContext = createContext();

// // const [urlParam,setUrlParam] = useState(null); 

// export const UrlParamContextProvider =({children})=> {
//     const [urlParam,setUrlParam] = useState(null); 
//     const setNumberOfArticle =()=>{
//         setUrlParam(urlParam)
//     }
//     const setCountry =()=>{
//         setUrlParam(urlParam)
//     }
//     const setCategory =()=>{
//         setUrlParam(urlParam)
//     }
//     const setDefault =()=>{
//         setUrlParam(null)
//     }
//     return (
//         <UrlParamContext.Provider value={{urlParam,
//         setNumberOfArticle,
//         setCountry,
//         setCategory,
//         setDefault}}>

//         </UrlParamContext.Provider>
//     )
// }

// // export const useUrlParam = useContext(UrlParamContext);