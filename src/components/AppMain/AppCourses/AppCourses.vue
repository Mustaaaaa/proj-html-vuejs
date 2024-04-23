<template>
    <div class="courses-section justify-center ">
        <div class="container">
            <ul class="text-center">
                <li>
                    <ul class="title-courses-section">
                        <li class="title">Courses</li>
                        <li class="description"> To Keep up with the constantly rising standards of play</li>
                    </ul>
                </li>
                <li>
                    <AppCard />
                </li>
                <li><button class="other-courses-button">View Other Courses</button></li>
            </ul>
        </div>
    </div>
    <div class="first-step-div justify-center">
        <div class="container flex">
            <div class="col-9">
                <p class="title">TAKE THE <span class="yellow">FIRST STEP</span></p>
                <p class="description">The fascinating world of chess has its doors open for anyone</p>
            </div>
            <div class="col-3">
                <button class="button-view-more">View More</button>
            </div>
        </div>
    </div>
</template>

<script>
import AppCard from './AppCard.vue';

export default {
    data() {
        return {
        };
    },

    components: {
        AppCard,
    }
};
</script>

<style lang="scss">
.courses-section {
    padding: 160px 0 0 0;

    .title-courses-section {
        .title {
            font-size: 45px;
            font-weight: 700;
        }

        .description {
            font-size: 27px;
            padding: 50px 0 60px 0;
        }
    }

    .other-courses-button {
        background-color: white;
        border: solid 2px;
        border-radius: 10px;
        font-size: 25px;
        width: 270px;
        height: 75px;
        cursor: pointer;
        margin: 60px 0 80px 0;
    }
    
}

.first-step-div {
    background-image: url(/mt-2236-home-bg2.jpg);
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    
    .title {
        font-size: 50px;
        font-weight: 700;
        padding: 160px 0 47px 0;
    }
    
    .description {
        font-size: 20x;
        padding-bottom: 175px;
    }
    .col-3{
        display: flex;
        align-items: center;
        .button-view-more {
            background-color: #FFCD18;
            border: none;
            border-radius: 10px;
            font-size: 25px;
            width: 270px;
            height: 75px;
            cursor: pointer;
        }
    }
}
</style>