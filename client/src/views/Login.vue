<script setup></script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full m-4 md:m-0 perspective-1000">
      <div class="login-card-inner rounded-2xl">
        <h1 class="login-title text-4xl font-bold mb-2 text-center">Welcome Back</h1>
        <p class="login-subtitle text-center mb-10">Sign in to continue</p>
        
        <button class="primary-btn">
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <rect
              x="6"
              y="10"
              width="12"
              height="10"
              rx="2"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            />
            <path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" stroke-width="2" fill="none" />
            <circle cx="12" cy="15" r="1" fill="currentColor" />
          </svg>
          <span>Login with SSO</span>
        </button>
      </div>
      <p class="text-center text-sm text-gray-500 mt-4">
        Powered by <a href="https://github.com/Foggy-J/adock" target="_blank" class="underline">ADock</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.login-card-inner {
  background: rgba(30, 35, 45, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(244, 82, 73, 0.2);
  padding: 3rem 2rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(96, 165, 250, 0.1);
  transition: all 0.3s ease;
}

.login-card-inner:hover {
  border-color: rgba(244, 82, 73, 0.4);
  box-shadow: 
    0 25px 70px rgba(0, 0, 0, 0.6),
    0 0 60px rgba(96, 165, 250, 0.2);
  transform: translateY(-4px);
}

.login-title {
  background: linear-gradient(135deg, #f4acac 0%, #F54927 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-subtitle {
  color: rgba(255, 255, 255, 0.6);
}
</style>
