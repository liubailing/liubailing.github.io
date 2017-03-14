var htmlWebpackPlugin = new require("html-webpack-plugin");

function fullPath (str) {
	return  __dirname + str
}

module.exports={
	entry:{
		main: __dirname + "/src/js/main.js",
		a: __dirname + "/src/js/a.js"
	},
	output:{
		path: __dirname + '/dist', //输出文件夹
        filename: 'js/[name]-[chunkhash].js', //最终打包生成的文件名(可以带路径~！~)
        publicPath:"" //
	},
	resolve:{
	},
	externals:{},
	module:{},
	plugins:[
	 new htmlWebpackPlugin({
	 	template:"./src/tpl/index.html",
	 	filename:"index.html",
	 	inject:"body",
	 	hash:false,
	 	minify :{
	 		removeComments:true,
	 		collapseWhitespace:true
	 	}
	 })
	],
	devServer:{}
}