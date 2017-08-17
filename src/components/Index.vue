<template>
  <q-layout>
    <div slot="header" class="toolbar dark">
      <q-toolbar-title :padding="0">
         <!-- Quasar Framework v{{$q.version}} -->
         <div class="flex row items-center">
            <img src="~assets/likemark_logo.png" alt="likemark_logo">
            <span style="margin-left:10px;">Welcome to likemark interface !</span>
            <button>
              <i>share</i>
            </button>
            <button>
              <i>mail</i>
            </button>
            <button>
              <i>build</i>
            </button>

         </div>
      </q-toolbar-title>

    </div>

    <!--
      Replace following "div" with
      "<router-view class="layout-view">" component
      if using subRoutes
    -->
      <div class="layout-view">
        <h4 class="caption">Likemark List</h4>
        <div class="list item-inset-delimiter">
          <div class="item">
            <i class="item-primary">folder</i>
            <div class="item-content">Folder 1</div>
          </div>
          <div class="item">
            <i class="item-primary">folder</i>
            <div class="item-content">Folder2</div>
          </div>
          <div class="item">
            <i class="item-primary">folder</i>
            <div class="item-content">Folder3</div>
          </div>
          <div class="item">
            <i class="item-primary">link</i>
            <div class="item-content"><a href="https://team-chiru.github.io/likemark/">likemark.io</a></div>
          </div>
          <div class="item">
            <i class="item-primary">link</i>
            <div class="item-content"><a href="https://www.google.com">https://www.google.com</a></div>
          </div>
          <folder></folder>
          <lien></lien>
        </div> <!-- fin list -->
      </div>


  </q-layout>
</template>

<script>
// import { Utils, Platform } from 'quasar'
import Folder from './explorer/Folder.vue'
import Link from './explorer/Link.vue'

export default{
  components: {
    'folder': Folder,
    'lien': Link
  }
}
</script>

<style lang="stylus">
.logo-container
  width 192px
  height 268px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
