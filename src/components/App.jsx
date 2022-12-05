import React, { useEffect, useState } from 'react';
import css from './styles.module.css';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageGalleryApi } from 'api/ImageGalleryApi';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ImageGalleryApi.loadImages()
      .then(res => res.json())
      .then(images => setImages(images.hits));
  }, []);

  const onSubmit = opt => {
    opt.preventDefault();
    let formData = new FormData(opt.target);
    let searchValue = formData.get('search');
    setSearchValue(searchValue);
    ImageGalleryApi.loadImages(searchValue)
      .then(res => res.json())
      .then(images => setImages([...images.hits]));
  };

  const loadNext = () => {
    setPageIndex(prev => prev + 1);
    setIsLoading(true);
    ImageGalleryApi.loadImages(searchValue, pageIndex + 1)
      .then(res => res.json())
      .then(images => {
        setImages(prev => [...prev, ...images.hits]);
        setIsLoading(false);
      });
  };

  return (
    <div className={css.App}>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} />
      {isLoading ? <Loader /> : <Button loadNext={loadNext} />}
    </div>
  );
};
