# Getting Started with Create React App

In the project directory, to run this project run:

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

## Component Breakdown
The `ImageBox` component represents a box containing an image and title. The main component, `App`, renders a collection of `ImageBox` components.

## State Management
The `App` component uses the `useState` hook to manage two states: `loadedImages` and `selectedImage`. The `loadedImages` state keeps track of the positions of images that have been loaded, and the `selectedImage` state holds the URL of the currently selected image.

## Image Loading and Click Handling
The `ImageBox` component receives the necessary props to handle image loading and click events. It utilizes the `loadedImages` state to determine if the image is loaded and displays a spinner while the image is being loaded. Clicking on an `ImageBox` triggers the `handleImageClick` function, which sets the `selectedImage` state to the URL of the clicked image.

## Image Close Functionality
The `handleCloseImage` function is called when the overlay is clicked, and it sets the `selectedImage` state to `null`, effectively closing the overlay.

## useEffect for Key Event Handling
The `useEffect` hook is used to add and remove an event listener for the `keydown` event. When the escape key (key code 27) is pressed, the `handleCloseImage` function is called to close the currently displayed image.

## Rendering Components
The `App` component renders a collection of `ImageBox` components by mapping over the `Records` array. The first three records are displayed in the first row, while the remaining records are displayed in the second row.

## Overlay Display
If the `selectedImage` state is not `null`, an overlay is displayed with the selected image in a larger view. Clicking on the overlay triggers the `handleCloseImage` function to close the overlay.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

