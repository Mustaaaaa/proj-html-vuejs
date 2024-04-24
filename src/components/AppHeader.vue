<template>
    <div class="header-bar justify-center">
        <div class="container">
            <div>
                <ul class="row justify-space-between">
                    <li><font-awesome-icon :icon="['fas', 'location-dot']" class="yellow" /> 6767 Santa Monica Blvd, Los
                        Angeles, CA 90038</li>
                    <li class="phone-call-header"><font-awesome-icon :icon="['fas', 'phone']" class="yellow" /> Call Now
                        123-456-7890</li>
                    <li><button class="donate-header-button">Donate</button></li>
                </ul>
            </div>
            <div class="row justify-space-between logo-and-page-list-sec">
                <div>
                    <img src="/mt-2236-home-logo.jpg.png" alt="">
                </div>
                <ul class="row header-page-list">
                    <li><a href="#" class="home-page-list">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
.header-bar {
    background-color: #1618277c;
    position: absolute;
    width: 100%;

    .container {
        padding: 20px 0;
        font-size: 20px;
        color: white;

        .phone-call-header {
            margin-left: 400px;
        }

        .header-page-list {
            gap: 23px;
        }

        li {
            display: flex;
            align-items: center;
            gap: 10px;

            .home-page-list {
                color: #FFCD18;
            }

            a {
                color: white;
                text-decoration: none;
            }
        }

        .donate-header-button {
            background: white;
            border: none;
            border-radius: 20px;
            font-size: 25px;
            width: 240px;
            height: 60px;
            cursor: pointer;
        }

        .donate-header-button:hover {
            background-color: rgba(255, 255, 255, 0.904);
        }

        .donate-header-button:active {
            background-color: rgb(255, 255, 255);
        }

        .logo-and-page-list-sec {
            padding-top: 15px;
        }
    }
}
</style>