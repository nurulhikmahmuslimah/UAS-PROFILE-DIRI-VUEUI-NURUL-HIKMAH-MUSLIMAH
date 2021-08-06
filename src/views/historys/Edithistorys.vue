<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit History</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">history</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="history.history"
          />
          <div class="alert alert-ganger" v-if="validation.history">
            {{ validation.history[0] }}
          </div>
        </div>
        
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const history = reactive({
      history: "",
     
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute();

    onMounted(()=>(
      axios.get(`http://127.0.0.1:8000/api/historys/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.waktu_history)

        history.history = response.data.data.history
       
      }).catch(error => {
        console.log(error.response.data)
      })
    ))

    function update() {
      let history = history.history;
  
      axios.put(`http://127.0.0.1:8000/api/historys/${route.params.id}`, {
          history: history,
      
        })
        .then(() => {
          router.push({
            name: 'Historys',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      history,
      validation,
      router,
      update,
      route
    };
  },
};
</script>

