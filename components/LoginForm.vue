<template>
  <div class="w-full flex justify-center items-center">
    <section class=" lg:max-w-1/2 px-auto py-8  w-full h-screen  flex flex-col justify-center space-y-10 items-center">
      <div class="flex justify-start w-full">
          <h1 class="text-2xl ms-6">logo</h1>
      </div>
      <div class="flex flex-col justify-center items-center w-full flex-1 mt-24 space-y-4">

        <div class="block  text-start w-2/4 max-lg:w-3/4 space-y-2" >
          <h1 class="text-4xl ">Welcome back !</h1>
          <p>Sign in to access your dashboard and continue <br> optimize your QA process.</p>
        </div>

        <form @submit.prevent="" class="flex flex-col justify-center items-center mt-8 w-full">
          <div class="max-lg:max-w-3/4 max-w-2/4 space-y-6 w-full">

            <div class="flex flex-col ">
              <label for="email">Email</label>
              <div class="flex space-x-2 items-center border border-gray-300 h-10 w-full 
                transition duration-200 ease-in-out rounded-lg ps-4
                focus-within:ring-2 focus-within:ring-teal-700 focus-within:scale-[1.01]">
                <LucideMail :size="18" class="text-gray-400"/>
                <input class="w-full outline-0 group-focus:border-amber-400" />
              </div>
            </div> 
  
            <div class="flex flex-col">
              <label for="email">Password</label>
              <div class="flex  items-center border border-gray-300 h-10 w-full 
                transition duration-200 ease-in-out rounded-lg px-4
                focus-within:ring-2 focus-within:ring-teal-700 focus-within:scale-[1.01]">
                <LucideLock :size="18" class="text-gray-400"/>
                <input class="w-full outline-0 group-focus:border-amber-400 ps-2" />
                <template v-if="visiblePassword">
                  <LucideEyeOff :size="18" class="text-gray-400 cursor-pointer" @click="visiblePassword = !visiblePassword"/>
                </template>
                <template v-else>
                  <LucideEye :size="18" class="text-gray-400 cursor-pointer" @click="visiblePassword = !visiblePassword"/>
                </template>
              </div>
  
              <div class="flex justify-end">
                <NuxtLink class="text-teal-800 font-bold cursor-pointer">
                  Forgot password ?
                </NuxtLink>
              </div>
            </div> 
            <button type="submit" class=" bg-teal-800 hover:bg-teal-950 rounded-lg text-white h-10 w-full cursor-pointer">Sign in</button>
            <div class="flex justify-center items-center my-6">
              <hr class="w-1/2 text-gray-300"> <span class="mx-2 text-gray-600 font-bold text-sm">OR</span>  <hr class="w-1/2 text-gray-300">
            </div> 
  
            <button type="button" class="border border-gray-300 h-10 w-full rounded-lg flex justify-center items-center space-x-2 cursor-pointer">
              <svg width="18px" height="18px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"></path> <path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853"></path> <path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05"></path> <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"></path> </g></svg>
              <span>Continue with google</span>
            </button>
            <button type="button" class="border border-gray-300 h-10 w-full rounded-lg flex justify-center items-center space-x-2 cursor-pointer">
              <svg width="18px" height="18px" viewBox="-1.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <title>apple [#173]</title> <desc>Created with Sketch.</desc>
                   <defs> </defs> 
                   <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
                   <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="#000000"> 
                  <g id="icons" transform="translate(56.000000, 160.000000)"> 
                    <path d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485" id="apple-[#173]"> 
                    
                    </path> </g> </g> </g> </g>
              </svg>
              <span>Continue with apple</span>
            </button>
  
            <div class="flex justify-center">
              <p>Don 't have an account ? <nuxt-link class="text-teal-800 font-bold cursor-pointer"> Sign up </nuxt-link> </p>
             
            </div>

          </div>

        </form>
      </div>

    </section>
    <section class="max-w-1/2 w-full h-screen bg-teal-950 max-md:hidden">

      <div class="">

      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
import { LucideLock, LucideMail, LucideEyeOff, LucideEye, NuxtLink } from '#components';

const visiblePassword = ref(false)

</script>

<style scoped>

</style>