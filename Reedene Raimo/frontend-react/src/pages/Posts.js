import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";
/* import { Button } from 'antd'; */
import FormItemLabel from "antd/lib/form/FormItemLabel";
import { Button, Input, Space, Table, Typography, Layout, Form } from "antd";
function Posts() {
<img width="1000" height="600" text src="Sheet.jpg"></img>
  const [title, setTitle] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja
  useEffect(() => {
    dispatch(updatePosts([
      {
        id: 1,
        title: "Test-prefetched-array-1"
      },
      {
        id: 2,
        title: "Test-prefetched-array-2",
        date: new Date(1111, 1, 1),
        birthday: new Date(4444, 11, 17),
        author: "Jesus"
      },
      {
        id: 3,
        title: "Test-prefetched-array-3",
        date: new Date(1800, 5, 5),
        birthday: new Date(1769, 8, 15),
        author: "Napoleon"
      },
      {
        id: 4,
        title: "Test-prefetched-array-4",
        date: new Date(1945, 4, 30),
        birthday: new Date(1889, 4, 20),
        author: "Adolf"
      },
    ]))
  }, [])

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };


  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title,
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(addPost(newPost));
  };

  console.log({ inputRef });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>

      {state.posts.data.map((e) => (
        <li key={e.id}>
          {e.id} {e.title}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removePost(e.id))}
          >
            🐑;  
            <button type="submit">BeEeEeE-E</button>
            
            <Button type="primary" style={{ background: "#191970", borderColor: "white" }}>
            OoPs!
            </Button>   
            
            {/* <>
              <Button type="primary">OoPs!</Button>
            </> */}
            
          </span>
        </li>
      ))}
    </div>
  );
}

export default Posts;
