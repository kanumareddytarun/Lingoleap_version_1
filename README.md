# LingoLeap Project

This repository contains the **LingoLeap** full-stack application, including a Django backend and a React frontend. Follow the instructions below to set up and run the project locally.

---

## Prerequisites

Before running the project, make sure you have the following installed on your machine:

1. **Python** (version 3.11.5 recommended)  
   Check if Python is installed:

   ```bash
   python --version
If not installed, download and install it from the official Python website.

Node.js (latest LTS version recommended)
Check if Node.js is installed:

bash
Copy code
node -v
If not installed, download and install it from the official Node.js website.

Clone the Repository
Clone the project to your local machine:

bash
Copy code
git clone https://github.com/kanumareddytarun/Lingoleap_version1.git
Backend Setup (Django)
Navigate to the backend folder:

bash
Copy code
cd lingoleap_final-main
Create a virtual environment:

bash
Copy code
python -m venv venv
Activate the virtual environment:

On Windows:

bash
Copy code
venv\Scripts\activate
On Mac/Linux:

bash
Copy code
source venv/bin/activate
Install required Python packages:

bash
Copy code
pip install django djangorestframework django-cors-headers python-dotenv google-cloud-storage djangorestframework-simplejwt bcrypt assemblyai google-generativeai
Run the Django development server:

bash
Copy code
python manage.py runserver
The backend server should now be running at http://127.0.0.1:8000/.

Frontend Setup (React)
Navigate to the frontend folder:

bash
Copy code
cd lingleap-frontend
Install npm dependencies:

bash
Copy code
npm install
Run the React development server:

bash
Copy code
npm run dev
The frontend should now be running, and you can open it in your browser at the URL provided by Vite (usually http://localhost:5173/).

Notes
Make sure the backend server is running before starting the frontend to ensure API calls work correctly.

Use the virtual environment whenever working with the Django backend to avoid package conflicts.

This project uses Django REST Framework for APIs and React with Vite for the frontend.

License
This project is licensed under the MIT License.

yaml
Copy code

---

If you want, I can also **enhance this README with badges, table of contents, and colored headings** so it looks polished on GitHub. It’ll make it look professional like open-source projects.  

Do you want me to do that?






