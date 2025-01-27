import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import PropTypes from 'prop-types';


const EventCard = ({ event, onOpenDetails }) => {
  
    return (
      <Card sx={{ maxWidth: 345, margin: 2, display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {event.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date: {event.date}, Time: {event.time}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Venue: {event.venue}
          </Typography>
         <Typography variant="body2" color="text.secondary">
             Available Tickets: {event.availableTickets}
         </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: 'auto' }}>
          <Button size="small" color="primary" onClick={() => onOpenDetails(event.id)}>
            View Details
          </Button>
        </CardActions>
      </Card>
    );
  };



  EventCard.propTypes = {
    event: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
      availableTickets: PropTypes.number.isRequired,
      description: PropTypes.string, // Assuming description is optional
    }).isRequired,
    onOpenDetails: PropTypes.func.isRequired,
  };

  
  export default EventCard;