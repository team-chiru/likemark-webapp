<template>
    <div class="list item-inset-delimiter" >
      <div v-for="folder in folders">
        <folder :title="folder.title"></folder>
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
  data() {
    return {
      folders: [
      { title: 'Folder 1' },
      { title: 'Folder 2' },
      { title: 'Folder 3' },
      { title: 'Folder 4' },
      { title: 'Folder 5' },
      { title: 'Folder wesh' },
      { title: 'Folder lawl' }
    ],
    lien: 3
    }
  }
}
</script>

<style lang="stylus">
</style>
