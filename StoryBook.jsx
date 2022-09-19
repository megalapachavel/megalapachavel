import React, { useState } from 'react'
import PublishedPost from './PublishedPost'
import './Storybook.css'
const StoryBook = () => {

  let [addFormDisplay,setAddFormDisplay] = useState(false);
  let [publishedDisplay,setPublishedDisplay] = useState(false);
  let [postTitle,setPostTitle] = useState('');
  let [postDetails,setPostDetails] = useState('');
  let [publishedPosts,setPublishedPosts] = useState([]);
  let [search,setSearch]= useState('')

  const addPosts = (event) => {
     event.preventDefault();
    setPublishedPosts([...publishedPosts,{
        title:postTitle,
        details:postDetails
    }])
    setPostTitle("");
    setPostDetails("");
  }

  return (
    <>
      <section>
          
          <div className='search'>
            <input type='search' onChange={(e) => setSearch(e.target.value)}></input>
            <button><i className="fa-sharp fa-solid fa-magnifying-glass fa-2x"></i> </button>      
            </div>

          <div className='button'>
             <div>
              <button onClick={() => {setAddFormDisplay(true)}}>New Post</button>
            </div>
            <div>
              <button onClick={() => setPublishedDisplay(true)}>Published</button>
            </div>
          </div>
          
          <div className='display'>
            <div>
              {
              addFormDisplay ? (<form onSubmit={addPosts}>
                <div><input type='text' value={postTitle} placeholder='Title' onChange={(e) => setPostTitle(e.target.value)}></input></div>
                <div><textarea value={postDetails} onChange={(e) => setPostDetails(e.target.value)}></textarea></div>
                <div> <button type='submit'>Publish</button></div>
                </form>) : null
              } 
            </div>
            <div>
             {
              publishedDisplay ?  <PublishedPost value={publishedPosts} search={search}/> : null
             } 
            </div>
          </div>


      </section>
    
    </>
  )
}

export default StoryBook