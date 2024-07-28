this is a base node js project template, which anyone can use as it has been prepared by keeping some of the most important code principles and project management reccomendations. Feel free to change anything.

'src' -> Insode the src folder all the source code regarding the project will reside, this will not include any of the tests. (You might want to make separate tests folder)

Let's take a look inside the 'src' folder

-   'config' -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up 'dotenv' so that we can use environment variables in a cleaner fashion. This is done in the 'server-config.js' file. One more example can be to set up your logging library that can help you prepare meaningfull log. So configuration for this library should also be done here.

-   'routes' -> In the routes folder we register a route and the correspoding middleware and controller to it.

-   'middlewares' -> They are just going to intercept the incoming requests where we can write our validators, authentictors etc.

-   'controllers' -> They are kind of the last middlewares as post them you call the business layer to execute the business logic. In controllers, we just receive the incoming requestand data and then pass it to the business layer and once business layer returns a output, we structure the API response in controllers and sent the output.

-   'repositories' -> This folder contains all the logic using which we interact with the db by writing queries, all the raw queries or orm queries will go here.

-   'services' -> Contains the business logic and interacts repositories for data form databases.

-   'utils' -> Contains helper methods, error classes etc.

### Setup the project

-   Download this repo from github and start coding in your favourite text editor
-   In the root directory create a '.env' file and add the following env variables

    ```
    PORT=<port number of your choice>
    ```

    ex:

    ```
    PORT=3000
    ```

-   Inside the src/cnfig folder, create a file 'config.json' and write the following code

    ```
    {
        "development": {
            "username": "root",
            "password": null,
            "database": "database_development",
            "host": "127.0.0.1",
            "dialect": "postgres"
        },
        "test": {
            "username": "root",
            "password": null,
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "postgres"
        },
        "production": {
            "username": "root",
            "password": null,
            "database": "database_production",
            "host": "127.0.0.1",
            "dialect": "postgres"
        }
    }
    ```

-   If you're setting up your development environment, then write the username and password of your db, and in dialect, mention whatever db you are using. For ex: mariadb, mysql, postgres
-   If you are setting up test or prod environment, make sure you also replace the host with the hosted db url.
