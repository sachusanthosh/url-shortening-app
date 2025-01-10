# URL Shortener

This project is a URL shortening service built with a React frontend and a Node.js backend. The frontend uses Vite for development and build processes, and the backend uses Express and MongoDB for API and database management.

## Project Structure



backEnd/ .env .gitignore index.js package.json frontEnd/ .gitignore eslint.config.js index.html package.json postcss.config.js public/ new.jsx README.md src/ api/ urlShortener.jsx App.jsx components/ Cards.jsx InputUrl.jsx Navbar.jsx Root.jsx UrlCard.jsx firebase/ firebase.jsx index.css main.jsx pages/ Home.jsx Login.jsx Signup.jsx Welcome.jsx router.jsx tailwind.config.js vite.config.js


## Backend

The backend is built with Node.js, Express, and MongoDB. It provides API endpoints for shortening URLs and redirecting short URLs to their original URLs.

### Setup

1. Navigate to the `backEnd` directory:
   
   ```sh
   cd backEnd

2. Install dependencies:
   
	```sh
	npm install

3. Create a `.env` file and add your MongoDB connection string:

	```sh
	DATABASE_URL=your_mongodb_connection_string

4. Start the server:
	```sh
	npm start

### API Endpoints

`POST /api/shorten`: Shortens a long URL.
`GET /:shortUrl`: Redirects to the original URL.

### Frontend

The frontend is built with React and Vite. It provides a user interface for shortening URLs and managing user authentication with Firebase.

### setup

1. Navigate to the `frontEnd` directory:
	```sh
 	cd frontEnd
2. Install dependencies:
	```sh
	npm i
3. Start the development server:
	```sh
	npm run dev

### Firebase Configuration

1. Create a Firebase project and add your Firebase configuration to `firebase.jsx`

### Available Scripts

`npm run dev`: Starts the development server.
`npm run build`: Builds the project for production.
`npm run lint`: Runs ESLint to check for code quality issues.
`npm run preview`: Previews the production build.




