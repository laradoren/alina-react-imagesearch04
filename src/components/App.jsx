import React from "react";
import css from './styles.module.css';
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { ImageGalleryApi } from "api/ImageGalleryApi";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      pageIndex: 1,
      searchValue: "",
      isLoading: false
     };
    this.onSubmit = this.onSubmit.bind(this);
    this.loadNext = this.loadNext.bind(this);
  }

  componentDidMount() {
    ImageGalleryApi.loadImages().then(
      res => res.json()
    ).then(images => this.setState({images: images.hits}));
  }

  onSubmit(opt) {
    opt.preventDefault();
    let formData = new FormData(opt.target);
    let searchValue = formData.get("search");
    this.setState({
      ...this.state,
      searchValue: searchValue,
    });
    ImageGalleryApi.loadImages(searchValue).then(
      res => res.json()
    ).then(images => this.setState({images: [...images.hits]}));
  }

  loadNext() {
    this.setState({
      ...this.state,
      pageIndex: this.state.pageIndex + 1,
      isLoading: true
    });
    ImageGalleryApi.loadImages(this.state.searchValue, this.state.pageIndex + 1).then(
      res => res.json()
    ).then(images => this.setState({images: [...this.state.images, ...images.hits], isLoading: false}));
  }

  render () {
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading ? <Loader /> : <Button loadNext={this.loadNext}/>}
      </div>
    );
  }
};
