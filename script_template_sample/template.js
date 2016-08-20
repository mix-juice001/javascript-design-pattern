var items = [
        {name:"Alejandro"},
        {name:"Benito"},
        {name:"Chinea"},
        {name:"Domingo"},
        {name:"Eduardo"},
        {name:"..."},
        {name:"Yolanda"},
        {name:"Zacarias"}
    ];

var template = usageList.innerHTML;
target.innerHTML = _.template(template,{items:items});
