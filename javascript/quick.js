function hide_img_quick(){
    var query="div#q_img";
    var div=document.querySelector(query);
    div.style.display="none";
    }
function show_img_quick(){
    var query="div#q_img";
    var div=document.querySelector(query);
    div.style.display="flex";
    }

function Quick()
{    
    document.getElementById("algodetail").innerText ="Quicksort is a sorting algorithm based on the divide and conquer approach where..1==>>An array is divided into subarrays by selecting a pivot element (element selected from the array).While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot...2==>The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element...3==>At this point, elements are already sorted. Finally, elements are combined to form a sorted array....<<Working of Quicksort Algorithm>>...1==> Select the Pivot Element=>There are different variations of quicksort where the pivot element is selected from different positions. Here, we will be selecting the rightmost element of the array as the pivot element...2==>Rearrange the Array=>Now the elements of the array are rearranged so that elements that are smaller than the pivot are put on the left and the elements greater than the pivot are put on the right...(I).A pointer is fixed at the pivot element. The pivot element is compared with the elements beginning from the first index.(II).If the element is greater than the pivot element, a second pointer is set for that element.(III).Now, pivot is compared with other elements. If an element smaller than the pivot element is reached, the smaller element is swapped with the greater element found earlier.(IV).Again, the process is repeated to set the next greater element as the second pointer. And, swap it with another smaller element.(V).The process goes on until the second last element is reached.(VI).Finally, the pivot element is swapped with the second pointer. 3==> 'Divide Subarrays' Pivot elements are again chosen for the left and the right sub-parts separately. And, step 2 is repeated.The subarrays are divided until each subarray is formed of a single element. At this point, the array is already sorted."
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(log N)";
    hide_img_heap();
    hide_img_merge();
    show_img_quick();
    hide_img_selection();
    hide_img_bubble();
    hide_img_insertion();
    

    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;//make the first element as pivot element.
    div_update(divs[start],div_sizes[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],"yellow");//Color update

                div_update(divs[i],div_sizes[i],"red");//Color update
                div_update(divs[j],div_sizes[j],"red");//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"red");//Height update
                div_update(divs[j],div_sizes[j],"red");//Height update

                div_update(divs[i],div_sizes[i],"grey");//Height update
                div_update(divs[j],div_sizes[j],"grey");//Height update

                i += 1;
            }
    }
    div_update(divs[start],div_sizes[start],"red");//Color update
    div_update(divs[i-1],div_sizes[i-1],"red");//Color update
    
    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"red");//Height update
    div_update(divs[i-1],div_sizes[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }