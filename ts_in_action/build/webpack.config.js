/*
 * @Description: 
 * @Author: zhangkai
 * @Date: 2020-02-27 10:55:29
 * @LastEditTime: 2020-02-27 13:53:45
 * @LastEditors: zhangkai
 */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : proConfig;
    return merge(baseConfig, config); // 合并 baseConfig 和 config 的配置
};