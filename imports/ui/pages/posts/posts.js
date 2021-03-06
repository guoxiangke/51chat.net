import { Posts } from '/imports/api/posts/posts.js';
import { Meteor } from 'meteor/meteor';
import './posts.html';

Template.postsList.onCreated(function () {
  Meteor.subscribe('posts.all');
});

Template.postsList.helpers({
  posts() {
    return Posts.find({});
  },
});

Template.postsList.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('posts.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});
