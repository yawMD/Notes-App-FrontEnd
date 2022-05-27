const pull = document.querySelector(".in");
const groundParent = document.querySelector(".req");


window.addEventListener("load",function(){

    groundParent.innerHTML = `<div class="rel-body">
        <div class="con">Title</div>
        <div class="con-b">Request Body</div>
        <div class="con-d">Date</div>
        <div class="con-e">Exit</div>
    </div>`;

    const apiGet = function (callback){
        fetch("http://localhost:4000/task").then((data)=>{
            return data.json();
        }).then(function (newResponse){
            //console.log(newResponse);
            callback(newResponse);
        })
    }

    apiGet(function (element){
        console.log(element);
        let getLengthOfArray = element.length;
        console.log(getLengthOfArray);

        for (let i = 0; i< getLengthOfArray;i++){

            const ParentDiv = document.createElement("div");
            ParentDiv.setAttribute("class","req-body");

            const firstChild = document.createElement("div");
            firstChild.setAttribute("class","con");
            firstChild.textContent = element[i]["task"];

            const secondChild = document.createElement("div");
            secondChild.setAttribute("class","con-b");
            secondChild.textContent = element[i]["completed"];

            const thirdChild = document.createElement("div");
            thirdChild.setAttribute("class","con-d");
            thirdChild.textContent = element[i]["createdAt"];

            const fourthChild = document.createElement("button");
            fourthChild.setAttribute("id","exit");
            fourthChild.innerHTML = `<p>X</p>`
            // document.getElementById("exit").addEventListener("click",function(e){
            //     console.log("work")
            // })



            ParentDiv.appendChild(firstChild);
            ParentDiv.appendChild(secondChild);
            ParentDiv.appendChild(thirdChild);
            ParentDiv.appendChild(fourthChild);
            groundParent.appendChild(ParentDiv);

            console.log(element[i]);

        }

    })


})

pull.addEventListener("click",function(){

    groundParent.innerHTML = `<div class="rel-body">
        <div class="con">Title</div>
        <div class="con-b">Request Body</div>
        <div class="con-d">Date</div>
         <div class="con-e">Exit</div>
    </div>`;

    const apiGet = function (callback){
        fetch("http://localhost:4000/task").then((data)=>{
            return data.json();
        }).then(function (newResponse){
            //console.log(newResponse);
            callback(newResponse);
        })
    }

    apiGet(function (element){
        console.log(element);
        let getLengthOfArray = element.length;
        console.log(getLengthOfArray);

        for (let i = 0; i< getLengthOfArray;i++){

            const ParentDiv = document.createElement("div");
            ParentDiv.setAttribute("class","req-body");

            const firstChild = document.createElement("div");
            firstChild.setAttribute("class","con");
            firstChild.textContent = element[i]["task"];

            const secondChild = document.createElement("div");
            secondChild.setAttribute("class","con-b");
            secondChild.textContent = element[i]["completed"];

            const thirdChild = document.createElement("div");
            thirdChild.setAttribute("class","con-d");
            thirdChild.textContent = element[i]["createdAt"];

            const fourthChild = document.createElement("button");
            fourthChild.setAttribute("id","exit");
            fourthChild.innerHTML = `<p>X</p>`

            ParentDiv.appendChild(firstChild);
            ParentDiv.appendChild(secondChild);
            ParentDiv.appendChild(thirdChild);
            ParentDiv.appendChild(fourthChild);
            groundParent.appendChild(ParentDiv);

            console.log(element[i]);

        }

    })


})

const archive = document.getElementById("archive")

archive.addEventListener("click", function(){
    groundParent.innerHTML = `<div class="rel-body">
        <div class="con">Title</div>
        <div class="con-b">Request Body</div>
        <div class="con-d">Date</div>
         <div class="con-e">Exit</div>
    </div>`;
    const apiGet = function (callback) {
        fetch("http://localhost:4000/archives").then((data) => {
            console.log(data)
            return data.json();
        }).then(function (newResponse) {
            console.log(newResponse);
            callback(newResponse);
        })
    }

    apiGet(function (element){
        console.log(element);
        let getLengthOfArray = element.length;
        console.log(getLengthOfArray);

        for (let i = 0; i< getLengthOfArray;i++){

            const ParentDiv = document.createElement("div");
            ParentDiv.setAttribute("class","req-body");

            const firstChild = document.createElement("div");
            firstChild.setAttribute("class","con");
            firstChild.textContent = element[i]["task"];

            const secondChild = document.createElement("div");
            secondChild.setAttribute("class","con-b");
            secondChild.textContent = element[i]["completed"];

            const thirdChild = document.createElement("div");
            thirdChild.setAttribute("class","con-d");
            thirdChild.textContent = element[i]["createdAt"];

            const fourthChild = document.createElement("button");
            fourthChild.setAttribute("id","exit");
            fourthChild.innerHTML = `<p>X</p>`

            ParentDiv.appendChild(firstChild);
            ParentDiv.appendChild(secondChild);
            ParentDiv.appendChild(thirdChild);
            ParentDiv.appendChild(fourthChild)
            groundParent.appendChild(ParentDiv);

            console.log(element[i]);

        }

    })
})
