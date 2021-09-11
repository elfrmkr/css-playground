Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX:0,
            skewY:0,
            rotateZ:0
        }
    },
    computed: {
        box() {
            return {
                transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                skewY(${this.skewY}deg)
                rotateZ(${this.rotateZ}deg)`
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 100
            this.rotateX = 0 
            this.rotateZ = 0
            this.skewY = 0
        },
        copy() {
            const element = document.createElement('textarea')
            element.setAttribute('readonly', '')
            element.style.position = 'absolute'
            element.style.right = '-9999999px'
            element.value = `transform: ${this.box.transform}`

            document.body.appendChild(element)
            element.select()
            document.execCommand('copy')
            document.body.removeChild(element)
            alert("Copied!");

        }
    }
}).mount('#app')