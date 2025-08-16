import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const HomeView = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80"
              style={{ backgroundImage: "url('/baner.PNG')", backgroundSize: "contain", backgroundPosition: "center" }} />
            
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to LogayaStudio</h1>
            <p className="my-4 text-lg">Capture Life's Best Moments!</p>
            <p className="mb-6">The ultimate photobooth app that makes every snapshot a celebration. Whether you're hosting a wedding, a birthday, a corporate event, or a casual get-together, our app is designed to deliver fun, creativity, and high-quality photos at your fingertips.</p>
            <Link to="/photobooth" className="btn btn-primary btn-lg">
              Try Now!
            </Link>
          </div>
        </section>
        
        {/* How it works section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">1️⃣</div>
                <h3 className="card-title">Choose Your Frame</h3>
                <p>Select from our beautiful collection of frames to personalize your photos.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">2️⃣</div>
                <h3 className="card-title">Get Ready & Smile</h3>
                <p>Position yourself in front of the camera and prepare for the countdown.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">3️⃣</div>
                <h3 className="card-title">Capture & Share</h3>
                <p>Capture your moment and instantly download, print, or email your photos.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomeView;