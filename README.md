# cs465-fullstack
CS-465 Full Stack Development with MEAN
Architecture

The frontend development in this project was split between a traditional Express-based HTML site and an Angular single-page application (SPA). The Express side uses server-rendered HTML with routes, views, and controllers, which means each request reloads the page. This works well for the customer-facing side where users are mostly viewing information.

The Angular SPA is different because everything runs on the client side after the initial load. Instead of reloading pages, Angular updates the UI dynamically using components and services. This makes the admin side faster and more interactive, especially when adding, editing, or deleting trips. Angular also separates logic better by using components for UI and services for API communication.

The backend uses MongoDB because it is a NoSQL database that works well with JavaScript and JSON data. Since the application stores flexible trip data, MongoDB allows for easy schema changes without strict structure requirements. This made development faster and easier to scale.

Functionality

JSON is a lightweight data format used to transfer data between the frontend and backend. Unlike JavaScript, JSON is strictly data and does not include functions or logic. In this project, JSON acts as the bridge between Angular and the Express API. The frontend sends and receives JSON when making HTTP requests, and the backend uses it to store and retrieve data from MongoDB.

One major improvement in functionality came from refactoring the UI into reusable Angular components. For example, the trip card component is reused for displaying all trips instead of rewriting the same HTML multiple times. The trip data service centralizes API calls, which makes the code easier to maintain and update. These changes improve efficiency, reduce duplication, and make debugging easier.

Testing

Testing in this project involved working with different HTTP methods such as GET, POST, PUT, and DELETE. Each method was used to interact with API endpoints and verify that data was correctly retrieved, created, updated, or removed. Postman was used to test endpoints directly, while the Angular application was used to confirm that the UI reflected those changes.

Security added an extra layer of complexity because protected endpoints required authentication using a JSON Web Token (JWT). After logging in, the token had to be included in the Authorization header when making requests. If the token was missing or invalid, the server returned a 401 Unauthorized error. This helped confirm that security was working correctly and that only authorized users could modify data.

Reflection

This course helped me get a much better understanding of how a full stack application actually works from start to finish. Before this, I mostly worked on isolated pieces, but now I understand how the frontend, backend, and database all connect and communicate.

I developed stronger skills in JavaScript, Angular, and working with APIs. I also learned how to debug real issues, like connection errors, routing problems, and authentication failures. Working through those problems made me more confident in troubleshooting and problem solving.

This project also made me more comfortable with tools like Git, Postman, and MongoDB. Overall, I feel more prepared to work on real-world applications and build complete systems instead of just small pieces. It definitely moves me closer to my goal of working in a software development or data-related role.
