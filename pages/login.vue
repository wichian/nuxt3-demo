<script setup lang="ts">
import  { ref } from  "vue";

const form = ref({
  username: '',
  password: '',
});

const { ruleEmail , rulePassLen , ruleRequired } = useFormRules()

const isLoading = ref(false);

function submit(){
    isLoading.value = true;
} 

</script>
<template>
  <v-app-bar :elevation="1" color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Nuxt3 Demo</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-home"></v-btn>  
    </template>
  </v-app-bar>
  <v-container fluid>
    <v-overlay
      :model-value="isLoading"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

    <v-row justify="center">
      <v-col md="4" sm="6" lg="3" xs="12" max-width="400">
        <v-card  class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg">
          <v-card-title> Login </v-card-title>
          <v-card-subtitle>เข้าสู่ระบบ</v-card-subtitle>
          <v-card-item class="pa-4">
            <v-form @submit.prevent="submit" class="pt-4">
              <v-text-field
                v-model="form.username"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                label="Username"
                :rules="[ruleRequired,ruleEmail]"
              ></v-text-field>

              <v-text-field
                label="Password"
                prepend-inner-icon="mdi-key"
                variant="outlined"
                v-model="form.password"
                type="password"
                :rules="[ruleRequired,rulePassLen]"
              ></v-text-field>

              <v-btn 
                color="primary"
                variant="elevated"
                type="sumit"
                block
              >
                Login
              </v-btn>
            </v-form>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
