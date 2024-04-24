<template>
    <div class="events-section justify-center">
        <div class="container ">
            <ul class="text-center">
                <li>
                    <ul class="title-events-section">
                        <li class="title">Our Events</li>
                        <li class="description"> Chess is fun and we are happy to prove it at our events!</li>
                    </ul>
                </li>
                <li>
                    <AppCard />
                </li>
            </ul>
        </div>
    </div>
    <div class="latest-news-section justify-center">
        <div class="container flex">
            <div class="col-3 justify-center column">
                <p class="title">Latest News</p>
                <div class="yellow-line"></div>
                <button class="view-other-posts-button">View Other Posts</button>
            </div>
            <div class="col-9 flex news-image-section">
                <div class="flex col-6" v-for="latestNew in latestNews">
                    <ul>
                        <li><img :src="latestNew.image" alt=""></li>
                        <li class="description">{{ latestNew.description }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppCard from './AppCard.vue';

export default {
    data() {
        return {
            "latestNews": [
                {
                    "image": "/mt-2236-blog-img1.jpg",
                    "description": "The most common mistakes when managing personal finances",
                },
                {
                    "image": "/mt-2236-blog-img2.jpg",
                    "description": "Methods of the recruitment",
                },
            ],
        }
    },
    components: {
        AppCard,
    }
}

</script>

<style lang="scss">
.events-section {
    padding: 160px 0 0 0;

    .title-events-section {
        .title {
            font-size: 45px;
            font-weight: 700;
        }

        .description {
            font-size: 27px;
            padding: 45px 0 110px 0;
        }
    }
}

.latest-news-section {
    background: #E8E8E8;
    padding: 160px 0 180px 0;

    .view-other-posts-button {
        background: #E8E8E8;
        border: solid 2px;
        border-radius: 10px;
        font-size: 25px;
        width: 370px;
        height: 75px;
        cursor: pointer;
        margin: 60px 0 80px 0;
    }
    .view-other-posts-button:hover {
        background: rgba(0, 0, 0, 0.040);
    }
    .view-other-posts-button:active {
        background: #E8E8E8;
    }

    .title {
        font-size: 45px;
        font-weight: 700;
    }

    .news-image-section {

        img {
            padding: 0 0 0 45px;
        }

        .description {
            padding: 30px 0 0 45px;
            font-size: 20px;
        }
    }

    .yellow-line {
        background-color: #FFCC00;
        width: 100px;
        height: 5px;
        margin-top: 70px;



    }

}
</style>