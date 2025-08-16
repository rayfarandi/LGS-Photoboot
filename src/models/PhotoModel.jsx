class PhotoModel {
  constructor(photoData, frame) {
    this.photoData = photoData;
    this.frame = frame;
  }

  getFinalPhoto() {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Create two new images
      const photo = new Image();
      const frame = new Image();
      
      // Set crossOrigin to anonymous to prevent CORS issues
      photo.crossOrigin = 'anonymous';
      frame.crossOrigin = 'anonymous';

      // When photo loads
      photo.onload = () => {
        // Set canvas size to match photo
        canvas.width = photo.width;
        canvas.height = photo.height;
        
        // Draw photo first
        ctx.drawImage(photo, 0, 0, canvas.width, canvas.height);
        
        // Load frame
        frame.src = this.frame.thumbnail;
        frame.onload = () => {
          // Draw frame on top
          ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
          
          // Get final image as base64
          const finalImage = canvas.toDataURL('image/jpeg');
          resolve(finalImage);
        };
      };

      // Set photo source
      photo.src = this.photoData;
    });
  }
}

export default PhotoModel;