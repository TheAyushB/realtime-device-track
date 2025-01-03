# Real-Time Device Tracking Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Assignment Details](#assignment-details)
- [License](#license)

---

## Introduction
This repository contains the source code for a **Real-Time Device Tracking Application**, developed as part of an assignment. The application allows a logistics company to monitor the real-time locations of their delivery agents on an interactive map, enhancing operational efficiency and improving route optimization.

## Features
- **Geolocation Tracking**:
  - Continuous tracking using browser-supported geolocation APIs.
  - High accuracy with a timeout of 5 seconds and caching disabled.

- **Real-Time Updates**:
  - Device locations are emitted and received via WebSocket events.
  - Updates occur in real-time on the dashboard as location data is received.

- **Interactive Map**:
  - Integrated using the Leaflet.js library and OpenStreetMap tiles.
  - Automatically centers and adjusts markers for agent locations.
  - Fully interactive with zoom and pan capabilities.

- **Dynamic Marker Management**:
  - Adds or updates markers for active agents.
  - Removes markers when agents disconnect.

- **Error Handling**:
  - Logs geolocation errors for debugging purposes.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Leaflet.js
- **Backend**: Node.js, Socket.IO
- **Maps**: OpenStreetMap via Leaflet.js

## Setup Instructions

### Prerequisites
- Node.js (version 14 or later)
- npm (Node Package Manager)

### Steps
1. Clone the repository:
   ```
   git clone https://github.com/TheAyushB/realtime-device-track.git
   cd realtime-device-track
   ```
2. Install dependencies:
   ```
    npm install
   ```
3. Start the server:
   ```
     node app.js
   ```
4. Access the application in your browser at http://localhost:3000.

## Screenshots

```
    Live Tracking:
```
    
  ![Live Tracking](https://github.com/user-attachments/assets/75b91cfb-3281-43e8-a9f7-a36405cf7f46)
```
    Coordinates Update Live:
```
  ![coords update live](https://github.com/user-attachments/assets/39b32b19-3022-4454-9f1c-80d84444281f)


## Future Improvements
- **HTTPS Implementation**:  
  Secure communication using HTTPS protocols to enhance security.

- **Agent Status Indicators**:  
  Display additional information like battery level or connection status.

- **Analytics Dashboard**:  
  Introduce analytics for route optimization and delivery efficiency.

- **Mobile Optimization**:  
  Ensure seamless tracking on mobile devices.

- **Scalability**:  
  Enhance performance to manage a larger fleet of agents.

## Assignment Details
   Refer to [assignments.md](assignments.md) for a detailed problem statement and instructions.

### Summary
   This application was developed as a part of an assignment to demonstrate real-time device tracking using geolocation and maps. It showcases essential features like dynamic marker updates, error handling, and an interactive map interface.

## License
   This project is licensed under the MIT License. See the LICENSE file for more details.
