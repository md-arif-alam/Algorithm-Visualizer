document.querySelectorAll(".details").forEach((dd) => {
  dd.querySelector(".dropdown").onclick = () =>
    dd.classList.toggle("active");
});
document.querySelectorAll(".details1").forEach((dd) => {
  dd.querySelector(".dropdown1").onclick = () =>
    dd.classList.toggle("active");
});

// document.querySelector("#bubble").addEventListener("click",() => makeChoice("Bubble"));
// let running = "";


const margin = 40;
mycanvas.width = 400;
mycanvas.height = 300;
const array = [];
let moves = [];
const cols = [];
const left=0;
const right=array.length;

const ctx = mycanvas.getContext("2d");
const maxColumnHeight = 4;



// var canva=document.getElementById("mycanvas");
// canva.style.opacity=1;
// function sizeChange(min, max) { 
//   return Math.random() * (max - min) + min;

// }


const n = 20;
const spacing = (mycanvas.width - margin * 2) / n;
pause();
hidecan();



//////hide and show canvas
function hidecan(){
var query="canvas";
var canvas=document.querySelector(query);
canvas.style.display="none";
}
function showcan(){
var query="canvas";
var canvas=document.querySelector(query);
canvas.style.display="flex";
}




/////hide and show container
function hidecont(){
var query="div#array_container";
var div=document.querySelector(query);
div.style.display="none";
}
function showcont(){
var query="div#array_container";
var div=document.querySelector(query);
div.style.display="flex";
}

// function Boardhide(){
//   var query="div#board-container";
//   var div=document.querySelector(query);
//   div.style.display="none";
//   }
// function Boardshow(){
//   var query="div#board-container";
//   var div=document.querySelector(query);
//   div.style.display="flex";
//   }
// function hidegraph(){
//   var query="div.page-container";
//   var div=document.querySelector(query);
//   div.style.display="none";
//   }
// function showgraph(){
//   var query="div.page-container";
//   var div=document.querySelector(query);
//   div.style.display="flex";
//   }
// function hideti(){
//   var query="div#title";
//   var div=document.querySelector(query);
//   div.style.display="none";
//   }
// function showti(){
//   var query="div#title";
//   var div=document.querySelector(query);
//   div.style.display="flex";
//   }
  

// const conhid= document.getElementById('array_container');
// const buthid1= document.getElementById('bhide');
// buthid1.addEventListener('click',function handleClick(){
//   if(conhid.style.display ==='block'){
//     conhid.style.display='none';
//   } else{
//     conhid.style.display='none';
    
//   }
  
// });

// const buthid2= document.getElementById('shide');
// buthid2.addEventListener('click',function handleClick(){
//   if(conhid.style.display ==='block'){
//     conhid.style.display='none';
//   } else{
//     conhid.style.display='none';
//   }
  
// });

// const buthid3= document.getElementById('ihide');
// buthid3.addEventListener('click',function handleClick(){
//   if(conhid.style.display ==='block'){
//     conhid.style.display='none';
//   } else{
//     conhid.style.display='none';
//   }
  
//  });


////audio tune for bars
let audioCtx = null;
function playNote(freq, type) {
  if (audioCtx == null) {
    audioCtx = new (
      AudioContext || window.webkitAudioContext
    )();
  }
  const dur = 0.2;
  const osc = audioCtx.createOscillator();
  osc.frequency.value = freq;
  osc.start();
  osc.type = type;
  osc.stop(audioCtx.currentTime + dur);
  const node = audioCtx.createGain();
  node.gain.value = 0.4;
  node.gain.linearRampToValueAtTime(0, audioCtx.currentTime + dur);
  osc.connect(node);
  node.connect(audioCtx.destination);
}


//////Gnerate new array
function pause() {
  for (let i = 0; i < n; i++) {
    // canva.style.opacity=1;
    array[i] =Math.floor(Math.random()*50);
    // console.log(array);
    // var data = dataset.data[i];
    
  }

 
  





  ////// Movement of bar
  moves = [];
  for (let i = 0; i < array.length; i++) {
    const x = i * spacing + spacing / 2 + margin;
    const y = mycanvas.height - margin - i;
    const width = spacing - 4;
    //   const height=(mycanvas.height-margin*2)*array[i];
    const height = maxColumnHeight * array[i];
    cols[i] = new column(x, y, width, height);

    //   cols[i].draw(ctx);
    
    
  }
}


////////fordetails
function hide_img_bubble(){
  var query="div#b_img";
  var div=document.querySelector(query);
  div.style.display="none";
  }
  function show_img_bubble(){
  var query="div#b_img";
  var div=document.querySelector(query);
  div.style.display="flex";
  }
function hide_img_selection(){
  var query="div#s_img";
  var div=document.querySelector(query);
  div.style.display="none";
  }
  function show_img_selection(){
  var query="div#s_img";
  var div=document.querySelector(query);
  div.style.display="flex";
  }
function hide_img_insertion(){
  var query="div#i_img";
  var div=document.querySelector(query);
  div.style.display="none";
  }
  function show_img_insertion(){
  var query="div#i_img";
  var div=document.querySelector(query);
  div.style.display="flex";
  }



//// bubble button
function b_play() {
  
  // canva.style.opacity=1;
  // cont.style.opacity=0;
  // $('#target').click(function(){
  //   $("#array_container").hide();
  // });
  moves = bubbleSort(array);
  
  bubblesort(); 
  showcan(); 
  showti();
  // hidegraph();
  hidecont();
  disableSlider1();
  disableSlider2();
  
  
  
  
}
animate();
function s_play() {
  
  // canva.style.opacity=1;
  // cont.style.opacity=0;
  // $('#target').click(function(){
  //   $("#array_container").hide();
  // });
  moves = selectionSort(array);
 
  selectionsort();
  showcan();
  showti();
  // hidegraph();
  hidecont();
  disableSlider1();
  disableSlider2();
}
animate();
function i_play() {
  
  // canva.style.opacity=1;
  // cont.style.opacity=0;
  // $('#target').click(function(){
  //   $("#array_container").hide();
  // });
  moves = insertionSort(array);
  
  insertionsort();
  showcan();
  showti();
  // hidegraph();
  hidecont();
  disableSlider1();
  disableSlider2();
}
animate();
// function q_play() {
//   moves = quickSort(array,left,right);
// }
// animate();



function disableSlider1(){
  document.querySelector("#a_speed").disabled=true;
}
function ableSlider1(){
  document.querySelector("#a_speed").disabled=false;
}
function disableSlider2(){
  document.querySelector("#a_size").disabled=true;
}
function ableSlider2(){
  document.querySelector("#a_size").disabled=false;
}




/////sorting algorithm

function bubblesort()
{   
  document.getElementById("algodetail").innerText ="Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order.Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort. 'WORKING OF BUBBLE SORT' Suppose we are trying to sort the elements in ascending order. (1)==>First Iteration (Compare and Swap)==> I.Starting from the first index, compare the first and the second elements.==> II.If the first element is greater than the second element, they are swapped.==>III.Now, compare the second and the third elements. Swap them if they are not in order.==>IV.The above process goes on until the last element.(2)==>The same process goes on for the remaining iterations.After each iteration, the largest element among the unsorted elements is placed at the end.In each iteration, the comparison takes place up to the last unsorted element.The array is sorted when all the unsorted elements are placed at their correct positions. ";
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    show_img_bubble();
    hide_img_selection();
    hide_img_insertion();
    hide_img_merge();
    hide_img_quick();
    hide_img_heap();


    c_delay=0;

    bubbleSort(array);

    // enable_buttons();
}
function bubbleSort(array) {
  const moves = [];
  do {
    var swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        swapped = true;
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        moves.push({
          indices: [i - 1, i], swap: true
        });
      } else {
        moves.push({
          indices: [i - 1, i], swap: false
        });
      }
    }
  }
  while (swapped);
  return moves;

}

////// selection sort
function selectionsort()
{   
    document.getElementById("algodetail").innerText ="Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.'WORKING OF SELECTION SORT'==> STEP(1).Set the first element as minimum. STEP(2).Compare minimum with the second element. If the second element is smaller than minimum, assign the second element as minimum.Compare minimum with the third element. Again, if the third element is smaller, then assign minimum to the third element otherwise do nothing. The process goes on until the last element. STEP(3).After each iteration, minimum is placed in the front of the unsorted list. STEP(4).For each iteration, indexing starts from the first unsorted element. Step 1 to 3 are repeated until all the elements are placed at their correct positions.";
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N^2)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    show_img_selection();
    hide_img_insertion();
    hide_img_bubble();
    hide_img_merge();
    hide_img_quick();
    hide_img_heap();

    c_delay=0;

    selectionSort(array);

    // enable_buttons();
}

function selectionSort(array) {
  const moves = [];
  do {
    var swapped = false;
    // let min = 0;
    for (let i = 0; i < array.length; i++) {
      // min = i;
      for (let j = i; j < array.length; j++) {
        if (array[j] < array[i]) {
          // min = j;
          swapped = true;
          [array[i], array[j]] = [array[j], array[i]];
          moves.push({
            indices: [i, j], swap: true
          });

        } else {
          moves.push({
            indices: [i, i], swap: false
          });
        }
      }



    }
  }

  while (swapped);
  return moves;

}

//////Insertion Sort
function insertionsort()
{   
    document.getElementById("algodetail").innerText ="Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.Insertion sort works similarly as we sort cards in our hand in a card game.We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put in their right place.A similar approach is used by insertion sort. 'WORKING OF INSERTION SORT' STEP(1):The first element in the array is assumed to be sorted. Take the second element and store it separately in key.Compare key with the first element. If the first element is greater than key, then key is placed in front of the first element. STEP(2):Now, the first two elements are sorted.Take the third element and compare it with the elements on the left of it. Placed it just behind the element smaller than it. If there is no element smaller than it, then place it at the beginning of the array. STEP(3):Similarly, place every unsorted element at its correct position. ";
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    show_img_insertion();
    hide_img_selection();
    hide_img_bubble();
    hide_img_merge();
    hide_img_quick();
    hide_img_heap();
    c_delay=0;

    insertionSort(array);

    // enable_buttons();
}

function insertionSort(array) {
  const moves = [];
  do {
    var swapped = false;
    for (let i = 1; i < array.length; i++) {
      for (let j = i; j > 0; j--) {
        if (array[j] < array[j - 1]) {
          swapped = true;
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
          moves.push({
            indices: [j, j - 1], swap: true
          });

        } else {
          moves.push({
            indices: [j, j - 1], swap: false
          });
        }
      }
    }

  }

  while (swapped);
  return moves;

}

function animate() {
  ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
  let changed = false;
  for (let i = 0; i < cols.length; i++) {
    changed = cols[i].draw(ctx) || changed;
  }
  if (!changed && moves.length > 0) {
    const move = moves.shift();
    const [i, j] = move.indices;


    const waveformType = move.swap ? "square" : "sine";
    playNote(cols[i].height + cols[j].height, waveformType);

    if (move.swap) {
      cols[i].moveTo(cols[j]);
      cols[j].moveTo(cols[i], -1);
      [cols[i], cols[j]] = [cols[j], cols[i]];
    } else {
      cols[i].jump();
      cols[j].jump();
    }
  }
  requestAnimationFrame(animate);
}


//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
// var array_speed=document.getElementById('a_speed').value;

// var butts_algos=document.querySelectorAll(".buttonn");

var div_sizes=[];
var divs=[];
var margin_size;

var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

// cont.display=0;
// $('#target').click(function(){
//   $("#array_container").hide();
// });

//Array generation and updation.
  // $('#target').click(function(){
  //   $(".algo").hide();
  // });

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
  
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        console.log(div_sizes);
    }
   
   
 
} 



function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
  
  
}

window.onload=update_array_size();

//Running the appropriate algorithm.
// for(var i=0;i<butts_algos.length;i++)
// {
//     butts_algos[i].addEventListener("click",runalgo);
// }


// function runalgo()
// {
//     // disable_buttons();

//     this.classList.add("butt_selected");
//     switch(this.innerHTML)
//     {
     
//         case "Merge":Merge();
//                         break;
//         case "Quick":Quick();
//                         break;
//         case "Heap":Heap();
//                         break;
//         // case "Bubble":bubblesort();
//         //                 break;               
//     }
// }

// const
// 	range = document.getElementById('a_speed'),
// 	rangeV = document.getElementById('rangeV'),
// 	setValue = ()=>{
// 		const
// 			newValue = Number( (range.value - range.min)  / (range.max - range.min) ),
// 			newPosition = 100 - (newValue * 0.2);
// 		rangeV.innerHTML = `<span>${range.value}</span>`;
// 		rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
// 	};
// document.addEventListener("DOMContentLoaded", setValue);
// range.addEventListener('input', setValue);


function m_play(){
  showcont();
  showti();
  hidecan();
  // hidegraph();
  Merge();
  ableSlider1();
  ableSlider2();
  // cont.style.opacity=1;
  // canva.style.opacity=0;
  


}
function q_play(){
  showcont();
  showti();
  hidecan();
  // hidegraph();
  Quick();
  ableSlider1();
  ableSlider2();
  // cont.style.opacity=1;
  // canva.style.opacity=0;
 
}
function h_play(){
  showcont();
  showti();
  hidecan();
  // hidegraph();
  Heap();
  ableSlider1();
  ableSlider2();
  // cont.style.opacity=1;
  // canva.style.opacity=0;

}
function g_play(){
  // showgraph();
  hideti();
  // hidecont();
  // hidecan();
  
  // cont.style.opacity=1;
  // canva.style.opacity=0;

}

const slid = document.getElementById('a_speed');
const out = document.getElementById('speed_disp');
out.innerHTML = slid.value;

slid.oninput = function () {
  out.innerHTML = this.value;
  // console.log(fps);
  f = this.value;
  if (this.value !== '' && this.value !== 0) {
    inter = 1000 / f;
  }
};
const slid1 = document.getElementById('a_size');
const out1 = document.getElementById('size_disp');
out.innerHTML = slid.value;

slid1.oninput = function () {
  out1.innerHTML = this.value;
  // console.log(fps);
  f = this.value;
  if (this.value !== '' && this.value !== 0) {
    inter = 1000 / f;
  }
};























