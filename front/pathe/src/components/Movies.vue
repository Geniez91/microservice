<template>
  <v-container>
    <div class="py-3">
    <h2 style="text-align: center;">Cinéma Pathé</h2>
  </div>
  <div>
    

    <v-row>
      <v-col cols="4" v-for="movie in movies" :key="movie.id">
        <v-card
         :title=movie.title
         :subtitle=movie.realease_date
         :text="movie.synopsis"
         variant="tonal"
>
  <div>
    {{ movie.description }}
  </div>
  <hr>
  <div class="py-4">
    <h4>Reserver vos Places</h4>
    <v-row>
    <v-col cols="9">
      <v-text-field
  v-model="numberValue"
  hide-details
  single-line
  type="number"
  label="Nombre de Places" 
/>
</v-col>
<v-col cols="3">
<v-btn>Ajouter</v-btn>
</v-col>
  
  </v-row>

  
  </div>

 
</v-card>
     

      </v-col>

    </v-row>

  </div>
</v-container>
</template>

<script>
import { getMovies } from '../services/movies.services';

export default {
  data() {
    return {
      movies: []
    };
  },
  mounted() {
    this.loadMovies();
  },
  methods: {
    loadMovies() {
      getMovies()
        .then(movies => {
          this.movies = movies;
          console.log(this.movies);
        })
        .catch(error => {
          console.error('Une erreur s\'est produite :', error);
        });
    }
  }
};
</script>
