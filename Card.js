import React, { useContext, useState } from 'react';
import { AppContext } from '../Contexts/AppContext';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Card = ({ post }) => {
  const { removeCard, editPost } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(post.title);

  const handleEdit = () => {
    const updatedPost = {
      id: post.id,
      title: newTitle,
      body: post.body,
    };
    editPost(updatedPost);
    setIsEditing(false); 
  };

  return (
    <div className='card'>
      <img
        src='https://img.freepik.com/premium-vector/word-blog-vector-banner-with-text-colored-rainbow_100655-2724.jpg'
        alt='Image Not Found'
      />
      <div className='w-full h-12'>
        {isEditing ? (
          <input
            type='text'
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)}
            className='border rounded p-1'
          />
        ) : (
          <h3>{post.title}</h3>

        )}
      </div>

      <Link to={`/post/${post.id}`} className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
        <span className='relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
          Detail
        </span>
      </Link>

      <p>Mon, 21 Dec 2020 14:57 GMT</p>
      <div className='w-full h-[50px] flex justify-around items-center'>
        {isEditing ? (
          <button onClick={handleEdit} className='relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'>
            <span className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              Save
            </span>
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className='relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'>
            <span className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              Edit
            </span>
          </button>
        )}

        <button onClick={() => removeCard(post.id)} type='button' className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center'>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Card;
