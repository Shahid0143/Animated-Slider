# Animated-Slider

<h2>Image Grid with Keen Slider</h2>
This project implements a responsive image grid with sliding functionality using Keen Slider, a lightweight and responsive touch slider library. The grid is designed to display images in a 3-column layout on larger screens and adapt to a single-column layout on smaller screens, with smooth animations and transitions.

<h2>Features</h2>
<h3>Responsive Layout:</h3> The image grid adjusts its layout based on the screen size. On larger screens, images are displayed in a 3-column grid, while on smaller screens, the grid collapses to a single-column layout.
<h3>Sliding Functionality:</h3> Each column in the grid contains a slider that allows users to browse through images using left and right arrow buttons.
<h3>Smooth Animations:</h3> Images within the slider have smooth transition effects, including scale animations on hover and fade-in effects for active slides.
<h3>Customizable:</h3> The slider settings, animations, and styles can be easily customized to fit different design needs.
Installation
To get started with the project, follow these steps:

<h2>Clone the repository:</h2>

<h3>bash</h3>
Copy code
<h3>git clone https:</h3>//github.com/your-username/image-grid-keen-slider.git
cd image-grid-keen-slider
<h3>Install dependencies:</h3>
Make sure you have Node.js installed, then run:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

<h3>Usage</h3>
After starting the development server, you can view the image grid in your browser. The grid should automatically adapt to different screen sizes, and you can navigate through the images using the arrow buttons on each slider.

<h3>Customization</h3>
Slider Settings
The slider settings are configured using the useKeenSlider hook in the ImageGrid component. You can adjust the following options:

<h3>slidesPerView:</h3> Number of slides visible at a time.
<h3>loop: </h3> Enable or disable looping of slides.
<h3>mode:</h3> Define the sliding mode (e.g., "snap", "free", etc.).
<h3>duration:</h3> Adjust the duration of the slide transition.
<h3>animation:</h3> Customize the easing function and duration of the animations.
Styles
The styles are defined in the ImageGrid.css file. Key styles include:

<h3>Grid Layout:</h3> Adjust the layout and spacing of the grid and columns.
<h3>Slider Appearance:</h3> Customize the appearance of the images and slider arrows.
Responsive Design: Modify the breakpoints to adjust how the grid behaves on different screen sizes.
Technologies Used
<h3>React:</h3> A JavaScript library for building user interfaces.
<h3>Keen Slider:</h3> A touch slider library for building responsive sliders.
<h3>CSS:</h3> Custom styles for the grid layout and animations.
Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

