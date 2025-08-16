import PhotoModel from "../models/PhotoModel";

class PhotoController {
  constructor() {
    this.photos = [];
  }

  async capturePhoto(photoData, frame) {
    const photo = new PhotoModel(photoData, frame);
    const finalPhoto = await photo.getFinalPhoto();
    this.photos.push(photo);
    return finalPhoto;
  }

  getPhotos() {
    return this.photos.map((photo) => photo.getFinalPhoto());
  }

  clearPhotos() {
    this.photos = [];
  }
}

export default PhotoController;
