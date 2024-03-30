## Note on API Key Expiration

- **In the event that the API key expires**, the application will continue to function as expected. This is because we have implemented a fallback mechanism that uses **mock data** to simulate the presence of actual data. This ensures that the application remains usable even if the API key is no longer valid. Please note that while the application will function, the data displayed will be static and not reflect any changes from the actual data source until a valid API key is provided.
- if you want to add another key , replace it with the one in the .env file
---
## Note on `.env` File

- Normally, `.env` files should not be published to public repositories for security reasons as they often contain sensitive information like API keys and database credentials. However, in this case, to demonstrate the application, the `.env` file has been included in the repository with all keys and URLs.
---
# Project Title

This is a brief description of what this project is about and what it does.




## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.



### Installing

A step by step series of examples that tell you how to get a development environment running.
```
npm run dev
```



## Running the tests

Explain how to run the automated tests for this system.

```
npm test
```


## Deployment

Add additional notes about how to deploy this on a live system.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Vite](https://vitejs.dev/) - Build tool
* [ESLint](https://eslint.org/) - Linting tool

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details