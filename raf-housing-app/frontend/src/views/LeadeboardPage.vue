<template>
    <div class="leaderboard-page">
        <h1>Player Leaderboard</h1>

        <!--this is the leaderboard vue file in components-->
        <leaderboard-summary />

        <controls />

        <see-more-info />

    </div>
</template>

<script>
    //adding components
    import LeaderboardSummary from '../components/LeaderboardSummary.vue' // ../ to go back
    import Controls from '../components/Controls.vue' 
    import SeeMoreInfo from '../components/SeeMoreInfo.vue'

    export default {
        name: 'LandingPage',
        components: {
            LeaderboardSummary,
            Controls,
            SeeMoreInfo,
        }
    }
</script>

/<!--scoped makes sure this style is only visible in this script-->
<style scoped>
    .leaderboard-page{
        margin-top: 20px;
        text-align: center;
    }
</style>