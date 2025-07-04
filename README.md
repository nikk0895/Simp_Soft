# SimpSoft Car Product Dashboard

This project is a React + TypeScript application for browsing, analyzing, and comparing various car types (Hatchback, Sedan, SUV, MUV) with a focus on quality index, ratings, and detailed product information.

## Features

- **Product Listing:** View a list of car products with images, price, rating, and customer views.
- **Product Details:** Click on a product to see detailed information, including an overview, price range, top models, safety ratings, and sales trends.
- **Quality Index Dashboard:** Visualize the average product rating for each car type with a color-coded, interactive scale.
- **Category Filtering:** Instantly filter and view the quality index for Hatchback, Sedan, SUV, or MUV via dashboard buttons.
- **Responsive UI:** Modern, responsive design using Material-UI.
- **Mock Data:** Uses mock product data for demonstration and development.
- **Testing:** Includes sample tests for components.

## Project Structure

```
simp-soft/
├── public/                  # Static files
│   ├── index.html          # Main HTML file
│
└── src/                     # React components and TypeScript files
    ├── components/         # Reusable components
    ├── pages/              # Page components
    ├── App.tsx             # Main app component
    ├── index.tsx           # Entry point for React

```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
