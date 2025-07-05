## Getting Started

### Prerequisites

- PHP 8.1
- Composer
- Node.js and npm
- SQLite

---

## Backend Setup

### Navigate to the backend folder

```bash
cd backend
```

### Install Dependencies

```bash
composer install
```

### Create .env

```bash
cp .env.example .env
touch database/database.sqlite
```
### Update .env

```bash
APP_URL
```

### Run migrations

```bash
php artisan migrate
```

### Start Laravel Server

```bash
composer run dev
```

## Frontend Setup

### Navigate to the frontend folder

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

### Start the React server

```bash
npm start
```

## API Endpoints

### Store new contact

POST `/api/contacts`

### Get lists of contacts

GET `/api/contacts`
