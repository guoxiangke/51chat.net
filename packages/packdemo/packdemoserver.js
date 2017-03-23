var colors = Npm.require('colors');
Meteor.methods({
  serverlog : function(msg,warn){
    console.log(msg.rainbow);
  }
});
console.log(TestPack);
// TestPack.log('my package is worky2!2')
