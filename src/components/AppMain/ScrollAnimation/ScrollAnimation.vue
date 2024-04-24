<template>
</template>

<script>
export function scrollAnimation() {
  document.addEventListener('scroll', function() {
    const screenPosition = window.innerHeight;
    
    document.querySelectorAll('.scrollAnimation').forEach(scrollAnimation => {
      if (scrollAnimation.getBoundingClientRect().top < screenPosition) {
        scrollAnimation.classList.add('show');
      }
    });
  });
}
</script>

<style>
.scrollAnimation {
    opacity: 0;
    transform: translateY(200px);
    transition: opacity 1.5s, transform 1.0s;
}

.scrollAnimation.show {
    opacity: 1;
    transform: translateY(0);
}
</style>