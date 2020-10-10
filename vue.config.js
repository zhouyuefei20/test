const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
	publicPath:'./',
	devServer:{
		hot:true,
		open:true,
		proxy: {
		  "/api": {
		    target: "http://127.0.0.1:4000/",
		    pathRewrite: {"^/api" : ""}
		  }
		}
	},
	productionSourceMap: false,
	chainWebpack: config => {
	  config.resolve.alias
	    .set('@', resolve('src'))
	    .set('assets', resolve('src/assets'))
	    .set('components', resolve('src/components'))
	}
}