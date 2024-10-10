import React, { useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';
import { TiChevronLeft } from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';
const Pages = () => {
  const { posts, currentPage, setCurrentPage, postsperPage } =
    useContext(AppContext);
  const totalPages = Math.ceil(posts.length / postsperPage);
  const maxPageButtons = 5;
  const startPage =
    Math.floor((currentPage - 1) / maxPageButtons) * maxPageButtons + 1;
  const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='pages'>
      {/*------------------------------------------------------------- Previous Button-------------------------------------------------- */}
      {currentPage > 1 && (
        <button
          class='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-blue-700 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
          onClick={() => handleClick(currentPage - 1)}
        >
          {' '}
          <span class='relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-blue-700 rounded-md group-hover:bg-opacity-0'>
            <TiChevronLeft />
          </span>
        </button>
      )}

      {/* --------------------------------------------------Page Numbers----------------------------------------- */}
      {startPage > 1 && (
        <button
          class='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
          onClick={() => handleClick(1)}
        >
          1
        </button>
      )}

      {[...Array(endPage - startPage + 1)].map((_, index) => {
        const page = startPage + index;
        return (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        );
      })}

      {/*--------------------------------------------- Next Button---------------------------------- */}
      {endPage < totalPages && (
        <button onClick={() => handleClick(endPage + 1)}>
          <BsThreeDots />
        </button>
      )}
      {endPage < totalPages && (
        <button onClick={() => handleClick(totalPages)}>{totalPages}</button>
      )}
    </div>
  );
};

export default Pages;
