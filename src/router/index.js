import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import BlogPage from "../views/BlogPage.vue";
import ContactPage from "../views/ContactPage.vue"; 

const routes = [
    {path: '/', name: 'Home', component: HomePage},
    {path: '/about', name: 'About', component: AboutPage},
    {path: '/blog', name: 'Blog', component: BlogPage},
    {path: '/contact', name: 'Contact', component: ContactPage}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;