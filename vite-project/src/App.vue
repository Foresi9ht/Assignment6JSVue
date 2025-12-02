<template>
  <div class="app">
    <h1>List of people</h1>
    <PeopleGallery
      :people="people"
      @like-person="handleLike"
      @dislike-person="handleDislike"
      @add-person="handleAddPerson"
      @reset-all="handleResetAll"
    />
  </div>
</template>

<script>
import PeopleGallery from "./components/PeopleGallery.vue";

export default {
  name: "App",
  components: { PeopleGallery },

  data() {
    return {
      people: [
        { id: 1, name: "Sultik", likes: 0, dislikes: 0 },
        { id: 2, name: "Eldiyar", likes: 0, dislikes: 0 },
        { id: 3, name: "Dimash", likes: 0, dislikes: 0 },
      ],
      nextId: 4,
    };
  },

  methods: {
    handleLike(id) {
      const person = this.people.find((p) => p.id === id);
      if (person) person.likes++;
    },

    handleDislike(id) {
      const person = this.people.find((p) => p.id === id);
      if (person) person.dislikes++;
    },

    handleAddPerson(name) {
      const trimmed = name.trim();
      if (!trimmed) return;

      this.people.push({
        id: this.nextId++,
        name: trimmed,
        likes: 0,
        dislikes: 0,
      });
    },

    handleResetAll() {
      this.people = this.people.map((p) => ({
        ...p,
        likes: 0,
        dislikes: 0,
      }));
    },
  },
};
</script>
