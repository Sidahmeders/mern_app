import React, { useState, useEffect } from 'react';
import '../styles/comment_partial.css';
import axios from 'axios';


  //! addcomment form component
  const AddComment = ({pushcomment}) => {
    
    const [comment, setComment] = useState("");
    const [about, setAbout] = useState("Price")
  
    const handleSubmit = e => {
      e.preventDefault();
      pushcomment({about, comment})
      setComment('')
    }

    return(
     <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <label>___choose a topic</label>
        <select value={about} onChange={e => setAbout(e.target.value)}>
          <option value="Prices">Prices</option>
          <option value="Availability">Availability</option>
          <option value="Something Else">Something Else</option>
        </select>
        <br></br>
        <label>_____</label>
        <textarea placeholder="your Question goes here..." required maxLength="135"
                  value={comment} onChange={e => setComment(e.target.value)} 
        />
        <br></br>
       <label>__________</label>
        <button>Send</button>
      </form>
     </div>
    )
  }
  
  //! comment list component
  const CommentList = ({item}) => {

    return(
      <div className="comment">
      <h3>About: {item.about}</h3>
      <p>{item.comment}</p>
      </div>
    )
  }


function CommentSection() {

 const [comments, setComments] = useState([])
 
 useEffect(() => {
   const fetchData = async () => {
     try {
      const comment = await axios.get('https://sidozoldik.herokuapp.com/comments');
      setComments(comment.data)
     } catch(err) {
       console.log(err)
     }
   }
   fetchData();
 })

  const pushComment = value => {
    axios.post('http://localhost:5000/comments/add', value)
    .then(res => console.log(res))
  }

  return(
    <div className="comment-section">
      <p id="up">if you find our website helpful please leave a comment
        and let us know in which area we need to improve, 
      </p>
      <AddComment pushcomment={pushComment} />
      {comments.slice(0).reverse().map((item,index) => {
        return(
          <CommentList key={index} item={item} />
        )
      })}
      <a href="#up" className="up">take me up</a>
    </div>
  )
}


export default CommentSection;
