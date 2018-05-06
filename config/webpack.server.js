const path = require("path");
const rootPath = path.join(__dirname, '..');
const vueSSRServerPlugin = require("vue-server-renderer/server-plugin");
module.exports = {
    target: 'node',
    entry: [rootPath + "/src/webapp/entry-server.js"],
    output: {
        //告诉node Node-style
   	libraryTarget: 'commonjs2'
    },
    plugins: [
        new vueSSRServerPlugin()
    ],
}
