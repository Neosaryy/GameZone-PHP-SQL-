const cartes = document.querySelectorAll('.carte-div');
var ecouAnim = addEventListener('click', retournCard);
var wait;
//var dataset = "";


//___________________________Aléatoire__________________________________________________________________

function aleatoire() { // function aléatoire au lancement du memory
    // card n'a pas besoin de parenthèses car aucun argument 
    cartes.forEach(card => {
        console.log(card); // undefined  ou <emply string>
        let positionRandom = Math.floor(Math.random() * 1000); // plus le nombre est grand moins il y a de chance d'avoir le même 
        console.log('OK' + card + positionRandom); // nombre aléatoire 
        card.style.order = positionRandom; // .style.order = rangement des chiffres dans l'ordre 
    });
};
//______________________________________________________________________________________________________


//______________________________________________CLICK + ANIM_____________________________________________


cartes.forEach(
    // animcard n'a pas besoin de parenthèses car aucun argument 
    animcard => {
        //var carte1 = animcard ;
        animcard.addEventListener('click', retournCard);
    });
var carte1;

function retournCard() {
    this.classList.toggle('anim'); // ajout de anim dans le nos de la class HTML pour charger l'anim css
    console.log('function flip ok'); // test flip function 
    // if (this ===  carte1) return;

    if (!wait) {
        carte1 = this;
        console.log(carte1)
        wait = "poulet";
        carte1;
    } else if (wait) {
        var carte2 = this;
        console.log(carte2)
        wait = null;
        compare(carte1, carte2)
    };


};

function compare(c1, c2) {
    // console.log("fonction compare",toto,popo);
    if (c1.id === c2.id) {} else {
        setTimeout(function() {
                c2.classList.toggle('anim')
                c1.classList.toggle('anim')
            },
            1500)
    }


}





aleatoire() // set la partie 


// _____________________________________________________________________________________________________




// function click1(){
//   var test = true; 
//   if (desacClick1 == false){
//   console.log("Click 1 AV " + desacClick1);
//   desacClick1 = true;
//   console.log("click 1 AP "+ desacClick1);
//   } else if (desacClick1 == true){
//     click2();
//   };
// };

// function click2(){
//   if (desacClick2 == false){
//     console.log("click 2 AV " + desacClick2);
//     desacClick2 = true; 
//     console.log("click 2 AP " + desacClick2);
//     compare();
//   }else{
//     click1();
//   };
// };



// function test(){
//   if(wait === false){
//     if( carte1 => {
//       var carte1 = this.outerHTML;
//       //console.log(carte1)
//       var wait = true ;
//       return carte1;
//     });
//   } else {
//     carte2 =>  {
//       var carte2 = this.outerHTML;
//       console.log(carte2)
//     };
//   };
// }


// if (carte2 => {
//     var carte2 = this.outerHTML;
//     console.log(carte2)

// });