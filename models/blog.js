const mongodb = 'mongodb+srv://triet:1234@learningtrddang.odjul.mongodb.net/trd-learn?retryWrites=true&w=majority';
const mongoose = require('mongoose');
mongoose.connect(mongodb).then((result) => {console.log('connected')})
                        .catch(err => {console.log(err)});
const schema = mongoose.Schema;

const blogSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const blog = mongoose.model('blogs', blogSchema);
module.exports = blog;
