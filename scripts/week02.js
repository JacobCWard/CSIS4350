function parse_array(tmp){
    tmp = tmp.replace('[','');
    tmp = tmp.replace(']','');
    var arr = tmp.split(",");
    for (a in arr) {
        arr[a] = parseInt(arr[a], 10);
    }
    return arr;
}

function no_zeros(input){
    input = parse_array(input);
    var rm = new Array();
    var b = false;
    for (a in input){
        if (input[a] === 0){
            rm.push(a);
            b = true;
        }
    }
    rm.reverse();
    for (a in rm){
        input.splice(rm[a], 1);
    }
    return b + ", " + input
}
