import React from "react";
import ReactDOM from "react-dom/client";

// react-router imports
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  Navigate,
} from "react-router-dom";

// Importing Components
import HeaderLayout from "./Layouts/headerLayout";
import Home from "./components/MainNav/HomePage/Home";
import HostLayout from "./Layouts/HostLayout";
import About from "./components/MainNav/AboutPage/About";
import Vans from "./components/MainNav/VansPage/Vans";
import VanDetail from "./components/MainNav/VansPage/VanDetail";

import Dashboard from "./components/HostNavbar/Dashboard";
import Income from "./components/HostNavbar/Income";
import HostVans from "./components/HostNavbar/HostVans";
import Reviews from "./components/HostNavbar/Reviews";

import HostVanInfo from "./components/HostNavbar/HostVan/HostVanInfo";
import HostVanDetail from "./components/HostNavbar/HostVan/HostVanDetail";
import HostVanPricing from "./components/HostNavbar/HostVan/HostVanPricing";
import HostVanPhotos from "./components/HostNavbar/HostVan/HostVanPhoto";

import NotFound from "./components/ErrorPage/NotFound";

import "./server.js";

// Inside the App, Implement the Routing (react-router), Traditional way
// App component only contains the Routers information only.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="hostvans" element={<HostVans />} />
            <Route path="hostvans/:id" element={<HostVanInfo />}>
              <Route index element={<HostVanDetail />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/**
 *   1. BrowserRouter   :-  context provider, provide power of routing to the Application.
 *   2. Routes          :-  Convert the Route component, into the JS Object under the hood,
 *   3. Route           :-  Child component, renders specific UI, when the path of the URL Matches.
 *   4. Layout          :-  layout container, often used to apply consitent positioning for content across the page in Application.
 *   5. Relative paths  :-  Inside BrowserRouter
 *   6. Link            :-  To navigate from one route to another, without refreshing  page, state in the component remain unchange.
 *   7. MirageJS        :-  API Mocking server, build, test, complete JS Application without relying on backend service.
 *   8. Route Params    :-  Placeholder / Varible eventually becomes the part of the URL.
 *   9. APIs in a seperate file.
 *  10. Loading and error handling in the trandition way of fetching the data.
 *  11. Relative links  :-  At Link tags.
 *  12. Nested Routes   :-  display something, and wanted to display more.(childs)
 *  13. Outlet context  :-  context provider, whatever is passed through the context prop, can be recievable using the hook, useOutletContext.
 *  14. relative = "path"
 *  15. end parameter
 *  16. Navigate        :-  Link + active styling abilites. [styles & className prop]
 *  17. path starts with "/" treated as an absolute path.
 *  18. Active Link styling with <NavLink /> with style prop, className prop.
 *
 *  19. Under the hood, react-router uses the native browser APIs, that are dealing with the URL.
 *  20. Link, also add the query / search params to the URL, without modigying the route.
 *  21. URLSearchParam Object, can use Link (or) setSearchParam to merge the old & new search params in the URL.
 *  22. optional chaining, const search = location.state?.search || "", if location.search is a thing, then search for a search property.
 *
 *  23. Happy path, user will do exactly the way we developer expect, but does not account for errors (or) other problems that could occur in real world.
 *  24  Sad path, Forces us imagine what could go wrong, and plan accordingly.
 *  25. Error Handling, Loading state, Form validation.
 *
 *  26. using Data Layer APIs, slight change in paradigm how things get loaded.
 *  27. errorElement, renderd the error element, if occurs during loader, action, rendering.
 *  28. loader, function to load the data, before the component mounted, (or) before transitions to the route.
 *  29.
 */

/**
 *   Hooks
 *    1. useParams()         :-  provide the URL Routes parameter values as a Object (key-value pair)
 *    2. useOutletContext()  :-
 *    3. useSearchParam()    :-  provide URLSearchParam Object, interface provide utility functions that can work with the query string params.
 *    4. useLocation()       :-  get the state that browser has stored and absolute location of user currently in the site/application.
 *    5. useLoaderData()     :-  get the data whatever is returning from the loader function.
 *    6. useRouterError()    :-  this hook returns anything thrown during an action, loader, or rendering.
 */

/**
 *   Imports
 *    1. BrowserRouter
 *    2. Routes
 *    3. Route, loader, errorElement props
 *    4. Link
 *    5. NavLink, state prop, className prop, style prop
 *    6. Outlet, context prop
 *    7. createRouterBrowser
 *    8. createRoutesFromElements
 *    9. Route rProvider
 *   10.
 */
