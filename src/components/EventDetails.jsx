import { useState } from 'react';
import { Typography, Card, CardContent, Button, Grid2, Snackbar, Alert } from '@mui/material';
import BookingForm from './BookingForm';
import PropTypes from 'prop-types';

 const EventDetails = ({ event, onCloseDetails, onUpdateEvent }) => {
   const [bookingMessage, setBookingMessage] = useState(null);
   const [openSnackbar, setOpenSnackbar] = useState(false);
 
 
   const handleBookTickets = (numTickets) => {
        if(event.availableTickets >= numTickets){
            const updatedEvent = { ...event, availableTickets: event.availableTickets - numTickets };
            onUpdateEvent(updatedEvent)
            setBookingMessage(`Successfully booked ${numTickets} tickets for ${event.name}!`);
            setOpenSnackbar(true)
       }
     
   };
 
   const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
   };
   return (
     <Card sx={{ maxWidth: 600, margin: '20px auto', padding: 2}}>
       <CardContent>
        <Typography variant="h5" gutterBottom>
          {event.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
           Date: {event.date}, Time: {event.time}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
            Venue: {event.venue}
        </Typography>
       <Typography variant="body1" color="text.secondary" gutterBottom>
           Available Tickets: {event.availableTickets}
       </Typography>
       <Typography variant="body1" color="text.secondary" gutterBottom>
          {event.description}
        </Typography>
       <Grid2 container justifyContent="space-between" alignItems="center" mt={2}>
           <Grid2 item>
               <Button variant="outlined" color="primary" onClick={onCloseDetails}>
                   Back to Event List
               </Button>
           </Grid2>
       </Grid2>
       {event.availableTickets > 0 ?
           <BookingForm event={event} onBook={handleBookTickets}/>
           :
           <Typography variant='h6' color='text.secondary' mt={2}>
               Sold Out
           </Typography>
       }
     </CardContent>
     <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
     >
      <Alert severity="success" onClose={handleCloseSnackbar}>
        {bookingMessage}
      </Alert>
    </Snackbar>
   </Card>
 );
 };

 EventDetails.propTypes = {
     event: PropTypes.shape({
       id: PropTypes.number.isRequired,
       name: PropTypes.string.isRequired,
       date: PropTypes.string.isRequired,
       time: PropTypes.string.isRequired,
       venue: PropTypes.string.isRequired,
       availableTickets: PropTypes.number.isRequired,
       description: PropTypes.string, // Assuming description is optional
     }).isRequired,
     onCloseDetails: PropTypes.func.isRequired,
     onUpdateEvent: PropTypes.func.isRequired,
   };
 
 
 export default EventDetails;