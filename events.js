// Function to display event details from localStorage
window.onload = function () {
  // Get event details from localStorage
  const eventDetails = JSON.parse(localStorage.getItem("eventDetails"));

  if (eventDetails) {
    // Display the event details on the page
    document.getElementById("event-name").innerText = eventDetails.name;
    document.getElementById("event-date").innerText = eventDetails.date;
    document.getElementById("event-location").innerText = eventDetails.location;
    document.getElementById("event-description").innerText =
      eventDetails.description;
  } else {
    // Display a message if no event details are found
    document.getElementById("event-info").innerHTML =
      "<p>No event created yet.</p>";
  }
};
