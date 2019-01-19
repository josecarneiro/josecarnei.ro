'use strict';

/* EXPORTS MIDDLEWARE */
module.exports = (enfore = true) => (req, res, next) => {
  if (enfore || req.secure) return next();
  if (req.method === 'GET') return res.redirect(`https://${ req.hostname }${ req.url }`);
  next(Object.assign(new Error('Non-get requests must use SSL.'), { status: 400 }));
};
