import React, { useState, useEffect } from 'react';
import SearchBar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import Button from '../Button';
import Loader from '../Loader';
import fetchImages from '../../services/api';
import s from './App.module.css';

export default function App() {
  const [modalContent, setModalContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [visibleImages, setVisibleImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    const getData = async () => {
      setIsLoading(true);

      try {
        const data = await fetchImages(searchQuery, page);
        setVisibleImages(visibleImages => [...visibleImages, ...data.hits]);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [searchQuery, page]);

  const toggleModal = () => {
    setOpenModal(openModal => !openModal);
  };

  const handleChangeQuery = query => {
    setSearchQuery(query);
    setPage(1);
    setVisibleImages([]);
  };

  const handleNextPage = () => {
    setPage(page => page + 1);
  };

  const modalContentSet = itemId => {
    const element = visibleImages.find(({ id }) => id === itemId);
    setModalContent(element.largeImageURL);
  };

  const isNotLastPage = visibleImages.length / page === 12;
  const btnEnable = visibleImages.length > 0 && !isLoading && isNotLastPage;
  return (
    <div className={s.App}>
      <SearchBar onSubmit={handleChangeQuery} />
      <>
        <ImageGallery
          images={visibleImages}
          onClick={toggleModal}
          onItemClick={modalContentSet}
        />

        {openModal && (
          <Modal largeImageURL={modalContent} onBackdrop={toggleModal} />
        )}
        {isLoading && <Loader />}

        {btnEnable && <Button name="Load more" onPress={handleNextPage} />}
      </>
    </div>
  );
}
