<template>
  <PeopleGallery
    :people="people"
    @like-person="onLike"
    @dislike-person="onDislike"
    @add-person="onAdd"
    @reset-all="onReset"
  />
</template>

<script>
import PeopleGallery from "../components/PeopleGallery.vue";

export default {
  props: ["people", "onLike", "onDislike", "onAdd", "onReset"],
  components: { PeopleGallery },
};
</script>
