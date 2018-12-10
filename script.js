// Initialize Firebase
var config = {
    apiKey: "AIzaSyBPDT54_D6ZIG22ounD1744byFOEgnRGfU",
    authDomain: "api-test-3ef82.firebaseapp.com",
    databaseURL: "https://api-test-3ef82.firebaseio.com",
    projectId: "api-test-3ef82",
    storageBucket: "api-test-3ef82.appspot.com",
    messagingSenderId: "880274312526"
  };
  firebase.initializeApp(config);

//gets elements
const ulList = document.getElementById('list');

//create reference
const dbRefList = firebase.database().ref().child('object').child('hobies');



//syn list changes
dbRefList.on('child_added',snap=> {
console.log(snap.key)
console.log(snap.val());
    snap.forEach(function(childSnap){
        const li=document.createElement('li');
        li.innerText=childSnap.val();
        ulList.appendChild(li);

        
    })
});

dbRefList.on('child_changed', snap =>{

    const liChanged = document.getElementById(snap.key);
    liChanged.innerText=snap.val();
});

dbRefList.on('child_removed', snap =>{

    const liToRemove = document.getElementById(snap.key);
    liToRemove.remove();
});

//post adding
function writeNewPost(name,) {
    dbRefList.push({
      Hobie_name:name,
    });
  };


//dom connection
let input = document.getElementById('input');
input.value='';
let inputBtn = document.getElementById('btn');

inputBtn.addEventListener('click', function(){
    writeNewPost(input.value);
});



