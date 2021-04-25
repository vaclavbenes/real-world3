import { createApp, defineComponent } from 'vue'
import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
import App from "./App.vue"
import './style.css'

const EventList = () => import("./components/EventList.vue")
const About = defineComponent({ template: '<div>About</div>' })


const routes: any = [
    {
        path: '/',
        component: EventList
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/events',
        component: EventList,
        props: true
    },
    {
        path: '/events/:id',
        name: 'EventDetails',
        component: () => import('./components/EventDetails.vue')
    }
]


const options: RouterOptions = {
    history: createWebHistory(),
    routes
}

const router = createRouter(options)

const app = createApp(App)
app.use(router)
app.mount('#app')
