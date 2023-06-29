<template>
  <iframe :src="link" :style="[componentStyle, elementStyles]">

  </iframe>
</template>
  
<script>
import mixin from '@/utils/mixin.js';

export default {
  mixins: [mixin],
  props: {
    link: {
      type: String,
      required: true
    },
    elementStyles: {
      type: Array
    }
  },
  data() {
    return {
      componentStyle: {
        //backgroundColor: 'blue',
      }
    };
  }
}
</script>
  