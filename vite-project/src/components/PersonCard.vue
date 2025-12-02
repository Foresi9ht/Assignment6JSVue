<template>
  <div
    class="card"
    :class="{ 'card--negative': person.dislikes > person.likes }"
  >
    <h3>{{ person.name }}</h3>

    <p>Likes: {{ person.likes }}</p>
    <p>Dislikes: {{ person.dislikes }}</p>

    <div class="buttons">
      <button @click="emitLike">Like</button>
      <button @click="emitDislike">Dislike</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonCard",

  props: {
    person: {
      type: Object,
      required: true,
    },
  },

  methods: {
    emitLike() {
      this.$emit("like", this.person.id);
    },

    emitDislike() {
      this.$emit("dislike", this.person.id);
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
}

.card--negative {
  background-color: red;
}

.buttons {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}
</style>
