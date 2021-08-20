//task-1 Change color of top players and top blogs
//top player
const topPlayers = document.getElementById('top-players');
topPlayers.style.color = 'rgb(0,128,0,1)';
//top blogs
const topBlogs = document.getElementById('top-blogs');
topBlogs.style.color = 'rgb(0,128,0,1)';

//task-2 background color to all elemets with player class
const playerCard = document.getElementsByClassName('player');
for (const player of playerCard) {
    player.style.backgroundColor = 'rgb(0,0,0,0.1)';
}
//tesk -3 create ul list and add list on button click
//create ul

// listContainer.appendChild(list);

document.getElementById('add-list-btn').addEventListener('click',
    function() {
        const ul = document.getElementById("lists-container");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode("New List Added"));
        ul.appendChild(li);
    })

//tsk -4 & 5
let count = 0;
document.getElementById('counter-btn').addEventListener('click',
    function() {

        count++;
        if (count <= 5) {
            const counterField = document.getElementById('counter-field');
            counterField.value = count;
        } else {
            counterField.setAttribute('disabled', true);
        }
    })