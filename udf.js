function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.id = values[0];
    obj.rank = values[1];
    obj.name = values[2];
    obj.country = values[3];
    obj.rating = values[4];
    var jsonString = JSON.stringify(obj);
    return jsonString;
   }