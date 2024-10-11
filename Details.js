import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../Contexts/AppContext';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const { posts, editPost } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === parseInt(id));

  const [isEditing, setIsEditing] = useState(false);
  const [newBody, setNewBody] = useState('');

  useEffect(() => {
    if (post) {
      setNewBody(post.body);
    }
  }, [post]);

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleEdit = () => {
    const updatedPost = {
      id: post.id,
      body: newBody,
    };
    editPost(updatedPost);
    setIsEditing(false);
  };

  return (
    <div className='container mx-auto px-4 py-5 flex justify-center items-center flex-col gap-10'>
      <div className='w-10/12 h-auto text-center'>
        <h1 className='mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
            Details
          </span>
        </h1>

        {isEditing ? (
          <>
            <textarea
              value={newBody}
              onChange={(e) => setNewBody(e.target.value)}
              className='border rounded p-1 w-full h-24'
            />
          </>
        ) : (
          <>
            <p className='text-xl py-8 font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-cyan-500'>
              {post.body}
            </p>
          </>
        )}
      </div>

      <div className='w-[500px] h-auto flex justify-around items-center'>
        {isEditing ? (
          <button
            onClick={handleEdit}
            className='relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
          >
            <span className='relative px-5 py-2 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              Save
            </span>
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className='relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
          >
            <span className='relative px-5 py-2 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              Edit
            </span>
          </button>
        )}

        <button
          onClick={() => navigate(-1)}
          className='relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
        >
          <span className='relative px-5 py-2 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            Back
          </span>
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
