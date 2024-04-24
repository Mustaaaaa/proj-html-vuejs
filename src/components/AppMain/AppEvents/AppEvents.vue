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
            <div class="latest-news-section justify-center">
                <div class="container flex">
                    <div class="col-3">
                        <p class="title">Latest News</p>
                        <br>
                        <button class="button-view-other-posts">View Other Posts</button>
                    </div>
                    <div class="col-9 flex">
                        <div class="flex col-6" v-for="latestNew in latestNews">
                            <ul>
                                <li><img :src="latestNew.image" alt=""></li>
                                <li class="description">{{ latestNew.description }}</li>
                            </ul>
                        </div>
                    </div>
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
    padding: 160px 0 0 0;


    .title {
        font-size: 45px;
        font-weight: 700;
    }



}
</style>