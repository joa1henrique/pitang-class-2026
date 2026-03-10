import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import About from "./routes/About.tsx";
import Home from "./routes/Home.tsx";
import Product from "./routes/Product.tsx";

import AuthLayout from "./routes/auth/AuthLayout.tsx";
import Login from "./routes/auth/Login.tsx";
import Register from "./routes/auth/Register.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="product/:id" element={<Product />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
