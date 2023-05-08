# **FakerJS UI**


![FakerUI](/img/faker-ui.png "faker js")

This is a frontend application that you can use with my [Faker Backend](https://github.com/RickaPrincy/faker-backend.git) server to generate data using the [Faker.js](https://github.com/faker-js/faker.git) library. 

## **Getting Started**

To get started, you'll need to clone my backend server [Faker Backend](https://github.com/RickaPrincy/faker-backend.git) first and this repository.

After that, install depedencies for both repository using `npm install` and that's it, launch the backend-server and the this faker-ui and you can generate fake data easily.

## **Usage**

- Once the application is running, you can use the form on the homepage to generate data using the Faker.js library. 

![Example](/img/example.png "example")

- Simply enter the number of rows you want to generate, select a table name and add the columns you want to include in your data.

- Click the "Generate" button to send a request to the backend server, which will generate the data and send back a response with a link to the SQL file containing the data. 

- Once you click the "Generate" button, there should be a world : "Download your file here!" so you just click the world "here" do download you file.

![Result](/img/result.png "result of the example")


## **Important**

- This faker-ui is still in production
- Please note that the backend server is set to use port 5000 by default, so make sure to update the port in your frontend application if you are running the backend on a different port.

## **Contributing**

If you would like to contribute to this project, please fork the repository and submit a pull request.
