<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SettingsSection from '@/components/SettingsSection.vue'

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGrip, faEdit } from '@fortawesome/free-solid-svg-icons'

// Example data for categories
const categories = ref(['Productivity', 'Entertainment'])

// Example data for applications
const applications = ref([
  { id: 1, name: 'Example App', category: 'Productivity', link: 'https://example.com' },
  { id: 2, name: 'Sample App', category: 'Entertainment', link: 'https://sample.com' },
])


// Method to delete an application
const deleteApplication = (id) => {
  // Show confirmation dialog
  if (confirm('Are you sure you want to delete this application?')) {
    window.alert(`Application with ID ${id} deleted.`)
  }
}

// Method to create a new application
</script>

<template>
  <div class="p-4 space-y-3">
    <div class="stats shadow bg-base-200 w-full sm:w-fit">
      <div class="stat">
        <div class="stat-figure text-primary">
          <FontAwesomeIcon :icon="faGrip" size="2x" />
        </div>
        <div class="stat-title">Apps Created</div>
        <div class="stat-value">31K</div>
      </div>
    </div>

    <SettingsSection title="Category List" description="View and manage existing categories.">
      <RouterLink to="/admin/create-category" class="primary-btn w-fit">
        Create Category
      </RouterLink>
      <div class="mt-4 gap-y-2 flex flex-col">
        <div class="flex gap-2 flex-wrap">
          <div class="badge badge-primary font-semibold" v-for="category in categories" :key="category">
            {{ category }}
          </div>
        </div>
      </div>
    </SettingsSection>

    <SettingsSection title="Application List" description="View and manage existing applications.">
      <RouterLink to="/admin/create-application" class="btn btn-sm btn-success w-fit">Create Application</RouterLink>
      <div class="mt-4">
        <table class="divide-y divide-gray-200 w-full">
          <thead class="bg-base-200">
            <tr>
              <th />
              <th
                class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Name
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden sm:table-cell"
              >
                Category
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden sm:table-cell"
              >
                Link
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden md:table-cell"
              >
                Allowed Roles
              </th>
            </tr>
          </thead>
          <tbody class="bg-base-300 divide-y divide-gray-200">
            <tr v-for="app in applications" :key="app.id">
              <td class="w-1">
                <button
                  @click="editApplication(app.id)"
                  class="btn btn-ghost btn-sm"
                >
                  <FontAwesomeIcon :icon="faEdit" size="lg" />
                </button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-white max-w-10 truncate">
                {{ app.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-white max-w-10 truncate hidden sm:table-cell">
                {{ app.category }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-white hidden sm:table-cell">
                <a :href="app.link" target="_blank" class="text-blue-600 hover:text-blue-800">{{
                  app.link
                }}</a>
              </td>
              <td class="px-6 py-4 text-sm text-white gap-1 flex-wrap items-center hidden md:flex">
                <span
                  class="badge badge-sm badge-secondary font-bold"
                  >Admin</span
                >
                <span
                  class="badge badge-sm badge-secondary font-bold"
                  >User</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SettingsSection>
  </div>
</template>

<style scoped>
/* Stats */
.stats {
  background: rgba(30, 35, 45, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(244, 82, 73, 0.2);
  border-radius: 0.5rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(96, 165, 250, 0.1);
  color: white;
  padding: 1rem;
  transition: all 0.3s ease;
}

.stats:hover {
  border-color: rgba(244, 82, 73, 0.4);
}

/* Input Error */
input:invalid {
  border-color: #e3342f;
  box-shadow: 0 0 0 1px rgba(227, 52, 47, 0.5);
}

/* Custom Checkbox */
input[type='checkbox'] {
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #cbd5e0;
  border-radius: 0.25rem;
  background-color: white;
  position: relative;
  cursor: pointer;
}

input[type='checkbox']:checked {
  background-color: #18c326;
  border-color: #18c326;
}

input[type='checkbox']:checked::after {
  content: '■';
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.7rem;
}
</style>