import React, { useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';
import { useParams, useNavigate } from 'react-router-dom'; 

const PostDetails = () => {
  const { posts } = useContext(AppContext);
  const { id } = useParams(); 
  const navigate = useNavigate(); 

 
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='container mx-auto px-4 py-5 flex justify-center items-center flex-col gap-10'>
        <div className='w-10/12 h-auto text-center' >
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Details</span></h1>
        <p className='text-xl py-8 font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-cyan-500'>{post.body}</p>
        </div>
      <button
        onClick={() => navigate(-1)} 
        className='mt-2 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
      >
        Back
      </button>
    </div>
  );
};

export default PostDetails;
