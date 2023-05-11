```
# Video Game Store

Welcome to the Video Game Store, a web service for managing and retrieving information about video games, users, and orders.

## Preview video
https://somup.com/c0hX6NaVjU

## Power Point Presentation has been provide in this repo
Video Game Store.ppt
## Description

This web service provides a RESTful API with the following endpoints:

- `GET /games`: Returns a collection of all game records.
- `GET /users`: Returns a collection of all users in the system.
- `GET /games/{id}`: Returns a single game record corresponding to the provided ID.
- `GET /users/{userId}/orders`: Returns a collection of order records for a given user.

## Prerequisites

- Node.js (version 14 or higher)
- Docker (optional, for containerization)

## Installation

1. Clone the repository:

```
git clone <https://github.com/PreetRai/video-game-store>
```

2. Navigate to the project directory:

```
cd video-game-store
```

3. Install the dependencies:

```
npm install
```

## Usage

1. Start the application:

```
npm start
```

2. Access the web service:

```
http://localhost:3000
```

3. Use the API endpoints to retrieve data about games and orders.

## Docker Support

You can also run the application using Docker. Follow these steps:

1. Build the Docker image:

```
docker build -t video-game-store .
```

2. Run the Docker container:

```
docker run -p 3000:3000 --name video-game-store-app video-game-store
```

3. Access the web service:

```
http://localhost:3000
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

```