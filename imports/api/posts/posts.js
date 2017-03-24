// Definition of the posts collection

import { Mongo } from 'meteor/mongo';
// import {SimpleSchema} from 'simpl-schema';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
export const Posts = new Mongo.Collection('posts');

// Posts = new Mongo.Collection("books");
// Posts.attachSchema(new SimpleSchema({
//   title: {
//     type: String,
//     label: "Title",
//     max: 200
//   },
//   author: {
//     type: String,
//     label: "Author"
//   },
//   copies: {
//     type: Number,
//     label: "Number of copies",
//     min: 0
//   },
//   lastCheckedOut: {
//     type: Date,
//     label: "Last date this book was checked out",
//     optional: true
//   },
//   summary: {
//     type: String,
//     label: "Brief summary",
//     optional: true,
//     max: 1000
//   }
// }, { tracker: Tracker }));
