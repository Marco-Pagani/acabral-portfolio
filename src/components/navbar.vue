<template>
<nav>
  <div class="flex w-full items-center justify-between px-6 h-16 lg:h-24 bg-white text-gray-700 border-b border-gray-200 lg:border-none z-10">
      <g-image alt="Logo" src="~/assets/logo.svg" width="200" class="w-24" />
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
    class="bg-white lg:translate-x-0 transform top-16 lg:top-24 left-0 w-3/4 lg:w-72  fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
    >
    
    <ul class="p-8 font-title text-xl">
      <li>illustration</li>
      <li>character design</li>
      <li>about</li>
      <li>contact</li>
    </ul>
  </aside>
</nav>

</template>

<script>
export default {
  data () {
    return {
      expanded: false
    }
  }
}
</script>