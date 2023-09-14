<template>
    <!-- bootstrap form -->
    <!-- <router-link to="/login">Login here</router-link> -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark navbar-fixed">
        <div class="container-fluid">
            <router-link class="navbar-brand text-warning" to="/"
                >
                <img src="../../../public/favicon.ico" alt="user logo" width="50">
                Vue User Auth System
                </router-link
            >
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
                    <li class="nav-item">
                        <router-link
                            class="nav-link active"
                            aria-current="page"
                            to="/"
                            >Home</router-link
                        >
                    </li>
                </ul>
                <ul class="d-flex">
                    <router-link to="/login">
                        <button class="btn btn-outline-success mx-4">
                            Login
                        </button>
                    </router-link>
                    <router-link to="/sign-up">
                        <button class="btn btn-success mx-4">
                            Sign Up
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
};
</script>
