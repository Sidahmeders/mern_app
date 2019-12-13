import React from 'react';
import '../styles/home.css'
import Comment from './_partials/js/comment_partial';

function Home() {
    return(
       <div className="home-page">
         <h1>THE HOME PAGE</h1>
         <h2>Home i am comming home im coming home</h2>
         <Comment />
       </div> 
    )
}

export default Home;