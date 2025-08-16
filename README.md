# LGS-Photoboot - Web-based Photo Booth Application

A modern web-based photo booth application built with React that allows users to take photos, apply frames, and share their memories.

## Features

- 📸 Real-time webcam capture
- 🖼️ Multiple decorative frame options
- ⏱️ Countdown timer for perfect shots
- 📧 Email sharing capability
- 🖨️ Print functionality
- 💾 Download options
- 📱 Responsive design

## Technologies Used

- React.js
- Tailwind CSS
- DaisyUI
- React Webcam

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rayfarandi/LGS-Photoboot.git
```

2. Navigate to the project directory:
```bash
cd LGS-Photoboot
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
LGS-Photoboot/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── FrameSelector.jsx
│   │   ├── Header.jsx
│   │   ├── PhotoBooth.jsx
│   │   └── PhotoPreview.jsx
│   ├── controllers/
│   │   └── PhotoController.js
│   ├── models/
│   │   └── PhotoModel.jsx
│   ├── utils/
│   │   ├── EmailService.js
│   │   └── PrintService.js
│   ├── views/
│   │   ├── HomeView.jsx
│   │   └── PhotoBoothView.jsx
│   └── App.jsx
└── public/
    └── frames/
```

## Usage

1. Open the application in your browser
2. Select a frame from the available options
3. Click the camera button to start the countdown
4. Strike a pose and let the app capture your moment
5. Download, print, or email your photos

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - rayfarandi1994@gmail.com.com
Project Link: https://github.com/rayfarandi/LGS-Photoboot