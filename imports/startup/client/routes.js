import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/layout.js';
import '../../ui/layouts/body/body.js';

import '../../ui/pages/posts/posts.js';
import '../../ui/pages/posts/post_item.js';
import '../../ui/pages/admin/users/users.js';
import '../../ui/pages/not-found/not-found.js';


import '../../ui/layouts/page_layout.js';
import '../../ui/pages/home/home.js';


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});
FlowRouter.route('/home', {
  name: 'App.home',
  action() {
    BlazeLayout.render('page_layout', { main: 'page_home' });
  },
});
FlowRouter.route('/posts', {
  name: 'posts.list',
  action() {
    BlazeLayout.render('layout', { main: 'postsList' });
  },
});
// var adminRoutes = FlowRouter.group({
//   prefix: '/admin',
//   name: 'admin',
//   triggersEnter: [function(context, redirect) {
//     console.log('running group triggers');
//   }]
// });

// adminRoutes.route('/users', {
//   name: 'users.list',
//   action() {
//     BlazeLayout.render('layout', { main: 'usersList' });
//   },
// });

// adminRoutes.route('/users/:_id/edit', {
//   name: 'users.edit',
//   action() {
//     BlazeLayout.render('layout', { main: 'usersEdit' });
//   },
// });
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
