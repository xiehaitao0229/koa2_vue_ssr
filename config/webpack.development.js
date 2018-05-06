const path = require("path");
const rootPath = path.join(__dirname, '..');
const vueSSRClientPlugin = require("vue-server-renderer/client-plugin");
module.exports = {
    entry: [rootPath + "/src/webapp/entry-client.js"],
    plugins: [
    	new vueSSRClientPlugin()
    ]
};
