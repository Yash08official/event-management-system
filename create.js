// Function to handle form submission
function createEvent(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values from the form inputs
  const eventName = document.getElementById("event-name").value;
  const eventDate = document.getElementById("event-date").value;
  const eventLocation = document.getElementById("event-location").value;
  const eventDescription = document.getElementById("event-description").value;

  // Create an event object
  const eventDetails = {
    name: eventName,
    date: eventDate,
    location: eventLocation,
    description: eventDescription,
  };

  // Save event details to localStorage (you can also use sessionStorage if you prefer)
  localStorage.setItem("eventDetails", JSON.stringify(eventDetails));

  // Redirect to events.html after form submission
  window.location.href = "events.html";
}

// Attach the createEvent function to the form submit event
document.getElementById("event-form").addEventListener("submit", createEvent);
