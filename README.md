# Contact Page

This is a responsive **Contact Page** built using **HTML**, **Tailwind CSS**, and **JavaScript**. The form includes real-time validation and is configured to send emails via **SMTP.js**.

## Features

- **Responsive Design:** The page adapts seamlessly across all screen sizes (desktop, tablet, mobile).
- **Form Validation:** Real-time validation for name, email, phone number, gender, and address fields to ensure correct input.
- **Email Functionality:** Integrated with **SMTP.js** for sending form submissions directly to your email.
- **Tailwind CSS Styling:** Clean and modern UI with customizable utility classes.

## Technologies Used

- **HTML5**
- **Tailwind CSS** (via CDN)
- **JavaScript** (Vanilla JS)
- **SMTP.js** (for email functionality)

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repo/contact-page.git
   cd contact-page

2. Open index.html: Open the index.html file in your preferred browser to view the form.

3. Configure SMTP.js: Replace the placeholders in your JavaScript with your SMTP credentials:
```bash
Email.send({
  SecureToken: "YOUR_SECURE_TOKEN",
  To: 'recipient@example.com',
  From: "your-email@example.com",
  Subject: "New Contact Form Submission",
  Body: "Form data here..."
}).then(
  message => alert("Mail sent successfully")
);
