<template>
    <h1>Vue Home Component</h1>
</template>

<!-- script -->

<script>
// import UserRegistrationForm from "./user/UserRegistrationForm.vue";
export default {
    name: "Home",
    // protected routing, if user does not exist
    mounted() {
        let user = localStorage.getItem("userSignUpData");
        // if user exists, redirected to home page
        if (!user) {
            this.$router.push("/login");
        }
    },
};
</script>
