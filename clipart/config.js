window.Asc.plugin = {
    "name" : "ClipArt",
    "guid" : "asc.{F5BACB61-64C5-4711-AC8A-D01EC3B2B6F1}",

    "variations" : [
        {
            "description" : "ClipArt",
            "url"         : "clipart/index.html",

            "icons"           : ["clipart/icon.png", "clipart/icon@2x.png"],
            "isViewer"        : true,
            "EditorsSupport"  : ["word"],

            "isVisual"        : true,
            "isModal"         : false,
            "isInsideMode"    : true,

            "initDataType"    : "none",
            "initData"        : "",

            "isUpdateOleOnResize" : false,

            "buttons"         : [ { "text": "Close", "primary": true } ]
        }
    ]
};