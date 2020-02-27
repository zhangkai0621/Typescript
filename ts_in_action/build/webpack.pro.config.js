/*
 * @Description: 生产环境配置
 * @Author: zhangkai
 * @Date: 2020-02-27 10:54:39
 * @LastEditTime: 2020-02-27 10:55:10
 * @LastEditors: zhangkai
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}