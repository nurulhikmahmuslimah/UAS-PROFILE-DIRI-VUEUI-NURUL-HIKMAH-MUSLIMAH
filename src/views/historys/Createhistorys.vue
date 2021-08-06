<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add History</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">ID</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="history.id"
          />
          <div class="alert alert-ganger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
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
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const history = reactive({
      historyl: "",
      
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let history = history.history;
     
      axios
        .post('http://127.0.0.1:8000/api/historys', {
          history: history,
          
        })
        .then(() => {
          router.push({
            name: "History",
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
      store,
    };
  },
};
</script>

