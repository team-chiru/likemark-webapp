<template>
    <div class="list item-inset-delimiter" >
      <div v-for="n in 5">
        <folder></folder>
      </div>
      <div v-for="n in 5">
        <lien></lien>
      </div>

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
    }
  },
  data: {
    folders: [
      { folder: { title: 'Folder 1' } },
      { folder: { title: 'Folder 2' } },
      { folder: { title: 'Folder 3' } },
      { folder: { title: 'Folder 4' } },
      { folder: { title: 'Folder 5' } }
    ],
    lien: 3
  }
}
</script>

<style lang="stylus">
</style>
