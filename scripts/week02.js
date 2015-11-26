function parse_array(tmp){
    tmp = tmp.replace('[','');
    tmp = tmp.replace(']','');
    var arr = tmp.split(",");
    for (a in arr) {
        arr[a] = parseInt(arr[a], 10);
    }
    return arr;
}

function parse_array_mult(tmp) {
    tmp = tmp.replace('[','');
    var arr = tmp.split("],");
    for (a in arr){
        arr[a] = parse_array(arr[a]);
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

function row_averages(inputA) {
    var input = new Array();
    input = parse_array_mult(inputA);
    var arr = new Array();
    for (i in input) {
        var k = 0;
        for (j in input[i]) {
            k += input[i][j];
        }
        arr.push(k);
    }
    return JSON.stringify(arr);
}
