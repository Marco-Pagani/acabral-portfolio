<template>
  <div>
    <navbar />
    <div class="min-h-screen px-20 pt-6 lg:pt-0 lg:pl-72">
        <slot />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
export default {
  components: {
    Navbar,
  }
}
</script>