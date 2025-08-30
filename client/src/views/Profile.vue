<script setup>
import SettingsSection from '@/components/SettingsSection.vue';
import { ref } from 'vue';

const groups = ref(["Group A", "Group B", "Group C"]);
</script>

<template>
    <div class="p-4">
        <SettingsSection
            title="Groups"
            description="View your group memberships."
        >
            <ul class="flex space-x-1">
                <li v-for="group in groups" :key="group" class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {{ group }}
                </li>
            </ul>
        </SettingsSection>
    </div>
</template>