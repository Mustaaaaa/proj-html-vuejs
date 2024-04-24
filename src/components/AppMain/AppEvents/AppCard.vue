<template>
    <div class="justify-center">
        <div class="container">
            <div class="cards-events" >
                <div class="row card" v-for="event in events">
                    <div class="col-4 card-event-image-section">
                        <img :src="event.image" alt="">
                    </div>
                    <div class="col-5  card-description-section">
                        <p class="title">{{ event.title }}</p>
                        <p class="description">{{ event.description }}</p>
                    </div>
                    <div class="col-3 card-button-section">
                        <button class="register-button">Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            "events": [
                {
                    "image": "/mt-2236-home-img4.jpg",
                    "title": "Grand Summer Tournament of 2021",
                    "description": "Join us for the Grand Summer Tournament 2021. Held every year on the first Sunday of summer, our Grand Summer Tournament| chess masters and beginners from North California. We have competitions for different levels of chess mastery with amazing prizes awarded at each level.",
                },
                {
                    "image": "/mt-2236-home-img5.jpg",
                    "title": "World Chess Day",
                    "description": "Celebrated on July 20 every year, World Chess Day Is one of the biggest events at our school. Be ready for fun tournaments and big prizes. Registration is obligatory!",
                },
            ],
        }
    }
}
</script>

<style lang="scss">
.cards-events {
    padding-bottom: 100px;

    .card-description-section {
        padding: 0 25px 0 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;

        .title {
            font-size: 27px;
            font-weight: 700;
        }

        .description {
            padding-top: 45px;
            font-size: 17px;
        }
    }

    .card{
        margin-bottom: 80px;
    }

    img {
        width: 100%;
    }

    .card-button-section {
        display: flex;
        align-items: center;
        justify-content: center;

        .register-button {
            background-color: #FFCD18;
            border: none;
            border-radius: 10px;
            font-size: 25px;
            width: 270px;
            height: 75px;
            cursor: pointer;
        }
        .register-button:hover {
            background-color: #e0b51a;
        }
        .register-button:active {
            background-color: #FFCD18;
        }
    }
}
</style>