<template>
    <div class="welcome-section justify-center">
        <div class="container">
            <div>
                <p class="welcome-badge">WELCOME</p>
            </div>
            <div class="col-6">
                <ul>
                    <li class="title">ACADEMIC CHESS FOR EVERYONE</li>
                    <li class="description">
                        We are dedicated to broadening and developing chess as art, recreation, and as a significant
                        element of culture in Northern California.
                    </li>
                    <li>
                        <button class="enrollNow-button">Enroll Now</button>
                        <button class="learnMore-button">Learn More</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>

</script>

<style lang="scss">
.welcome-section, .header-bar{
    background-image: url(../../public/mt-2236-home-bg1.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.welcome-section {


    height: 1200px;

    .title {
        font-size: 80px;
        font-weight: 700;
        color: white;
    }

    .description {
        padding: 70px 0;
        font-size: 30px;
        color: white;
    }

    .welcome-badge {
        background: #FFCD18;
        width: 125px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
    }

    .enrollNow-button {
        background: #FFCD18;
        border: none;
        border-radius: 10px;
        font-size: 25px;
        width: 270px;
        height: 75px;
        cursor: pointer;
        margin-right: 30px;
    }

    .learnMore-button {
        color: white;
        border: 1px solid white;
        background: transparent;
        border-radius: 10px;
        font-size: 25px;
        width: 270px;
        height: 75px;
        cursor: pointer;
    }
}
</style>