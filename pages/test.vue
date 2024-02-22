<script setup lang="ts">
useHead({
  title: 'Sign In',
  meta: [
    {
      name: 'description',
      content: 'Sign In Nuxt 3, Demo POS'
    },
    {
      name: 'keywords',
      content: 'Sign In, Nuxt 3, Learning Nuxt 3'
    },
  ],
})
</script>

<template>
  <v-app-bar color="primary" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>DEMO POS</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi:mdi-minus"></v-btn>
    </template>
  </v-app-bar>

  <v-sheet>
    
    <v-card class="mx-auto mt-8" max-width="400" hover  transition="scale-transition" >
      <v-card-item>
        <v-card-title>
          Login
        </v-card-title>
        <v-card-subtitle>
          เข้าสู่ระบบ
        </v-card-subtitle>
      </v-card-item>

     
      <v-card-text>
        <v-form>
          <v-text-field 
          label="Username"
          prepend-inner-icon="mdi:mdi-account"
          clearable
          ></v-text-field>
          <v-text-field label="Password"
          prepend-inner-icon="mdi:mdi-key"
          ></v-text-field>
          <v-btn block color="primary">Login</v-btn>
          <v-btn block>Register</v-btn>
        </v-form>

      </v-card-text>
    </v-card>
 
  </v-sheet>
</template>



<style scoped>
.bg { 
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>