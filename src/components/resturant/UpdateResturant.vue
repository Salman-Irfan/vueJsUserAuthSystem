<template>
    <h1 class="text-center my-4 px-4">Welcome <span class="bg-dark text-warning"> {{ name }} </span> to the Resturant Update Page</h1>
</template>

<!-- script -->

<script>
// import UserRegistrationForm from "./user/UserRegistrationForm.vue";
export default {
    name: "UpdateResturant",
    // to add dynamic user name
    data(){
        return {
            name: ''
        }
    },
    // protected routing, if user does not exist
    mounted() {
        let user = localStorage.getItem("userSignUpData");
        let firstName = (JSON.parse(user).firstName);
        let lastName = (JSON.parse(user).lastName);
        this.name = firstName + " " + lastName;
        // if user exists, redirected to home page
        if (!user) {
            this.$router.push("/login");
        }
    },
};
</script>
