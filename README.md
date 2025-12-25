# GriazZ - Personal Portfolio

This is the source code repository for **GriazZ**, a modern and responsive personal portfolio website. This project is built using **SvelteKit** (Svelte 5) and **Tailwind CSS v4** with full **TypeScript** support.

## 🚀 Technologies Used

This project utilizes the latest modern web technologies:

* **[SvelteKit](https://kit.svelte.dev/)**: The meta-framework for Svelte.
* **[Svelte 5](https://svelte.dev/)**: The latest version of the UI component library.
* **[Tailwind CSS v4](https://tailwindcss.com/)**: A utility-first CSS framework for rapid styling.
* **[TypeScript](https://www.typescriptlang.org/)**: JavaScript superset for type safety.
* **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling.

## 📂 Features & Structure

The website includes the following pages (based on the routing structure):

* **Home** (`/`): The main landing page.
* **About** (`/about`): Information about the portfolio owner, experience, and education.
* **Projects** (`/project`): A showcase gallery of projects (Daichino, Gearnix, Pasarku, etc.).
* **Contact** (`/contact`): Contact page.

Content data (Projects, Achievements, Education) is managed centrally via JSON files located in `src/lib/assets/JSON/` for easy updates.

## 🛠️ Installation & Setup

Follow these steps to run the project locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**
    Make sure you have Node.js installed.
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Visit the link shown in your terminal (usually `http://localhost:5173`).

## 📜 Available Scripts

Here are the `npm` scripts defined in `package.json`:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server (Vite). |
| `npm run build` | Builds the app for production. |
| `npm run preview` | Runs a local preview of the production build. |
| `npm run check` | Checks for TypeScript and Svelte errors (linting). |
| `npm run check:watch` | Checks for errors in real-time while coding. |

## 📦 Build & Deployment

To create a production version of this app:

```bash
npm run build
