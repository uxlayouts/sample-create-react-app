import Base from './Base';
import LayoutCreator from './LayoutCreator';
import LayoutUser from './LayoutUser';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Posts from './Posts';
import Post from './Post';

export default [
  { component: Base,
    routes: [
      {
        path: '/create',
        component: LayoutCreator,
        routes: [
          { path: '/create/',
            exact: true,
            component: Home,
          },
          {
            component: NotFound,
          },
        ]
      },
      {
        component: LayoutUser,
        routes: [
          { path: '/',
            exact: true,
            component: Home,
          },
          {
            path: '/about',
            exact: true,
            component: About,
            name: 'About',
          },
          {
            path: '/posts',
            exact: true,
            component: Posts,
            name: 'Posts',
          },
          {
            path: '/posts/:id',
            component: Post
          },
          {
            component: NotFound,
          },
        ]
      },
    ]
  },

]
