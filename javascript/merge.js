// let mergeimg= document.getElementById('mergeimg');

function hide_img_merge(){
    var query="div#m_img";
    var div=document.querySelector(query);
    div.style.display="none";
    }
    function show_img_merge(){
    var query="div#m_img";
    var div=document.querySelector(query);
    div.style.display="flex";
    }

function Merge() {
    
    document.getElementById("algodetail").innerText = "Merge Sort is one of the most popular sorting algorithms that is based on the principle of Divide and Conquer Algorithm Here, a problem is divided into multiple sub-problems. Each sub-problem is solved individually. Finally, sub-problems are combined to form the final solution.Using the Divide and Conquer technique, we divide a problem into subproblems. When the solution to each subproblem is ready, we 'combine' the results from the subproblems to solve the main problem.";

    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(N)";
    show_img_merge();
    hide_img_heap();
    hide_img_quick();
    hide_img_selection();
    hide_img_bubble();
    hide_img_insertion();

    c_delay = 0;

    merge_partition(0, array_size - 1);

    enable_buttons();
}

function merge_sort(start, mid, end) {
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for (var i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red");//Color update
        }
        else if (q > end) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red");//Color update
        }
        else if (div_sizes[p] < div_sizes[q]) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red");//Color update
        }
        else {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red");//Color update
        }
    }

    for (var t = 0; t < k; t++) {
        div_sizes[start++] = Arr[t];
        div_update(divs[start - 1], div_sizes[start - 1], "green");//Color update
    }
}

function merge_partition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "yellow");//Color update

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}