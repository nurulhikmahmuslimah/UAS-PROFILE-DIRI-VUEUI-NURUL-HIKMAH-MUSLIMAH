<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add Contact</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">ID</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="hubungi.id"
          />
          <div class="alert alert-ganger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">No Tlp</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="hubungi.no_tlp"
          />
          <div class="alert alert-ganger" v-if="validation.no_tlp">
            {{ validation.no_tlp[0] }}
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
    const hubungi = reactive({
      no_tlp: "",
     
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let no_tlp = hubungi.no_tlp;
  
      axios
        .post('http://127.0.0.1:8000/api/hubungis', {
          no_tlp: no_tlp,

        })
        .then(() => {
          router.push({
            name: "Hubungis",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      hubungi,
      validation,
      router,
      store,
    };
  },
};
</script>

