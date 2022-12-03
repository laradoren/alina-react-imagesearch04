let PARAMS = {
  baseUri: "https://pixabay.com/api/",
  key: "31787862-8c3ec3176188eb2de4367d00c"
}

export const ImageGalleryApi = {
  loadImages(q = null, page = 1) {
    let fetchUri = `${PARAMS.baseUri}?key=${PARAMS.key}`;
    if(q) fetchUri = `${fetchUri}&q=${q}`;
    fetchUri = `${fetchUri}&page=${page}`
    return fetch(fetchUri);
  }
}
