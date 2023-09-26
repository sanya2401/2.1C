        const app = Vue.createApp({
            data() {
                return {
                    showMessage: true,
                    showElement: true,
                    items: [
                        {id:1, name:"Flowers"},
                        {id:2, name:"Candies"},
                        {id:3, name:"Plants"},
                    ],
                    itemsWithCondition:
                    [
                       { id:1,text:"Number 1", shouldRender:false},
                       { id:2,text:"Number 2", shouldRender:true},
                       { id:3,text:"Number 3", shouldRender:true},
                    ]
                };
            }
        });

        app.mount('#app');