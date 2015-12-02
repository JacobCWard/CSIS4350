function integrate_sin(low, high) {
    var arr = new Array();
    for (var x = low; x <= high; x += 0.05) {
        x = +x.toFixed(2);
        arr.push([x,Math.sin(x)]);
    }
    return arr;
}

function display_values(low, high) {
    var arr = integrate_sin(low, high);
    var outArr = ""
    for (a in arr){
        outArr += "<tr><td>" + arr[a][0] + "</td><td>" + arr[a][1] + "</td></tr>";
    }
    return outArr;
}
