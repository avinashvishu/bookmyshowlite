import { useState } from 'react';
import EventCard from '../components/EventCard';
import EventDetails from '../components/EventDetails';
import { Container, Grid, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { events } from '../data';


const EventList = () => {
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [eventData, setEventData] = useState(events);

  const handleOpenDetails = (eventId) => {
    setSelectedEventId(eventId);
  };

  const handleCloseDetails = () => {
    setSelectedEventId(null);
  };

  const handleUpdateEvent = (updatedEvent) => {
    setEventData((prevEventData) => {
      return prevEventData.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      );
    });
  };

  const selectedEvent = eventData.find((event) => event.id === selectedEventId);

    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    
      {/* Header */}
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BookMyShow Lite
            </Typography>
        </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ mt: 4, flex: 1 }}>
        {selectedEventId === null ? (
            <Grid container spacing={2} >
            {eventData.map((event) => (
                <Grid item xs={12} sm={6} md={4} key={event.id} >
                    <EventCard event={event} onOpenDetails={handleOpenDetails} />
                </Grid>
            ))}
            </Grid>
        ) : (
            <EventDetails
                event={selectedEvent}
                onCloseDetails={handleCloseDetails}
                onUpdateEvent={handleUpdateEvent}
            />
            )}
        </Container>
    
        {/* Footer */}
        <Box
        component="footer"
        sx={{
            py: 3,
            mt: 4,
            textAlign: 'center',
            backgroundColor: (theme) => theme.palette.grey[200],
        }}
        >
            <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} BookMyShow Lite
            </Typography>
        </Box>
      </Box>
    );
};

export default EventList;