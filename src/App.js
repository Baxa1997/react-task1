import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList/ProductList';
import './index.css';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [allPost, setAllPost] = useState(false);
  
  
  const getPosts = () => {
    axios.get('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/categories')
    .then(response => {
      setPosts(response.data);
    }).catch(err => {
      console.log('Error Happened', err);
    })
  }
  useEffect(() => {
    getPosts()
  }, [])
  
  const getPosts2 = () => {
    axios.get('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/products')
    .then(response => {
      setPost(response.data);
    })
  }
  useEffect(() => {
    getPosts2()
  }, [])
  
  
  
  
  
 
  
  return (
    <>
     <Header posts={posts}/> 
     <ProductList title={"Новинки"} post={post.filter(post => post?.status == 'new')}/>
     <button className="seePosts" onClick={() => setAllPost(!allPost)}>{allPost ? 'Show less' : 'Show all'}</button>
     <ProductList title={"Выбор покупателей"} post={allPost ? post : post.slice(0, 6).map(post => post)} />
    </>
  );
}

export default App;
