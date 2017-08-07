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

// Animations: pop | slideRight | slideLeft | slideUp | slideDown

export default [
  { component: Base,
    routes: [
      {
        path: '/create',
        component: LayoutSidebar,
        routes: [
        // {
        //   path: '/stories/',
        //   exact: true,
        //   component: Home,
        //   name: 'Stories',
        //   animation: 'slideLeft',
        // },
          { path: '/stories/add-story',
            exact: true,
            component: AddStory,
            name: 'Add Story',
            animation: 'slideLeft',
          },
          {
            component: NotFound,
            name: 'Not Found',
            animation: 'slideLeft',
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
            animation: 'slideLeft',
          },
          {
            path: '/stories/add-story',
            exact: true,
            component: AddStory,
            name: 'Add Story',
            animation: 'slideLeft',
          },
          {
            path: '/stories/:id',
            exact: true,
            component: Story,
            name: 'Story',
            animation: 'slideLeft',
          },
          {
            component: NotFound,
            name: 'Not Found',
            animation: 'slideLeft',
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
            animation: 'slideLeft',
          },
          {
            path: '/about',
            exact: true,
            component: About,
            name: 'About',
            animation: 'slideLeft',
          },
          {
            component: NotFound,
            name: 'Not Found',
            animation: 'slideLeft',
          },
        ]
      },
    ]
  },

]
