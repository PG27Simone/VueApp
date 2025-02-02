<template>

   <div id="app">

       <header>
           <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/leaderboard">Leaderboard</router-link>
                <router-link to="/gallery">Gallery</router-link>
                <router-link to="/contact">Contact Us</router-link>
           </nav>
       </header>

       <main>
           <router-view />
       </main>

   </div>

</template>

<script>

    export default {
        name: 'App',
        //data() {
        //    return {
        //        responseMessage: ''
        //    }
        //},
        //methods: {
        //    //async enables await 
        //    async pingBackend() {
        //        //try to do stuff, use await to stop and wait and then continue
        //        try {
        //            const res = await fetch('api/ping');
        //            const data = await res.json();
        //            this.responseMessage = data.message;
        //        } catch (err) {
        //            console.error(err);
        //        }
        //    }
        //}
    }

</script>

<style scoped>

nav{
    text-align: center;
}

</style>