<template>
  <div class="w-full flex justify-center items-center">
    <section class=" lg:max-w-1/2 px-auto py-8  w-full h-screen  flex flex-col justify-center space-y-10 items-center">
      <NuxtLink class="flex justify-start items-center w-full ps-5 icon">
          <LucideArrowLeft :size="18" id="arrowLeft" class="transition duration-200 ease-in-out"/>
          <h1 class="text-2xl ms-2">DabaScan</h1>
      </NuxtLink>
      <div class="flex flex-col justify-center items-center w-full flex-1 mt-24 space-y-4">

        <div class="block  text-start w-2/4 max-lg:w-3/4 space-y-2" >
          <h1 class="text-4xl font-bold">Bienvenue sur DabaScan !</h1>
          <p>Connecte-toi pour retrouver tes mangas <br> reprendre ta lecture et explorer de nouveaux univers</p>
        </div>

        <form @submit.prevent="LoginForm" class="flex flex-col justify-center items-center mt-8 w-full">
          <div class="max-lg:max-w-3/4 max-w-2/4 space-y-6 w-full">

            <div class="flex flex-col ">
              <label for="email">Email</label>
              <div class="flex space-x-2 items-center border border-gray-300 h-10 w-full 
                transition duration-200 ease-in-out rounded-lg ps-4
                focus-within:ring-2 focus-within:ring-teal-700 focus-within:scale-[1.01]">
                <LucideMail :size="18" class="text-gray-400"/>
                <input type="email" v-model="formData.email" class="w-full outline-0 group-focus:border-amber-400"  placeholder="Entrez votre adresse email"/>
              </div>
            </div> 
  
            <div class="flex flex-col">
              <label for="email">Mot de passe</label>

              <div class="flex  items-center border border-gray-300 h-10 w-full 
                transition duration-200 ease-in-out rounded-lg px-4
                focus-within:ring-2 focus-within:ring-teal-700 focus-within:scale-[1.01]">

                <LucideLock :size="18" class="text-gray-400"/>

                <input :type="visiblePassword ? 'text' : 'password'  " v-model="formData.password" class="w-full outline-0 group-focus:border-amber-400 ps-2" placeholder="Entrez votre mot de passe" />
                <template v-if="visiblePassword">
                  <LucideEyeOff :size="18" class="text-gray-400 cursor-pointer" @click="visiblePassword = !visiblePassword"/>
                </template>
                <template v-else>
                  <LucideEye :size="18" class="text-gray-400 cursor-pointer" @click="visiblePassword = !visiblePassword"/>
                </template>
              </div>
  
              <div class="flex justify-end">
                <NuxtLink class="text-teal-800 font-bold cursor-pointer">
                  Mot de passe oublié ?
                </NuxtLink>
              </div>
            </div> 

            <button type="submit" class=" bg-gray-800 hover:bg-teal-950 rounded-lg text-white h-10 w-full cursor-pointer">Se connecter</button>
            <div class="flex justify-center items-center my-6">
              <hr class="w-1/2 text-gray-300"> <span class="mx-2 text-gray-600 font-bold text-sm">OR</span>  <hr class="w-1/2 text-gray-300">
            </div> 
  
            <button type="button" @click="LoginWithGoogle" class="border border-gray-300 h-10 w-full rounded-lg flex justify-center items-center space-x-2 cursor-pointer">
              <svg width="18px" height="18px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"></path> <path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853"></path> <path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05"></path> <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"></path> </g></svg>
              <span>Continuer avec Google</span>
            </button>
  
            <div class="flex justify-center">
              <p>Pas encore de compte ?  <nuxt-link class="text-teal-800 font-bold cursor-pointer"> Créer un compte </nuxt-link> </p>
            </div>

          </div>

        </form>
      </div>

    </section>
    <section class="max-w-1/2 w-full h-screen bg-teal-950 max-md:hidden flex items-center justify-center relative">
      <img src="/assets/images/loginImg.webp" alt="" class="h-full w-full object-cover absolute ">
      <div class="absolute w-full h-full bg-black opacity-65 top-0 "></div>
      <div class="z-10">
        <h1 class="text-white text-4xl font-bold text-shadow-blue-300 text-shadow-lg">Bienvenue sur DabaScan </h1>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
import { LucideLock, LucideMail, LucideEyeOff, LucideEye ,LucideArrowLeft , NuxtLink } from '#components';

interface FormData {
  email: string;
  password: string;
}


const formData = ref<FormData>({
  email: '',
  password: ''
})

const visiblePassword = ref(false)

const { $supabase } = useNuxtApp()


async function  LoginWithGoogle() {
  const {error} = await $supabase.auth.signInWithOAuth({
  provider: 'google',
  })

  if(error) {
    console.log('Erreur lors de la connexion :');
  }
}


async function LoginForm() {

  const email = formData.value.email;
  const password = formData.value.password;
  const {data, error} = await $supabase.auth.signUp({ email,password })
  
}
// 



</script>

<style  scoped>

.icon:hover > #arrowLeft {
  transform: translateX(-0.5rem);
}
</style>