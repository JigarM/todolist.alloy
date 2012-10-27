var G = require("globals");
var todos = G.globalGet("todos");

todos.on('fetch', function() {

    var rows = [], i = 0;

    var doneArray = todos.where({
        "done" : 1
    });
    for (; i < doneArray.length; i++) {
        var _i = doneArray[i];
        rows.push(Ti.UI.createTableViewRow({
            title : _i.get("item") + " DONE",
            id : _i.id
        }));
    }
    $.doneTable.setData(rows);
});
