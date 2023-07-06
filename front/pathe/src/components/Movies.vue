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

<v-img src="https://fr.web.img2.acsta.net/pictures/23/06/07/14/33/5787419.jpg" aspect-ratio="1"  cover class="fill-height fill-width mb-2" ></v-img>
  <div>
    {{ movie.description }}
  </div>
  <hr>
  <div class="py-4">
    <h4 class="text-center"><v-icon size="x-large"> <v-img
  :src="billet" class="mr-2"
></v-img></v-icon>Reserver vos Places</h4>
    <v-row v-if="movie.availableTickets>0">
    <v-col cols="9">
      <v-text-field
  v-model="numberValue"
  hide-details
  single-line
  type="number"
  label="Nombre de Places" 
  :min="1"
  :max="movie.availableTickets"
/>

</v-col>
<v-col cols="3" style="display: flex;align-items: center;" >
<v-btn @click="validerReservation(movie.idMovies, numberValue)">Ajouter</v-btn>
</v-col>
  
  </v-row>
  <div v-else class="py-3">
<h4 class="text-grey text-center" ><v-icon size="x-large"> <v-img
  :src="annuler" class="mr-2"></v-img> </v-icon>Aucune Place Disponible</h4>
</div>
  
  </div>

 
</v-card>
     

      </v-col>

    </v-row>

  </div>
</v-container>
</template>

<script>
import { getMovies,updateTicket } from '../services/movies.services';
import billet from '../assets/billet.png'
import annuler from '../assets/annuler.png'

export default {
  data() {
    return {
      movies: [],
      billet:billet,
      annuler:annuler
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
    },
    validerReservation(idMovies, numberValue) {
      console.log(numberValue)
    updateTicket(idMovies, numberValue)
      .then(() => {
        console.log('Réservation validée avec succès');
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la réservation :', error);
      });
 
  }
}
}
</script>
