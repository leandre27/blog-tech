<template>
  <div class="w-full h-screen flex justify-center items-center">
    <section class="max-md:max-w-full max-w-1/2 px-54 py-8  w-full h-full  flex flex-col justify-center space-y-10 items-center">
      <div class="flex justify-start w-full">
          <h1 class="text-2xl">logo</h1>
      </div>
      <div class="block w-full flex-1 mt-24 space-y-4">

        <div class="block">
          <h1 class="text-4xl">Welcome back !</h1>
        </div>
        <div class="block">
          <p>Sign in to access your dashboard and <br> continue optimize your QA process.</p>
        </div>



        <form @submit.prevent="" class="flex flex-col justify-center mt-8  w-full">
          <div class="max-w-3/4 space-y-6 ">

            <div class="flex flex-col">
              <label for="email">Email</label>
              <div class="flex space-x-2 items-center border border-teal-700 h-10 w-full 
                transition duration-200 ease-in-out rounded-md ps-2 
                focus-within:ring-1 focus-within:ring-teal-800 focus-within:scale-[1.01]">
                <LucideMail :size="18"/>
                <input class="w-full outline-0 group-focus:border-amber-400" />
              </div>
            </div> 
  
            <div class="flex flex-col">
              <label for="email">Password</label>
              <div class="flex px-2 space-x-2 items-center border border-teal-700 h-10 w-full 
                transition duration-200 ease-in-out rounded-md ps-2 
                focus-within:ring-1 focus-within:ring-teal-800 focus-within:scale-[1.01]">
                <LucideLock :size="18"/>
                <input class="w-full outline-0 group-focus:border-amber-400" />
                <LucideEyeOff :size="18"/>
              </div>
  
              <div class="flex justify-end">
                <nuxt-link class="text-teal-800 font-bold">
                  Forgot password ?
                </nuxt-link>
              </div>
            </div> 
            <button type="submit" class=" bg-teal-800 hover:bg-teal-950 rounded-md text-white h-10 w-full">Sign in</button>
            <div class="flex justify-center items-center my-6">
              <hr class="w-1/2"> <span class="mx-2">or</span>  <hr class="w-1/2">
            </div>
  
            <button type="button" class="border border-black h-10 w-full rounded-md ">Continue with google</button>
            <button type="button" class="border border-black  h-10 w-full rounded-md">Continue with apple</button>
  
            <div class="flex justify-center">
              <p>Don 't have an account? <nuxt-link class="text-teal-800 font-bold"> Sign up </nuxt-link> </p>
             
            </div>

          </div>

        </form>
      </div>

    </section>
    <section class="max-w-1/2 w-full h-full bg-teal-950 max-md:hidden">

    </section>
  </div>
</template>

<script setup lang="ts">
import { LucideLock, LucideMail, LucideEyeOff } from '#components';


</script>

<style scoped>

</style>