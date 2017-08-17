<template>
  <div class="item">
    <i class="item-primary">folder</i>
    <div class="item-content">Folder 1</div>
  </div>
</template>

<script>
import Folder from './Folder.vue'
import Link from './Link.vue'

export default{
  components: {
    child: {
      'folder': Folder,
      'lien': Link
    }
  }
}
</script>

<style lang="stylus">
</style>
