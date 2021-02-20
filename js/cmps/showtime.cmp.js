

const options = {
    template: `
        <section v-on:click="log" class="show-time" v-bind:class="toggle">
        <h2>Time In Israel: <span>{{showTime}}</span></h2>
        <div v-bind:class="showSeason"></div>
        </section>
    `,
    data() {
        return {
            time: new Date(),
            isToggle: true,
            season: new Date().getMonth() + 1

        }
    },
    computed: {
        showTime() {
            return this.time.toLocaleTimeString()

        },
        toggle() {
            return { dark: !this.isToggle, bright: this.isToggle }
        },
        showSeason(){
            return {summer: this.season === 6 || this.season === 7 || this.season === 8,
                 winter: this.season === 1 || this.season === 2 || this.season === 12 ,
                 spring: this.season === 3 || this.season === 4 || this.season === 5,
                fall: this.season === 9 || this.season === 10 || this.season === 11}
        }

    },
    methods: {
        log() {
            this.isToggle = !this.isToggle
        }

    },
    created() {
        setInterval(() => {
            this.time = new Date()
        }, 1000);
    }
}

Vue.component('show-time', options)