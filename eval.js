function add(){
    myTable.innerHTML = ''
    for (var i = 1; i <= Input1.value; i++) {
        result = "<tr>"
        for(var j = 1; j <= Input2.value; j++){
            result += "<td>"+i+"+"+j+"="+(i+j)+ "</td>"
            // result += ` <td>${i} + ${j} = ${i+j} </td> `
        }
        result += "</tr>"
        myTable.innerHTML += result
    }
}

function subtract(){
    myTable.innerHTML = ''
    for (var i = 1; i <= Input1.value; i++) {
        result = "<tr>"
        for(var j = 1; j <= Input2.value; j++){
            result += "<td>"+i+"-"+j+"="+(i-j)+ "</td>"
            // result += ` <td>${i} - ${j} = ${i-j} </td> `
        }
        result += "</tr>"
        myTable.innerHTML += result
    }
}

function multipy(){
    myTable.innerHTML = ''
    for (var i = 1; i <= Input1.value; i++) {
        result = "<tr>"
        for(var j = 1; j <= Input2.value; j++){
            result += "<td>"+i+"×"+j+"="+(i*j)+ "</td>"
            // result += ` <td>${i} × ${j} = ${i*j} </td> `
        }
        result += "</tr>"
        myTable.innerHTML += result
    }
}

function divide(){
    myTable.innerHTML = ''
    for (var i = 1; i <= Input1.value; i++) {
        result = "<tr>"
        for(var j = 1; j <= Input2.value; j++){
            result += "<td>"+i+"÷"+j+"="+parseFloat(i/j).toFixed(2)+ "</td>"
            // result += ` <td>${i} ÷ ${j} = ${i/j} </td> `
        }
        result += "</tr>"
        myTable.innerHTML += result
    }
}