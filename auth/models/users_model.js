var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    dob: Date,
    cars: [{type: Schema.ObjectId,
            ref: 'Car'}],
    img_url: String,
    hashed_password: String
});

var CarSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  miles: Number,
  picUrl: String,
  upvotes: {type: Number, default: 0},
});

CarSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('User', UserSchema);
mongoose.model('Car', CarSchema);
