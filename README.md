# Events Booking Application
## Description
The Events Booking Application is a single-page web application built with React. It allows users to browse events, view details, book tickets, and manage their profiles. The app features protected routes for authenticated users and includes essential functionalities such as user authentication and profile management.

## File Structure

- src/
-- components/
   -- HomePage.js
   -- AboutPage.js
   -- EventList.js
   -- EventDetail.js
   -- LoginPage.js
   -- RegisterPage.js
   -- UserProfile.js
   -- BookingPage.js
   -- OrderHistory.js
   -- Settings.js
   -- Navbar.js
   -- ProtectedRoute.js
-- pages/
   -- HomePage.js
   -- AboutPage.js
   -- EventListPage.js
   -- EventDetailPage.js
   -- LoginPage.js
   -- RegisterPage.js
   -- UserProfilePage.js
   -- BookingPage.js
   -- OrderHistoryPage.js
   -- SettingsPage.js
-- App.js
-- index.js
-- routes.js
-- public/
   -- index.html
-- .gitignore
-- package.json
-- README.md

## Team Members and Assignments
### Stephen Kimani
Components:

Navbar.js - Implement the navigation bar for routing between different pages.
ProtectedRoute.js - Create a component for handling protected routes that require authentication.
Routes:

/profile - Implement the route for user profiles and ensure it is protected.
/book - Implement the route for booking events and ensure it is protected.

### Sandra Banchiri
Components:

HomePage.js - Design and implement the homepage with key information and navigation links.
AboutPage.js - Design and implement the About page with information about the application.
Routes:

/ (Home) - Implement the homepage route and ensure it renders HomePage.
/about - Implement the About page route and ensure it renders AboutPage.

### Magret Ndungu
Components:

EventList.js - Implement the component that lists all available events.
EventDetail.js - Implement the component that shows details for a selected event.
Routes:

/events - Implement the route for listing events and ensure it renders EventList.
/events/:id - Implement the route for viewing event details and ensure it renders EventDetail.

### Taban Chol
Components:

LoginPage.js - Design and implement the login page.
RegisterPage.js - Design and implement the registration page.
Routes:

/login - Implement the login route and ensure it renders LoginPage.
/register - Implement the registration route and ensure it renders RegisterPage.

### Stephen Kimani (Additional Tasks)
Components:

UserProfile.js - Implement the user profile component to display user information and allow profile management.
BookingPage.js - Implement the booking page component where users can book tickets for events.
Routes:

/orders - Implement the route for viewing the order history and ensure it is protected.
/settings - Implement the route for user settings and ensure it is protected.

## Getting Started
Clone the Repository:

git clone <git@github.com:Stephen2Kim/events-pro.git>
Navigate to the Project Directory:

cd events-booking-application
Install Dependencies:

npm install
Start the Development Server:

npm start
Open the Application:

Visit http://localhost:3000 in your browser to view the application.

### Contributing

Please follow the project structure and adhere to the coding standards.
Create feature branches for any new development work.
Submit pull requests with a detailed description of changes made.

## License
This project will be licensed under the MIT License - see the LICENSE file for details.
