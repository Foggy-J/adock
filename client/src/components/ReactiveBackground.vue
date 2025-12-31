<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvas = ref(null);
let ctx = null;
let animationFrameId = null;
let particles = [];
let mouseX = null;
let mouseY = null;

const config = {
  particleCount: 250,
  maxDistance: 200,
  mouseInfluence: 200,
  baseOpacity: 0.3,
  maxOpacity: 0.9,
  particleSize: 2,
  particleColor: '#F54927', // White color
  lineColor: '#F5276C'  // White color
};

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.opacity = config.baseOpacity;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > canvas.value.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.value.height) this.vy *= -1;

    // Calculate distance to mouse
    if (mouseX !== null && mouseY !== null) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Update opacity based on distance to mouse
      if (distance < config.mouseInfluence) {
        this.opacity = config.baseOpacity + 
          (config.maxOpacity - config.baseOpacity) * 
          (1 - distance / config.mouseInfluence);
      } else {
        this.opacity = config.baseOpacity;
      }
    } else {
      this.opacity = config.baseOpacity;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, config.particleSize, 0, Math.PI * 2);
    ctx.fillStyle = `${config.particleColor}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
    ctx.fill();
  }
}

function init() {
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
  ctx = canvas.value.getContext('2d');

  particles = [];
  for (let i = 0; i < config.particleCount; i++) {
    const x = Math.random() * canvas.value.width;
    const y = Math.random() * canvas.value.height;
    particles.push(new Particle(x, y));
  }
}

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.maxDistance) {
        const opacity = (1 - distance / config.maxDistance) * 
          Math.min(particles[i].opacity, particles[j].opacity);
        
        ctx.beginPath();
        ctx.strokeStyle = `${config.lineColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]); // Dashed line
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  drawLines();

  animationFrameId = requestAnimationFrame(animate);
}

function handleMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function handleMouseLeave() {
  mouseX = null;
  mouseY = null;
}

function handleResize() {
  init();
}

onMounted(() => {
  init();
  animate();
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseleave', handleMouseLeave);
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="reactive-background">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped>
.reactive-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(to bottom, #222325, #2e323a);
  overflow: hidden;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
