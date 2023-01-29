var mto = 0.5;
var lab_step2 = [],
    dat_step2 = [],
    lab_step = [],
    dat_step = [],
    lab_step1 = [],
    dat_step1 = [],
    lab_final = [];
var tanswer="";
var final_step;
var step1eqn="",step2eqn="",step0eqn="";
var eqn;
var poles = [],
   roots = [];
var kpi,essi,esss,kp;
var z1r="",z1i="",z2r="",z2i="";
var zeroval =0;
// function changepage() {
//     var x = document.getElementById("pagechanger").value;
//     if (x == 1)
//         document.getElementById("sm1").click();
//     else if (x == 2)
//         document.getElementById("sm2").click();
//     else
//         document.getElementById("sm3").click();

// }
var conclusion;
document.getElementById("addzero").addEventListener("click",zeroadder);
document.getElementById("delzero").addEventListener("click",zeroremover);
function zeroadder(){
    if(zeroval!=2)
    {
        var zerosr = document.getElementById("zr").value;
        var zerosi = document.getElementById("zi").value;
        if(zerosi!="" && zerosi!=0)
        {
            z1i = parseFloat(zerosi);
            
            z2i = z1i;
            zeroval =2;
            if(zerosr!="")
            {
                z1r = parseFloat(zerosr);
                z2r = z1r;
            }
            else
            {
                z1r =0;
                z2r = 0;
            }
            document.getElementById("viewzero").innerHTML = z1r.toFixed(2)+" + i "+z1i.toFixed(2)+"<br>"+z1r.toFixed(2)+" - i "+z1i.toFixed(2);
            document.getElementById("addzero").disabled=true;
    }
    else if(zerosr!="")
    {
        if(z1r == "")
        {
            z1r = parseFloat(zerosr);
            z1i=0;
            zeroval=zeroval+1;
            document.getElementById("viewzero").innerHTML = z1r.toFixed(2);
        }
        else if(z2r == "")
        {
            z2r = parseFloat(zerosr);
            z2i=0;
            zeroval=zeroval+1;
            document.getElementById("viewzero").innerHTML = z1r.toFixed(2)+"<br>"+z2r.toFixed(2);
            document.getElementById("addzero").disabled=true;
        }
    }
    else 
    alert("Please enter zero value");
    document.getElementById("delzero").disabled = false;
    }
    // else if(zeroval==1)
    // {
    //     zeros = document.getElementById("zero_val").value;
    //     if(zeros!="")
    //     {
    //     z2 =parseFloat(zeros);
    //     zeroval=zeroval+1;
    //     +","+z2.toFixed(2);
        
    // }
    // else 
    // alert("Please enter zero value");
    // }
}
function zeroremover(){
    if(zeroval==2)
    {
        if(z1i!="")
        {
            zeroval=0;
            z1r="";
            z2r="";
            z1i="";
            z2i="";
            document.getElementById("delzero").disabled = true;
            document.getElementById("viewzero").innerHTML = "";
        }
        else
        {z2r ="";
        zeroval = zeroval-1;
        document.getElementById("viewzero").innerHTML = z1r.toFixed(2);}
        document.getElementById("addzero").disabled=false;
    }
    else if(zeroval == 1)
    {
        z1r="";
        zeroval = zeroval-1;
        document.getElementById("viewzero").innerHTML = "";
        document.getElementById("delzero").disabled = true;
    }
}
function addval() {
    tanswer="";
    lab_step2 = [];
    dat_step2 = [];
    lab_step = [];
    dat_step = [];
    lab_step1 = [];
    dat_step1 = [];
    lab_final=[];
    var nums, dens;
    var a1,a2,b1,b2,c1,c2;
    var c = document.getElementById("numc").value;
    var r = document.getElementById("denc").value;
    var p = document.getElementById("dena").value;
    var q = document.getElementById("denb").value;
    var numerator = "$${\\frac{";
    numerator=numerator + c+"}";
    var denominator = "{";
    if (p != 0)
        denominator = denominator + p + "s^2";
    if (q!= 0)
        if (p != 0)
            denominator = denominator + " + " + q + "s";
        else
            denominator = denominator + q + "s";
    if (r != 0)
        if (q != 0)
            denominator = denominator + " + " + r;
        else
            denominator = denominator + r;
    denominator = denominator + "}}$$";
    var eqn = numerator + denominator;
    console.log(eqn);
    document.getElementById("out1").innerHTML = eqn;
    roots = [];
    poles = [];
    var x1, y1;
    var ni = 0,
        di = 0;
        a2 = parseInt(p);
    b2 = parseInt(q);

    c2 = parseInt(r);
        a1 = 0;
        b1 = 0;
        c1 = parseInt(c);
        
    c2= c2+c1;
    var numerator = "$${\\frac{";
        numerator=numerator + c+"}";
        var denominator = "{";
        if (a2 != 0)
            denominator = denominator + a2.toFixed(0) + "s^2";
        if (b2 != 0)
            if (a2 != 0)
                denominator = denominator + " + " + b2.toFixed(0) + "s";
            else
                denominator = denominator + b2.toFixed(0) + "s";
        if (c2 != 0)
            if (b2 != 0)
                denominator = denominator + " + " + c2.toFixed(0);
            else
                denominator = denominator + c2.toFixed(0);
        denominator = denominator + "}}$$";
        var eqn = numerator + denominator;
        console.log(eqn);
        document.getElementById("out2").innerHTML = eqn;
    stepresponse(a1,b1,c1, a2, b2, c2);
    eqn ="Not enough Zeroes";
    if(z1i!="")
    {
        a2 = parseInt(p);
    b2 = parseInt(q);

    c2 = parseInt(r);
            a1 = parseInt(c);
            b1 = (z1r+z2r)*a1;
            c1 = a1*(z1r*z1r+z1i*z1i);
            b2 = b2+b1;
            c2= c2+c1;
            a2=a2+a1;
             numerator = "$${\\frac{";
        if (a1 != 0)
            numerator = numerator + a1.toFixed(0) + "s^2";
        if (b1 != 0)
            if (a1 != 0)
                numerator = numerator + " + " + b1.toFixed(0)+"s";
            else
                numerator = numerator + b1.toFixed(0)+"s";
        if (c1 != 0)
            if (b1 != 0)
                numerator = numerator + " + " + c1.toFixed(0);
            else
                numerator = numerator + c1.toFixed(0);
        numerator = numerator + "}";
         denominator = "{";
        if (a2 != 0)
            denominator = denominator + a2.toFixed(0) + "s^2";
        if (b2 != 0)
            if (a2 != 0)
                denominator = denominator + " + " + b2.toFixed(0) + "s";
            else
                denominator = denominator + b2.toFixed(0) + "s";
        if (c2 != 0)
            if (b2 != 0)
                denominator = denominator + " + " + c2.toFixed(0);
            else
                denominator = denominator + c2.toFixed(0);
        denominator = denominator + "}}$$";
        eqn = numerator + denominator;
    //         console.log(a1);
    // console.log(b1);
    // console.log(c1);
    // console.log(a2);
    // console.log(b2);
    // console.log(c2);

            stepresponse2(a1,b1,c1, a2, b2, c2);
            document.getElementById("out4").innerHTML = eqn;
    }
    else
    {if(z2r!="")
        {
            a2 = parseInt(p);
    b2 = parseInt(q);

    c2 = parseInt(r);
            a1 = parseInt(c);
            b1 = (z1r+z2r)*a1;
            c1 = a1*z1r*z2r;
            b2 = b2+b1;
            c2= c2+c1;
            a2=a2+a1;
            numerator = "$${\\frac{";
            if (a1 != 0)
            numerator = numerator + a1.toFixed(0) + "s^2";
            if (b1 != 0)
            if (a1 != 0)
                numerator = numerator + " + " + b1.toFixed(0)+"s";
            else
                numerator = numerator + b1.toFixed(0)+"s";
        if (c1 != 0)
            if (b1 != 0)
                numerator = numerator + " + " + c1.toFixed(0);
            else
                numerator = numerator + c1.toFixed(0);
        numerator = numerator + "}";
         denominator = "{";
        if (a2 != 0)
            denominator = denominator + a2.toFixed(0) + "s^2";
        if (b2 != 0)
            if (a2 != 0)
                denominator = denominator + " + " + b2.toFixed(0) + "s";
            else
                denominator = denominator + b2.toFixed(0) + "s";
        if (c2 != 0)
            if (b2 != 0)
                denominator = denominator + " + " + c2.toFixed(0);
            else
                denominator = denominator + c2.toFixed(0);
        denominator = denominator + "}}$$";
        eqn = numerator + denominator;
        
            stepresponse2(a1,b1,c1, a2, b2, c2);
        }
        document.getElementById("out4").innerHTML = eqn;
        eqn ="Not enough Zeroes";
        if(z1r!="" && z1i=="")
        {
            a2 = parseInt(p);
    b2 = parseInt(q);

    c2 = parseInt(r);
            a1=0;
            b1 = parseInt(c);
            c1 = z1r*b1;
            b2 = b2+b1;
            c2= c2+c1;
            numerator = "$${\\frac{";
            if (a1 != 0)
            numerator = numerator + a1.toFixed(0) + "s^2";
            if (b1 != 0)
            if (a1 != 0)
                numerator = numerator + " + " + b1.toFixed(0)+"s";
            else
                numerator = numerator + b1.toFixed(0)+"s";
        if (c1 != 0)
            if (b1 != 0)
                numerator = numerator + " + " + c1.toFixed(0);
            else
                numerator = numerator + c1.toFixed(0);
        numerator = numerator + "}";
         denominator = "{";
        if (a2 != 0)
            denominator = denominator + a2.toFixed(0) + "s^2";
        if (b2 != 0)
            if (a2 != 0)
                denominator = denominator + " + " + b2.toFixed(0) + "s";
            else
                denominator = denominator + b2.toFixed(0) + "s";
        if (c2 != 0)
            if (b2 != 0)
                denominator = denominator + " + " + c2.toFixed(0);
            else
                denominator = denominator + c2.toFixed(0);
        denominator = denominator + "}}$$";
        eqn = numerator + denominator;
        console.log(eqn);
        
            stepresponse1(0,b1,c1, a2, b2, c2);
        }document.getElementById("out3").innerHTML = eqn;}
        
        
    //impulseresponse(b1, a2, b2, c2);

    
    lc = 1;
    document.getElementById("line1").setAttribute("style", "color:blue");
    document.getElementById("chartcont").setAttribute("style", "display:none");
    document.getElementById("tanswer").setAttribute("style", "display:none;");
    document.getElementById("chartcont1").setAttribute("style", "display:none;");
    for (let i = 1; i < 5; i++) {
        let out = "out" + i;
        let ln = "line" + (i + 1);
        document.getElementById(ln).setAttribute("Style", "color:black");
        document.getElementById(out).setAttribute("style", "display:none");
    }
    if (mto) {
        document.getElementById("fconclusions").innerHTML = "Conclusions will show here";
        document.getElementById("matwork").title = "";
        document.getElementById("mrun").disabled = false;
        document.getElementById("matwork").setAttribute("style", "opacity:1");
        document.getElementById("mrun").classList.remove("mrundisabled", "mrunenabled");
        document.getElementById("mrun").classList.add("mrunenabled");
        document.getElementById("matwork").classList.remove('mat');
        /*var numerator = "$${\\frac{";
        if (a != 0)
            numerator = numerator + a + "s^2";
        if (b != 0)
            if (a != 0)
                numerator = numerator + " + " + b;
            else
                numerator = numerator + b;
        numerator = numerator + "}";
        var denominator = "{";
        if (a2 != 0)
            denominator = denominator + a2.toFixed() + "s^2";
        if (b2 != 0)
            if (a2 != 0)
                denominator = denominator + " + " + b2.toFixed() + "s";
            else
                denominator = denominator + b2.toFixed() + "s";
        if (c2 != 0)
            if (b2 != 0)
                denominator = denominator + " + " + c2.toFixed();
            else
                denominator = denominator + c2.toFixed();
        denominator = denominator + "}}$$";
        var eqn = numerator + denominator;*/

        //document.getElementById("out1").innerHTML = eqn;
        //document.getElementById("out3").innerHTML = eqn;
    //     denominator = "{(";
    //     if (p != 0)
    //         denominator = denominator + p + "s^2";
    //     if (q != 0)
    //         if (p != 0)
    //             denominator = denominator + " + " + q + "s";
    //         else
    //             denominator = denominator + q + "s";
    //     if (r != 0)
    //         if (q != 0)
    //             denominator = denominator + " + " + r;
    //         else
    //             denominator = denominator + r;
    //     denominator = denominator + " )*s}}$$";
    //    eqn = numerator + denominator;
    //    document.getElementById("out2").innerHTML = eqn;
       
        
        //document.getElementById("tanswer").innerHTML ="<br> Step Response in time domain:"+ stepeqn +"<br>Kp:"+kp.toFixed(2)+"<br>ess:"+esss.toFixed(2)+ "<br><br>Impulse Response in time domain:"+impulseresponse+"<br>K:"+kpi.toFixed(2)+"<br>ess:"+essi.toFixed(2);
        var j, k;

        var ms = window.matchMedia("(max-width:950px)");
        cwidth(ms);
        ms.addListener(cwidth);
        console.log(tanswer);
        document.getElementById("tanswer").innerHTML=tanswer;
       MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out1"]);
       MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out2"]);
       MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out3"]);
       MathJax.Hub.Queue(["Typeset", MathJax.Hub, "out4"]);
       MathJax.Hub.Queue(["Typeset", MathJax.Hub, "tanswer"]);
    } else {
        mto = 1;

        document.getElementById("fconclusions").innerHTML = "Conclusions will show here";
        document.getElementById("mrun").disabled = true;
        document.getElementById("mrun").classList.remove('mrunenabled', 'mrundisabled');
        document.getElementById("tanswer").setAttribute("style", "display:none");
        document.getElementById("mrun").classList.add('mrundisabled');
        document.getElementById("matwork").classList.add('mat');
        document.getElementById("matwork").setAttribute("style", "opacity:0.5");
        document.getElementById("matwork").title = "Please enter the values of coeffecients of the equation first";
    }
};



function showval() {
    genval("numc", "lc");
    genval("dena", "lp");
    genval("denb", "lq");
    genval("denc", "lr");
};

function genval(idofinput, idofspan) {
    var x;
    x = document.getElementById(idofinput).value;
    //var x1 = x.toFixed(2);
    document.getElementById(idofspan).innerHTML = x;
};

var lc = 1;

function runprog() {
    lc = lc + 1;
    if (lc <= 5)
        highlightline(lc);
    else {
        document.getElementById("fconclusions").innerHTML = conclusion;
        document.getElementById("line5").setAttribute("style", "color:black;");
        document.getElementById("mrun").disabled = true;
        var ms = window.matchMedia("screen and (max-width:950px)");
        widthcheck(ms);
        ms.addListener(widthcheck);
        document.getElementById("mrun").disabled = true;
        document.getElementById("mrun").classList.remove("mrunenabled");
        document.getElementById("mrun").classList.add("mrundisabled");
    }
};

function cwidth(ms) {

    if (ms.matches) {
        var chartplot1 = document.getElementById("chartmine1").getContext("2d");
      //  var chartplot2 = document.getElementById("chartmine2").getContext("2d");
    } else {
        var chartplot1 = document.getElementById("myChart1").getContext("2d");
       // var chartplot2 = document.getElementById("myChart2").getContext("2d");
    }
    if (window.ch1 != undefined)
        window.ch1.destroy();
    // if (window.ch2 != undefined)
    //     window.ch2.destroy();
    const labelstep = lab_final;
    const datastep = {
        labels: labelstep,

        datasets: [{
            label: "Step Response 0 zero",
            data: dat_step,
            fill: false,
            pointRadius: 1,
            borderColor: 'rgb(192, 75, 192)',
            tension: 0.1
        },
    {
            label: "Step Response 1 zero",
            data: dat_step1,
            fill: false,
            pointRadius: 1,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
    {
            label: "Step Response 2 zero",
            data: dat_step2,
            fill: false,
            pointRadius: 1,
            borderColor: 'rgb(192, 192, 75)',
            tension: 0.1
        }]
    };
    window.ch1 = new Chart(chartplot1, {
        type: "line",
        data: datastep,
        options: {
            title: {
                display: true,
                text: "Step Response",
                fontSize: 14,
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: "Time" !== ' ',
                        labelString: "Time"
                    },

                }],
                yAxes: [{
                    stacked: false, // `true` for stacked area chart, `false` otherwise
                    beginAtZero: false,
                    scaleLabel: {
                        display: "Amplitude" !== '',
                        labelString: "Amplitude"
                    },


                }]
            },
        }
    });
    
    
}

function widthcheck(ms) {
    if (ms.matches){
        document.getElementById("chartcont").setAttribute("style", "display:block;");
    
    document.getElementById("tanswer").setAttribute("style", "display:block");}
    else {
        document.getElementById("chartcont1").setAttribute("style", "display:block;");
        document.getElementById("tanswer").setAttribute("style", "display:block");
    }
}

function highlightline(l) {
    var ln = "line" + l;
    var out = "out" + parseInt(l-1);
    console.log(out);
    document.getElementById(ln).setAttribute("style", "color:blue;");
    document.getElementById(out).setAttribute("style", "display:block;");
    if (lc != 1)
        ln = "line" + (l - 1);
    document.getElementById(ln).setAttribute("style", "color:black;");
};

var menu_score = 0;

function dispmenu(val) {
    val.classList.toggle("change");
    menu_score = menu_score + 1;
    if (menu_score == 1) {
        document.getElementById("navbar").setAttribute("style", "display:block");
        document.getElementById("simulation-cont").setAttribute("style", "opacity:0.5");
        if (mto != 1)
            document.getElementById("matwork").setAttribute("style", "opacity:1");
        menu_score = -1;
        document.body.style.backgroundColor = "black";
    } else {
        if (mto != 1)
            document.getElementById("matwork").setAttribute("style", "opacity:0.5");
        document.body.style.backgroundColor = "white";
        document.getElementById("simulation-cont").setAttribute("style", "opacity:01");
        document.getElementById("navbar").setAttribute("style", "display:none");
    }
}

function stepresponse2(para1,parb1,parc1, para2, parb2, parc2) {
    lab_step2 = [];
    dat_step2 = [];
    var co1, co2, co3, co4,co5;
    var stepl, maxl;
    kp = parb1/parc2;
    // console.log(para1);
    // console.log(parb1);
    // console.log(parc1);
    // console.log(para2);
    // console.log(parb2);
    // console.log(parc2);
    // console.log(kp);
    esss = 1/(1+parb1/parc2);
    step2eqn="";
    var det = parc2/para2-Math.pow(parb2/2/para2,2);
    if (det < 0)
        det = -1 * det;
    var sqd = Math.sqrt(det)
    if (det != 0) {
        co1 = parc1 / parc2;
        co2 = (para1-co1*para2)/para2;
        co3 = parb2/2/para2;
        co4 = (parb1-co1*parb2)/parb2;
        co5 = co2*(co4/co2-co3);
        step2eqn = "$${" + co1.toFixed(2)+" - "+ co2.toFixed(2)+"*e^{-1*"+co3.toFixed(2)+"*t} &emsp;*cos("+sqd.toFixed(2)+"*t) + " + co5.toFixed(2) +"*e^{-1*"+co3.toFixed(2)+"*t} &emsp;*sin("+sqd.toFixed(2)+"*t)}$$";
        tanswer=tanswer+"Step Response of function with 2 zeroes"+step2eqn;
        console.log(tanswer);
        if(lab_final.length!=0){
            maxl = lab_final[lab_final.length-1];
            stepl=final_step;
        }
        else
            {if (amplitudes1(co1, co2, co3, co4,sqd, 1, 10) == amplitudes1(co1, co2, co3, co4,sqd, 1, 9.8)) {
                maxl = 10;
                stepl = 0.05;
            } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 25) == amplitudes1(co1, co2, co3, co4,sqd, 1, 24.5)) {
                maxl = 25;
                stepl = 0.125;
            } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 50) == amplitudes1(co1, co2, co3, co4,sqd, 1, 49)) {
                maxl = 50;
                stepl = 0.25;
            } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 100) == amplitudes1(co1, co2, co3, co4,sqd, 1, 98)) {
                maxl = 100;
                stepl = 0.5;
            } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 200) == amplitudes1(co1, co2, co3, co4,sqd, 1, 196)) {
                maxl = 200;
                stepl = 1;
            } else {
                maxl = 250;
                stepl = 1.2;
            }}

        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step2.push(amplitudes1(co1, co2, co3, co4,sqd, 0, i));
            lab_step2.push(i.toFixed(1));
        }
        lab_final = lab_step2;
        final_step = stepl;
        
        
    } else {
        co1 = parb1;
        co2 = 2 * parb1 / parb2;
        step2eqn = "$${ "+ co1.toFixed(2) +" - "+co1.toFixed(2)+"* e^{-1*t} + " + co2.toFixed(2)+"* t * e^{-1*t}}$$";
        tanswer=tanswer+"Step Response of function with 2 zeroes"+step2eqn;
        if(lab_final.length!=0){
            maxl = lab_final[lab_final.length-1];
            stepl=final_step;
        }
        else
            {if (amplitudes2(co1, co2, 1, 10) == amplitudes2(co1, co2, 1, 9.8)) {
                maxl = 10;
                stepl = 0.05;
            } else if (amplitudes2(co1, co2, 1, 25) == amplitudes2(co1, co2, 1, 24.5)) {
                maxl = 25;
                stepl = 0.125;
            } else if (amplitudes2(co1, co2, 1, 50) == amplitudes2(co1, co2, 1, 49)) {
                maxl = 50;
                stepl = 0.25;
            } else if (amplitudes2(co1, co2, 1, 100) == amplitudes2(co1, co2, 1, 98)) {
                maxl = 100;
                stepl = 0.5;
            } else if (amplitudes2(co1, co2, 1, 200) == amplitudes2(co1, co2, 1, 196)) {
                maxl = 200;
                stepl = 1;
            } else {
                maxl = 250;
                stepl = 1.25;
            }}

        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step2.push(amplitudes2(co1, co2, 0, i));
            lab_step2.push(i.toFixed(1));
        }
        lab_final = lab_step2;
        final_step = stepl;
    }
}

function stepresponse1(para1,parb1,parc1, para2, parb2, parc2) {
    lab_step1 = [];
    dat_step1 = [];
    var co1, co2, co3, co4,co5;
    var stepl, maxl;
    kp = parb1/parc2;
    // console.log(para1);
    // console.log(parb1);
    // console.log(parc1);
    // console.log(para2);
    // console.log(parb2);
    // console.log(parc2);
    console.log(kp);
    esss = 1/(1+parb1/parc2);
    step1eqn="";
    var det = parc2/para2-Math.pow(parb2/2/para2,2);
    if (det < 0)
        det = -1 * det;
    var sqd = Math.sqrt(det)
    if (det != 0) {
        co1 = parc1 / parc2;
        co2 = (para1-co1*para2)/para2;
        co3 = parb2/2/para2;
        co4 = (parb1-co1*parb2)/parb2;
        co5 = co2*(co4/co2-co3);
        step1eqn = "$${" + co1.toFixed(2)+" - "+ co2.toFixed(2)+"*e^{-1*"+co3.toFixed(2)+"*t} &emsp;*cos("+sqd.toFixed(2)+"*t) + " + co5.toFixed(2) +"*e^{-1*"+co3.toFixed(2)+"*t} &emsp;*sin("+sqd.toFixed(2)+"*t)}$$";
        tanswer=tanswer+"Step Response of function with 1 zeroes"+step1eqn;
        if(lab_final.length!=0){
            maxl = lab_final[lab_final.length-1];
            stepl=final_step;
        }
        else
            {if (amplitudes1(co1, co2, co3, co4,sqd, 1, 10) == amplitudes1(co1, co2, co3, co4,sqd, 1, 9.8)) {
                maxl = 10;
                stepl = 0.05;
            } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 25) == amplitudes1(co1, co2, co3, co4,sqd, 1, 24.5)) {
                maxl = 25;
                stepl = 0.125;
            } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 50) == amplitudes1(co1, co2, co3, co4,sqd, 1, 49)) {
                maxl = 50;
                stepl = 0.25;
            } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 100) == amplitudes1(co1, co2, co3, co4,sqd, 1, 98)) {
                maxl = 100;
                stepl = 0.5;
            } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 200) == amplitudes1(co1, co2, co3, co4,sqd, 1, 196)) {
                maxl = 200;
                stepl = 1;
            } else {
                maxl = 250;
                stepl = 1.2;
            }}


        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step1.push(amplitudes1(co1, co2, co3, co4,sqd, 0, i));
            lab_step1.push(i.toFixed(1));
        }
        lab_final = lab_step1;
        final_step = stepl;
        
    } else {
        co1 = parb1;
        co2 = 2 * parb1 / parb2;
        step1eqn = "$${ "+ co1.toFixed(2) +" - "+co1.toFixed(2)+"* e^{-1*t} + " + co2.toFixed(2)+"* t * e^{-1*t}}$$";
        tanswer=tanswer+"Step Response of function with 1 zeroes"+step1eqn;
        if(lab_final.length!=0){
            maxl = lab_final[lab_final.length-1];
            stepl=final_step;
        }
        else
            {if (amplitudes2(co1, co2, 1, 10) == amplitudes2(co1, co2, 1, 9.8)) {
                maxl = 10;
                stepl = 0.05;
            } else if (amplitudes2(co1, co2, 1, 25) == amplitudes2(co1, co2, 1, 24.5)) {
                maxl = 25;
                stepl = 0.125;
            } else if (amplitudes2(co1, co2, 1, 50) == amplitudes2(co1, co2, 1, 49)) {
                maxl = 50;
                stepl = 0.25;
            } else if (amplitudes2(co1, co2, 1, 100) == amplitudes2(co1, co2, 1, 98)) {
                maxl = 100;
                stepl = 0.5;
            } else if (amplitudes2(co1, co2, 1, 200) == amplitudes2(co1, co2, 1, 196)) {
                maxl = 200;
                stepl = 1;
            } else {
                maxl = 250;
                stepl = 1.25;
            }}

        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step1.push(amplitudes2(co1, co2, 0, i));
            lab_step1.push(i.toFixed(1));
        }
        lab_final = lab_step1;
        final_step = stepl;
    }
}

function stepresponse(para1,parb1,parc1, para2, parb2, parc2) {
    lab_step = [];
    dat_step = [];
    var co1, co2, co3, co4,co5;
    var stepl, maxl;
    kp = parb1/parc2;
    console.log(para1);
    console.log(parb1);
    console.log(parc1);
    console.log(para2);
    console.log(parb2);
    console.log(parc2);
    // console.log(kp);
    esss = 1/(1+parb1/parc2);
    step0eqn="";
    var det = parc2/para2-Math.pow(parb2/2/para2,2);
    if (det < 0)
        det = -1 * det;
    var sqd = Math.sqrt(det)
    if (det != 0) {
        co1 = parc1 / parc2;
        co2 = (para1-co1*para2)/para2;
        co3 = parb2/2/para2;
        co4 = (parb1-co1*parb2)/parb2;
        co5 = co2*(co4/co2-co3);
        console.log(co1);
        console.log(co2);
        console.log(co3);
        console.log(co4);
        console.log(sqd);
        step0eqn = "$${" + co1.toFixed(2)+" - "+ co2.toFixed(2)+"*e^{-1*"+co3.toFixed(2)+"*t} &emsp;*cos("+sqd.toFixed(2)+"*t) + " + co5.toFixed(2) +"*e^{-1*"+co3.toFixed(2)+"*t} &emsp;*sin("+sqd.toFixed(2)+"*t)}$$";
        tanswer=tanswer+"Step Response of function with 0 zeroes"+step0eqn;
        if (amplitudes1(co1, co2, co3, co4,sqd, 1, 10) == amplitudes1(co1, co2, co3, co4,sqd, 1, 9.8)) {
            maxl = 10;
            stepl = 0.05;
        } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 25) == amplitudes1(co1, co2, co3, co4,sqd, 1, 24.5)) {
            maxl = 25;
            stepl = 0.125;
        } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 50) == amplitudes1(co1, co2, co3, co4,sqd, 1, 49)) {
            maxl = 50;
            stepl = 0.25;
        } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 100) == amplitudes1(co1, co2, co3, co4,sqd, 1, 98)) {
            maxl = 100;
            stepl = 0.5;
        } else if (amplitudes1(co1, co2, co3, co4,sqd, 1, 200) == amplitudes1(co1, co2, co3, co4,sqd, 1, 196)) {
            maxl = 200;
            stepl = 1;
        } else {
            maxl = 250;
            stepl = 1.25;
        }

        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step.push(amplitudes1(co1, co2, co3, co4,sqd, 0, i));
            lab_step.push(i.toFixed(1));
        }
        lab_final = lab_step;
        final_step = stepl;
        
    } else {
        co1 = parb1;
        co2 = 2 * parb1 / parb2;
        step0eqn = "$${ "+ co1.toFixed(2) +" - "+co1.toFixed(2)+"* e^{-1*t} + " + co2.toFixed(2)+"* t * e^{-1*t}}$$";
        tanswer=tanswer+"Step Response of function with 0 zeroes"+step0eqn;
        if (amplitudes2(co1, co2, 1, 10) == amplitudes2(co1, co2, 1, 9.8)) {
            maxl = 10;
            stepl = 0.05;
        } else if (amplitudes2(co1, co2, 1, 25) == amplitudes2(co1, co2, 1, 24.5)) {
            maxl = 25;
            stepl = 0.125;
        } else if (amplitudes2(co1, co2, 1, 50) == amplitudes2(co1, co2, 1, 49)) {
            maxl = 50;
            stepl = 0.25;
        } else if (amplitudes2(co1, co2, 1, 100) == amplitudes2(co1, co2, 1, 98)) {
            maxl = 100;
            stepl = 0.5;
        } else if (amplitudes2(co1, co2, 1, 200) == amplitudes2(co1, co2, 1, 196)) {
            maxl = 200;
            stepl = 1;
        } else {
            maxl = 1;
            stepl = 0.005;
        }

        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step.push(amplitudes2(co1, co2, 0, i));
            lab_step.push(i.toFixed(1));
        }
        lab_final = lab_step;
        final_step = stepl;
    }
}




function amplitudes1(v1, v2, v3, v4,v5, str, t) {
    var cal = v2*Math.pow(Math.E,-1*v3*t)*Math.cos(v5*t)+v2*(v4/v2-v3)*Math.pow(Math.E,-1*v3*t)*Math.sin(v5*t)/v5+v1;
    if (str)
        return cal.toFixed(4);
    else
        return cal;
}

function amplitudes2(v1, v2, str, t) {
    var cal = v1 - v1 * Math.pow(Math.E, -1 * t) - v2 * t * Math.pow(Math.E, -1 * t);
    if (str)
        return cal.toFixed(4);
    else
        return cal;
}





