<template>
    <div>
        <h1 class="text-center my-4 px-4">Product Details</h1>
        <div class="container mt-4 py-4 px-4">
            <!-- Display product details here -->
            <div>
                <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Discount Percentage</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Brand</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ product.title }}</td>
                        <td>{{ product.description }}</td>
                        <td>${{ product.price }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.discountPercentage }}%</td>
                        <td>{{ product.rating }}%</td>
                        <td>{{ product.stock }}%</td>
                        <td>{{ product.brand }}%</td>
                        <td>{{ product.category }}%</td>
                    </tr>
                </tbody>
            </table>
                <div v-if="product.images && product.images.length > 0">
                    <h4>Images:</h4>
                    <ul>
                        <li
                            v-for="(image, index) in product.images"
                            :key="index"
                        >
                            <img :src="image" alt="Product Image" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductDetailsPage",
    data() {
        return {
            product: {}, // Initialize an empty object to store the product details
        };
    },
    mounted() {
        // Get the product ID from the route parameters
        const productId = this.$route.params.id;

        // Fetch product details from the API using the product ID
        fetch(`https://dummyjson.com/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                // Assign the product details to the data property
                this.product = data;
            })
            .catch((error) => {
                console.error("Error fetching product details:", error);
            });
    },
};
</script>
