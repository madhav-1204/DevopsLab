Experiment 12: Node.js Registration Form, Docker Containerization, and Selenium Testing
Aim: To develop a Node.js registration application, containerize it using Docker, and perform automated testing using Selenium WebDriver. DevOps_Lab_Manual (1)-47-71 (1)(1).pdf


Procedure:
1. Create a Node.js project and install Express and body-parser.
2. Create app.js to configure the Express server and handle registration requests.
3. Create public/index.html with username, email, and password fields.
4. Run the application locally and verify the registration form.
5. Create a Dockerfile to define the application environment.
6. Build a Docker image and start the container.
7. Open the application through http://localhost:3000.
8. Install Selenium WebDriver in a separate selenium-tests folder.
9. Create test_registration.js to fill in the form and submit it.
10. Run the Selenium script and verify the registration response.
Important commands:

Install application dependencies:
npm init -y
npm install express body-parser


Run the application locally:
node app.js


Build and run the Docker container:
docker build -t nodejs-registration-app .
docker run -d -p 3000:3000 --name nodejs-registration nodejs-registration-app


Verify the container:
docker ps
docker logs nodejs-registration


Install Selenium and run the test from the selenium-tests folder:
npm init -y
npm install selenium-webdriver
node test_registration.js


Dockerfile:
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]


Expected output:
Test Result: Registration successful!
Test Passed


Result: The Node.js registration application was successfully containerized using Docker and tested using Selenium WebDriver.