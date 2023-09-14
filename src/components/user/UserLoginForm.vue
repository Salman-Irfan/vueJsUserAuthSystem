<template>
    <!-- bootstrp form -->
    <form v-on:submit="login" class="bg-dark text-white my-4 py-4 px-4">
        <h4 class="text-center text-warning container">User Login</h4>
        <!-- email -->
        <div class="container mb-3">
            <!-- email -->
            <label for="email" class="form-label">Email</label>
            <!-- Email input -->
            <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                name="email"
                v-model="email"
                required
            />
        </div>
        <!-- password -->
        <div class="container mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="input-group">
                <input
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                    v-model="password"
                    required
                />
                <button
                    class="btn btn-outline-primary"
                    type="button"
                    id="passwordToggle"
                    @click="togglePasswordVisibility"
                >
                    {{ showPassword ? "Hide" : "Show" }}
                </button>
            </div>
        </div>
        <!-- submit button -->
        <button type="submit" class="container btn btn-success">Login</button>
        <h5 class="text-center">
            Don't have an account.
            <router-link to="/sign-up">Register here</router-link>
        </h5>
    </form>
</template>

<!-- script -->
<script>
export default {
    name: "UserLoginForm",
    // data
    data() {
        return {
            email: "",
            password: "",
            showPassword: false, // Initially, password is hidden
        };
    },
    // methods
    methods: {
        // toggle password visibility
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword; // Toggle the visibility state
        },
        // login
        login() {
            // Store form values
            const userLoginData = {
                email: this.email,
                password: this.password,
            };
            // destructuring the login data
            const { email, password } = userLoginData;

            // get userSignUpData from local storage
            const userSignUpData = JSON.parse(
                localStorage.getItem("userSignUpData")
            );

            // if email, && password same from local storage
            if (
                email === userSignUpData.email &&
                password === userSignUpData.password
            ) {
                this.$router.push("/");
            } else {
                alert("Invalid email or password");
            }
            let user = localStorage.getItem("userSignUpData");

            // if user exists, redirected to home page
            if (user) {
                this.$router.push("/");
            }
        },
    },
    // protected routing, after user sign up, user can't visit sign up page
    mounted() {
        let user = localStorage.getItem("userSignUpData");

        // if user exists, redirected to home page
        if (user) {
            this.$router.push("/");
        }
    },      
};
// make a login route in routes.js
</script>
