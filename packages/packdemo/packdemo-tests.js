// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by packdemo.js.
import { name as packageName } from "meteor/51chat:packdemo";

// Write your tests here!
// Here is an example.
Tinytest.add('packdemo - example', function (test) {
  test.equal(packageName, "packdemo");
});
