<script setup>
import { ref } from 'vue';

// Vue Router
import { useRouter } from 'vue-router';
const router = useRouter();

const application = ref([{
  name: '',
  category: '',
  link: '',
  iconLink: ''
}]);

function createApplication() {
  // Logic to create a new application goes here
  console.log('Creating application:', application.value);
  // After creation, navigate back to the admin page
  router.push({ path: '/admin' });
}
</script>

<template>
  <div class="p-4 md:bg-base-200 rounded-box max-w-md mx-auto mt-8 md:mt-0">
    <h1 class="text-3xl font-bold mb-4">Create New Application</h1>
    <form class="space-y-4" @submit.prevent="createApplication">
      <div>
        <label for="appName" class="block text-sm font-medium text-gray-700">Application Name</label>
        <input 
          type="text"
          id="appName"
          placeholder="Enter application name"
          v-model="application.name"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
          required
        />
      </div>
      <div>
        <label for="appCategory" class="block text-sm font-medium text-gray-700">Category</label>
        <input 
          type="text"
          id="appCategory"
          placeholder="Enter application category"
          v-model="application.category"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
          required
        />
      </div>
      <div>
        <label for="appLink" class="block text-sm font-medium text-gray-700">Application Link</label>
        <input 
          type="url"
          id="appLink"
          placeholder="Enter application link"
          v-model="application.link"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
          required
        />
      </div>
      <div>
        <label for="appIconLink" class="block text-sm font-medium text-gray-700">Icon Link</label>
        <input 
          type="url"
          id="appIconLink"
          placeholder="Enter icon link"
          v-model="application.iconLink"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
          required
        />
        <button type="submit" class="mt-4 btn btn-success w-full">Create Category</button>
      </div>
    </form>
  </div>
</template>