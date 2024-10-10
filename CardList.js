import React, { useContext, useState } from 'react';
import { AppContext } from '../Contexts/AppContext';
import Card from './Card';
import Pages from '../Components/Pages';
import CreateCard from '../Components/CreatCard';

const CardList = () => {
  const { posts, currentPage, postsperPage } = useContext(AppContext);
  const indexOfLastPost = currentPage * postsperPage;
  const indexOfFirstPost = indexOfLastPost - postsperPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setModalOpen(true)}
        type='button'
        className='Create Post text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"'
      >
        Create Post
      </button>
      {isModalOpen && <CreateCard onClose={() => setModalOpen(false)} />}
      <div className='container mx-auto px-2 py-5'>
        <div className='flex flex-wrap justify-center items-center gap-4'>
          {currentPosts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Pages />
    </>
  );
};

export default CardList;
