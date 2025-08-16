const EmailService = {
  sendEmail: (to, subject, body, photos) => {
    // In a real implementation, you would use emailjs-com
    console.log('Sending email to:', to);
    console.log('Photos count:', photos.length);
    
    // Simulate email sending
    alert(`Email akan dikirim ke ${to} dengan ${photos.length} foto`);
    
    // Example implementation with EmailJS:
    /*
    import emailjs from 'emailjs-com';
    
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email: to,
        subject: subject,
        message: body,
      },
      'YOUR_USER_ID'
    ).then((response) => {
      console.log('Email sent:', response.status, response.text);
    }, (error) => {
      console.error('Email error:', error);
    });
    */
  }
};

export default EmailService;