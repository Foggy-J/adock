<script setup>
import AppIcon from '@/components/AppIcon.vue';

</script>

<template>
    <div class="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-12">
        <AppIcon title="Example App" icon="app-icon.png" category="Productivity" link="/apps/example-app" />
        <AppIcon title="Another App" icon="another-app-icon.png" category="Utilities" link="/apps/another-app" />
        <AppIcon title="Cool App" icon="cool-app-icon.png" category="Entertainment" link="/apps/cool-app" />
        <AppIcon title="Work App" icon="work-app-icon.png" category="Business" link="/apps/work-app" />
        <AppIcon title="Fun App" icon="fun-app-icon.png" category="Games" link="/apps/fun-app" />
        <AppIcon title="Study App" icon="study-app-icon.png" category="Education" link="/apps/study-app" />
        <AppIcon title="Health App" icon="health-app-icon.png" category="Health" link="/apps/health-app" />
        <AppIcon title="Travel App" icon="travel-app-icon.png" category="Travel" link="/apps/travel-app" />
        <AppIcon title="Music App" icon="music-app-icon.png" category="Music" link="/apps/music-app" />
        <AppIcon title="Photo App" icon="photo-app-icon.png" category="Photography" link="/apps/photo-app" />
        <AppIcon title="News App" icon="news-app-icon.png" category="News" link="/apps/news-app" />
        <AppIcon title="Finance App" icon="finance-app-icon.png" category="Finance" link="/apps/finance-app" />
    </div>
</template>