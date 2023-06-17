import { createRouter, createWebHistory } from 'vue-router';
import HomeDefault from '@/views/HomeDefault.vue';
import DataTable from '@/components/DataTable.vue';

const routes = [
    {
        path: '/',
        name: 'HomeDefault',
        component: HomeDefault,
    },
    {
        path: '/DataTable',
        name: 'DataTable',
        component: DataTable,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
