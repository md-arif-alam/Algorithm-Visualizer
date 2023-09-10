//We only have to change background-color and height of the sorting element.

// // var minValue,maxValue;
// // if(!el.attr("min")){minValue=0;} else{minValue=el.attr("min");}
// var el,newPoint,newPlace,offset;
// $("input[type='range']").change(function(){
//   el=$(this);
//   width=el.width();
//   newPoint=(el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
//   offset=-1;
//   if(newPoint<0) { newPlace=0;}
//   else if(newPoint>1) {newPlace=width;}
//   else{newPlace=width * newPoint + offset; offset-=newPoint;}
//    el
//      .next("output")
//      .css({
//         left: newPlace,
//         marginLeft:offset + "%"
//      })
//      .text(el.val());
// })
// el.trigger('change');
// var speed=500;
// inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=10;
                break;
        case 2: speed=100;
                break;
        case 3: speed=300;
                break;
        case 4: speed=400;
                break;
        case 5: speed=500;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        
        }
    },c_delay+=delay_time);
}
