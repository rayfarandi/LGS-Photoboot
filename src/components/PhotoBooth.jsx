import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

const PhotoBooth = ({ onCapture, disabled,selectedFrame }) => {
  const [cameraError, setCameraError] = useState(null);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [showCamera, setShowCamera] = useState(true);
  const countdownInterval = useRef(null);
  const webcamRef = useRef(null);

  useEffect(() => {
    checkCameraSupport();

    return () => {
      if (countdownInterval.current) {
        clearInterval(countdownInterval.current);
      }
    };
  }, []);

  const checkCameraSupport = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Camera supported
    } else {
      setCameraError("Your browser doesn't support camera access.");
    }
  };

  const startCountdown = () => {
    if (disabled) {
      console.log("Disabled, cannot take more photos");
      return;
    }
    setIsCountingDown(true);
    setCountdown(3);
    setShowCamera(true); // Pastikan kamera tetap terlihat saat countdown

    countdownInterval.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval.current);
          takePhoto();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const takePhoto = () => {
    // Jangan ubah showCamera di sini, biarkan kamera tetap terlihat
    setTimeout(() => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          console.log("Photo captured successfully");
          onCapture(imageSrc);
        } else {
          console.error("Failed to capture photo");
        }
      }

      // Reset countdown state setelah capture
      setTimeout(() => {
        setIsCountingDown(false);
        setCountdown(3);
      }, 300);
    }, 100);
  };

  return (
    <div className="w-full h-full relative">
      {cameraError ? (
        <div className="alert alert-error shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{cameraError}</span>
        </div>
      ) : (
        <div className="relative w-full aspect-square border-4 rounded-xl overflow-hidden shadow-2xl bg-base-200 ">
          {/* Camera and Frame Container */}
          <div className="absolute inset-0">
            {showCamera && (
              <Webcam
                className="w-full h-full object-cover"
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  facingMode: "user",
                  width: { ideal: 1080 },
                  height: { ideal: 1080 },
                }}
              />
            )}
            
            {/* Frame Overlay */}
            {selectedFrame && (
              <img
                src={selectedFrame.thumbnail}
                alt="Selected Frame"
                className="absolute inset-0 w-full h-full pointer-events-none object-cover"
              />
            )}
          </div>

          

          {/* Countdown Overlay */}
          {isCountingDown && !disabled &&(
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <div className="text-white text-8xl font-bold animate-pulse">
                {countdown}
              </div>
            </div>
          )}

          {/* Capture Button */}
          {!isCountingDown && !disabled && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <div className="flex justify-center">
                <button
                  onClick={startCountdown}
                  disabled={isCountingDown || disabled}
                  className="btn btn-primary btn-circle w-16 h-16 hover:scale-110 transition-transform"
                  
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PhotoBooth;


