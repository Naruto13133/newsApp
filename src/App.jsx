import React,{ Suspense,useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User/User";
import Navbr from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Searchednws from "./components/SearchedNews/Searchednws";
import DefaultErrorPage from "./DefaultErrorPage";
import { AuthProvider } from "./Utils/Authentication/Auth";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import Profile from "./components/User/Profile";
import { SelectedNews } from "./components/SelectedNews/SelectedNews";


// import { useUrlParam,UrlParamContextProvider } from "./Utils/UrlParam/UrlParamContext"; 
const NoteContainer = React.lazy(()=> import("./components/NoteContainer/Notecontainer") )

function App() {
  
  return (
    <>
    
      
      <AuthProvider>
        <Navbr />

        <Routes>
          <Route path="/" element={ <Suspense fallback={<p>This is Loading</p>}>
                <Home  /> 
      </Suspense> } >
            <Route key={`business`} path={`business`} element={
          <Suspense fallback={<p>This is Loading</p>}>
                <NoteContainer  category="business" /> 
      </Suspense>  } />
            <Route key={`entertainment`} path={`entertainment`} element={
              <Suspense fallback={<p>This is Loading</p>}>
              <NoteContainer  category="entertainment" /> 
            </Suspense>  
            } />
            <Route key={`general`} path={`general`} element={
              <Suspense fallback={<p>This is Loading</p>}>
              <NoteContainer  category="general" /> 
            </Suspense>  
            } />
            <Route key={'health'} path={`health`} element={
              <Suspense fallback={<p>This is Loading</p>}>
              <NoteContainer  category="health" /> 
            </Suspense>  
            } />
            <Route key={'science'} path={`science`} element={
              <Suspense fallback={<p>This is Loading</p>}>
              <NoteContainer  category="science" /> 
            </Suspense>  
            } />
            <Route key={'sports'} path={`sports`} element={
              <Suspense fallback={<p>This is Loading</p>}>
              <NoteContainer  category="sports" /> 
            </Suspense>  
            } />
            <Route key={'technology'} path={`technology`} element={
              <Suspense fallback={<p>This is Loading</p>}>
              <NoteContainer  category="technology" /> 
            </Suspense>  
            } />
          </Route>  
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/Search" element={<Searchednws />}>
            <Route path=":topic" element={<Searchednws />} />
          </Route>
          <Route path="/*" element={<DefaultErrorPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/news" element={<SelectedNews />}>
            <Route path=":newsurl" element={<SelectedNews />} />
          </Route>
        </Routes>
        
      </AuthProvider>
      
    </>
  );
}

export default App;
