# Assignment: Real-Time Device Tracking Application

## Problem Statement

You have been hired by a logistics company that manages a fleet of delivery agents. The company wants to track the real-time locations of its agents to optimize delivery routes and improve operational efficiency. Your task is to create a **real-time device tracking application** that uses geolocation and maps to display the location of agents on a dashboard.

## Instructions

### Context

Imagine a scenario where the logistics company is struggling to keep up with the real-time locations of their delivery agents. This causes delays, miscommunication, and inefficient routing, ultimately affecting customer satisfaction. Your goal is to develop a web-based application that allows the company to monitor and manage their agents' locations seamlessly.

### Requirements

1. **Geolocation**

   - Check if the browser supports geolocation.
   - Use high accuracy settings for location tracking.
   - Set a timeout of 5 seconds and disable caching for the geolocation data.
   - Use the `watchPosition` method to track the users' location continuously.
   - Emit the latitude and longitude of the device via a socket event named `send-location`.
   - Log any errors to the console for debugging purposes.

2. **Map Integration**

   - Initialize a map centered at coordinates `(0, 0)` with a zoom level of 15 using the Leaflet library.
   - Add OpenStreetMap tiles to the map for visualization.
   - Create an empty object to store markers representing the agents.

3. **Socket Data Handling**

   - Upon receiving location data via the socket:
     - Extract the `id`, `latitude`, and `longitude` from the data.
     - Center the map on the new coordinates.
     - If a marker for the given `id` exists, update its position.
     - If no marker exists for the `id`, create a new marker and add it to the map.
     - If the user disconnects, remove their marker from the map and delete it from the markers object.

4. **Real-Time Features**

   - Ensure that the application updates in real-time as new location data is received.
   - Make the map interactive, allowing users to zoom in, zoom out, and pan across the map.

5. **Additional Considerations**
   - The application should be visually appealing and user-friendly.
   - Optimize performance to handle multiple agents being tracked simultaneously.

### Deliverables

- A functional real-time tracking application.
- Source code hosted on a GitHub repository. Make sure to include a `README.md` file with instructions on how to set up and run the application.
- A short write-up explaining your approach and any challenges you faced while completing the assignment.

### Evaluation Criteria

- Functionality: Does the application meet the requirements outlined above?
- Code Quality: Is the code well-structured, readable, and maintainable?
- UI/UX: Is the application visually appealing and easy to use?
- Real-Time Integration: How effectively does the application handle real-time updates?
- Creativity: Any additional features or enhancements will be considered a plus.

### Deadline

Please complete the assignment and submit your GitHub repository link within **48 hours**.

---
 
Good luck, and happy coding!
