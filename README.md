# Issue Tracker

A CRUD express application for keeping track of issues reported.

## Getting Started

This project was developed using `Node.js` and `Express`, with a `MongoDB` database.

<br>

Upon _cloning_ the repository, you need to create a `.env` file in the root application directory with the following content:

```bash
DATABASE_URL=<MONGO_DB_CONNECTION_STRING: String>
```

eg.

```bash
DATABASE_URL="mongodb://0.0.0.0:27017/issues-tracker"
```

### Available Scripts

In the root project directory, you can run:

```bash
npm run dev
```

This starts up a Node.js server in development mode (actively watches for changes).

### Application Endpoints

#### POST /issues

Takes in a JSON object with a title and description and returns a new issue.

#### GET /issues

Returns a list of all issues in the database.

#### PUT /issues

Takes in a JSON object with and `id`, `title` and `description`, finds an issue with the _id_, updates its _title_ and _description_ and returns the modified issue.

#### DELETE /issues/:id

Deletes the issue with the `id` passed in the request url.
