import { Meteor } from 'meteor/meteor';
import './users.html'
//include all subpages
import './users_edit.html'

Template.usersList.onCreated(function () {
  // Meteor.subscribe('users.all');
  var self = this;
  self.autorun(function() {
    self.subscribe('users.all');
  });

});

Template.usersList.helpers({
  users() {
    return Meteor.users.find({});
  },
  email(){
    console.log(this);
     return this.emails[0].address;
  },
  name(){
     return this.profile.name;
  },
  role(){
     return this.roles[0];
  }
});

