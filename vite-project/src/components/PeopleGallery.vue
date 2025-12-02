<template>
  <div class="gallery">
    <form class="add-form" @submit.prevent="submitNewPerson">
      <input v-model="newPersonName" type="text" placeholder="Enter name" />
      <button type="submit">Add Person</button>
    </form>
    <button class="reset-btn" @click="emitResetAll">Reset</button>
    <div class="cards">
      <PersonCard
        v-for="person in people"
        :key="person.id"
        :person="person"
        @like="handleLike"
        @dislike="handleDislike"
      />
    </div>
  </div>
</template>

<script>
import PersonCard from "./PersonCard.vue";

export default {
  name: "Gallery",
  components: { PersonCard },

  props: {
    people: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      newPersonName: "",
    };
  },

  methods: {
    handleLike(id) {
      this.$emit("like-person", id);
    },

    handleDislike(id) {
      this.$emit("dislike-person", id);
    },

    submitNewPerson() {
      if (!this.newPersonName.trim()) return;
      this.$emit("add-person", this.newPersonName);
      this.newPersonName = "";
    },

    emitResetAll() {
      this.$emit("reset-all");
    },
  },
};
</script>
