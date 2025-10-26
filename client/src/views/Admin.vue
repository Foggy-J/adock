<script setup>
import { ref } from 'vue'
import SettingsSection from '@/components/SettingsSection.vue'

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGrip, faEdit } from '@fortawesome/free-solid-svg-icons'

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

    <SettingsSection title="Admin Options" description="Manage applications within ADock.">
      <button class="btn btn-success w-fit">Create Application</button>
    </SettingsSection>

    <SettingsSection title="Application List" description="View and manage existing applications.">
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
                class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Category
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Link
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
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
              <td class="px-6 py-4 whitespace-nowrap text-sm text-white max-w-10 truncate">
                {{ app.category }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                <a :href="app.link" target="_blank" class="text-blue-600 hover:text-blue-800">{{
                  app.link
                }}</a>
              </td>
              <td class="px-6 py-4 text-sm text-white flex gap-1 flex-wrap items-center">
                <span
                  class="inline-flex whitespace-nowrap items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >Admin</span
                >
                <span
                  class="inline-flex whitespace-nowrap items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
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