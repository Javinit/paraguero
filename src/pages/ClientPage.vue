<template>
  <q-page class="flex flex-center mainPage">
    <div class="box">
      <div class="title">
        <p>ASOCIACIÓN CIVIL "EL PARAGUERO"</p>
      </div>
      <div class="dataBox">
        <div class="tableCourses">
          <div class="q-pa-md">
            <q-table
              flat
              bordered
              title="Cursos"
              :rows="rows"
              :columns="columns"
              row-key="name"
              binary-state-sort
              class="tableCourse"
              rows-per-page-label="Documentos por página"
              dark
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="name" :props="props">
                    {{ props.row.name }}
                  </q-td>
                  <q-td key="teacher" :props="props">
                    {{ props.row.teacher }}
                  </q-td>
                  <q-td key="hours" :props="props">
                    <div class="text-pre-wrap">{{ props.row.hours }}</div>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </div>
        <div class="infoBox">
          <img src="/paraguero.png" alt="" />
          <div class="info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at
              voluptates, totam expedita facilis quo, deleniti illum, tenetur corporis
              odit eius. Dolor ipsam sunt laudantium cupiditate placeat? Similique
              asperiores hic consequuntur nam consectetur? Nulla, suscipit!
            </p>
          </div>
          <div class="social">
            <p>Redes Sociales</p>
            <div class="socialB">
              <q-btn
                color="secondary"
                :icon-right="'img:public/icons/instagram.svg'"
                label="Instagram"
                class="btn"
              />
              <q-btn
                color="secondary"
                :icon-right="'img:public/icons/facebook.svg'"
                label="Facebook"
                class="btn"
              />
              <q-btn
                color="secondary"
                :icon-right="'img:public/icons/whatsapp.svg'"
                label="Whatsapp"
                class="btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

defineOptions({
  name: "ClientPage",
});

const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre del Curso",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "teacher",
    align: "center",
    label: "Dictado Por",
    field: "teacher",
    sortable: true,
  },
  {
    name: "hours",
    label: "Horas",
    field: "hours",
    sortable: true,
    style: "width: 10px",
  },
];

const rows = [
  {
    name: "Matemática",
    teacher: "Alejandro",
    hours: 20,
  },
];
</script>

<style scoped>
* {
  scrollbar-width: none;
}

.mainPage {
  background: rgb(229, 97, 0);
  background: linear-gradient(34deg, rgba(229, 97, 0, 1) 0%, rgba(9, 9, 121, 1) 100%);
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  height: 100vh;
  width: 100vw;
  padding-top: 50px;
}

.box {
  /* background: red; */
  padding: 20px;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.title {
  width: 95vw;
  height: 10vh;
  /* background: blue; */
}

p {
  width: 100%;
  text-align: center;
  color: white;
  font-size: x-large;
}

.dataBox {
  width: 95vw;
  height: 75vh;
  /* background: blue; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.tableCourses {
  width: 30vw;
  height: 100%;
  /* background: red; */
}

.tableCourse {
  color: white;
  font-weight: bold;
  min-height: 60vh;
  max-height: 70vh;
  background-color: rgba(0, 0, 0, 0.596);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(131, 99, 99, 0.349);
  box-shadow: 0 0 20px rgba(8, 7, 16, 0.24);
}

.btn {
  width: 200px;
  height: 40px;
  background: rgba(0, 0, 0, 0.596) !important;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(131, 99, 99, 0.349);
  box-shadow: 0 0 20px rgba(8, 7, 16, 0.24);
}

.infoBox {
  width: 60vw;
  height: 100%;
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.info {
  width: 60vw;
  height: 30%;
  /* background: blue; */
}
.social {
  width: 60vw;
  height: 30%;
  /* background: green; */
  padding-top: 5vh;
}

.socialB {
  margin-top: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
