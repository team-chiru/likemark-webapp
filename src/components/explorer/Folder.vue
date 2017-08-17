<template>
  <div class="item">
    <i class="item-primary">folder</i>
    <div class="item-content">Folder 1 {{ title }}</div>
  </div>
</template>

<script>
import Folder from './Folder.vue'
import Link from './Link.vue'

export default{
  components: {
    'folder': Folder,
    'lien': Link,
    child: {
      'folder': Folder,
      'lien': Link
    },
    data: {
      title: 'Folder 1'
    }
  }
}
</script>

<style lang="stylus">
</style>
