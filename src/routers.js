// import components
import Home from './components/Home.vue';
// import user components
import UserRegistrationForm from "./components/user/UserRegistrationForm.vue";
import UserLoginForm from "./components/user/UserLoginForm.vue";
// import resturant components
import AddResturant from "./components/resturant/AddResturant.vue";
import UpdateResturant from "./components/resturant/UpdateResturant.vue";
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
    // add resturant route
    {
        name: "AddResturant",
        component: AddResturant,
        path: "/add-resturant",
    },
    // update resturant route
    {
        name: "UpdateResturant",
        component: UpdateResturant,
        path: "/update-resturant",
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