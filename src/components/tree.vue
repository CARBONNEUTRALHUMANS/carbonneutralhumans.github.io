<script setup lang="ts">

</script>

<template>
        <div class="w-100vw grid place-items-center grid-cols-2 font-sans overflow-hidden" style="height: calc(100vh - 64px);">
              <h1 class="absolute top-1/2 left-1/2 translate--1/2 text-6xl text-white text-center">Tree Not Found</h1>
            </div>
          </template>
<style>
.pulse {
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #efefef 0%, #fcfcfc 50%, #efefef 100%);
  background-size: 400% 400%;
  -webkit-animation: pulse 1.2s ease-in-out infinite;
          animation: pulse 1.2s ease-in-out infinite;
}
@-webkit-keyframes pulse {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}
@keyframes pulse {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}

html, body {
  height: 100%;
}

.content {
  display: flex;
}

.lines {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.lines .line, .lines .thumb {
  background-color: #f5f5f5;
  width: 15rem;
  height: 1rem;
  margin: 0.25rem;
}
.lines .thumb {
  height: 7.5rem;
}</style>
