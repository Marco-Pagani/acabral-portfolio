<template>
  <div>
    <navbar />
    <div class="min-h-screen p-20 lg:pl-72">
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