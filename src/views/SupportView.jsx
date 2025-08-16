import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportView = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Support</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">
              <h2 className="card-title">Contact Us</h2>
              <p>If you have any questions or need assistance, please reach out to us:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Instagram:</strong> @logayastudio</p>
                <p><strong>Phone:</strong> +62 81388314678</p>
                <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">
              <h2 className="card-title">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="checkbox" /> 
                  <div className="collapse-title font-medium">
                    Is my data secure?
                  </div>
                  <div className="collapse-content">
                    <p>All photos are processed locally in your browser and are not stored on any servers. Your privacy is our priority.</p>
                  </div>
                </div>
                
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="checkbox" /> 
                  <div className="collapse-title font-medium">
                    Can I use this on mobile devices?
                  </div>
                  <div className="collapse-content">
                    <p>Yes, LogayaStudio is fully responsive and works on smartphones, tablets, and desktop computers.</p>
                  </div>
                </div>
                
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="checkbox" /> 
                  <div className="collapse-title font-medium">
                    What browsers are supported?
                  </div>
                  <div className="collapse-content">
                    <p>We support the latest versions of Chrome, Firefox, Safari, and Edge. For best results, use Chrome.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="btn btn-primary">Send Message</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupportView;