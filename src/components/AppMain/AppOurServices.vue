<template>
    <div class="ourServices-section justify-center scrollAnimation">
        <div class="container">
            <div>
                <ul class="text-center">
                    <li class="title">OUR SERVICES</li>
                    <li class="description"> We make your child happy day after day</li>
                </ul>
            </div>
            <div class="row">
                <div class="col-3">
                    <ul>
                        <li class="title">Chess Education</li>
                        <li class="description">Popular education for your child and you</li>
                        <li>Teachers and parents around the world know that chess is not a simple game. It is agreat
                            learning tool that will help build your child's executive function skills.</li>
                        <li>
                            <ul class="list">
                                <li><font-awesome-icon :icon="['fas', 'chess-pawn']" class="chess-icon" /> Build
                                    self-regulation and motivation</li>
                                <li><font-awesome-icon :icon="['fas', 'chess-pawn']" class="chess-icon" /> Help with
                                    concentration issues</li>
                                <li><font-awesome-icon :icon="['fas', 'chess-pawn']" class="chess-icon" /> Learn to
                                    plan, organize, and prioritize</li>
                                <li><font-awesome-icon :icon="['fas', 'chess-pawn']" class="chess-icon" /> Regulate
                                    emotions</li>
                                <li><font-awesome-icon :icon="['fas', 'chess-pawn']" class="chess-icon" /> Learn to pay
                                    attention to detail</li>
                            </ul>
                        </li>
                        <li><button class="learnMore-button">Learn More</button></li>
                    </ul>
                </div>
                <div class="col-9">
                    <div class="col-6" v-for="service in services.slice(0, 4)">
                        <ul>
                            <li><img :src="service.icon" alt=""></li>
                            <li class="title">{{ service.title }}</li>
                            <li class="description">{{ service.description }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="gallery-section  scrollAnimation">
        <div class="imagesGallery">
            <div v-for="imageGallery in imagesGallery" class="col-3">
                <img :src="imageGallery" alt="">
            </div>
        </div>
        <div v-for="service in services.slice(4, 5)" class="row text-gallery">
            <img :src="service.icon" alt="">
            <ul>
                <li class="title">{{ service.title }}</li>
                <li class="description">{{ service.description }}</li>
            </ul>
            <button class="learnMore-button">Learn More</button>
        </div>
    </div>
</template>

<script>
import { scrollAnimation } from './ScrollAnimation/ScrollAnimation.vue';
scrollAnimation()
export default {
    data() {
        return {
            "services": [
                {
                    "icon": "/mt-2236-home-icon1.png",
                    "title": "Various Age Groups",
                    "description": "We provide chess classes to both children from 5 years old and adults.",
                },
                {
                    "icon": "/mt-2236-home-icon2.png",
                    "title": "Top Chess Variants",
                    "description": "We don't only teach classical chess but also other top variants of this game.",
                },
                {
                    "icon": "/mt-2236-home-icon3.png",
                    "title": "Best Chess Players",
                    "description": "Our alumni have won many prestigious chess tournaments in the country.",
                },
                {
                    "icon": "/mt-2236-home-icon4.png",
                    "title": "Best Chess Openings",
                    "description": "Our students know all the best chess openings and how to use them.",
                },
                {
                    "icon": "/mt-2236-home-icon5.png",
                    "title": "PLAY & LEARN",
                    "description": "Take a look into our day to day life here at Chess School",
                },
            ],
            "imagesGallery": [
                "/mt-2236-home-gallery1.jpg",
                "/mt-2236-home-gallery2.jpg",
                "/mt-2236-home-gallery3.jpg",
                "/mt-2236-home-gallery4.jpg",
            ]
        }
    }
}

</script>

<style lang="scss">
.ourServices-section {
    padding: 160px 0 170px 0;

    .container {
        .title {
            font-size: 45px;
            font-weight: 700;
        }

        .description {
            font-size: 27px;
        }

        .col-3 {
            padding-top: 60px;

            li {
                padding: 0 60px 40px 0;
            }

            .list {
                li {
                    padding-bottom: 25px;

                    .chess-icon {
                        padding: 0 10px;
                        color: #FFCD18;
                    }
                }
            }

            .title {
                font-size: 28px;
                font-weight: 400;
            }

            .description {
                font-size: 21px;
            }

            .learnMore-button {
                background: #FFCD18;
                border: none;
                border-radius: 10px;
                font-size: 25px;
                width: 270px;
                height: 75px;
                cursor: pointer;
            }

            .learnMore-button:hover {
                background: #e0b51a;
            }

            .learnMore-button:active {
                background: #FFCD18;
            }
        }

        .col-9 {
            padding-top: 60px;
            display: flex;
            flex-wrap: wrap;

            .col-6 {
                display: flex;
                justify-content: center;

                ul {
                    .title {
                        font-size: 20px;
                        font-weight: 700;
                    }

                    .description {
                        font-size: 20px;
                    }

                    li {
                        padding: 10px 90px 10px 100px;

                    }
                }
            }
        }
    }
}

.gallery-section {

    .imagesGallery {
        display: flex;

        .col-3 {
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .text-gallery {
        background-color: #FFCD18;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
        padding: 60px 0;

        img {
            height: 190px;
        }

        .title {
            font-size: 40px;
            font-weight: 700;
            padding-bottom: 20px;
        }

        .description {
            font-size: 25px;
        }

        .learnMore-button {
            background: transparent;
            border: black solid 2px;
            border-radius: 10px;
            font-size: 25px;
            width: 270px;
            height: 75px;
            cursor: pointer;
        }

        .learnMore-button:hover {
            background: #e0b51a;
        }

        .learnMore-button:active {
            background: transparent;
        }
    }
}
</style>