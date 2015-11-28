/*
*   Helper functions for parsing input from textarea.
*/
function parse_array(tmp){
    if (typeof(tmp)==="string"){
        tmp = tmp.replace('[','');
        tmp = tmp.replace(']','');
        var arr = tmp.split(",");
        for (a in arr) {
            arr[a] = parseInt(arr[a], 10);
        }
        return arr;
    }
    return tmp;
}

function parse_array_mult(tmp) {
    tmp = tmp.replace('[','');
    var arr = tmp.split("],");
    for (a in arr){
        arr[a] = parse_array(arr[a]);
    }
    return arr;
}

/*
*   Functions given in assignment
*/
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
    return b + ", " + JSON.stringify(input);
}

function counter(input) {
    input = parse_array(input);
    var negative = zero = positive = 0;
    for (a in input){
        switch (true){
            case input[a]<0:
                negative++;
                break;
            case input[a]===0:
                zero++;
                break;
            case input[a]>0:
                positive++;
                break;
        }
    }
    return "Negatives: " + negative + "\n" +
        "Zeros: " + zero + "\n" +
        "Greater than zero: " + positive;
}

function tst_name(input) {
    var match = new RegExp(/^([A-Z]{1,1}[a-z]{1,}), ([A-Z]{1,1}[a-z]{1,}) [A-Z]$/);
    if (match.test(input)){
        return true;
    }
    return false;
}

function row_averages(input) {
    input = parse_array_mult(input);
    var arr = new Array();
    for (i in input) {
        var k = 0;
        for (j in input[i]) {
            k += input[i][j];
        }
        k = k/input[i].length;
        arr.push(k);
    }
    return JSON.stringify(arr);
}

function cube(x) {
    c = Math.pow(x,3);
    return c;
}

function capitalizeAll(input){
    return input.toUpperCase();
}

function array_product(input) {
    input = parse_array(input);
    var product = 1;
    for (i in input){
        product *= input[i];
    }
    return product;
}

/*
*   Testing Functions
*/
function cube_range() {
    arr = _.range(1,21);
    cubes = new Array();
    for (i in arr){
        var j = cube(arr[i]);
        cubes.push(j);
    }
    return cubes;
}

function array_product_test(){
    arr = _.range(73,100);
    return array_product(arr);
}
