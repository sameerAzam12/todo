
 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import {getFirestore , collection, addDoc,  getDocs,doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCW93XFyu1agGP08IFaD-XyWsulyDYBbto",
    authDomain: "practice-afa4a.firebaseapp.com",
    projectId: "practice-afa4a",
    storageBucket: "practice-afa4a.appspot.com",
    messagingSenderId: "589081704355",
    appId: "1:589081704355:web:ddc820b029377c0f6a4c16",
    measurementId: "G-68060WNCGN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  var btns=document.getElementById("btn").addEventListener('click',async()=>{
   
var text=document.getElementById('text').value
    try {
      const docRef = await addDoc(collection(db, "users"), {
       text:text
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })

 var div=document.getElementById('sec')

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} =>`);
  div.innerHTML +=     
 
`     <div><p>${doc.data().text}</p>

<button onclick=edit("${doc.id}")>edit</button>
<button>delete</button>
</div> 
`

});

async function edit(id) 
{

    const list = doc(db, "users", id);
    
    let updatetext = prompt('update text')

await updateDoc(list, {
    text:updatetext
})
.then(()=>
{

window.location.reload()

})

    
}
window.edit=edit