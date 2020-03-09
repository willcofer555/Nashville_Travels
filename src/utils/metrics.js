
const Metrics = {};
const baseUrl = 'http://localhost:4002';


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