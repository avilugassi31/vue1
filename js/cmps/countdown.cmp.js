



const options = {
    props: ['time'],
    template: `
        <section class="count-down">
        <h2 v-bind:class="toggle" id="time">{{timer}} </h2>
        </section>
    `,
    data() {
        return {
            timer: null,
            seconds: false,
            interval: null
        }
    },
    computed: {
        toggle() {
            return { red: this.seconds}
        }
       

    },
    methods: {
        startTimer(duration) {
            var timer = duration, minutes, seconds;

            this.interval = setInterval(() => {
                seconds = parseInt(timer % 60, 10);
                minutes = 0
                seconds = seconds < 10 ? "0" + seconds : seconds;
                if (seconds < 10) this.seconds = true
                else this.seconds = false
                this.timer = minutes + ":" + seconds;
                if (seconds === '00') {
                    clearInterval(this.interval)
                    this.$emit('due')
                }
                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
            
        },


        start() {
            var fiveMinutes = this.time
            this.startTimer(fiveMinutes);
        }

    },
    created() {
        console.log(this.time);
        this.start()

    },
    destroyed() {
        clearInterval(this.interval)

    }
}

Vue.component('count-down', options)