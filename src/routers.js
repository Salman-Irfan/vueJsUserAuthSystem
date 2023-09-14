// import components
import Home from './components/Home.vue';
import UserRegistrationForm from "./components/user/UserRegistrationForm.vue";
import UserLoginForm from "./components/user/UserLoginForm.vue";
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
    // sign up route
    {
        name: "SignUp",
        component: UserRegistrationForm,
        path: "/sign-up",
    },
    // login route
    {
        name: "Login",
        component: UserLoginForm,
        path: "/login",
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