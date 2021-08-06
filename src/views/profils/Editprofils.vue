<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Data Diri</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="profil.nama"
          />
          <div class="alert alert-ganger" v-if="validation.nama">
            {{ validation.nama[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">TTL</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="profil.ttl"
          />
          <div class="alert alert-ganger" v-if="validation.ttl">
            {{ validation.ttl[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Alamat</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="profil.alamat"
          />
          <div class="alert alert-ganger" v-if="validation.alamat">
            {{ validation.alamat[0] }}
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
    const profil = reactive({
      nama: "",
      ttl: "",
      alamat: "",
    });

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute();

    onMounted(()=>(
      axios.get(`http://127.0.0.1:8000/api/profils/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama)

        profil.nama = response.data.data.nama
        profil.ttl = response.data.data.ttl
        profil.alamat = response.data.data.alamat
        
      }).catch(error => {
        console.log(error.response.data)
      })
    ))

    function update() {
      let nama = profil.nama;
      let ttl = profil.ttl;
      let alamat = profil.alamat;

      axios.put(`http://127.0.0.1:8000/api/profils/${route.params.id}`, {
          nama: nama,
          ttl: ttl,
          alamat: alamat,
          
        })
        .then(() => {
          router.push({
            name: 'Home',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      profil,
      validation,
      router,
      update,
      route
    };
  },
};
</script>

