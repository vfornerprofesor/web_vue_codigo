<template>
    <router-link :to="getLinkPage(link_page_name)">
        <button v-if="title" class="btn btn-primary">{{ title }}</button>
    </router-link>
</template>
<script>
import urls from '@/utils/urls.js';
export default {
    props: {
        title: {
            type: String
        },
        link_page_name: {
            type: String
        }
    },
    methods: {
    getImageLink(imageName) {
      const image = img[imageName];
      return image;
    },
    getLinkPage(linkPageName) {
      const url = urls[linkPageName];
      return url;
    }
  }
}
</script>