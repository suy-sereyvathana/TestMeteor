import { Mongo } from "meteor/mongo";

export const User = new Mongo.Collection("users");

export const Catgory = new Mongo.Collection("categories")

export const Product = new Mongo.Collection("products")