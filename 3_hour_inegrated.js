var arr = [];  

document.addEventListener('DOMContentLoaded', async function () {
    req = await axios.get('https://crudcrud.com/api/e3b9fb55cf36405787411053f81bba10/appointment')

    for (let i = 0; i < req.data.length; i++) {
        const todo = req.data[i].todo;
        const desc = req.data[i].desc;
        const id = req.data[i]._id;
        console.log(req.data[i].className)
        display(todo, desc, id);
    }  

});

document.querySelector("#btn").addEventListener("click", function () {
    var todo = document.querySelector("#todo").value;
    var desc = document.querySelector("#desc").value;

    const obj = {
        'todo': todo,
        "desc": desc
    };

    axios.post('https://crudcrud.com/api/e3b9fb55cf36405787411053f81bba10/appointment', obj)
        .then(req => console.log("Post successful"))
        .catch(err => console.log(err));

    display(todo , desc);
});

function display(todo, desc, id) {
    var ul = document.createElement("ul");
    var li = document.createElement("li");

    var tolist = document.getElementById("to-do");
    var todone = document.getElementById("done");

    const temp = `${todo} - ${desc}`;
    li.innerHTML = temp + ' <button id="btn-tick">✔</button> <button id="btn-cross">✘</button>';
    li.classList.add('small-li');
    ul.append(li);
    tolist.append(ul);

    li.querySelector("#btn-cross").addEventListener("click", delet);

    async function delet() {
        req = await axios.delete(`https://crudcrud.com/api/e3b9fb55cf36405787411053f81bba10/appointment/${id}`)
        console.log("Deleted successfully", req);
        ul = li.parentElement;
        ul.removeChild(li);
    }

    li.querySelector("#btn-tick").addEventListener("click", completed);

    function completed() {
        li.innerHTML = `${temp}`;
        todone.append(li);
        ul.remove(li);
        // li.classList.add("sam");
        // console.log(li.classList)
        arr.push(li); // Append to the array

        
    }
}
   

function refresh_done(arr) {
    for (let j = 0; j < arr.length; j++) {
        
    }
    axios.post('https://crudcrud.com/api/e3b9fb55cf36405787411053f81bba10/appointment', obj)
    .then(req => console.log("Post successful"))
    .catch(err => console.log(err));
        // var ul = document.createElement("ul");
        // var li = document.createElement("li");
        // for (let j = 0; j < arr.length; j++) {
            // console.log(arr[j].classList)
        //     li.innerText = arr[j];
        //     ul.append(li);
        //     todone.append(ul);
        // }
    }
