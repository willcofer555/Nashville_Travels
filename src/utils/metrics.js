import 'whatwg-fetch';
const Metrics = {};
const baseUrl = 'http://localhost:8002';


Metrics.getBookings = (start_date, end_date) => {
    let url = `${baseUrl}/bookings?start_date=${start_date}&end_date=${end_date}`;

    return fetch(url).then(response => {
      if(!response.ok) {
        return new Promise(resolve => resolve(null));
      }
      return response.json().then(jsonResponse => {
        const bookings = jsonResponse;
        return bookings;
      });
    });
  };

  Metrics.bookHome = (homeName,start_date, end_date) => {
    let url = `${baseUrl}/bookings/${homeName}?start_date=${start_date}&end_date=${end_date}`;
    return fetch(url).then(response => {
      if (!response.ok) {
        return new Promise(resolve => resolve(null));
      }
      return response.json().then(jsonResponse => {
        const newBooking = jsonResponse;
        return newBooking;
      })
    })
  }

  Metrics.bookUser = (homeName, email, start_date, end_date) => {
    let url = `${baseUrl}/bookings/${homeName}?user=${email}&start_date=${start_date}&end_date=${end_date}`;
    return fetch(url).then(response => {
      if (!response.ok) {
        return new Promise(resolve => resolve(null));
      }
      return response.json().then(jsonResponse => {
        const userBook = jsonResponse;
        return userBook;
      })
    })
  };

  Metrics.newBookUser = booking => {
    const url = `${baseUrl}/postbookings`;
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({booking: booking})
    };
    console.log(fetchOptions);

    return fetch(url, fetchOptions).then(response => {
      if (!response.ok) {
        return new Promise(resolve => resolve(null));
      }
      return response.json().then(jsonResponse => {
        return jsonResponse.booking;
      });
    }); 
  };
  
  
  Metrics.allBookings = () => {
      let url = `${baseUrl}/bookings`;
      return fetch(url).then(response => {
          if(!response.ok) {
              return new Promise(resolve => resolve(null));
          }
          return response.json().then(jsonResponse => {
              const allBookings = jsonResponse;
              return allBookings;
          })
      })
  }


  export default Metrics;
