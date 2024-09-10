import React from 'react';

const BookingPage = () => {
  return (
    <div className="page-container">
      <h1>Book Your Event</h1>
      <form>
        <div className="form-group">
          <label htmlFor="event">Event:</label>
          <select id="event" required>
            <option value="Concert">Concert</option>
            <option value="Tech Conference">Tech Conference</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Number of Tickets:</label>
          <input type="number" id="quantity" min="1" required />
        </div>
        <input type="submit" value="Book Now" className="btn" />
      </form>
    </div>
  );
};

export default BookingPage;
