import React,{useState} from "react";

const FrameSelector = ({ onSelect,selectedFrame }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const frames = [
    { id: 1, thumbnail: "/frame-01.png" },
    { id: 2, thumbnail: "/frame-02.png" },
    { id: 3, thumbnail: "/frame-03.png" },
    { id: 4, thumbnail: "/frame-04.png" },
  ];

//logic to handle pagination
  const framePerPage = 2; // Number of frames to show per page
  const totalPages = Math.ceil(frames.length / framePerPage);
  const startIndex = currentPage * framePerPage;
  const visibleFrames = frames.slice(startIndex, startIndex + framePerPage);
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }

  return (
    <div className="space-y-4">
    <div className="grid grid-row-2 gap-4 mt-4">
      {visibleFrames.map((frame) => (
        <div
          key={frame.id}
          onClick={() => onSelect(frame)}
          className={`
            bg-base-200 rounded-xl overflow-hidden cursor-pointer shadow-lg 
            border-2 transition-all
            ${selectedFrame?.id === frame.id 
              ? 'border-primary scale-105' 
              : 'border-transparent hover:border-primary/50'}
          `}
        >
          <img
            src={frame.thumbnail}
            alt={`Frame ${frame.id}`}
            className="w-full object-contain bg-checkerboard"
            style={{
              backgroundSize: "20px 20px",
              backgroundImage: `linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
            }}
          />
          <p className="text-center text-sm font-semibold py-2">{`Frame ${frame.id}`}</p>
        </div>
      ))}
      {/* Navigate Button */}
      <div className="flex justify-between items-center px-2">
        <button
        onClick={prevPage}
        className="btn btn-circle btn-sm btn-ghost"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-sm font-medium">
          {currentPage + 1} / {totalPages}
        </span>
        <button
          onClick={nextPage}
          className="btn btn-circle btn-sm btn-ghost"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
};

export default FrameSelector;

