<template>
    <div>
        <!-- page header -->
        <h1 class="text-center my-4 px-4">Welcome to Ecommerce Page</h1>
        <div class="container mt-4 py-4 px-4">
            <!-- Search Input -->
            <div class="mb-3 input-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search for products"
                    v-model="searchQuery"
                />
                <button class="btn btn-primary" @click="searchProducts">
                    Search
                </button>
            </div>
            <!-- products table -->
            <h2 class="text-center my-4 px-4">Products</h2>
            <table class="table table-bordered">
                <thead >
                    <tr >
                        <th class="bg-primary">Id</th>
                        <th class="bg-primary">Title</th>
                        <th class="bg-primary">Description</th>
                        <th class="bg-primary">Price</th>
                        <th class="bg-primary">Category</th>
                        <th class="bg-primary">Product Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in filteredProducts" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.title }}</td>
                        <td>{{ product.description }}</td>
                        <td>${{ product.price }}</td>
                        <td>{{ product.category }}</td>
                        <!-- action buttons -->
                        <td>
                            <!-- Center-aligned Details link above Update and Delete buttons -->
                            <div class="text-center">
                                <router-link
                                    :to="'/ecommerce/product/' + product.id"
                                    class="btn btn-primary mb-3 form-control"
                                >
                                    Details
                                </router-link>
                            </div>

                            <!-- Horizontally aligned Update and Delete buttons -->
                            <div class="d-flex justify-content-between">
                                <button class="btn btn-success mx-2">
                                    Update
                                </button>
                                <button class="btn btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- pagination -->
            <div class="pagination">
                <button
                    @click="previousPage"
                    type="button"
                    :disabled="currentPage === 1"
                >
                    Previous
                </button>
                <span>{{ currentPage }} of {{ totalPage }}</span>
                <button
                    @click="nextPage"
                    type="buton"
                    :disabled="currentPage === totalPage"
                >
                    Next
                </button>
            </div>
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
            currentPage: 1, // Current page number
            pageSize: 10, // Number of items per page
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
    // total pages
    
    mounted() {
        // protected routing
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
        // search the product
        searchProducts() {
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
        // previous page
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage -= 1;
            }
        },
        // next page
        nextPage() {
            if (this.currentPage < this.totalPage) {
                this.currentPage += 1;
            }
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
