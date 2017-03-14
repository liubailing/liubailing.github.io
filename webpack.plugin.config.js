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
		path: __dirname + '/dist/js', //输出文件夹
        filename: '[name]-[chunkhash].js' //最终打包生成的文件名(只是文件名，不带路径的哦)
	},
	resolve:{
	},
	externals:{},
	module:{},
	plugins:[
	 new htmlWebpackPlugin({
	 	template:__dirname +"/src/tpl/plugin.html",
	 	filename:__dirname +"/dist/plugin.html",
	 	inject:false,
	 	hash:false,
	 	title:"标题参数传递！"
	 })
	],
	devServer:{}
}