# Angular Contact Management System

This repository contains an Angular application for managing contacts. It includes components for logging in, viewing a list of contacts, adding new contacts, updating existing contacts, and deleting contacts.

## Components

### CFormSaveComponent

This component is responsible for saving new contacts. It includes a form for entering contact details and submits the form to save the contact via the `SContactService`.

### CHomeComponent

Displays the list of contacts retrieved from the backend using the `SContactService`. It provides options to update or delete contacts.

### CloginComponentComponent

Handles user authentication by allowing users to log in with their credentials. It sends the user data to the backend for authentication via the `SContactService`.

### CUpdateComponent

Allows users to update existing contacts. It retrieves the contact data from the `SContactService`, enables users to modify the contact details, and updates the contact information via the `SContactService`.

## Services

### SContactService

Provides methods for interacting with the backend API to perform CRUD operations on contacts. It includes methods for retrieving all contacts, saving new contacts, updating existing contacts, deleting contacts, and user authentication.

### AuthServiceService

Responsible for user authentication. It includes methods for checking if a user is authenticated and logging out users.

### JwtInterceptorService

Intercepts HTTP requests to attach a JWT token to the headers for authenticated requests.

## Guards

### ContactGuardGuard

Protects routes from unauthorized access. It checks if the user is authenticated using the `AuthServiceService` and redirects to the login page if not authenticated.

## Models

### Contact

Defines the structure of a contact with properties like id, name, contact type, phone number, comments, and additional fields.

### User

Represents a user with properties for username and password.

## Interceptor

### JwtInterceptorService

Intercepts HTTP requests to attach a JWT token to headers for authenticated requests.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `ng serve`.
4. Access the application in your browser at `http://localhost:4200`.

Make sure to set up the backend API endpoints accordingly.

