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
	},
	resolve:{
	},
	loaders: [{
            test: /\.json$/,
            use: ["json-loader"]
        }, {
            test: /\.js$/, //这里肯定要加入n个loader 譬如vue-loader、babel-loader、css-loader等等
            loader: "babel-loader",
            exclude: './node_modules/',
            include:'./src/jssrc/',
            query: {
                presets: ["es2015"],
                compact: true
            }
        }, {
            test: /\.css$/,
            //loader: 'style-loader!css-loader?modules'
            use: [{
                loader: 'style-loader',

            }, {
                loader: 'css-loader',
                options: {
                    modules: true,
                    // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    // getLocalIdent: (context, localIdentName, localName, options) => {
                    //   return 'whatever_random_class_name'
                    // }
                }
            }],
            //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules')
        }],
	plugins:[
		new htmlWebpackPlugin({
			template:"./src/tpl/index.html",
			filename:"index.html",
			inject:"body",
			hash:false
		})
	],
	devServer:{}
}