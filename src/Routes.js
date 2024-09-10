import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Placeholder components
const HomePage = () => <div>Home Page</div>;
const AboutPage = () => <div>About Page</div>;
const ContactPage = () => <div>Contact Page</div>;
const NotFoundPage = () => <div>404 - Page Not Found</div>;

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
