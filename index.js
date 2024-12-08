var country = "Indian"
if (country == "Indian") {
    var gender = "Male"
    if (gender == "Male"  || gender == "Female") {
        console.log("Hello")
    }
    else {
        console.log("Invalid Character")
    }
}else {
    console.log("Not Indian")
}


var country = "Germany"
if (country == "Indian") {
    var gender = ""
    if (gender == "Male"  || gender == "Female") {
        console.log("Hello")
    }
    else {
        console.log("Invalid Character")
    }
}else  {
    console.log("Not Indian")
}


var country = "Indian"
if (country == "Indian") {
    var gender = "asdbn"
    if (gender == "Male"  || gender == "Female") {
        console.log("Hello")
    }
    else {
        console.log("Invalid Character")
    }
}else  {
    console.log("Not Indian")
}


// i/p : HelloS  o/p : hELLOs
var str = "HelloS";
var res = " ";
for (var i=0; i<str.length; i++) {
    if (str[i]== str[i].toUpperCase()) {
        res= res + str[i].toLowerCase();
    }else {
        res=res + str[i].toUpperCase();
    }
}
console.log(res)

var str = "HelloS thErE";
var res = " ";
for (var i=0; i<str.length; i++) {
    if (str[i]== str[i].toUpperCase()) {
        res= res + str[i].toLowerCase();
    }else {
        res=res + str[i].toUpperCase();
    }
}
console.log(res)

//i/p  yadhtrib --- o/p  birthday
var str = "yadhtrib"
console.log(str.split('').reverse().join(''))

var str="yadhtrib"
res= ""
for (var i=str.length-1; i>=0; i--) {
    res+=str[i];
}
console.log(res)

// If number property is even number print first 1-10 even, if it is odd number , print 1-10 odd numbers, if number is 0, print 0.
var obj= {
    number:4,
}
if (obj.number == 0) {
    console.log("0")
}
else if (obj.number % 2 ==0) {
    for (i=2; i<=10; i+=2) {
        console.log(i)
    }
}else {
    for (i=1; i<=10; i+=2) {
        console.log(i)
    }
}

var obj= {
    number:5
}
if (obj.number == 0) {
    console.log("0")
}
else if (obj.number % 2 ==0) {
    for (i=2; i<=10; i+=2) {
        console.log(i)
    }
}else {
    for (i=1; i<=10; i+=2) {
        console.log(i)
    }
}

 
// name: : Pawan Kalyan; street="KPHB"
//convert the above  to name: "PAWAN KALYAN", street: "kphb".
var obj = {
    "name":"Pawan Kalyan",
    "street" : "KPHB",
}
obj.name = obj.name.toUpperCase();
obj.street=obj.street.toLowerCase();
console.log(obj)



// name=PaWaN -- PAWAN if name property having any small character, convert to uppercase
obj= {
    "name" : "PaWaN"
}
for (var i=0; i<obj.name.length; i++) {
    if (obj.name[i]== obj.name[i].toLowerCase()) {
        obj.name=obj.name.toUpperCase();
        break;
    }
}
console.log(obj)

//without loop
obj= {
    "name" : "PaWaN"
}
if (str == str.toLowerCase()) {
    obj.name=obj.name.toUpperCase();

}
console.log(obj)
