const { createApp } = Vue

createApp({
data() {
    return {
    message : 'Hello Vue!',
    image : "img/boolean-logo.png"
    }
}

}).mount('#app')

createApp({
    data() {
        return {
        message : 'Hello Vue BISS!',
        image : "img/boolean-logo.png"
        }
    }
    
}).mount('#box')
