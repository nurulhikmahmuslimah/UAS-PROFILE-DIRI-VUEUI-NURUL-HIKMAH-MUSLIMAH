<template>
  <div class="home">
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createprofils">Add profil</router-link>
    <table class="table">
  <thead>
    <tr>
       <th scope="col">ID</th>
      <th scope="col">Nama</th>
      <th scope="col">TTL</th>
      <th scope="col">Alamat</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(profil, index) in profils" :key="index">
      <td>{{ profil.nama}}</td>
      <td>{{ profil.ttl }}</td>
      <td>{{ profil.alamat }}</td>
       <td>{{ profil.Keterangan }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editprofils', params:
        {id:profil.id}}"
          >Edit</router-link>
        <button @click.prevent="profilDelete(profil.id)" class="btn 
        btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import { ref, onMounted } from 'vue';
export default {
  name: "Home",
  components: {
    Slider
  },
  setup(){
    let profils = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/profils')
      .then(response => {
        profils.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function profilDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/profils/${id}`)
      .then(()=>{
        let z = this.profils.map(profils => profils.id).indexOf(id);
        this.profils.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      profils,
      profilDelete
    }
  }
};
</script>

