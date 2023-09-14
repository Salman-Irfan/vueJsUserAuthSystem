<template>
    <!-- bootstrap form -->
    <!-- <router-link to="/login">Login here</router-link> -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark navbar-fixed">
        <div class="container-fluid">
            <router-link class="navbar-brand text-warning navHover" to="/">
                <img
                    src="../../../public/favicon.ico"
                    alt="user logo"
                    width="50"
                />
                Vue User Auth System
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- home -->
                    <li class="nav-item">
                        <router-link
                            class="nav-link active navHover"
                            aria-current="page"
                            to="/"
                            >Home</router-link
                        >
                    </li>
                    <!-- add resturant -->
                    <li class="nav-item">
                        <router-link
                            class="nav-link active navHover"
                            aria-current="page"
                            to="/add-resturant"
                            >Add Resturant</router-link
                        >
                    </li>
                    <!-- update resturant -->
                    <li class="nav-item">
                        <router-link
                            class="nav-link active navHover"
                            aria-current="page"
                            to="/update-resturant"
                            >Update Resturant</router-link
                        >
                    </li>
                </ul>
                <ul class="d-flex">
                    <!-- login button -->
                    <router-link v-if="!userIsLoggedIn" to="/login">
                        <button class="btn btn-outline-success mx-4">
                            Login
                        </button>
                    </router-link>
                    <!-- sign up button -->
                    <router-link v-if="!userIsLoggedIn" to="/sign-up">
                        <button class="btn btn-success mx-4">Sign Up</button>
                    </router-link>
                    <!-- logout button -->
                    <router-link v-if="userIsLoggedIn" to="#">
                        <button
                            @click="logoutHandler"
                            class="btn btn-success mx-4"
                        >
                            Logout
                        </button>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            userIsLoggedIn: false, // Initialize as false, assuming the user is not logged in initially
        };
    },
    // local storage has data
    created() {
        // Check if the userSignUpData exists in local storage
        const userSignUpData = localStorage.getItem("userSignUpData");
        if (userSignUpData) {
            // If it exists, set userIsLoggedIn to true
            this.userIsLoggedIn = true;
        }
    },
    // methods
    methods: {
        logoutHandler() {
            localStorage.removeItem("userSignUpData");
            this.userIsLoggedIn = false; // Set userIsLoggedIn to false when logging out
            this.$router.push("/login");
        },
    },
};
</script>

<!-- style -->
<style scoped>
.navHover:hover {
    color: red !important;
    background-color: aliceblue !important;
}
</style>
