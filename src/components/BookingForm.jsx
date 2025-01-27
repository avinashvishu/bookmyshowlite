import { useState } from 'react';
import { TextField, Button, Grid2, Typography } from '@mui/material';
import PropTypes from 'prop-types';


const BookingForm = ({ event, onBook }) => {
   const [numTickets, setNumTickets] = useState(1);
   const [bookingError, setBookingError] = useState(null);
 
   const handleTicketChange = (e) => {
     const value = parseInt(e.target.value, 10);
     setNumTickets(value);
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
     if (numTickets <= 0) {
      setBookingError('Number of tickets must be greater than zero.');
      return;
    }
     if(numTickets > event.availableTickets){
        setBookingError('Not enough tickets available.')
        return
     }
    setBookingError(null)
     onBook(numTickets); // Call the onBook prop passed from EventDetails with the number of tickets
   };
 
   return (
     <form onSubmit={handleSubmit}>
       <Grid2 container spacing={2} alignItems="center">
         <Grid2 item xs={12}>
            <Typography variant="h6" gutterBottom>
                Book Tickets for {event.name}
            </Typography>
         </Grid2>
         <Grid2 item xs={12}>
            {bookingError && <Typography color="error" >{bookingError}</Typography>}
        </Grid2>
         <Grid2 item xs={8} >
            <TextField
                label="Number of Tickets"
                type="number"
                value={numTickets}
                onChange={handleTicketChange}
                fullWidth
                inputProps={{ min: 1 }}
                required
            />
        </Grid2>
          <Grid2 item xs={4}>
            <Button type="submit" variant="contained" color="primary">
              Book Now
            </Button>
          </Grid2>
       </Grid2>
     </form>
   );
 };
 


 BookingForm.propTypes = {
      event: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        venue: PropTypes.string.isRequired,
        availableTickets: PropTypes.number.isRequired,
        description: PropTypes.string, // Assuming description is optional
      }).isRequired,
      onBook: PropTypes.func.isRequired,
    }

 export default BookingForm;