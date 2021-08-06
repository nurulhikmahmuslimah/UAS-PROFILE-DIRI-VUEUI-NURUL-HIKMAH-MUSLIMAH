<template>
  <div class="pengalamans">
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createpengalamans">Add</router-link>
    <table class="table">
  <thead>
    <tr>
       <th scope="col">ID</th>
      <th scope="col">Pengalaman</th>
     
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, index) in pengalamans" :key="index">
      <td>{{ pengalaman.id}}</td>
      <td>{{ pengalaman.pengalaman }}</td>
      
      <td>
        <router-link class="btn btn-success" :to="{name:'Editpengalamans', params:
        {id:pengalaman.id}}"
          >Edit</router-link>
        <button @click.prevent="pengalamanDelete(pengalaman.id)" class="btn 
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
  name: "Pengalamans",
  components: {
    Slider
  },
  setup(){
    let pengalamans = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/pengalamans')
      .then(response => {
        pengalamans.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function pengalamanDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/pengalamans/${id}`)
      .then(()=>{
        let z = this.pengalamans.map(pengalamans => pengalamans.id).indexOf(id);
        this.pengalamans.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      pengalamans,
      pengalamanDelete
    }
  }
};
</script>

