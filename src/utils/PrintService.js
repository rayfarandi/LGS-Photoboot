import jsPDF from "jspdf";

const PrintService = {
  printPhotos: (photos) => {
    if (photos.length === 0) return;

    // Create a new PDF document with custom dimensions
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [50, 150], // 50 x 150 size in mm
    });

    //calculate dimensions
    const photoSize = 50; // 5cm width and height for each photo
    const yOffset = 0; //start from the top of the page

    photos.forEach((photo, index) => {
      pdf.addImage(
        photo,
        "JPEG",
        0, //x position
        yOffset + index * photoSize, //y position
        photoSize, // width : 5cm
        photoSize, // height : 5cm
        `photo-${index + 1}`, //alias
        "Medium" //quality compression
      );
    });

    pdf.save("logaya-boot-photos.pdf");
  },

  downloadPhotos: async (photos) => {
    if (photos.length === 0) return;

    //create canvas for resized photo and combained photo
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    //set canvas size to match print size 5x15cm (300x900px)
    canvas.width = 300; // 5 * 60; // 5cm = 300px
    canvas.height = 900; //15 * 60; // 15cm = 900px

    //process each photo and combine them into one
    for (let i = 0; i < photos.length; i++) {
      //perulangan untuk setiap foto
      //create image element
      const img = new Image();
      img.crossOrigin = "anonymous"; //set crossOrigin to prevent CORS issues

      //wait for image to load
      await new Promise((resolve) => {
        img.onload = () => {
          ctx.drawImage(
            img,
            0, //x position for each photo
            i * 300, //y position (0,300,600)
            300, //width
            300 //height
          );

          resolve(); //resolve promise after image is processed
        };
        img.src = photos[i]; //set image source to photo data
      });
    }

    //convert combained canvas to single file blob
    canvas.toBlob(
      (blob) => {
        //create link element
        const url = URL.createObjectURL(blob); //create object URL from blob
        const link = document.createElement("a");
        link.href = url; //set link href to blob URL
        link.download = `logaya-boot-photos.jpg`; //set download name
        document.body.appendChild(link);
        link.click(); //trigger download
        document.body.removeChild(link); //remove link after download
        URL.revokeObjectURL(url); //revoke object URL to free memory
      },
      "image/jpeg",
      0.8
    ); //convert to jpeg with 80% quality
  },
};

export default PrintService;
