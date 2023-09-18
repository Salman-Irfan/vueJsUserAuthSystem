<template>
    <div>
        <!-- page header -->
        <h1 class="text-center my-4 px-4">Welcome to Ecommerce Page</h1>
        <div class="container mt-4 py-4 px-4">
            <!-- Search Input -->
            <div class="mb-4">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search for products"
                    v-model="searchQuery"
                />
                <button class="btn btn-primary mt-2" @click="searchProducts">
                    Search
                </button>
            </div>
            <!-- products table -->
            <h2 class="text-center my-4 px-4">Products</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Product Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in filteredProducts" :key="product.id">
                        <td>{{ product.title }}</td>
                        <td>{{ product.description }}</td>
                        <td>${{ product.price }}</td>
                        <td>{{ product.category }}</td>
                        <td>
                            <!-- Link to display product details -->
                            <router-link :to="'/ecommerce/product/' + product.id"
                                >Details</router-link
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductsPage",
    data() {
        return {
            products: [], // Initialize an empty array to store the products
            searchQuery: "", // Store the user's search query
        };
    },
    computed: {
        filteredProducts() {
            // Filter products based on the search query in title, description, and category
            const searchLower = this.searchQuery.toLowerCase();
            return this.products.filter(
                (product) =>
                    product.title.toLowerCase().includes(searchLower) ||
                    product.description.toLowerCase().includes(searchLower) ||
                    product.category.toLowerCase().includes(searchLower)
            );
        },
    },

    mounted() {
        let user = localStorage.getItem("token");

        if (!user) {
            this.$router.push("/login");
        } else {
            // Fetch product data from the API
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then((data) => {
                    // Assign the products array from the API response to the data property
                    this.products = data.products;
                })
                .catch((error) => {
                    console.error("Error fetching product data:", error);
                });
        }
    },
    methods: {
        searchProducts() {
            // You can add code here to fetch filtered products based on the searchQuery
            // For example, you can make a new API request with the search query
            fetch(`https://dummyjson.com/products/search?q=${this.searchQuery}`)
                .then((res) => res.json())
                .then((data) => {
                    // Update the products array with the filtered results
                    this.products = data.products;
                })
                .catch((error) => {
                    console.error(
                        "Error fetching filtered product data:",
                        error
                    );
                });
        },
    },
};
</script>

<style scoped>
/* Add this CSS class for the hover effect */
td:hover {
    background-color: #a7a7a7; /* Change the background color to your desired hover color */
}
</style>
