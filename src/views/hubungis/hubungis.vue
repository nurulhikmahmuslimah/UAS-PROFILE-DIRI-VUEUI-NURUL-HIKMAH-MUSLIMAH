<template>
  <div class="hubungis">
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createhubungis">Add</router-link>
    <table class="table">
  <thead>
    <tr>
       <th scope="col">ID</th>
      <th scope="col">No Tlp</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data, index) in hubungis" :key="index">
      <td>{{ hubungi.no_tlp }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Edithubungis', params:
        {id:hubungi.id}}"
          >Edit</router-link>
        <button @click.prevent="hubungiDelete(hubungi.id)" class="btn 
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
  name: "Hubungis",
  components: {
    Slider
  },
  setup(){
    let hubungis = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/hubungis')
      .then(response => {
        hubungis.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function hubungiDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/hubungis/${id}`)
      .then(()=>{
        let z = this.hubungis.map(hubungis => hubungis.id).indexOf(id);
        this.hubungis.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      hubungis,
      hubungiDelete
    }
  }
};
</script>

