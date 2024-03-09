<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  username: "karn.yong@melivecode.com",
  password: "melivecode",
});

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const isLoading = ref(false);
const visible = ref(false);

function submitx() {
  isLoading.value = true;
}

const router = useRouter();
const submit = async () => {
  //isLoading.value = true;

  // await setTimeout(() => {
  //     isLoading.value = false;
  // }, 3000)

  // if(form.value.username === 'admin@live.com' && form.value.password === '123456'){
  //     router.push('/bos')
  // }

  if (
    ruleRequired(form.value.username) &&
    rulePassLen(form.value.password) &&
    ruleEmail(form.value.username)
  ) {
    const config = useRuntimeConfig();
    const baseApi: string = config.public.baseApi.url;

    const { data, error } = await useFetch(`${baseApi}/login`, {
      method: "post",
      body: {
        username: form.value.username,
        password: form.value.password,
        expiresIn: 60000
      },
    });

    //alert(data.value.status);
    const token = useCookie('token');

    if (data.value.status === "ok") {
      
       alert(data.value.accessToken); 
       
      // this.$cookies.set('token', data.value.accessToken);
       token.value = data.value.accessToken;
       localStorage.setItem('token', data.value.accessToken);

        router.push("/bos");
    }
    


    //router.push('/dashboard')
  }
};
</script>

<template>
  <div>
    <v-overlay :model-value="isLoading" class="align-center justify-center">
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-card-title class="text-center"> Nuxt3 DEMO Login </v-card-title>

      <v-form @submit.prevent="submit">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          :rules="[ruleRequired, ruleEmail]"
          v-model="form.username"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password

          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a
          >
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          :rules="[ruleRequired, rulePassLen]"
          v-model="form.password"
        ></v-text-field>

        <!-- <v-card class="mb-12" color="surface-variant" variant="tonal">
          <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
          </v-card-text>
        </v-card> -->

        <v-btn
          type="submit"
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
        >
          Log In
        </v-btn>
      </v-form>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>
