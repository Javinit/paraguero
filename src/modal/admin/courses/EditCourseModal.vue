<template>
  <q-dialog v-model="card">
    <q-card class="my-card">
      <q-card-section class="q-pt-md">
        <div class="col text-h6 ellipsis">Edita un Curso</div>
      </q-card-section>

      <q-card-section class="q-pt-md">
        <q-input v-model="courseName" class="" filled label="Nombre del Curso"></q-input>
        <q-input v-model="courseTeacher" class="q-mt-md" filled label="Maestro"></q-input>
        <q-input v-model="courseHour" class="q-mt-md" filled label="Horas"></q-input>
        <q-input
          v-model="courseDescription"
          class="q-mt-md"
          filled
          label="Descripción"
        ></q-input>
      </q-card-section>

      <q-separator />
      <div class="loaderContainer" v-if="loading">
        <span class="loader"></span>
      </div>

      <q-separator />

      <q-card-actions align="right">
        <q-btn color="primary" label="Editar Curso" @click="close" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, watch } from "vue";
import Swal from "sweetalert2";
const props = defineProps(["course", "open", "changeModal"]);

const router = useRouter();
const route = useRoute();

defineOptions({
  name: "EditCourse",
});

const card = ref(props.open);
const courseName = ref(props.course.name);
const courseTeacher = ref(props.course.teacher);
const courseHour = ref(props.course.hours);
const courseDescription = ref(props.course.description);
const loading = ref(false);

const close = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    card.value = false;
    Swal.fire({
      title: "Editado",
      text: "Curso Editado Correctamente",
      icon: "success",
      confirmButtonText: "Aceptar",
      timer: 3000,
      timerProgressBar: true,
    });
  }, 5000);
};

onMounted(() => {
  console.log("PROPS ", props);
});

watch(card, () => {
  props.changeModal();
});

watch(loading, () => {
  console.log("CHANGE LOADING ", loading);
});
</script>

<style scoped>
* {
  scrollbar-width: none;
}

.my-card {
  min-width: 30vw;
}

.loaderContainer {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 50px;
  top: 53%;
  z-index: 999;
}

.loader {
  position: relative;
  width: 48px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid rgb(50, 75, 216);
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  z-index: 999;
}

.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left: 4px solid rgba(8, 7, 16, 1);
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.inputCreate {
}
</style>
