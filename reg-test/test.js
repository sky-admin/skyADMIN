/**
 * Created by skyADMIN on 16/8/8.
 */


var list = [
    {
        id: 1,
        name: '大学',
        parent: null,
        children: [2, 3]
    },
    {
        id: 2,
        name: '高中1',
        parent: 1,
        children: [4, 5]
    },
    {
        id: 3,
        name: '高中2',
        parent: 1,
        children: []
    },
    {
        id: 4,
        name: '1班',
        parent: 2,
        children: []
    },
    {
        id: 5,
        name: '2班',
        parent: 2,
        children: []
    }
];

function insertItem(childrenList, item) {
    console.log(childrenList);
    for (var i = 0; i < list.length; i++) {
        var secondItem = list[i];
        if (list[i].children.length != 0){
            secondItem = list[i];
            var sChildrenList = secondItem.children;
            secondItem.children = [];
            insertItem(sChildrenList, secondItem);
        }
        if (secondItem.id in childrenList) {
            item.children.push(secondItem);
        }
    }
    
}
for(item in list){
    if (item.parent == null){
        var childrenList = item.children;
        item.children = [];
        insertItem(childrenList, item);
    }
}

console.log(list[0]);