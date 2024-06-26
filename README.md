# URL Shortener

A simple URL shortener service built with Node.js, Express, and MongoDB, following the MVC pattern.

## Introduction

This project is a basic URL shortener service that allows users to shorten long URLs for easier sharing and management. The service provides functionality to create, retrieve, and redirect to shortened URLs.

## Features

- Shorten a long URL
- Redirect to the original URL using the shortened version
- View statistics of shortened URLs (optional)

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM for MongoDB)
- shortid package.
- MVC Architecture

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository:

    git clone https://github.com/yourusername/url-shortener.git
    cd url-shortener
    

2. Install dependencies:
   
    npm install

3. Start the server:

     npm start
    

## Usage

1. Visit `http://localhost:8001` in your browser.
2. Enter a long URL to shorten it.
3. Use the generated short URL to redirect to the original URL.


## API Endpoints

### POST /url

- Description: Create a shortened URL.
- Request body:
    ```json
    {
        "url": "http://example.com"
    }
    ```
- Response:
    ```json
    {
        "id": "abcd1234"
    }
    ```

### GET /id
  - Description: Use the ID and hit the url which will redirect to the original url.
  - Request body:
    ```endpoint
    {
      localhost:8001/id
    }
    ```

### GET /url/analytics
- Description: You will keep track of url as how many time the url hits with timestamp.
- Request body:
    ```endpoint
    {
      localhost:8001/url/analytics
    }
    ```
