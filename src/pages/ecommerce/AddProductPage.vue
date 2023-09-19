<template>
        <!-- bootstrp form -->
    <form class="bg-dark text-white my-4 py-4 px-4">
        <h4 class="text-center text-warning container">Add Product</h4>
        <!-- title -->
        <div class="container mb-3">
            <label for="title" class="form-label">Title</label>
            <!-- title input -->
            <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Title"
                name="title"
                v-model="title"
                min="3"
                required
            />
        </div>
        <!-- description -->
        <div class="container mb-3">
            <label for="description" class="form-label">Description</label>
            <!-- description input -->
            <input
                type="text"
                class="form-control"
                id="description"
                placeholder="Description"
                name="description"
                v-model="description"
                min="3"
                required
            />
        </div>
        <!-- price -->
        <div class="container mb-3">
            <label for="price" class="form-label">Price</label>
            <!-- price input -->
            <input
                type="number"
                class="form-control"
                id="price"
                placeholder="Price"
                name="price"
                v-model="price"
                min="1"
                required
            />
        </div>
        <!-- category -->
        <div class="container mb-3">
            <label for="category" class="form-label">Category</label>
            <!-- category input -->
            <input
                type="text"
                class="form-control"
                id="category"
                placeholder="Category"
                name="category"
                v-model="category"
                min="1"
                required
            />
        </div>
    </form>
</template>

<!-- script -->
<script>
export default {
    name: 'AddProductPage',
    mounted() {
        let user = localStorage.getItem("token");

        if (!user) {
            this.$router.push("/login");
        } else {
            // Fetch API to add product
            
        }
    },
}
</script>