// On plugin.js file
import VueTags from './VueTags.vue';

const vueTags = {
  install (Vue) {
    Vue.component('vue-tags', VueTags)
  }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueTags)
}

export default vueTags
