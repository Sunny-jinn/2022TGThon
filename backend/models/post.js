const mongoose = require('mongoose')
const { marked } = require('marked')
const slugify = require('slugify')
const createDomPurify=require('dompurify') //for markdown
const  { JSDOM }  = require('jsdom') //for markdown
const dompurify=createDomPurify(new JSDOM().window) //for markdown

const postSchema=new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description: {
        type : String
    },
    markdown: {
        type : String,
        required : true
    },
    createdAt: {
        type : Date,
        default : Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHtml: {
        type : String,
        required : true
    }
})

//url name 설정-title name이 url slug가 되도록 설정
postSchema.pre('validate', function(next) {
    if (this.title){
        this.slug=slugify(this.title, {lower : true, strict: true })
    }
    
    
    if (this.markdown){
        this.sanitizedHtml=dompurify.sanitize(marked(this.markdown))
    }

    next()
})

module.exports=mongoose.model('Post', postSchema)