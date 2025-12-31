<script setup>
import { RouterLink, useRoute } from 'vue-router'

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome,
  faCircleUser,
  faWrench,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <!-- Mobile Displays -->
  <div class="mobile-dock">
    <RouterLink
      to="/"
      :class="{ 'dock-item-active': useRoute().name === 'Apps' }"
      class="dock-item"
    >
      <button>
        <FontAwesomeIcon :icon="faHome" class="size-[1.2em]" />
      </button>
    </RouterLink>

    <RouterLink
      to="/profile"
      :class="{ 'dock-item-active': useRoute().name === 'Profile' }"
      class="dock-item"
    >
      <button>
        <FontAwesomeIcon :icon="faCircleUser" class="size-[1.2em]" />
      </button>
    </RouterLink>

    <RouterLink
      to="/admin"
      :class="{ 'dock-item-active': useRoute().name === 'Admin' }"
      class="dock-item"
    >
      <button>
        <FontAwesomeIcon :icon="faWrench" class="size-[1.2em]" />
      </button>
    </RouterLink>
  </div>

  <!-- Desktop Displays -->
  <nav class="desktop-nav">
    <ul class="nav-menu">
      <li>
        <RouterLink to="/" :class="{ 'nav-active': useRoute().name === 'Apps' }" class="nav-link">
          <FontAwesomeIcon :icon="faHome" size="lg" />
          <span>Dashboard</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/profile"
          :class="{ 'nav-active': useRoute().name === 'Profile' }"
          class="nav-link"
        >
          <FontAwesomeIcon :icon="faCircleUser" size="lg" />
          <span>USERNAME</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/admin"
          :class="{ 'nav-active': useRoute().name === 'Admin' }"
          class="nav-link"
        >
          <FontAwesomeIcon :icon="faWrench" size="lg" />
          <span>Admin</span>
        </RouterLink>
      </li>
      <li>
        <a class="nav-link nav-logout">
          <FontAwesomeIcon :icon="faRightFromBracket" size="lg" />
          <span>Logout</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Mobile Dock */
.mobile-dock {
  display: flex;
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(30, 35, 45, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(245, 73, 39, 0.15);
  border-radius: 1rem;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(245, 39, 108, 0.08);
  z-index: 1000;
}

@media (min-width: 640px) {
  .mobile-dock {
    display: none;
  }
}

.dock-item {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.dock-item button {
  background: transparent;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.dock-item:hover {
  color: #f54927;
}

.dock-item:hover button {
  background: rgba(245, 73, 39, 0.1);
}

.dock-item-active {
  color: #f54927;
}

.dock-item-active button {
  background: rgba(245, 73, 39, 0.15);
  box-shadow: 0 0 15px rgba(245, 39, 108, 0.3);
}

/* Desktop Navigation */
.desktop-nav {
  display: none;
  padding-top: 2rem;
  justify-content: flex-end;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  background: rgba(30, 35, 45, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(245, 73, 39, 0.15);
  border-radius: 1rem;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(245, 39, 108, 0.08);
  transition: all 0.3s ease;
}

.nav-menu:hover {
  border-color: rgba(245, 73, 39, 0.25);
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(245, 39, 108, 0.12);
}

.nav-menu li {
  margin: 0;
  padding: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.50rem 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  white-space: nowrap;
}

.nav-link:hover {
  color: #ffffff;
  background: rgba(245, 73, 39, 0.1);
}

.nav-active {
  color: #f54927;
  background: rgba(245, 73, 39, 0.15);
  box-shadow: 0 0 15px rgba(245, 39, 108, 0.2);
}

.nav-logout {
  cursor: pointer;
}

.nav-logout:hover {
  color: #ff4444;
  background: rgba(255, 68, 68, 0.1);
}
</style>
