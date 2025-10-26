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
  <div class="flex justify-end pt-4 px-4 md:hidden">
    <button class="btn btn-error btn-outline btn-sm sm:hidden">
      <FontAwesomeIcon :icon="faRightFromBracket" class="-mr-0.5" />
      Logout
    </button>
  </div>
  <div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <SettingsSection title="Profile" description="View your profile settings.">
      <div class="p-3">
        <ul>
          <li class="mb-2"><strong>Name:</strong> FULL NAME</li>
          <li class="mb-2"><strong>Email:</strong> EMAIL</li>
        </ul>
      </div>
    </SettingsSection>

    <SettingsSection title="Groups" description="View your group memberships.">
      <ul class="flex flex-wrap gap-3 p-3">
        <li
          v-for="group in groups"
          :key="group"
          class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm w-fit"
        >
          {{ group }}
        </li>
      </ul>
    </SettingsSection>
  </div>
  <p class="text-sm font-semibold p-4 text-red-700 md:text-center">
    These settings are managed in your Identity Management platform, please contact your
    administrator for changes.
  </p>
</template>
