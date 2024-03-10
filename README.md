# The NOTEBOX - MERN Stack CRUD Todo App

The NOTEBOX is a full-stack CRUD Todo app developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It comes with authentication, allowing users to manage their tasks by adding titles, descriptions, and due dates. Additionally, users can edit or delete existing notes to keep their tasks organized.

## Features

- **User Authentication:**

  - Secure user authentication to ensure data privacy and personalization.

- **Create, Read, Update, Delete (CRUD) Functionality:**

  - Add new notes with a title, description, and due date.
  - View existing notes with essential details.
  - Edit notes to update information.
  - Delete unwanted notes to keep the list clean.

- **Tailwind CSS Styling:**
  - The application is styled using Tailwind CSS, providing a clean and modern user interface.

## Technologies Used

- **Frontend:**

  - React.js
  - Tailwind CSS

- **Backend:**

  - Node.js with Express.js

- **Database:**
  - MongoDB

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/pradum9112/NoteBookCrudMERN.git
   cd The-NOTEBOX
   ```

2. **Install Dependencies:**

   ```bash
   # Install backend dependencies
   cd Backend
   npm install

   # Install frontend dependencies
   cd Frontend
   npm install
   ```

3. **Set Up MongoDB:**
   - Create a MongoDB database and update the connection string .
4. **Set Up .env file :**

```bash
#create env file and put..
PORT="as you want"
MONGO_URI="your mongo url"
JWT_SECRET_KEY="make secret key as you want"
```

4. **Run the Application:**

   ```bash
   # Start the backend server
   cd Backend
   nodemon index.js

   # Start the frontend development server
   cd Frontend
   npm start
   ```

   The app should now be accessible at `http://localhost:3000/`.

## Configuration

- **MongoDB Connection:**
  - Update the MongoDB connection string in

## Contributing

Contributions are welcome! Feel free to submit pull requests or raise issues.

## Acknowledgments

- This project was made possible by the MERN stack and various open-source libraries and tools.

Thank you for using The NOTEBOX! Happy note-taking!
