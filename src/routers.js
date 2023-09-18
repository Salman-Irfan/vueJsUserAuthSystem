// import components
import Home from './pages/Home.vue';
// import user components
import UserLoginForm from "./pages/user/UserLoginForm.vue";
// import products components
import ProductsPage from "./pages/ecommerce/ProductsPage.vue";
// Import the ProductDetailsPage component
import ProductDetailsPage from "./pages/ecommerce/ProductDetailsPage.vue";
// import vue-router
import { createRouter, createWebHistory} from 'vue-router';

// making routes
const routes = [
    // home route
    {
        name: "Home",
        component: Home,
        path: "/",
    },
    // login route
    {
        name: "Login",
        component: UserLoginForm,
        path: "/login",
    },
    // display products route
    {
        name: "ProductsPage",
        component: ProductsPage,
        path: "/ecommerce",
    },
    // Add a new route for the product details page
    {
        name: "ProductDetails",
        component: ProductDetailsPage,
        path: "/ecommerce/product/:id", // :id is a dynamic segment to capture the product ID
    },
];

// create router
const router = createRouter({
    history: createWebHistory(),
    routes
});

// export router
export default router;

// now register your file inside main.js