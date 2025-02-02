<script>
    export default {
        name: 'LeaderboardSummary',
        data(){
            return{
                leaderboardData: [],
                errorMessage: ''
            }
        },
        mounted(){
            this.fetchLeaderboardData()
        },
        methods: {
            async fetchLeaderboardData(){
                try {
                    const res = await fetch('/api/leaderboard-summary');
                    if(!res.ok){ //server error
                        throw new Error(`Server returned status ${res.status}`);
                    }
                    const data = await res.json(); //convert to json so we can process it
                    this.leaderboardData = data;
                }catch (err){ //promise error
                    this.errorMessage = err.message;
                }
            }
        }
    }
</script>

<template>

    <div class="leaderboard-summary">
        <h2>Leaderboard Summary</h2>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <!-- iterate thorugh leaderboardData list-->
                <tr v-for="(item, index) in leaderboardData" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.player }}</td>
                    <td>{{ item.score }}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>

</template>

<style scoped>

    .leaderboard-summary{
        margin-top: 10px;
        text-align: center;
    }

    table{
        margin: 0 auto;
        border-collapse: collapse;
    }

    th{
        border: 1px solid #ccc;
        padding: 15px;
        color: green;
    }
    
    td {
        border: 1px solid #ccc;
        padding: 15px;
    }

    .error{
        color:red;
    }

</style>