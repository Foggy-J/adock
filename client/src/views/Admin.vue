<script setup>
import { ref } from 'vue';
import SettingsSection from '@/components/SettingsSection.vue';

// Example data for applications
const applications = ref([
    { id: 1, name: 'Example App', category: 'Productivity', link: 'https://example.com' },
    { id: 2, name: 'Sample App', category: 'Entertainment', link: 'https://sample.com' },
]);

// Method to delete an application
const deleteApplication = (id) => {
    // Show confirmation dialog
    if (confirm('Are you sure you want to delete this application?')) {
        window.alert(`Application with ID ${id} deleted.`);
    }
}

// Method to create a new application

</script>

<template>
    <div class="p-4 space-y-3">
        <!-- Application List Section -->
        <SettingsSection
            title="Application List"
            description="View and manage existing applications."
        >
            <div class="mt-4">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allowed Roles</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="app in applications" :key="app.id">
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-10 truncate">{{ app.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-10 truncate">{{ app.category }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <a :href="app.link" target="_blank" class="text-blue-600 hover:text-blue-800">{{ app.link }}</a>
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-900 flex space-x-0.5 space-y-1 flex-wrap items-center">
                                <span class="inline-flex whitespace-nowrap items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Admin</span>
                                <span class="inline-flex whitespace-nowrap items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">User</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button @click="editApplication(app.id)" class="text-indigo-600 hover:text-indigo-900">Edit</button> |
                                <button @click="deleteApplication(app.id)" class="text-red-600 hover:text-red-900">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SettingsSection>
        <!-- Create Application Section -->
        <SettingsSection
            title="Create a New Application"
            description="Create a new application in aDock."
        >
            <form>
                <div class="mb-4">
                    <label for="appName" class="block text-sm font-medium text-gray-700">Application Name</label>
                    <input type="text" id="appName" name="appName" placeholder="Application Name" maxlength="50"
                            required class="bg-white mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
                </div>
                <div class="mb-4">
                    <label for="appCategory" class="block text-sm font-medium text-gray-700">Application Category</label>
                    <input type="text" id="appCategory" name="appCategory" placeholder="Application Category" maxlength="50"
                           required class="bg-white mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
                </div>
                <div class="mb-4">
                    <label for="appLink" class="block text-sm font-medium text-gray-700">Application Link</label>
                    <input type="url" id="appLink" name="appLink" placeholder="https://example.com"
                           required class="bg-white mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                           pattern="http[s]?://.+">
                </div>
                <div class="mb-4 flex items-center space-x-3 flex-wrap">
                    <label for="appRoles" class="text-sm font-medium text-gray-700">Allowed Roles:</label>
                    <input type="checkbox" id="appRoles" name="appRoles" value="admin" class="mr-1">
                    <label for="appRoles" class="inline-block text-sm font-medium text-gray-700">Admin</label>
                    <input type="checkbox" id="appRolesUser" name="appRolesUser" value="user" class="mr-1">
                    <label for="appRolesUser" class="inline-block text-sm font-medium text-gray-700">User</label>
                </div>
                <button type="submit"
                        class="px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-white font-medium hover:bg-blue-700 cursor-pointer">
                    Create Application
                </button>
            </form>
        </SettingsSection>
    </div>
</template>

<style scoped>
/* Input Error */
input:invalid {
    border-color: #e3342f;
    box-shadow: 0 0 0 1px rgba(227, 52, 47, 0.5);
}

/* Custom Checkbox */
input[type="checkbox"] {
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid #cbd5e0;
    border-radius: 0.25rem;
    background-color: white;
    position: relative;
    cursor: pointer;
}

input[type="checkbox"]:checked {
    background-color: #18c326;
    border-color: #18c326;
}

input[type="checkbox"]:checked::after {
    content: '■';
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 0.70rem;
}
</style>