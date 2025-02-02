<script>
    export default {
        name: 'Controls',
    
    data(){
        return {
            controls: {},
            loading: true,
            errorMessage: ''
        }
    },
    mounted(){
        setTimeout(()=>{
            const simulatedError=false;
            if(simulatedError){
                this.errorMessage = 'Failed to load control list';
            }else{
                this.controls = ['W to run', 'Space to jump', 'Left click to interact'];
            }
            this.loading = false;
        },1000) //wait one second
    }
}
</script>

<template>
    <div class="controls">
        <h3>Controls to play the game</h3>
        <p v-if="loading">Loading controls...</p>
        <p v-else-if="controls.length === 0">No Controls found.</p>
        <ul v-else>
            <li v-for="(control, i) in controls" :key="i"> <!-- i for index-->
                {{ control }}
            </li> 
        </ul>

        <p v-if="errorMessage" class="error">Error: {{ errorMessage }}</p>
    </div>

</template>

<style>
.controls{
    padding-top: 20px;
    text-align: center;
    list-style-position: inside;
}

</style>