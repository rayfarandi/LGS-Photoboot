import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhotoBooth from "../components/PhotoBooth";
import FrameSelector from "../components/FrameSelector";
import PhotoPreview from "../components/PhotoPreview";
import PhotoController from "../controllers/PhotoController";

const PhotoBoothView = () => {
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [isCompleted, setIsComplete] = useState(false);
  const photoController = new PhotoController();

  const handleFrameSelect = (frame) => {
    setSelectedFrame(frame);
  };

  const handleCapture = async (photoData) => {
    let newPhotos;
    if (selectedFrame) {
      const finalPhoto = await photoController.capturePhoto(
        photoData,
        selectedFrame
      );
      newPhotos = [...capturedPhotos, finalPhoto];
    } else {
      newPhotos = [...capturedPhotos, photoData];
    }

    setCapturedPhotos(newPhotos);

    // Check if we've reached 3 photos
    if (newPhotos.length >= 3) {
      setIsComplete(true);
    }
  };
  return (
    <div className="min-h-screen bg-base-300">
      <Header />
      <main className=" px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-center text-primary">
            Photo Booth
          </h1>

          {!isCompleted && (
            <div className="grid grid-cols-[240px,2fr] gap-6">
              {" "}
              
              {/* Frame Selector Section - Narrower */}
              <section className="bg-base-200 rounded-xl
               shadow-xl h-fit px-2">
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Select Frame
                </h2>
                <FrameSelector
                  onSelect={handleFrameSelect}
                  selectedFrame={selectedFrame}
                />
              </section>
              {/* Photo Booth Section - Wider */}
              <section className="bg-base-200 rounded-2xl shadow-xl px-2">
                <div className="aspect-square w-full">
                   <PhotoBooth
                  onCapture={handleCapture}
                  disabled={capturedPhotos.length >= 3}
                  selectedFrame={selectedFrame}
                />
                </div>
               
              </section>
              
            </div>
          )}

          <section className="bg-base-200 rounded-2xl p-6 shadow-xl">
            <PhotoPreview
              photos={capturedPhotos}
              setPhotos={setCapturedPhotos}
              isCompleted={isCompleted}
              className="w-24 h-24"
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PhotoBoothView;
