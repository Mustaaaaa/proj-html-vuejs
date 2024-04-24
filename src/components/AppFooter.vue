<template>
    <div class="footer-section justify-center">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img src="/mt-2236-home-logo.jpg.png" alt="">
                </div>
                <div class="col-3">
                    <p class="title">Follow Us</p>
                    <ul class="row">
                        <li>
                            <button class="social-button">
                                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                            </button>
                        </li>
                        <li>
                            <button class="social-button">
                                <font-awesome-icon :icon="['fas', 'paper-plane']" />
                            </button>
                        </li>
                        <li>
                            <button class="social-button">
                                <font-awesome-icon :icon="['fab', 'instagram']" />
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="col-5">
                    <p class="subscribe-description">Subscribe to get the latest news, course updates, discounts and
                        events</p>
                    <input type="text" placeholder="Enter your e-mail here *" class="input-email-subscribe">
                    <button class="subscribe-button">Subscribe</button>

                </div>
            </div>
            <div class="copyright-section">
                <p>Copyright © 2021, All Rights Reserved.</p>
            </div>
        </div>

    </div>
</template>

<script>

</script>

<style lang="scss">
.footer-section {
    padding: 120px 0 0 0;
    background-color: #404040;

    .title {
        font-size: 20px;
        color: white;
        padding-bottom: 50px;
    }

    .subscribe-button {
        background: #FFCD18;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        width: 210px;
        height: 75px;
        cursor: pointer;
        margin-top: 30px;
    }
    .subscribe-button:hover {
        background: #ffcd18ec;
    }
    .subscribe-button:active {
        background: #FFCD18;
    }

    .subscribe-description {
        color: white;
        font-size: 20px;
        padding-bottom: 30px;
    }

    .social-button {
        width: 60px;
        aspect-ratio: 1/1;
        background: transparent;
        border: 2px solid;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        margin-right: 15px;
        font-size: 20px;
    }

    .input-email-subscribe {
        width: 700px;
        height: 75px;
        font-size: 20px;
        padding: 0 40px;
    }
    .copyright-section{
        color: white;
        font-size: 17px;
        padding-bottom: 40px;
    }
}
</style>