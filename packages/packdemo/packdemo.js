// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See packdemo-tests.js for an example of importing.
export const name = 'packdemo';

TestPack = {
  log: function(msg){
    console.log(msg);
    Meteor.call('serverlog',msg);
  }
};
