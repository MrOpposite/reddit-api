// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by reddit-api.js.
import { name as packageName } from "meteor/reddit-api";

// Write your tests here!
// Here is an example.
Tinytest.add('reddit-api - example', function (test) {
  test.equal(packageName, "reddit-api");
});
