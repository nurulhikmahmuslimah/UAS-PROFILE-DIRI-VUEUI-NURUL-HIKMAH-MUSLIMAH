<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Pengalaman Diri</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">ID</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="pengalaman.id"
          />
          <div class="alert alert-ganger" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Pengalaman</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="pengalaman.pengalaman"
          />
          <div class="alert alert-ganger" v-if="validation.pengalaman">
            {{ validation.pengalaman[0] }}
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
    const pengalaman = reactive({
      id: "",
      pengalaman: "",
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute();

    onMounted(()=>(
      axios.get(`http://127.0.0.1:8000/api/pengalamans/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.id)

        pengalaman.id = response.data.data.id
        pengalaman.pengalaman = response.data.data.pengalaman
  
      }).catch(error => {
        console.log(error.response.data)
      })
    ))

    function update() {
      let id = pengalaman.id;
      let pengalaman = pengalaman.pengalaman;

      axios.put(`http://127.0.0.1:8000/api/pengalamans/${route.params.id}`, {
          id: id,
          pengalaman: pengalaman,
         
        })
        .then(() => {
          router.push({
            name: 'Pengalamans',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      pengalaman,
      validation,
      router,
      update,
      route
    };
  },
};
</script>

