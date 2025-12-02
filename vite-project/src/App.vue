<template>
  <div class="app">
    <h1>List of people</h1>

    <!-- Навигация -->
    <nav>
      <router-link to="/all">All Students</router-link>
      <router-link to="/liked">Most Liked</router-link>
      <router-link to="/disliked">Most Disliked</router-link>
    </nav>

    <!-- Передаём people + методы в любую страницу -->
    <router-view
      v-slot="{ Component }"
      :people="people"
      :onLike="handleLike"
      :onDislike="handleDislike"
      :onAdd="handleAddPerson"
      :onReset="handleResetAll"
    >
      <component
        :is="Component"
        :people="people"
        :onLike="handleLike"
        :onDislike="handleDislike"
        :onAdd="handleAddPerson"
        :onReset="handleResetAll"
      />
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",

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

<style>
nav {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
