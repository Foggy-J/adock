<script setup>
import SettingsSection from '@/components/SettingsSection.vue'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const groups = ref([
  'Group A',
  'Group B',
  'Group C',
  'Group D',
  'Group E',
  'Group F',
  'Group G',
  'Group H',
  'Group I',
  'Group J',
  'Group K',
  'Group L',
])
</script>

<template>
  <div class="flex justify-end px-4 md:hidden">
    <button class="bg-red-500 text-white font-semibold py-1 px-3 rounded text-center sm:hidden">
      <FontAwesomeIcon :icon="faRightFromBracket" class="-mr-0.5" />
      Logout
    </button>
  </div>
  <div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
    <SettingsSection title="Profile" description="View your profile settings.">
      <div class="p-3">
        <ul>
          <li class="mb-2"><strong>Name:</strong> FULL NAME</li>
          <li class="mb-2"><strong>Email:</strong> EMAIL</li>
        </ul>
      </div>
    </SettingsSection>

    <SettingsSection title="Groups" description="View your group memberships.">
      <ul class="flex flex-wrap gap-1.5">
        <li
          v-for="group in groups"
          :key="group"
          class="badge font-bold"
        >
          {{ group }}
        </li>
      </ul>
    </SettingsSection>
  </div>
  <p class="text-gray-400 text-sm font-semibold p-4 md:text-center">
    These settings are managed in your Identity Management platform, please contact your
    administrator for changes.
  </p>
</template>

<style scoped>
.badge {
  background-color: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  transition: background-color 0.3s ease;
}

.badge:hover {
  background-color: rgba(96, 165, 250, 0.4);
}
</style>
