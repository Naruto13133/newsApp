import React from "react";
import { useParams } from "react-router-dom";
import NoteContainer from "../NoteContainer/Notecontainer";
import Home from "../Home/Home";

const Searchednws = () => {
  const { topic } = useParams();

  const data = topic;

  let jsx;

  if (data === void 0 || data.length === 0) {
    jsx =(
      <><Home />
      {/* <NoteContainer category="business" country="in" data={data} numberOfArticle="6" />  */}
      </>);
  } else {
    jsx =(
    <><NoteContainer country="in" data={data} numberOfArticle="10" />
    <br></br>
    {/* <h1>Business News</h1> */}
    {/* <NoteContainer category="business" country="in" data={data} numberOfArticle="6" /> */}
     </>
    );
  }
  // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
  // console.log(data)
  return <div>{jsx}</div>;
};

export default Searchednws;
