<template>
    <div class="welcome-section justify-center">
        <div class="container">
            <div>
                <p class="welcome-badge">WELCOME</p>
            </div>
            <div class="col-5">
                <ul>
                    <li class="title">ACADEMIC CHESS FOR <em class="yellow">EVERYONE</em></li>
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
.welcome-section,
.header-br {
    background-image: url(/mt-2236-home-bg1.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


.welcome-section {
    padding: 330px 0;
    color: white;

    .title {
        font-size: 80px;
        font-weight: 700;
    }

    .description {
        font-size: 24px;
        padding: 40px 0 50px 0;
    }

    .welcome-badge {
        margin-bottom: 15px;
        background: #FFCD18;
        color: black;
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