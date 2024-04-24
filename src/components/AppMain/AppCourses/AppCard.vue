<template>
    <div class="justify-center">
        <div class="container flex">
            <div class="card-courses col-4" v-for="course in courses">
                <img :src="course.image" alt="">
                <ul>
                    <li class="title">{{ course.title }}</li>
                    <li class="description">{{ course.description }}</li>
                    <li class="price">{{ course.price }}</li>
                    <li><button class="view-more-button">View More</button></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            "courses": [
                {
                    "image": "/mt-2236-home-img1.jpg",
                    "title": "Garry Kasparov's Masterclass",
                    "description": "Learn the tips, tricks, and strategies from one of the best masters",
                    "price": "$456",
                },
                {
                    "image": "/mt-2236-home-img2.jpg",
                    "title": "Online Chess Lessons for Beginners",
                    "description": "Catered to adult beginners who have a few hours a week to practice",
                    "price": "$205",
                },
                {
                    "image": "/mt-2236-home-img3.jpg",
                    "title": "International Chess School Online",
                    "description": "Chess lessons for children and adults held completely online",
                    "price": "$356",
                },
            ],
        }
    }
}
</script>

<style lang="scss">
.card-courses {
    margin: 0 20px;
    padding-bottom: 45px;
    text-align: center;
    box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.205);

    li {
        padding: 0px 80px;
    }

    .title {
        padding-top: 60px;
        font-size: 27px;
        font-weight: 700;
        line-height: 54px;
    }

    .price {
        padding-top: 50px;
        padding-bottom: 30px;
        font-size: 27px;
        font-weight: 700;
    }

    .description {
        padding-top: 36px;
        font-size: 17px;
    }

    img {
        width: 100%;
    }

    .view-more-button {
        background-color: #FFCD18;
        border: none;
        border-radius: 10px;
        font-size: 25px;
        width: 270px;
        height: 75px;
        cursor: pointer;
    }
    .view-more-button:hover {
        background-color: #e0b51a;
    }
    .view-more-button:active {
        background-color: #FFCD18;
    }
}
</style>