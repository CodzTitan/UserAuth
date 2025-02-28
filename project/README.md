# Authentication System

A complete authentication solution with email verification and secure sessions.

## Features

- User registration with email verification (OTP)
- Secure login with JWT authentication
- Password hashing with bcrypt
- MongoDB for data storage
- SendGrid for email services
- React frontend with Tailwind CSS

## Deployment Instructions

### Frontend Deployment (Netlify)

The frontend has been deployed to Netlify at: https://gleaming-semifreddo-5269f2.netlify.app/

### Backend Deployment

The backend can be deployed to various platforms that support Node.js applications:

#### Heroku Deployment

1. Create a Heroku account and install the Heroku CLI
2. Login to Heroku CLI:
   ```
   heroku login
   ```
3. Create a new Heroku app:
   ```
   heroku create your-app-name
   ```
4. Set environment variables:
   ```
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   heroku config:set SENDGRID_API_KEY=your_sendgrid_api_key
   heroku config:set FROM_EMAIL=your_email@example.com
   heroku config:set CLIENT_URL=https://gleaming-semifreddo-5269f2.netlify.app
   ```
5. Push to Heroku:
   ```
   git push heroku main
   ```

#### Railway Deployment

1. Create a Railway account
2. Create a new project and connect your GitHub repository
3. Add environment variables in the Railway dashboard
4. Deploy the project

#### Render Deployment

1. Create a Render account
2. Create a new Web Service
3. Connect your GitHub repository
4. Set the build command to `npm install`
5. Set the start command to `npm start`
6. Add environment variables
7. Deploy the service

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=your_verified_email
CLIENT_URL=your_frontend_url
```

## Local Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the required environment variables
4. Start the development server:
   ```
   npm run dev
   ```
5. Start the backend server:
   ```
   npm run server
   ```

## Project Structure

- `/server` - Backend Node.js code
  - `/models` - MongoDB schemas
  - `/routes` - API routes
  - `/middleware` - Express middleware
  - `/utils` - Utility functions
- `/src` - Frontend React code
  - `/components` - Reusable UI components
  - `/context` - React context providers
  - `/pages` - Application pages