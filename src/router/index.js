import { createRouter, createWebHistory } from 'vue-router';
import ProfilePage from '@/views/ProfilePage.vue';
import MarkPage from '@/views/MarkPage.vue';
import SkillPage from '@/views/SkillPage.vue';

import CompanyProfile from '@/components/CompanyProfile.vue';

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/marks',
    name: 'Marks',
    component: MarkPage
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillPage
  },
  {
    path: '/CompanyProfile',
    name: 'CompanyProfile',
    component: CompanyProfile
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
