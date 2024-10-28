import { createRouter, createWebHistory } from 'vue-router';

// Import your views
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../components/ServiceComp.vue';
import ContactView from '../views/ContactView.vue';

// Define your routes
const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/services', component: ServicesView },
  { path: '/contact', component: ContactView }
];

// Create and export the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
