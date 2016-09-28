module.exports = {
  blog: {
    database: process.env.MONGODB_BLOG_URI || process.env.MONGODB_URI || process.env.MONGOLAB_URI || 'mongodb://127.0.0.1/light',
    username: process.env.BLOG_USERNAME || 'admin',
    password: process.env.BLOG_KEY || 'admin'
  },
  analytics: 'UA-62603205-1'
};
