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
          <root></root> 
        </div> <!-- fin list -->
    </div>


  </q-layout>
</template>

<script>
// import { Utils, Platform } from 'quasar'
import Root from './explorer/root.vue'

export default{
  components: {
    'root': Root
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
