<template>
<site-wrapper>
  <slot />
</site-wrapper>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SiteWrapper from "@/components/site-wrapper";
export default {
  components: {
    SiteWrapper,
  }
}
</script>
