import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GuideView = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">User Guide</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Getting Started</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Navigate to the Photo Booth page</li>
                <li>Select a frame from the available options</li>
                <li>Position yourself in front of the camera</li>
                <li>Click the capture button to start the 3-second countdown</li>
                <li>Your photo will be automatically captured and displayed</li>
              </ol>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time camera preview</li>
                <li>Multiple frame options</li>
                <li>3-second countdown timer</li>
                <li>Instant photo preview</li>
                <li>Download individual or all photos</li>
                <li>Print photos as PDF</li>
                <li>Send photos via email</li>
              </ul>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl lg:col-span-2">
            <div className="card-body">
              <h2 className="card-title">Troubleshooting</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Camera not working?</h3>
                  <p>Make sure you've granted camera permissions and that no other application is using the camera.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Photos not downloading?</h3>
                  <p>Check your browser's download settings and make sure pop-ups are not blocked.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email not sending?</h3>
                  <p>In the demo version, emails are simulated. In production, you would need to configure EmailJS.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuideView;