<template>
    <div class="welcome-section justify-center">
        <div class="container content">
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
        <div>
            <button class="phone-button-on-main"><font-awesome-icon :icon="['fas', 'phone']" class="yellow" /></button>
        </div>
    </div>
</template>


<script>
window.addEventListener('load', function () {
    const content = document.querySelector('.content');
    content.classList.add('show');
});

</script>

<style lang="scss">
.welcome-section {
    padding: 330px 0;
    color: white;
    background-image: url(/mt-2236-home-bg1.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

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

    .enrollNow-button:hover {
        background: #e0b51a;
    }

    .enrollNow-button:active {
        background: #FFCD18;
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

    .learnMore-button:hover {
        background: rgba(255, 255, 255, 0.096);
    }

    .learnMore-button:active {
        background: transparent;
    }

    .content {
        opacity: 0;
        transform: translateY(330px);
        transition: opacity 1.5s, transform 1.0s;
    }

    .content.show {
        opacity: 1;
        transform: translateY(0);
    }

    .phone-button-on-main {
        border-radius: 999px;
        border: none;
        background-color: white;
        color: #FFCD18;
        width: 120px;
        aspect-ratio: 1/1;
        font-size: 60px;
        cursor: pointer;
        position: fixed;
        left: 15px;
        top: 600px;
        z-index: 9;
    }

    .phone-button-on-main:hover {
        background-color: rgb(245, 245, 245);
    }

    .phone-button-on-main:active {
        background-color: white;
    }
}
</style>