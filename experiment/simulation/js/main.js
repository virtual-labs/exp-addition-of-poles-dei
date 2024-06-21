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
var eqn = "";
var poles = [],
   roots = [];
var kpi,essi,esss,kp;
var p1r="",p1i="",p2r="",p2i="";
var poleval =0;

var conclusion;
document.getElementById("addpole").addEventListener("click",poleadder);
document.getElementById("delpole").addEventListener("click",poleremover);
function poleadder(){
    if(poleval!=2)
    {
        var polesr = document.getElementById("zr").value;
        var polesi = document.getElementById("zi").value;
        if(polesi!="" && polesi!=0)
        {
            p1i = parseFloat(polesi);
            
            p2i = p1i;
            poleval =2;
            if(polesr!="")
            {
                p1r = parseFloat(polesr);
                p2r = p1r;
            }
            else
            {
                p1r =0;
                p2r = 0;
            }
            document.getElementById("viewpole").innerHTML = p1r.toFixed(2)+" + i "+p1i.toFixed(2)+"<br>"+p1r.toFixed(2)+" - i "+p1i.toFixed(2);
            document.getElementById("addpole").disabled=true;
    }
    else if(polesr!="")
    {
        if(p1r == "")
        {
            p1r = parseFloat(polesr);
            p1i=0;
            poleval=poleval+1;
            document.getElementById("viewpole").innerHTML = p1r.toFixed(2);
        }
        else if(p2r == "")
        {
            p2r = parseFloat(polesr);
            p2i=0;
            poleval=poleval+1;
            document.getElementById("viewpole").innerHTML = p1r.toFixed(2)+"<br>"+p2r.toFixed(2);
            document.getElementById("addpole").disabled=true;
        }
    }
    else 
    alert("Please enter pole value");
    document.getElementById("delpole").disabled = false;
    }
    
}
function poleremover(){
    if(poleval==2)
    {
        if(p1i!="")
        {
            poleval=0;
            p1r="";
            p2r="";
            p1i="";
            p2i="";
            document.getElementById("delpole").disabled = true;
            document.getElementById("viewpole").innerHTML = "";
        }
        else
        {p2r ="";
        poleval = poleval-1;
        document.getElementById("viewpole").innerHTML = p1r.toFixed(2);}
        document.getElementById("addpole").disabled=false;
    }
    else if(poleval == 1)
    {
        p1r="";
        poleval = poleval-1;
        document.getElementById("viewpole").innerHTML = "";
        document.getElementById("delpole").disabled = true;
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
    eqn = "";
    document.getElementById("out3").innerHTML = eqn;
    var nums, dens;
    var a1,a2,b1,b2,c1,c2;
    var c = document.getElementById("numc").value;
    var r = document.getElementById("denc").value;
    var p = 0;
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

    
    eqn ="Not enough poles";
    if(p1i!="")
    {
        a2 = 0;
    b2 = parseInt(q);
            c1 = parseInt(c)/b2;
    c2 = parseInt(r)/b2;
    stepresponse3(c1, c2,p1r,p1i);
    let a3=0;    
    a3 = b2;
        
        c2 = parseInt(r);
        a2 = c2-a3*2*p1r;
        b2 = a3 * (p1r*p1r+p1i*p1i)-c2*2*p1r;
    c2 = c2*(p1r*p1r+p1i*p1i);
            a1 = 0;
            b1 = 0;
            c1 = parseInt(c);
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
        if (a3 != 0)
            denominator = denominator + a3.toFixed(0) + "s^3";
            if (a2> 0)
            if (a3 != 0)
                denominator = denominator + " + " + a2.toFixed(0) + "s^2";
            else
                denominator = denominator + a2.toFixed(0) + "s^3";
        else if (a2<0)
            if (a3 != 0)
                denominator = denominator + " " + a2.toFixed(0) + "s^2";
            else
                denominator = denominator + a2.toFixed(0) + "s^3";

        
        if (b2>0)
            if (a2 != 0)
                denominator = denominator + " + " + b2.toFixed(0) + "s";
            else
                denominator = denominator + b2.toFixed(0) + "s";
        else if (b2<0)
            if (a2 != 0)
                denominator = denominator + " " + b2.toFixed(0) + "s";
            else
                denominator = denominator + b2.toFixed(0) + "s";
              
                
        if (c2>0)
            if (b2 != 0)
                denominator = denominator + " + " + c2.toFixed(0);
            else
                denominator = denominator + c2.toFixed(0);
        else if (c2<0)
            if (b2 != 0)
                denominator = denominator + " " + c2.toFixed(0);
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

            
            document.getElementById("out4").innerHTML = eqn;
    }
    else
    {if(p2r!="")
        {
            a2 = 0;
    b2 = parseInt(q);
            c1 = parseInt(c)/b2;
    c2 = parseInt(r)/b2;
    stepresponse2(c1,c2,p1r,p2r);
    let a3=0;    
    a3 = b2;
        
        c2 = parseInt(r);
        a2 = a3*(p1r+p2r)+c2;
        b2 = a3 * (p1r*p2r)-c2*(p1r+p2r);
    c2 = c2*(p1r*p2r);
            a1 = 0;
            b1 = 0;
            c1 = parseInt(c);
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
        if (a3 != 0)
            denominator = denominator + a3.toFixed(0) + "s^3";
        if (a2> 0)
            if (a3 != 0)
                denominator = denominator + " + " + a2.toFixed(0) + "s^2";
            else
                denominator = denominator + a2.toFixed(0) + "s^3";
        else if (a2<0)
            if (a3 != 0)
                denominator = denominator + " " + a2.toFixed(0) + "s^2";
            else
                denominator = denominator + a2.toFixed(0) + "s^3";

        
        if (b2>0)
            if (a2 != 0)
                denominator = denominator + " + " + b2.toFixed(0) + "s";
            else
                denominator = denominator + b2.toFixed(0) + "s";
        else if (b2<0)
            if (a2 != 0)
                denominator = denominator + " " + b2.toFixed(0) + "s";
            else
                denominator = denominator + b2.toFixed(0) + "s";
              
                
        if (c2>0)
            if (b2 != 0)
                denominator = denominator + " + " + c2.toFixed(0);
            else
                denominator = denominator + c2.toFixed(0);
        else if (c2<0)
            if (b2 != 0)
                denominator = denominator + " " + c2.toFixed(0);
            else
                denominator = denominator + c2.toFixed(0);
        
        denominator = denominator + "}}$$";
        eqn = numerator + denominator;
        
            
        }
        document.getElementById("out4").innerHTML = eqn;
        eqn ="Not enough poles";
        if(p1r!="" && p1i=="")
        {
            a2 = 0;
    b2 = parseInt(q);

    c2 = parseInt(r)/b2;
            c1 = parseInt(c)/b2;

            stepresponse1(c1,  c2,p1r);
            c1 = parseInt(c)
            c2 = parseInt(r)
            a2=b2;
            b2 = c2+p1r;
            c2 = parseInt(q)*p1r;
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
        if (a2>0)
            denominator = denominator + a2.toFixed(0) + "s^2";
        if (b2>0)
            if (a2 != 0)
                denominator = denominator + " + " + b2.toFixed(0) + "s";
            else
                denominator = denominator + b2.toFixed(0) + "s";
        else if (b2<0)
            if (a2 != 0)
                    denominator = denominator + " " + b2.toFixed(0) + "s";
            else
                    denominator = denominator + b2.toFixed(0) + "s";      
        if (c2>0)
            if (b2 != 0)
                denominator = denominator + " + " + c2.toFixed(0);
            else
                denominator = denominator + c2.toFixed(0);
        else if (c2<0)
                if (b2 != 0)
                    denominator = denominator + " " + c2.toFixed(0);
                else
                    denominator = denominator + c2.toFixed(0);        
        denominator = denominator + "}}$$";
        eqn = numerator + denominator;
        console.log(eqn);
        
            
        }document.getElementById("out3").innerHTML = eqn;}
        c2 = parseInt(r);
        a1 = 0;
        b1 = 0;
        c1 = parseInt(c);
        
    c2= c2+c1;
    a2=0;
    b2 = parseInt(q);

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
        c1 = c1/b2;
        c2 = c2/b2;
    stepresponse(c1, c2);
        
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
    //genval("dena", "lp");
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
        document.getElementById("fconclusions").innerHTML = "1. On adding the poles, the response becomes slower and it takes longer to reach the steady state. <br> 2. The pole added is close enough to the origin. Thus, the system becomes more stable.";
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
            label: "Step Response 0 pole",
            data: dat_step,
            fill: false,
            pointRadius: 1,
            borderColor: 'rgb(192, 75, 192)',
            tension: 0.1
        },
    {
            label: "Step Response 1 pole",
            data: dat_step1,
            fill: false,
            pointRadius: 1,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
    {
            label: "Step Response 2 pole",
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

function stepresponse2(parc1,parc2,pole1,pole2) {
    lab_step2 = [];
    dat_step2 = [];
    var co1, co2, co3, co4,co5;
    var stepl, maxl;
    // console.log(para1);
    // console.log(parb1);
    // console.log(parc1);
    // console.log(para2);
    // console.log(parb2);
    // console.log(parc2);
    // console.log(kp);
    step2eqn="";
    console.log(pole2);
    if(pole1!=pole2)
{    co1 = parc1 / parc2/pole1/pole2;
    co2 = parc1/parc2/(pole1-parc2)/(pole2-parc2);
    co3 = -1*parc2;
    co4 = parc1/pole1/(parc2-pole1)/(pole2-pole1);
    co5 = -1*pole1;
    co6 = parc1/pole2/(parc2-pole2)/(pole1-pole2);
    co7 = -1*pole2;
    step2eqn = "$${" + co1.toFixed(2)+" - "+ co2.toFixed(2)+"*e^{"+co3.toFixed(2)+"*t} - "+co4.toFixed(2)+"*e^{"+co5.toFixed(2)+"*t} - "+co6.toFixed(2)+"*e^{"+co7.toFixed(2)+"*t}}$$";   
    tanswer=tanswer+"Step Response of function with 2 poles"+step2eqn;
        console.log(tanswer);
        if(lab_final.length!=0){
            maxl = lab_final[lab_final.length-1];
            stepl=final_step;
        }
        else
            {if (amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 10) == amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 9.8)) {
                maxl = 10;
                stepl = 0.05;
            } else if (amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 25) == amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 24.5)) {
                maxl = 25;
                stepl = 0.125;
            } else if (amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 50) == amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 49)) {
                maxl = 50;
                stepl = 0.25;
            } else if (amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 100) == amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 98)) {
                maxl = 100;
                stepl = 0.5;
            } else if (amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 200) == amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 196)) {
                maxl = 200;
                stepl = 1;
            } else {
                maxl = 250;
                stepl = 1.2;
            }}

        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step2.push(amplitudes12(co1, co2, co3, co4,co5,co6,co7, 0, i));
            lab_step2.push(i.toFixed(1));
        }
    }
    else{
        co1 = parc1 / parc2/pole1/pole1;
        co2 = parc1/parc2/(pole1-parc2)/(pole1-parc2);
        co3 = -1*parc2;
        co4 = parc1/pole1/(parc2-pole1)/pole1;
        co5 = -1*pole1;
        step1eqn = "$${" + co1.toFixed(2)+" - "+ co2.toFixed(2)+"*e^{"+co3.toFixed(2)+"*t} - "+co4.toFixed(2)+"*e^{"+co5.toFixed(2)+"*t}}$$";
        tanswer=tanswer+"Step Response of function with 2 poles"+step1eqn;
        if(lab_final.length!=0){
            maxl = lab_final[lab_final.length-1];
            stepl=final_step;
        }
        else
            {if (amplitudes11(co1, co2, co3, co4,co5, 1, 10) == amplitudes11(co1, co2, co3, co4,co5, 1, 9.8)) {
                maxl = 10;
                stepl = 0.05;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 25) == amplitudes11(co1, co2, co3, co4,co5, 1, 24.5)) {
                maxl = 25;
                stepl = 0.125;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 50) == amplitudes11(co1, co2, co3, co4,co5, 1, 49)) {
                maxl = 50;
                stepl = 0.25;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 100) == amplitudes11(co1, co2, co3, co4,co5, 1, 98)) {
                maxl = 100;
                stepl = 0.5;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 200) == amplitudes11(co1, co2, co3, co4,co5, 1, 196)) {
                maxl = 200;
                stepl = 1;
            } else {
                maxl = 250;
                stepl = 1.2;
            }}


        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step2.push(amplitudes11(co1, co2, co3, co4,co5, 0, i));
            lab_step2.push(i.toFixed(1));
        }
    }
        lab_final = lab_step2;
        final_step = stepl;
        
        
    } 



function stepresponse2(parc1,parc2,pole1,pole2) {
    lab_step2 = [];
    dat_step2 = [];
    var co1, co2, co3, co4,co5,co7,co6;
    var stepl, maxl;
    // console.log(para1);
    // console.log(parb1);
    // console.log(parc1);
    // console.log(para2);
    // console.log(parb2);
    // console.log(parc2);
    // console.log(kp);
    step2eqn="";
    console.log(pole2);
    if(pole1!=pole2)
{    co1 = parc1 / parc2/pole1/pole2;
    co2 = parc1/parc2/(pole1-parc2)/(pole2-parc2);
    co3 = -1*parc2;
    co4 = parc1/pole1/(parc2-pole1)/(pole2-pole1);
    co5 = -1*pole1;
    co6 = parc1/pole2/(parc2-pole2)/(pole1-pole2);
    co7 = -1*pole2;
    step2eqn = "$${" + co1.toFixed(2)+" - "+ co2.toFixed(2)+"*e^{"+co3.toFixed(2)+"*t} - "+co4.toFixed(2)+"*e^{"+co5.toFixed(2)+"*t} - "+co6.toFixed(2)+"*e^{"+co7.toFixed(2)+"*t}}$$";   
    tanswer=tanswer+"Step Response of function with 2 poles"+step2eqn;
        console.log(tanswer);
        if(lab_final.length!=0){
            maxl = lab_final[lab_final.length-1];
            stepl=final_step;
        }
        else
            {if (amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 10) == amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 9.8)) {
                maxl = 10;
                stepl = 0.05;
            } else if (amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 25) == amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 24.5)) {
                maxl = 25;
                stepl = 0.125;
            } else if (amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 50) == amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 49)) {
                maxl = 50;
                stepl = 0.25;
            } else if (amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 100) == amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 98)) {
                maxl = 100;
                stepl = 0.5;
            } else if (amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 200) == amplitudes12(co1, co2, co3, co4,co5,co6,co7, 1, 196)) {
                maxl = 200;
                stepl = 1;
            } else {
                maxl = 250;
                stepl = 1.2;
            }}

        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step2.push(amplitudes12(co1, co2, co3, co4,co5,co6,co7, 0, i));
            lab_step2.push(i.toFixed(1));
        }
    }
    else{
        co1 = parc1 / parc2/pole1/pole1;
        co2 = parc1/parc2/(pole1-parc2)/(pole1-parc2);
        co3 = -1*parc2;
        co4 = parc1/pole1/(parc2-pole1)/pole1;
        co5 = -1*pole1;
        step1eqn = "$${" + co1.toFixed(2)+" - "+ co2.toFixed(2)+"*e^{"+co3.toFixed(2)+"*t} - "+co4.toFixed(2)+"*e^{"+co5.toFixed(2)+"*t}}$$";
        tanswer=tanswer+"Step Response of function with 2 poles"+step1eqn;
        if(lab_final.length!=0){
            maxl = lab_final[lab_final.length-1];
            stepl=final_step;
        }
        else
            {if (amplitudes11(co1, co2, co3, co4,co5, 1, 10) == amplitudes11(co1, co2, co3, co4,co5, 1, 9.8)) {
                maxl = 10;
                stepl = 0.05;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 25) == amplitudes11(co1, co2, co3, co4,co5, 1, 24.5)) {
                maxl = 25;
                stepl = 0.125;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 50) == amplitudes11(co1, co2, co3, co4,co5, 1, 49)) {
                maxl = 50;
                stepl = 0.25;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 100) == amplitudes11(co1, co2, co3, co4,co5, 1, 98)) {
                maxl = 100;
                stepl = 0.5;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 200) == amplitudes11(co1, co2, co3, co4,co5, 1, 196)) {
                maxl = 200;
                stepl = 1;
            } else {
                maxl = 250;
                stepl = 1.2;
            }}


        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step2.push(amplitudes11(co1, co2, co3, co4,co5, 0, i));
            lab_step2.push(i.toFixed(1));
        }
    }
        lab_final = lab_step2;
        final_step = stepl;
        
        
    } 

    function stepresponse3(parc1, parc2,poler,polei) {
        lab_step2 = [];
        dat_step2 = [];
        var co1, co2,co3,co4,co5,co6,co7;
        var stepl, maxl;
        // console.log(para1);
        // console.log(parb1);
        // console.log(parc1);
        // console.log(para2);
        // console.log(parb2);
        // console.log(parc2);
        step2eqn="";
        
            co1 = parc1 / parc2/(poler*poler+polei*polei);
            co2 = parc1/parc2/(poler*poler+polei*polei+parc2*parc2-2*parc2*poler);
            co3 = -1*parc2;
            co4 = parc1*(2*poler-parc2)/(poler*poler+polei*polei+parc2*parc2-2*parc2*poler)/(poler*poler+polei*polei);
            co5 = -1*poler;
            co6=polei;
            co7=parc1*(2*poler-parc2)*(poler*poler-polei*polei+polei*poler)/(poler*poler+polei*polei+parc2*parc2-2*parc2*poler)/(poler*poler+polei*polei)/(2*polei*poler-polei*polei);
            step2eqn = "$${" + co1.toFixed(2)+" - "+ co2.toFixed(2)+"*e^{"+co3.toFixed(2)+"*t} + "+co4.toFixed(2)+"*e^{"+co5.toFixed(2)+"*t}* cos({"+co6.toFixed(2)+"})  - "+co7.toFixed(2)+"*e^{"+co5.toFixed(2)+"*t}* cos({"+co7.toFixed(2)+"})}$$";
            tanswer=tanswer+"Step Response of function with 2 poles"+step2eqn;
            if(lab_final.length!=0){
                maxl = lab_final[lab_final.length-1];
                stepl=final_step;
            }
            else
                {if (amplitudes22(co1, co2, co3, co4,co5,co6,co7, 1, 10) == amplitudes22(co1, co2, co3, co4,co5,co6,co7, 1, 9.8)) {
                    maxl = 10;
                    stepl = 0.05;
                } else if (amplitudes22(co1, co2, co3, co4,co5,co6,co7, 1, 25) == amplitudes22(co1, co2, co3, co4,co5,co6,co7, 1, 24.5)) {
                    maxl = 25;
                    stepl = 0.125;
                } else if (amplitudes22(co1, co2, co3, co4,co5,co6,co7, 1, 50) == amplitudes22(co1, co2, co3, co4,co5,co6,co7, 1, 49)) {
                    maxl = 50;
                    stepl = 0.25;
                } else if (amplitudes22(co1, co2, co3, co4,co5,co6,co7, 1, 100) == amplitudes22(co1, co2, co3, co4,co5,co6,co7, 1, 98)) {
                    maxl = 100;
                    stepl = 0.5;
                } else if (amplitudes22(co1, co2, co3, co4,co5,co6,co7, 1, 200) == amplitudes22(co1, co2, co3, co4,co5,co6,co7, 1, 196)) {
                    maxl = 200;
                    stepl = 1;
                } else {
                    maxl = 250;
                    stepl = 1.2;
                }}
    
    
            for (let i = 0; i <= maxl; i = i + stepl) {
    
                dat_step2.push(amplitudes22(co1, co2, co3, co4,co5,co6,co7, 0, i));
                lab_step2.push(i.toFixed(1));
            }
            lab_final = lab_step1;
            final_step = stepl;
            
        
    }
    

function stepresponse1(parc1, parc2,pole1) {
    lab_step1 = [];
    dat_step1 = [];
    var co1, co2,co3,co4,co5;
    var stepl, maxl;
    // console.log(para1);
    // console.log(parb1);
    // console.log(parc1);
    // console.log(para2);
    // console.log(parb2);
    // console.log(parc2);
    step1eqn="";
    
        co1 = parc1 / parc2/pole1;
        co2 = parc1/parc2/(pole1-parc2);
        co3 = -1*parc2;
        co4 = parc1/pole1/(parc2-pole1);
        co5 = -1*pole1;
        step1eqn = "$${" + co1.toFixed(2)+" - "+ co2.toFixed(2)+"*e^{"+co3.toFixed(2)+"*t} - "+co4.toFixed(2)+"*e^{"+co5.toFixed(2)+"*t}}$$";
        tanswer=tanswer+"Step Response of function with 1 poles"+step1eqn;
        if(lab_final.length!=0){
            maxl = lab_final[lab_final.length-1];
            stepl=final_step;
        }
        else
            {if (amplitudes11(co1, co2, co3, co4,co5, 1, 10) == amplitudes11(co1, co2, co3, co4,co5, 1, 9.8)) {
                maxl = 10;
                stepl = 0.05;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 25) == amplitudes11(co1, co2, co3, co4,co5, 1, 24.5)) {
                maxl = 25;
                stepl = 0.125;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 50) == amplitudes11(co1, co2, co3, co4,co5, 1, 49)) {
                maxl = 50;
                stepl = 0.25;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 100) == amplitudes11(co1, co2, co3, co4,co5, 1, 98)) {
                maxl = 100;
                stepl = 0.5;
            } else if (amplitudes11(co1, co2, co3, co4,co5, 1, 200) == amplitudes11(co1, co2, co3, co4,co5, 1, 196)) {
                maxl = 200;
                stepl = 1;
            } else {
                maxl = 250;
                stepl = 1.2;
            }}


        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step1.push(amplitudes11(co1, co2, co3, co4,co5, 0, i));
            lab_step1.push(i.toFixed(1));
        }
        lab_final = lab_step1;
        final_step = stepl;
        
    
}

function stepresponse(parc1,  parc2) {
    lab_step = [];
    dat_step = [];
    var co1, co2;
    var stepl, maxl;
    //kp = parb1/parc2;
    // console.log(para1);
    // console.log(parb1);
    // console.log(parc1);
    // console.log(para2);
    // console.log(parb2);
    // console.log(parc2);
    // console.log(kp);
        co1 = parc1 / parc2;
        co2 = -1*parc2;
        step0eqn = "$${" + co1.toFixed(2)+"*e^{"+co2.toFixed(2)+"*t}}$$";
        tanswer=tanswer+"Step Response of function with 0 poles"+step0eqn;
        console.log(tanswer);
        if(lab_final.length!=0){
            maxl = lab_final[lab_final.length-1];
            stepl=final_step;
        }
        else
        {if (amplitudes10(co1, co2,  1, 10) == amplitudes10(co1, co2,  1, 9.8)) {
            maxl = 10;
            stepl = 0.05;
        } else if (amplitudes10(co1, co2,  1, 25) == amplitudes10(co1, co2,  1, 24.5)) {
            maxl = 25;
            stepl = 0.125;
        } else if (amplitudes10(co1, co2,  1, 50) == amplitudes10(co1, co2,  1, 49)) {
            maxl = 50;
            stepl = 0.25;
        } else if (amplitudes10(co1, co2,  1, 100) == amplitudes10(co1, co2,  1, 98)) {
            maxl = 100;
            stepl = 0.5;
        } else if (amplitudes10(co1, co2,  1, 200) == amplitudes10(co1, co2,  1, 196)) {
            maxl = 200;
            stepl = 1;
        } else {
            maxl = 250;
            stepl = 1.25;
        }}

        for (let i = 0; i <= maxl; i = i + stepl) {

            dat_step.push(amplitudes10(co1, co2,  0, i));
            lab_step.push(i.toFixed(1));
        }
        lab_final = lab_step;
        final_step = stepl;
        
    
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

function amplitudes10(v1,v2,str,t)
{
    var cal = v1*(1-Math.pow(Math.E,v2*t));
    if (str)
        return cal.toFixed(4);
    else
        return cal;
}

function amplitudes11(v1,v2,v3,v4,v5,str,t)
{
    var cal = v1-v2*Math.pow(Math.E,v3*t)-v4*Math.pow(Math.E,v5*t);
    if (str)
        return cal.toFixed(4);
    else
        return cal;
}

function amplitudes12(v1,v2,v3,v4,v5,v6,v7,str,t)
{
    var cal = v1-v2*Math.pow(Math.E,v3*t)-v4*Math.pow(Math.E,v5*t)-v6*Math.pow(Math.E,v7*t);
    if (str)
        return cal.toFixed(4);
    else
        return cal;
}
function amplitudes22(v1,v2,v3,v4,v5,v6,v7,str,t)
{
    var cal = v1-v2*Math.pow(Math.E,v3*t)+v4*Math.pow(Math.E,v5*t)*Math.cos(v6*t)+v7*Math.pow(Math.E,v5*t)*Math.sin(v6*t);
    if (str)
        return cal.toFixed(4);
    else
        return cal;
}

