# This project is live

See the deployed build by following [this link](https://superb-empanada-4bb8ff.netlify.app/).
I was able to complete the following features:

1. Create a home page (component) that displays the country data.
2. When user clicks on a country in the table on the Homepage, navigate to another page showing detailed information about that country. The URL for country detail will look like this: [https://restcountries.com/v3.1/name/{name](https://restcountries.com/v3.1/name/%7Bname)}
3. Create a search field that allows users to search country by country name.
4. Pagination / lazy loading
5. Make use of the following react concepts:
   - Use Functional React Component
   - React hooks: useState, useEfect, useParams
6. Use a CSS framework (I made use of some Bootstrap)
7. Deploy the finished project.

### Extra points

I was also able to implement the following bonus requirements.

- write a Custom Hook (I wrote a custom useFetch hook wrapping axios to executed the requests)
- Implement sorting on the "name" field

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
