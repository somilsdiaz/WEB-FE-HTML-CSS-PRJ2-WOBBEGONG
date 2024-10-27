# WEB-FE-PRJ2-API-WOBBEGONG

This repository contains the complete frontend of the project [WEB-FE-HTML-CSS-PRJ2-WOBBEGONG](https://web-fe-html-css-prj2-wobbegong-he44.onrender.com), developed using **React**, **Vite**, and **Tailwind CSS**. This frontend project was undertaken by a team of five developers over a three-week period, following the agile **Scrum** development methodology, with weekly sprints and daily meetings to optimize collaboration and progress.

[WEB-FE-HTML-CSS-PRJ2-WOBBEGONG](https://web-fe-html-css-prj2-wobbegong-he44.onrender.com) was developed with modern frontend technologies to create an attractive and functional user interface. In this project, each team member assumed various technical responsibilities, including component implementation, business logic, and state management, along with connecting to a [Mock API](https://web-fe-prj2-api-wobbegong-qfq7.onrender.com). This approach enabled the development and testing of all functionalities in a controlled and reproducible environment, structured to offer a responsive and dynamic user experience.

The frontend of this application connects to a **Mock API** implemented using **JSON Server**. The API, deployed on [Render](https://web-fe-prj2-api-wobbegong-qfq7.onrender.com/), provides simulated data for products, categories, and promotional details necessary to test and display all application functionalities without relying on a live API. Additionally, the project utilizes **Tanstack Query** to efficiently manage data fetching, caching, and synchronization in React.


## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [API Description](#api-description)
- [Project Dependencies](#project-dependencies)
- [Components](#components)
- [Application Routes](#application-routes)
- [Installation and Execution](#installation-and-execution)
- [Contribution](#contribution)
- [Credits and Acknowledgments](#credits-and-acknowledgments)


## Features

- **Responsive User Interface**: Developed with **Tailwind CSS** for a seamless and adaptive user experience across all devices.
- **Structured Breadcrumb Navigation**: Enables smooth navigation on the product details page, enhancing usability.
- **Simulated Mock API**: Implemented with **JSON Server** and deployed on Render, providing product, category, and promotional data.
- **Data Management with Tanstack Query**: Efficient data synchronization and caching in React, optimizing application performance.
- **Product Filtering and Sorting**: Dynamic filtering and sorting options on the product listing page.
- **Comprehensive Cart Management**: Includes editing functionality and cost summary, enabling a detailed and personalized shopping experience.
- **Promotional Banners**: A banner section highlighting current products and promotions with an optimized interface.

## Screenshots

_Below are screenshots of key sections of the application:_

![Home Page](Image-URL)
![Product Details Page](Image-URL)
![Shopping Cart](Image-URL)

## API Description

The Mock API serves as a simulated backend, providing structured data for the frontend. The data includes product categories, filtering options, product details, and promotional content. These data points are organized in JSON objects to facilitate integration with React components and are accessible at the following URL:

- **API URL**: [https://web-fe-prj2-api-wobbegong-qfq7.onrender.com/](https://web-fe-prj2-api-wobbegong-qfq7.onrender.com)
- **Associated Frontend**: [https://web-fe-html-css-prj2-wobbegong-he44.onrender.com](https://web-fe-html-css-prj2-wobbegong-he44.onrender.com)

## Project Dependencies

- **json-server**: Used to simulate a REST API, allowing for testing and visualization of user interactions without reliance on an active backend.
- **React**: Primary framework for building user interfaces.
- **Vite**: High-performance build and development tool.
- **Tailwind CSS**: CSS framework used to create a responsive and stylized design.
- **Tanstack Query**: Advanced data management, caching, and synchronization in React.


## Components

- **Banner**: Promotional section with a title, description, call-to-action button, and image.
- **Breadcrumb**: Navigation component displaying the current path within the site structure.
- **ErrorComponent**: Visual component for handling data loading errors.
- **Filter Component**: Dynamic product filtering component based on subcategory.
- **Footer Component**: Footer with company information, social media links, and payment methods.
- **Header Component**: Header with logo, search bar, and navigation links.
- **PromoImage Component**: Renders promotional images based on an identifier.
- **PDPdetalle Component**: Product details page with an option to add items to the cart.
- **Pdpspecs Component**: Displays technical specifications in a collapsible format.
- **PLP Component**: Product listing with loading, filtering, and sorting options.
- **ProductosDestacados Component**: Featured products list, optimized for browsing and purchasing.
- **Skeleton Component**: Loading indicator to improve the user experience.
- **Subheader Component**: Navigation menu for categories and subcategories.
- **TPIsection Component**: Related products section on the product details page to facilitate exploration.
- **CartContext Component**: Context that manages the global state of the shopping cart.
- **MainLayout Component**: Main layout grouping common elements of the application.
- **ShoppingCart Component**: Shopping cart page with editing options and cost summary.
- **Home Component**: Main page with featured products, banners, and promotional images to enhance navigation on the product details page.

## Application Routes

The route structure provides smooth navigation within the application:

- `/`: Home page (`Home` component).
- `/cart`: Shopping cart page.
- `/pdp/:id`: Product details page.
- `/plp/:subcategory`: Product listing page.

## Installation and Execution

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/WEB-FE-PRJ2-API-WOBBEGONG.git
   cd WEB-FE-PRJ2-API-WOBBEGONG

2. Install dependencies:

   ```bash
   npm install
   
3. Start the development server:

   ```bash
   npm run dev

## Contribution

Contributions are welcome and encouraged to improve this project. To contribute, follow these steps:

1. Fork the project.
2. Create a new branch for your feature or fix (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push the changes (`git push origin feature/new-feature`).
5. Open a Pull Request in this repository.

## Credits and Acknowledgments

This project was developed by a multidisciplinary team of five members, each with specific roles and key responsibilities:

- **Somil Sandoval Díaz** ([somilsdiaz](https://github.com/somilsdiaz)) 
- **Valeria Jiménez** ([Val-jimenez](https://github.com/Val-jimenez)) 
- **Edgar González** ([EdgarGXI](https://github.com/EdgarGXI))
- **Johan Vergara** ([Jandres02](https://github.com/Jandres02)) 
- **Caltafulla** ([Caltafulla](https://github.com/Caltafulla)) 

Thanks to all team members for their dedication, commitment, and contributions that made it possible to achieve the project’s objectives.
