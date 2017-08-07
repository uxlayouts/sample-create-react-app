import Base from './Base';
import LayoutFull from './LayoutFull';
import LayoutGrid from './LayoutGrid';
import LayoutSidebar from './LayoutSidebar';
import Home from './Home';
import About from './About';
import AddStory from './AddStory';
import NotFound from './NotFound';
import Stories from './Stories';
import Story from './Story';

export default [
  { component: Base,
    routes: [
      {
        path: '/create',
        component: LayoutSidebar,
        routes: [
          // { path: '/stories/',
          //   exact: true,
          //   component: Home,
          //   name: 'Stories',
          // },
          { path: '/stories/add-story',
            exact: true,
            component: AddStory,
            name: 'Add Story',
          },
          {
            component: NotFound,
            name: 'Not Found',
          },
        ]
      },
      {
        path: '/stories',
        component: LayoutGrid,
        routes: [
          {
            path: '/stories',
            exact: true,
            component: Stories,
            name: 'Stories',
          },
          {
            path: '/stories/add-story',
            exact: true,
            component: AddStory,
            name: 'Add Story',
          },
          {
            path: '/stories/:id',
            exact: true,
            component: Story,
            name: 'Story',
          },
          {
            component: NotFound,
            name: 'Not Found',
          },
        ]
      },
      {
        component: LayoutFull,
        routes: [
          { path: '/',
            exact: true,
            component: Home,
            name: 'Home',
          },
          {
            path: '/about',
            exact: true,
            component: About,
            name: 'About',
          },
          {
            component: NotFound,
            name: 'Not Found',
          },
        ]
      },
    ]
  },

]
