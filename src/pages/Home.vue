<template>
    <h1 class="text-center my-4 px-4">Welcome to the Ecommerce Application Home Page</h1>
</template>

<!-- script -->

<script>
// import UserRegistrationForm from "./user/UserRegistrationForm.vue";
export default {
    name: "Home",
    // protected routing, if user does not exist
    mounted() {
        let user = localStorage.getItem("token");
        // if user does not exists, redirected to login page
        if (!user) {
            this.$router.push("/login");
        }
    },
};
</script>
