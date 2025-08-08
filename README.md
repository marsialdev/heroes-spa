# Heroes SPA

**HeroesApp** is a Single Page Application (SPA) that provides authentication features (login and logout), dynamic navigation through multiple views, and access to detailed superhero information filtered by publisher.

![Project preview](./public/heroes-spa.png)

## 🚀 Getting Started

Follow these steps to run the project locally:

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build the project for production:

   ```bash
   npm build
   ```

---

## 🛠 Built With

- **React** + **TypeScript**
- **Vite** with SWC compiler
- **TailwindCSS** for styling

---

## ✨ Implementation Features

This project includes the following key features:

- ✅ **Login and Logout functionality**  
  Basic authentication system with login and logout functions.

- ✅ **Global state management with Context API and Reducer**  
  Utilizes `React.createContext`, `useReducer`, and a custom `Provider` to manage global authentication state.

- ✅ **Typed context and provider using TypeScript**  
  Custom types ensure consistency and type safety in the context and its provider.

- ✅ **Dynamic route parameters and programmatic navigation**  
  Routes support _query strings_ and allow programmatic redirection.

- ✅ **Public and private routes**  
  Access control for specific routes based on the user’s authentication state.

- ✅ **Multiple layouts in the router**  
  Routing structure includes different layouts for various sections of the app (e.g., auth and main app).

---

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

> This project is designed to demonstrate best practices with React Router, state management using Context API + Reducer, and clean architecture patterns with TypeScript.
