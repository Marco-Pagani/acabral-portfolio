<template>
<site-wrapper>
    <div class="pl-25% box-border max-w-4xl mx-auto md:masonry-2 lg:masonry-3 break-inside before:box-inherit after:box-inherit">
        <slot />
    </div>
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
