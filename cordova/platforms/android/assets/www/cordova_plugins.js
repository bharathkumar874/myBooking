cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.cordova.plugin.localNotificationPlugin/www/phonegap/plugin/localNotification/localNotification.js",
        "id": "com.cordova.plugin.localNotificationPlugin.localNotificationPlugin",
        "clobbers": [
            "window.localNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.cordova.plugin.localNotificationPlugin": "2.1.1"
}
// BOTTOM OF METADATA
});