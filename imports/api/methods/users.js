import { Meteor } from "meteor/meteor";
import { User } from "../collections/collections";

Meteor.methods({
 "user.insert"(user) {
 return User.insert(user);
 },
 "user.find"() {
 return User.find().fetch();
 },
 "user.update"(user) {
 return User.update({ _id: user._id }, { $set: user });
 },
 "user.remove"(id) {
 return User.remove({ _id: id });
 },
});