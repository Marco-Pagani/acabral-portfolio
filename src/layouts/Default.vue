<template>
  <div>
    <navbar />
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>

<script>
import Navbar from "@/components/navbar";
export default {
  components: {
    Navbar,
  },
};
</script>
