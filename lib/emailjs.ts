// EmailJS Configuration
// Sign up at https://www.emailjs.com/ to get your credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID for contact form
  ACKNOWLEDGMENT_TEMPLATE_ID: 'YOUR_ACKNOWLEDGMENT_TEMPLATE_ID', // Template for auto-reply
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// EmailJS Template Variables for Contact Form:
// - from_name: Sender's name
// - from_email: Sender's email
// - phone: Sender's phone number
// - company: Sender's company
// - message: Message content
// - reply_to: Reply email (same as from_email)

// EmailJS Template Variables for Acknowledgment Email:
// - to_name: Recipient's name
// - to_email: Recipient's email

// Setup Instructions:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create two Email Templates:
//    a) Contact Form Template - sends notification to you
//    b) Auto-Reply Template - sends acknowledgment to the user
// 4. Copy your Service ID, Template IDs, and Public Key
// 5. Update the values above and in pages/contact/index.tsx
