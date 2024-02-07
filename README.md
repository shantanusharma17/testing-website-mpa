## MPA Brief Project Structure
```
.
|-- public/
|-- src/
|   |-- components/
|   |-- pages/
|   |-- data/
|   |-- App.jsx 
|   ... 
```

### Public
Contains static assets such as icons, images, and configuration files that are publicly accessible. These assets are typically used by the HTML file or other parts of the application.

### Components
Holds reusable React components, each responsible for a specific piece of UI or functionality within the application. Also contains their CSS styling files. 

### Pages
Contains individual page components of the application. Each page component represents a specific route or view of the application. These components are responsible for rendering the UI and handling user interactions for their respective pages.

### Data
Contains data files used by the application. In this case, holds dummy data for properties, potentially used for testing or as placeholder content.

### App.jsx 
The main React component file, serving as the entry point for the application. It likely includes the overall structure of the app and coordinates the rendering of other components as well as routes definitions.

## Local Development

### Install dependencies
```
npm install
```

### Run Local App (assigns port and opens browser)
```
npm start
```

## Deploy

### Push Changes To Repo
```
git add . 
git commit -m "message"
git push origin main
```

### Deploy Changes To Website
```
npm run deploy -- -m "message"
```
> [!NOTE]  
> Behind the scenes, it creates a new branch called gh-pages, pushes the changes there and deploys them to the hosted website.


