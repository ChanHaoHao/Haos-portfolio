let availableKeywords=["foodinfo", "gpa exchange", "mathworks", "coursera",
                       "oo", "ooo", "oooo", "ooooo"];

const resultsBox=document.querySelector(".result-box");
const inputBox=document.getElementById("input-box");

// onkeyup will function once the input box is inserted
inputBox.onkeyup=function() {
    let result=[];
    let input=inputBox.value;

    // if there is something input
    if (input.length) {
        result=availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });

        console.log(result);
    }

    display(result);

    if (!result.length) {
        resultsBox.innerHTML='';
    }
}

// this function displays the result
function display(result) {
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>";
    });

    resultsBox.innerHTML="<ul>"+content.join('')+"</ul>";
}

// this function puts the selected item into the search box and remove the other results
function selectInput(list) {
    inputBox.value=list.innerHTML;
    resultsBox.innerHTML='';
}