<template>
<nav>
  <div class="flex w-full items-center justify-between px-6 h-16 lg:h-24 bg-white text-gray-700 z-10">
      <g-link to="/"><g-image alt="Logo" src="~/assets/logo.svg" width="200" class="w-24" /></g-link>
      <button class="lg:hidden" aria-label="Open Menu" @click="expanded = !expanded">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
  </div>
  <aside 
    :class="expanded ? 'translate-x-0' : '-translate-x-full'"
    class="bg-white lg:translate-x-0 transform top-16 lg:top-24 left-0 w-1/2 lg:w-72  fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
    >
    
    <ul class="p-8 font-title text-xl">
      <li><g-link to="/illustration/">illustration</g-link></li>
      <li><g-link to="/character-design/">character design</g-link></li>
      <li><g-link to="/about/">about</g-link></li>
      <li><g-link to="/contact/">contact</g-link></li>
    </ul>
  </aside>
</nav>

</template>

<style scoped>
li {
	position: relative;
}
li:hover:before {
  content: '';
	position: absolute;
	left: -8px;
  top: 10%;
	height: 80%;
  width: 4px;
	background-color: #6592a6;
}
</style>

<script>
export default {
  data () {
    return {
      expanded: false
    }
  }
}
</script>