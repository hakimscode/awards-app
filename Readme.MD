# Awards App

## Requirements
- [Node JS v18 or higher](https://nodejs.org/en)
- [PostgreSQL Database](https://www.postgresql.org/)

## Setup

### [Step 1] Database Preparation

1. Create a database in Postgres SQL


### [Step 2] Server Preparation

1. Go to server directory. `cd server`

2. Create `.env` file using this command `cp .env.example .env`

3. Complete the values of `.env` file with your setup

   **Notes**:
   For `AWARDS_DB_NAME` in .env file, fill it with your database name in Step 1

   ```bash
    # Database Credentials
    AWARDS_DB_HOST={your_database_host}
    AWARDS_DB_NAME={your_database_name}
    AWARDS_DB_USERNAME={your_database_username}
    AWARDS_DB_PASSWORD={your_database_password}
    AWARDS_DB_PORT={your_database_port}

    # JWT Secret
    AWARDS_JWT_SECRET_KEY={jwt_secret}
   ```

4. Install dependencies. `npm install` or `yarn`

5. Migrate the database. `npm run typeorm:run-migrations` or `yarn typeorm:run-migrations`

6. Start server. `npm run start:dev` or `yarn start:dev`
  
    **Notes**:
      Server is running on PORT 5000, make sure there is no running application or service on PORT 5000


### [Step 3] Client Preparation

1. Go to client directory. `cd client`

2. Install dependencies. `npm install` or `yarn`

3. Start client. `npm run dev` or `yarn dev`


## Usage

1. Go to the url `http://localhost:5173/` in your browser

    **Notes**:
      By default, the url is `http://localhost:5173/` or you can copy the url on the terminal after you start the client

2. Login with email `user@gmail.com`
