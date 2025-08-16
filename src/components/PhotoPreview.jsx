import React, { useState } from "react";
import PrintService from "../utils/PrintService";
import EmailService from "../utils/EmailService";

const PhotoPreview = ({ photos, setPhotos }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const downloadPhotos = () => {
    PrintService.downloadPhotos(photos);
  };

  const sendEmail = () => {
    const email = prompt("Enter email address:");
    if (email && email.includes("@")) {
      EmailService.sendEmail(
        email,
        "LogayaStudio Photos",
        "Here are your captured photos!",
        photos
      );
    } else if (email) {
      alert("Please enter a valid email address");
    }
  };

  const printPhotos = () => {
    PrintService.printPhotos(photos);
  };

  const removePhoto = (index) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  const clearPhotos = () => {
    if (confirm("Are you sure you want to clear all photos?")) {
      setPhotos([]);
      location.reload(); // Reload to reset the state
    }
  };

  if (photos.length === 0) return null;

  return (
    <div className="mt-8 ">
      <h3 className="text-xl font-bold mb-4 text-primary">
        Captured Photos ({photos.length})
      </h3>
      {/* Mengubah grid menjadi flex column dan mengatur ukuran foto */}
      <div className="flex flex-col space-y-0">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group mx-auto w-fit " // Mengatur lebar maksimal
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-[300px] h-[300px] rounded-xl bg-base-200 " // Mengatur tinggi tetap 300px
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
                <button
                  onClick={() => removePhoto(index)}
                  className="btn btn-circle btn-xs btn-error"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons - Always visible */}
      <div className="flex flex-wrap gap-4 pt-6 justify-center">
        <button onClick={downloadPhotos} className="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Download All
        </button>
        <button onClick={sendEmail} className="btn btn-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Send via Email
        </button>
        <button onClick={printPhotos} className="btn btn-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
              clipRule="evenodd"
            />
          </svg>
          Print
        </button>
        <button onClick={clearPhotos} className="btn btn-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default PhotoPreview;
