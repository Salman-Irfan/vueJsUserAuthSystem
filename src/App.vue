<!-- template -->
<template>
    <div>
        <!-- utilizing Navbar compoennt-->
        <Navbar />
        
        <!-- router - view -->
        <router-view />
    </div>
</template>

<!-- script -->
<script>
// import navabr
import Navbar from "./components/navbar/Navbar.vue";

export default {
    name: "Hello",
    // registering the components
    components: {
        // navbar
        Navbar,
    },
    // methods
};
</script>

<!-- style -->
<style scoped></style>
