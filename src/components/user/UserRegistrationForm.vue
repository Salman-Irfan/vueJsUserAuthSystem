<template>
    <!-- bootstrp form -->
    <form v-on:submit="signUp" class="bg-dark text-white my-4 py-4 px-4">
        <h4 class="text-center text-warning container">Sign Up</h4>
        <!-- first name -->
        <div class="container mb-3">
            <!-- first name -->
            <label for="lastName" class="form-label">First Name</label>
            <!-- first name input -->
            <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="First name"
                pattern="[A-Za-z]{3,}"
                name="firstName"
                v-model="firstName"
                required
            />
        </div>
        <!-- last name -->
        <div class="container mb-3">
            <!-- last name -->
            <label for="lastName" class="form-label">Last Name</label>
            <!-- last name input -->
            <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder="Last name"
                pattern="[A-Za-z]{3,}"
                name="lastName"
                v-model="lastName"
                required
            />
        </div>
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
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    min="8"
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
        <!-- address -->
        <div class="container mb-3">
            <!-- address -->
            <label for="address" class="form-label">Address</label>
            <!-- Address input -->
            <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Address"
                name="address"
                v-model="address"
                min="10"
                required
            />
        </div>
        <!-- phone -->
        <div class="container mb-3">
            <!-- phone -->
            <label for="phone" class="form-label">Phone</label>
            <!-- phone input -->
            <input
                type="tel"
                class="form-control"
                id="phone"
                placeholder="3xxxxxxxx --- 10 digit number"
                name="phone"
                v-model="phone"
                pattern="[0-9]{10}"
                required
            />
        </div>
        <!-- image -->
        <div class="container mb-3">
            <label for="password" class="form-label"
                >Upload Image or Live Capture</label
            >
            <div class="input-group">
                <input
                    type="file"
                    class="form-control"
                    id="imageUpload"
                    accept="image/*"
                    ref="imageInput"
                    capture="camera"
                    placeholder="Upload Picture"
                    name="image"
                    @change="handleImageUpload"
                />
                <button
                    id="captureButton"
                    class="btn btn-success"
                    @click="captureLivePicture"
                >
                    Capture Live Picture
                </button>
            </div>
        </div>
        <!-- submit button -->
        <button type="submit" class="container btn btn-success">
            Register
        </button>
        <h5 class="text-center">
            Already a User.
            <router-link to="/login">Login here</router-link>
        </h5>
    </form>
</template>

<!-- script -->
<script>
export default {
    name: "UserRegistrationForm",
    // data
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            showPassword: false, // Initially, password is hidden
            address: "",
            phone: "",
            image: null,
        };
    },
    // methods
    methods: {
        // toggle password visibility
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword; // Toggle the visibility state
        },
        // image upload
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                // Read the selected image file as a data URL
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.image = e.target.result; // Store the base64-encoded image data
                };
                reader.readAsDataURL(file);
            }
        },
        // signUp
        signUp() {
            // Store form values in local storage
            const userSignUpData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                address: this.address,
                phone: this.phone,
                image: this.image,
            };
            localStorage.setItem(
                "userSignUpData",
                JSON.stringify(userSignUpData)
            );
            // if data is saved in local storage
            // if (localStorage.getItem("userSignUpData")) {
            //     this.$router.push({ name: "Login" });
            // }
        },
    },
    // protected routing, after user sign up, user can't visit sign up page
    mounted() {
        let user = localStorage.getItem("userSignUpData");

        // if user exists, redirected to home page
        if (user) {
            this.$router.push("/login");
        }
    },
};
</script>
