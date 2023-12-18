# Recipe Finder Application

## Overview

The Recipe Finder is a single-page application (SPA) developed with Angular 10+. It integrates with the Spoonacular recipe API to provide users with a dynamic and interactive platform for discovering, searching, and managing recipes.

## Components

### 1. Custom Card Component

- **Description:** A custom card component is employed to display recipe details on both the home and favorites pages. It includes functionalities such as redirecting to the detailed recipe page and toggling the addition or removal of recipes from the list.

### 2. Recipe Details Component

- **Description:** This component offers an in-depth view of a selected recipe, providing detailed information such as title, price, summary, ingredients, and instructions.

### 3. Favorites Page

- **Description:** The favorites page consists of cards displaying all recipes stored in the favorites list. Two versions of the favorites page exist, one utilizing local storage and the other Firestore. Although they share the same appearance and respond similarly, there are slight differences in functionality.

### 4. Home Page

- **Description:** The home page displays all data received from the Spoonacular API, showcasing a list of random recipes. Users can also perform searches for specific recipes.

### 5. Loading and Error Container Component

- **Description:** A loading and error container component has been implemented to provide a seamless user experience. It displays loading indicators while making API calls and shows error messages if any issues arise.

### 6. Navbar with Search Box

- **Description:** The navigation bar features a search box that triggers a search query, enabling users to filter and find recipes efficiently.

## Services

### 1. Recipes Service

- **Description:** This service handles API calls for random recipes and single recipe details. It takes the ID from the active URL as an argument for the API search. Additionally, it filters data to match the recipe model.

### 2. Search Service

- **Description:** The search service emits a subject with a search query, allowing any component to listen and use it to filter displayed data.

### 3. Response Filter Service

- **Description:** This service contains a method that filters API responses to match the recipe model. It adds an `isFavorite` flag, which is crucial for styling.

### 4. Favorites (Local Storage) Service

- **Description:** This service retrieves data from local storage and sends it to the favorites component. It includes a method to check the favorited status of a recipe and a toggle favorite method to add or remove recipes based on their state.

### 5. Firebase Service

- **Description:** The Firebase service includes Firebase database configuration and methods to add or remove collections.

### 6. Favorites (Firebase) Service

- **Description:** Similar to the local storage service, this service contains methods to toggle favorite recipes. However, it uses the method from the Firestore service and updates the database.

## Pipes

### 1. HTML Sanitizing Pipe

- **Description:** This pipe has been created to output recipe descriptions without warnings. It outputs HTML marked as safe.

## Model

- **Recipe Model:** The recipe model facilitates easier handling of recipe data in different components. It includes properties such as title, description, ID, isFavorite flag, image, instructions, and an array of ingredients.

## Environment

- **Description:** The environment file contains the API key and Firestore configuration data. You can replace this data with your own.

## Styling

The current styling of the application is designed for functionality rather than aesthetics. If you find the styling lacking, you are encouraged to enhance it according to your preferences. Consider incorporating a CSS framework like Bootstrap or Tailwind CSS for a more polished appearance.

## Notes

- **Favorites Pages:** Two favorites pages have been implemented, with one using local storage and the other Firestore. Both methods are included to make the two ways work together. When toggling favorites, the following approach is taken to ensure compatibility:
  ```typescript
  this.favFirebase.toggleFavorite({...this.recipe});
  this.favoritesService.toggleFavorite(this.recipe);
  ```
  The first is passed as a copy, and the second is passed as a reference to detect error flags in the home page and activate the favorite icon. Passing both by reference results in neglecting each other, leading to app crashes. To use only one method, pass the recipe to it by reference and comment or remove the other method:
  ```typescript
  // Using Firestore
  this.favFirebase.toggleFavorite(this.recipe);
  // Using Local Storage
  // this.favoritesService.toggleFavorite(this.recipe);
  ```

## Installation and Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Configure the environment variables in the `environment.ts` file.

## Usage

1. Run `ng serve` for a development server.
2. Navigate to `http://localhost:4200/` in your browser.

## Screenshots

- Include screenshots or a link to a demo showcasing the application's appearance and functionality.

## Known Issues

- Mention any known issues or limitations in the current implementation.

## Contributing

- Provide guidelines on how others can

 contribute to the project.

## License

This project is licensed under the [MIT License](LICENSE).