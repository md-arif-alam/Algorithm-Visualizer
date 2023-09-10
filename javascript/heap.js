// let heapimg= document.getElementById('heapimg');
function hide_img_heap(){
    var query="div#h_img";
    var div=document.querySelector(query);
    div.style.display="none";
    }
    function show_img_heap(){
    var query="div#h_img";
    var div=document.querySelector(query);
    div.style.display="flex";
    }

function Heap()
{    
    document.getElementById("algodetail").innerText ="Heap Sort is a popular and efficient sorting algorithm in computer programming. Learning how to write the heap sort algorithm requires knowledge of two types of data structures - arrays and trees.The initial set of numbers that we want to sort is stored in an array e.g. [10, 3, 76, 34, 23, 32] and after sorting, we get a sorted array [3,10,23,32,34,76].Heap sort works by visualizing the elements of the array as a special kind of complete binary tree called a heap.Heap is a special tree-based data structure. A binary tree is said to follow a heap data structure if 'it is a complete binary tree' & 'All nodes in the tree follow the property that they are greater than their children i.e. the largest element is at the root and both its children and smaller than the root and so on. Such a heap is called a max-heap. If instead, all nodes are smaller than their children, it is called a min-heap'.Working Of Heap Sort:---1.==> Since the tree satisfies Max-Heap property, then the largest item is stored at the root node.2==>Swap: Remove the root element and put at the end of the array (nth position) Put the last item of the tree (heap) at the vacant place.3==>Remove: Reduce the size of the heap by 1. 4==>Heapify: Heapify the root element again so that we have the highest element at root. 5==>The process is repeated until all the items of the list are sorted."

    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    show_img_heap();
    hide_img_merge();
    hide_img_quick();
    hide_img_selection();
    hide_img_bubble();
    hide_img_insertion();

    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i],div_sizes[i],"red");//Color update
    div_update(divs[j],div_sizes[j],"red");//Color update

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"red");//Height update
    div_update(divs[j],div_sizes[j],"red");//Height update

    div_update(divs[i],div_sizes[i],"grey");//Color update
    div_update(divs[j],div_sizes[j],"grey");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"grey");//Color update
        }

        largest=l;

        div_update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],div_sizes[largest],"grey");//Color update
        }

        largest=r;

        div_update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_sizes[i],"green");//Color update
        div_update(divs[i],div_sizes[i],"yellow");//Color update

        max_heapify(i,0);

        div_update(divs[i],div_sizes[i],"grey");//Color update
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update
}