<script setup>
import { ref } from 'vue';

// Vue Router
import { useRouter } from 'vue-router';
const router = useRouter();

const categoryName = ref('');

function createCategory() {
  // Logic to create a new category goes here
  console.log('Creating category:', categoryName.value);
  // After creation, navigate back to the admin page
  router.push({ path: '/admin' });
}
</script>

<template>
  <div class="p-4 md:bg-base-200 rounded-box max-w-md mx-auto mt-8 md:mt-0">
    <h1 class="text-3xl font-bold mb-4">Create New Category</h1>
    <form class="space-y-4" @submit.prevent="createCategory">
      <div>
        <label for="categoryName" class="block text-sm font-medium text-gray-700">Category Name</label>
        <input 
          type="text"
          id="categoryName"
          placeholder="Enter category name"
          v-model="categoryName"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
          required
        />
        <button type="submit" class="mt-4 btn btn-success w-full">Create Category</button>
      </div>
    </form>
  </div>
</template>