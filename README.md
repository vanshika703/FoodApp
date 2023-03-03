# Grub Hub FoodApp

You can view the live website here : https://grubhub-react-food-app.netlify.app/cart

### Grub Hub is a food delivery app which fetches data using Swiggy's API.

The App is based on ReactJS consisting of:

- Single page application under App.js
- React router used for routing
- Redux toolkit for implementing Cart functionality
- Tailwind for giving and functional design.
- Error routes are handled and an error message is displayed when the user goes offline
- Lazy loading has been implemented for fast performance.

### Screenshots

Landing page
![image](https://user-images.githubusercontent.com/50284087/222653321-0ef50f77-4213-4d48-8241-3040375827da.png)

Restaurant Menu Page
![image](https://user-images.githubusercontent.com/50284087/222653896-8153e3cf-23d7-4d41-9bbb-4dc7013cbc55.png)

Cart page
![image](https://user-images.githubusercontent.com/50284087/222654107-6d2965a9-ef66-4647-ae72-fdd51b95d469.png)

Error page
![image](https://user-images.githubusercontent.com/50284087/222654456-688c1ac3-17e4-46ae-99ae-aa13c268d1c1.png)
![image](https://user-images.githubusercontent.com/50284087/222654750-0ad879da-ad2b-43b9-be32-0c0fe3716b9b.png)

If you want to run it locally follow:

Clone the repo git clone vanshika703/FoodApp

In the project directory, you can run:

to install dependency run npm install and to start npm start

Runs the app in the development mode.

Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.

To build the app for production run: npm run build

Builds the app for production to the build folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

Deployment
Currently the app is deployed using Netlify. And it retriggers deployment on the master branch on every commit. it runs npm build and then serves the index.html generated under build folder.
