# 🛸 Rick and Morty Nuxt

> [!NOTE]
> A web application to explore the Rick and Morty universe, built with **Nuxt** and **Vue.js** on top of the public [Rick and Morty API](https://rickandmortyapi.com/). Browse characters, episodes and locations, save your favorites and switch between light and dark themes.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        <b>Rick and Morty Nuxt</b> is a study project created to deepen my knowledge of <b>Nuxt</b> and <b>Vue.js</b> in the development of modern web applications. It started from a class in the <a href="https://codigoaoponto.com/">Código ao Ponto</a> course and grew well beyond it: on top of the original content, I refined the code structure and added features that were not covered in the class, such as <i>pagination</i>, <i>location pages</i>, a <i>favorites system</i> with persistence, a <i>light and dark theme</i> and a <i>fully responsive layout</i>. The result is a complete and organized application that puts into practice file based routing, server side rendering, reusable components, composables and state management in the Nuxt ecosystem.
      </div>
    </td>
    <td>
      <div>
        <img src="./public/images/brand/logo.png" alt="Rick and Morty Nuxt logo" width="165px"/>
      </div>
    </td>
  </tr>
</table>

---

## 🚧 Project Status

![Status](https://img.shields.io/badge/Status-Active-007ec6?style=for-the-badge)
![Nuxt](https://img.shields.io/badge/Nuxt-4.5.2-007ec6?style=for-the-badge&logo=nuxt&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-3.5.43-007ec6?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-007ec6?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Composables-007ec6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22.19+-007ec6?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3.9.9-007ec6?style=for-the-badge&logo=prettier&logoColor=white)
![GitHub last commit](https://img.shields.io/github/last-commit/arturbomtempo-learning/rick-and-morty-nuxt?style=for-the-badge&color=007ec6&logo=github)
![GitHub repo size](https://img.shields.io/github/repo-size/arturbomtempo-learning/rick-and-morty-nuxt?style=for-the-badge&color=007ec6&logo=files)
[![License](https://img.shields.io/badge/License-MIT-007ec6?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](#-license)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-007ec6?style=for-the-badge&logo=vercel&logoColor=white)](https://rick-and-morty-api-artur.vercel.app/)

---

## 📚 Table of Contents

- [Project Status](#-project-status)
- [Useful Links](#-useful-links)
- [About the Project](#-about-the-project)
- [Main Features](#-main-features)
- [Technologies](#-technologies)
- [Architecture](#-architecture)
- [Installation and Running](#-installation-and-running)
    - [Prerequisites](#prerequisites)
    - [Installing Dependencies](#installing-dependencies)
    - [Running the Application](#running-the-application)
- [Build and Deploy](#-build-and-deploy)
- [Available Scripts](#-available-scripts)
- [Folder Structure](#-folder-structure)
- [References](#-references)
- [Author](#-author)
- [Contributing](#-contributing)
- [Acknowledgments](#-acknowledgments)
- [License](#-license)

---

## 🌐 Useful Links

- 🚀 **Live demo:** [rick-and-morty-api-artur.vercel.app](https://rick-and-morty-api-artur.vercel.app/)
    > The application running in production, hosted on Vercel.
- 📦 **Repository:** [arturbomtempo-learning/rick-and-morty-nuxt](https://github.com/arturbomtempo-learning/rick-and-morty-nuxt)
- 📖 **API used:** [Rick and Morty API](https://rickandmortyapi.com/documentation)

---

## 📝 About the Project

This project was born as a hands on way to learn **Nuxt** and **Vue.js** by building a real web application. It consumes the public [Rick and Morty API](https://rickandmortyapi.com/), which provides data about the show's characters, episodes and locations, and turns it into a navigable, responsive and pleasant interface.

The starting point was a class from the [Código ao Ponto](https://codigoaoponto.com/) course. After following the class, I kept improving the application on my own, both in code quality and in features. Some of the improvements that were **not part of the original class** include:

- Dedicated listing pages with **pagination** for characters, episodes and locations.
- **Location** listing and detail pages, and **episode** detail pages.
- A **favorites system** with persistence across sessions.
- A **light and dark theme** switcher that remembers the user's choice.
- A **fully responsive** layout, from small phones to large screens.
- Friendlier **error handling**, including a custom 404 page and messages for API failures.
- A more organized structure, with reusable components, composables and design tokens.

The main goal is educational: to practice the core concepts of the Nuxt ecosystem, such as file based routing, layouts, server side rendering, data fetching, composables and shared state, in a project that is fun to build and to use.

---

## ✨ Main Features

- 🏠 **Home page:** highlights of characters, episodes and locations, each with a shortcut to its full listing.
- 📋 **Paginated listings:** dedicated pages for all characters, episodes and locations, with page navigation through the URL.
- 🔎 **Character details:** status, species, gender, number of episodes, origin and current location.
- 📺 **Episode details:** episode code, air date and number of characters.
- 🪐 **Location details:** type, dimension and number of residents.
- ❤️ **Favorites:** favorite and unfavorite characters, episodes and locations with a single click. Favorites are saved in the browser and stay there after closing the site, and multiple open tabs stay in sync.
- ⭐ **Favorites page:** all favorites in one place, with filters by type.
- 🌗 **Light and dark theme:** the chosen theme is saved in a cookie, so the page is already rendered in the right theme on the next visit, with no flicker.
- 📱 **Responsive layout:** designed to work well on phones, tablets and desktops.
- 🚫 **Error handling:** a custom error page for missing content and friendly messages when the API is unavailable.

---

## 🛠 Technologies

The following tools and libraries were used to build this project.

- **Framework:** [Nuxt 4](https://nuxt.com/) with server side rendering and file based routing
- **Library:** [Vue.js 3](https://vuejs.org/) with the Composition API and `<script setup>`
- **Languages:** JavaScript and TypeScript (composables and utilities)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) through the `@nuxtjs/tailwindcss` module, with CSS variables as theme tokens
- **Build tool:** [Vite](https://vite.dev/), bundled with Nuxt
- **Data source:** [Rick and Morty API](https://rickandmortyapi.com/) (public REST API, no key required)
- **Code formatting:** [Prettier](https://prettier.io/)

---

## 🏗 Architecture

The application is a **Nuxt 4** project with all source code inside the `app/` directory. Each part has a clear responsibility:

- **Pages (`app/pages`):** each file becomes a route automatically. For example, `pages/character/index.vue` is the `/character` listing and `pages/character/[id].vue` is the `/character/:id` detail page.
- **Layouts (`app/layouts`):** the default layout wraps every page and holds the parts shared by all of them, such as the footer.
- **Components (`app/components`):** reusable building blocks, such as cards, grids, headers, pagination and the favorite button. Listings, the home page and the favorites page share the same cards and grids, so they always look consistent.
- **Composables (`app/composables`):** shared logic. `useTheme` manages the theme and `useFavorites` and `useFavoriteItems` manage the favorites.
- **Plugins (`app/plugins`):** `favorites.client.ts` loads the saved favorites in the browser after the page is ready and keeps open tabs in sync.
- **Utils (`app/utils`):** small helpers, such as the translation of a character status into a label and a color.

Some important decisions:

- **Theme stored in a cookie:** cookies are sent to the server, so Nuxt can render the page in the right theme from the start, avoiding a flash of the wrong theme.
- **Favorites stored in `localStorage`:** the list can grow over time and does not need to reach the server. Only the IDs are saved, and the data is fetched from the API in a single request per type.
- **Design tokens:** colors are defined as CSS variables for each theme and exposed as Tailwind classes (`bg-surface`, `text-primary`, and so on), so switching themes only changes a class on the `<html>` element.

---

## 🔧 Installation and Running

### Prerequisites

- **Node.js:** version **22.19** or higher (required by Nuxt 4)
- **Package manager:** npm (comes with Node.js)

> [!NOTE]
> No environment variables are needed. The Rick and Morty API is public and does not require an API key.

### Installing Dependencies

1. **Clone the repository:**

```bash
git clone https://github.com/arturbomtempo-learning/rick-and-morty-nuxt.git
cd rick-and-morty-nuxt
```

2. **Install the dependencies:**

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

⚡ _The application will be available at **http://localhost:3000**._

> [!TIP]
> If you create or change the `tailwind.config.ts` file, restart the development server so the new configuration is loaded.

---

## 🚀 Build and Deploy

1. **Build for production:**

```bash
npm run build
```

2. **Preview the production build locally:**

```bash
npm run preview
```

The build generates the `.output/` directory, which can be deployed to any platform that supports Node.js. This project is deployed on [Vercel](https://vercel.com/), which detects Nuxt automatically and requires no extra configuration. You can see it live at [rick-and-morty-api-artur.vercel.app](https://rick-and-morty-api-artur.vercel.app/). To generate a fully static version of the site instead, use `npm run generate`.

---

## 📜 Available Scripts

| Script             | Description                                    |
| :----------------- | :--------------------------------------------- |
| `npm run dev`      | Starts the development server with hot reload. |
| `npm run build`    | Builds the application for production.         |
| `npm run preview`  | Runs the production build locally.             |
| `npm run generate` | Generates a static version of the application. |
| `npm run format`   | Formats the whole project with Prettier.       |

---

## 📂 Folder Structure

```
.
├── app/
│   ├── assets/css/          # 🎨 Tailwind entry file and theme tokens (CSS variables).
│   ├── components/          # 🧱 Reusable components (cards, grids, headers, pagination, etc.).
│   │   └── icons/           # 💡 SVG icon components.
│   ├── composables/         # 🎣 Shared logic: theme and favorites.
│   ├── layouts/             # 🖼️ Default layout shared by all pages.
│   ├── pages/               # 📄 File based routes.
│   │   ├── character/       # 👤 Characters listing and details.
│   │   ├── episode/         # 📺 Episodes listing and details.
│   │   ├── location/        # 🪐 Locations listing and details.
│   │   ├── favorites/       # ❤️ Favorites page.
│   │   └── index.vue        # 🏠 Home page.
│   ├── plugins/             # 🔌 Client plugin that loads and syncs the favorites.
│   ├── utils/               # 🛠️ Helper functions.
│   ├── app.vue              # 🌳 Root component (theme and language on the <html> element).
│   └── error.vue            # 🚫 Custom error page.
├── public/
│   └── images/              # 🖼️ Logo and highlight images.
├── nuxt.config.ts           # ⚙️ Nuxt configuration.
├── tailwind.config.ts       # 🎨 Tailwind configuration and color tokens.
├── .prettierrc              # ✨ Prettier configuration.
├── LICENSE.md               # ⚖️ Project license.
└── package.json             # 📦 Dependencies and scripts.
```

---

## 🔗 References

- 📖 [Nuxt documentation](https://nuxt.com/docs)
- 📖 [Vue.js documentation](https://vuejs.org/guide/introduction.html)
- 📖 [Tailwind CSS documentation](https://v3.tailwindcss.com/docs)
- 📖 [Rick and Morty API documentation](https://rickandmortyapi.com/documentation)
- 📖 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

---

## 👥 Author

| 👤 Name              | 🖼️ Photo                                                                                                              | :octocat: GitHub                                                                                                                                                                                  | 💼 LinkedIn                                                                                                                                                                                                | 📤 Gmail                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Artur Bomtempo Colen | <div align="center"><img src="https://avatars.githubusercontent.com/u/96635074?v=4" width="70px" height="70px"></div> | <div align="center"><a href="https://github.com/arturbomtempo-dev"><img src="https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/icons/github.png" width="50px" height="50px"></a></div> | <div align="center"><a href="https://www.linkedin.com/in/artur-bomtempo/"><img src="https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/icons/linkedin.png" width="50px" height="50px"></a></div> | <div align="center"><a href="mailto:arturbcolen@gmail.com"><img src="https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/icons/gmail.png" width="50px" height="50px"></a></div> |

---

## 🤝 Contributing

Contributions, suggestions and feedback are welcome.

1. Fork the project.
2. Create a branch for your feature (`git checkout -b feature/my-feature`).
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (`git commit -m 'feat: add my feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a **Pull Request**.

---

## 🙏 Acknowledgments

- [**Código ao Ponto**](https://codigoaoponto.com/): for the class that served as the starting point for this project.
- [**Rick and Morty API**](https://rickandmortyapi.com/): for providing a free, well documented public API with all the data used in the application.

---

## 📄 License

This project is distributed under the **[MIT License](./LICENSE.md)**.
