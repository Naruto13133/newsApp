import React, { lazy ,Suspense, useMemo} from "react";
// import NoteContainer from "../NoteContainer/Notecontainer";
import { Outlet } from "react-router-dom";
import CategotyNavbar from "../Navbar/CategoryNavBar";
// import NoteContainer from "../NoteContainer/Notecontainer";
// import { useUrlParam } from "../../Utils/UrlParam/UrlParamContext";
const NoteContainer = React.lazy(()=> import("../NoteContainer/Notecontainer") )
const Home = () => {

  return (
    <div>
      <br></br>
      <h4>CATEGORIES</h4>
      <CategotyNavbar></CategotyNavbar>
      <br></br>
      <br></br>
            <Outlet/>
      <br></br>
      <br></br>
      <h1>Home</h1>
      <Suspense fallback={<p>This is Loading</p>}>
        <NoteContainer /> 
      </Suspense>  


     
    </div>
  );
};

export default Home;
