import { Meteor } from "meteor/meteor";
import { Catgory } from "../collections/collections";

Meteor.methods({
 "category.insert"(user) {
 return Catgory.insert(user);
 },
 "category.find"() {
 return Catgory.find().fetch();
 },
 "category.update"(user) {
 return Catgory.update({ _id: user._id }, { $set: user });
 },
 "category.remove"(id) {
 return Catgory.remove({ _id: id });
 },
});