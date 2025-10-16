# LingoLeap Final

LingoLeap is a full-stack language learning platform built with *Django (backend)* and *Node.js (frontend)*. This project demonstrates the integration of powerful AI and language technologies to create an interactive and intelligent learning experience.

---

## 🧩 Features

- RESTful API using Django REST Framework
- JWT-based authentication
- Integration with AssemblyAI and Google Generative AI
- Cross-origin resource handling using Django CORS Headers
- Responsive frontend built with Node.js framework
- Cloud storage integration with Google Cloud Storage

---

## 🛠 Prerequisites

Before setting up the project, ensure you have the following tools installed on your local machine:

- *Python 3.11.5*
- *Node.js* (latest stable version)
- *Git*

### Check if Python is installed

python --version



If Python is not installed, download and install *Python 3.11.5* from the [official Python downloads page](https://www.python.org/downloads/release/python-3115/).

### Check if Node.js is installed

node -v



If Node.js is not installed, download the latest version from the [Node.js official website](https://nodejs.org/).

---

## 🌐 Clone the Repository

Clone this project to your local system using the following command:

git clone https://github.com/your-username/lingoleap_final-main.git



Once the cloning process is complete, move into the project directory:

cd lingoleap_final-main



---

## ⚙ Backend Setup (Django)

Follow these steps to run the backend server:

1. *Create a virtual environment:*

python -m venv venv



2. *Activate the virtual environment:*

- On macOS/Linux:
  
  source venv/bin/activate
  
- On Windows:
  
  venv\Scripts\activate
  

3. *Install the required dependencies:*

pip install django djangorestframework django-cors-headers python-dotenv google-cloud-storage djangorestframework-simplejwt bcrypt assemblyai google-generativeai



4. *Run the Django development server:*

python manage.py runserver



The Django backend should now be running at:  
[*http://127.0.0.1:8000/*](http://127.0.0.1:8000/)

---

## 💻 Frontend Setup (Node.js)

Open a new terminal window and follow these steps to start the frontend:

1. *Navigate to the frontend directory:*

cd lingleap-frontend



2. *Install frontend dependencies:*

npm install



3. *Start the development server:*

npm run dev



The frontend should now be running (typically available at [*http://localhost:5173/*](http://localhost:5173/) or similar).

---

## ⚡ Running Both Servers

Make sure to run both backend and frontend servers simultaneously in different terminal windows:

- *Backend:* Runs on port 8000
- *Frontend:* Runs on port 5173 (or next available)

This setup ensures that API calls from the frontend can communicate with your Django REST API backend.

---

## 🔐 Environment Variables

Create a .env file in both backend and frontend directories (if required) and include your sensitive configurations such as:

SECRET_KEY=your_django_secret_key
DEBUG=True
GOOGLE_CLOUD_PROJECT=your_project_id
ASSEMBLYAI_API_KEY=your_api_key
GOOGLE_API_KEY=your_google_api_key



Do *not* share or commit your .env file to version control.

---

## 🚀 Deployment

When deploying to production:
- Set DEBUG=False in your .env file.
- Use a secure database and configure static files correctly.
- Configure CORS and allowed hosts properly in settings.py.

---

## 📜 License

This project is licensed under the *MIT License*.  
You are free to use, modify, and distribute this code with appropriate attribution.

---

## 🤝 Contributing

Contributions are always welcome!  
If you'd like to improve this project:
1. Fork the repository
2. Create a new branch (feature/your-feature-name)
3. Commit your changes
4. Push to your branch
5. Submit a pull request

---

## 🙌 Acknowledgements

- [Django](https://www.djangoproject.com/)
- [Node.js](https://nodejs.org/)
- [AssemblyAI](https://www.assemblyai.com/)
- [Google Generative AI](https://ai.google/)
- All open-source contributors who made this project possible
