var stop = 0 
var joueur1 = 0
var bot = 0
var pointr = 0


var idjoueur1 = document.getElementById('joueur1') 
idjoueur1.innerHTML = 'Le joueur 1 a '+ joueur1 +' win' 

var idbot = document.getElementById('bot')
idbot.innerHTML = 'Le bot a '+ bot +' win' 


var reset = document.getElementById('reset').addEventListener('click', reset)

var resetplayer = document.getElementById('resetplayer').addEventListener('click', resetplayer)


var un = document.getElementById('1')
un.addEventListener('click', game);

var deux = document.getElementById('2')
deux.addEventListener('click', game);

var trois = document.getElementById('3')
trois.addEventListener('click', game);

var quatre = document.getElementById('4')
quatre.addEventListener('click', game);

var cinq = document.getElementById('5')
cinq.addEventListener('click', game);

var six = document.getElementById('6')
six.addEventListener('click', game);

var sept = document.getElementById('7')
sept.addEventListener('click', game);

var huit = document.getElementById('8')
huit.addEventListener('click', game);

var neuf = document.getElementById('9')
neuf.addEventListener('click', game);

function game() {

    this.innerHTML = "<span class='sym' style='color: red;'> X</span>"
    this.removeEventListener("click", game);
    aleatoire()
}


function aleatoire(){
    
    if(stop < 10){
        var chiffreAleatoire = Math.floor(Math.random() * 10)

        var un = document.getElementById('1')
        var un2 = un.innerHTML

        var deux = document.getElementById('2')
        var deux2 = deux.innerHTML

        var trois = document.getElementById('3')
        var trois2 = trois.innerHTML

        var quatre = document.getElementById('4')
        var quatre2 = quatre.innerHTML

        var cinq = document.getElementById('5')
        var cinq2 = cinq.innerHTML

        var six = document.getElementById('6')
        var six2 = six.innerHTML

        var sept = document.getElementById('7')
        var sept2 = sept.innerHTML

        var huit = document.getElementById('8')
        var huit2 = huit.innerHTML

        var neuf = document.getElementById('9')
        var neuf2 = neuf.innerHTML


        stop++
        

        if(chiffreAleatoire == 0){
            aleatoire()
        }else if(chiffreAleatoire == 1 ){

            if(un2 == ""){
                un.innerHTML = "<span class='sym' style='color: white;'> O</span>"
                un.removeEventListener("click", game);
                verif()            
            }else{
                aleatoire()
            }        

        } else if(chiffreAleatoire == 2){

            if(deux2 == ""){
                deux.innerHTML = "<span class='sym' style='color: white;'> O</span>"
                deux.removeEventListener("click", game);
                verif()            
            }else{
                aleatoire()
            }  

        }else if(chiffreAleatoire == 3){

            if(trois2 == ""){
                trois.innerHTML = "<span class='sym' style='color: white;'> O</span>"
                trois.removeEventListener("click", game);
                verif()            
            }else{
                aleatoire()
            }  

        }else if(chiffreAleatoire == 4){
            
            if(quatre2 == ""){
                quatre.innerHTML = "<span class='sym' style='color: white;'> O</span>"
                quatre.removeEventListener("click", game);
                verif()           
            }else{
                aleatoire()
            }  

        }else if(chiffreAleatoire == 5){
            
            if(cinq2 == ""){
                cinq.innerHTML = "<span class='sym' style='color: white;'> O</span>"
                cinq.removeEventListener("click", game);
                verif()           
            }else{
                aleatoire()
            }  

        }else if(chiffreAleatoire == 6){
            
            if(six2 == ""){
                six.innerHTML = "<span class='sym' style='color: white;'> O</span>"
                six.removeEventListener("click", game);
                verif()            
            }else{
                aleatoire()
            }  

        }else if(chiffreAleatoire == 7){
            
            if(sept2 == ""){
                sept.innerHTML = "<span class='sym' style='color: white;'> O</span>"
                sept.removeEventListener("click", game);
                verif()           
            }else{
                aleatoire()
            }  

        }else if(chiffreAleatoire == 8){
            
            if(huit2 == ""){
                huit.innerHTML = "<span class='sym' style='color: white;'> O</span>"
                huit.removeEventListener("click", game);
                verif()            
            }else{
                aleatoire()
            }  

        }else if(chiffreAleatoire == 9){

            if(neuf2 == ""){
                neuf.innerHTML = "<span class='sym' style='color: white;'> O</span>"
                neuf.removeEventListener("click", game);
                verif()            
            }else{
                aleatoire()
            }  

        } else {
            verif()
        }
    }else if(stop >=10){
        verif()
    }
}

function verif() {
    // 123 456 789 147 258 369 159 357
    if(pointr == 0){


        var un = document.getElementById('1').textContent
        var deux = document.getElementById('2').textContent
        var trois = document.getElementById('3').textContent
        var quatre = document.getElementById('4').textContent
        var cinq = document.getElementById('5').textContent
        var six = document.getElementById('6').textContent
        var sept = document.getElementById('7').textContent
        var huit = document.getElementById('8').textContent
        var neuf = document.getElementById('9').textContent

        if((un == ' X')&&(deux == ' X')&&(trois == ' X')){
            
            alert('Le joueur 1 gagne (X)')
            joueur1++
            idjoueur1.innerHTML = 'Le joueur 1 a '+ joueur1 +' win' 
            win()
                
        } else if((un == ' O')&&(deux == ' O')&&(trois == ' O')){
            
            alert('Le bot gagne (O)')
            bot++
            idbot.innerHTML = 'Le bot a '+ bot +' win' 
            win()
        }

        if((quatre == ' X')&&(cinq == ' X')&&(six == ' X')){
            
            alert('Le joueur 1 gagne (X)')
            joueur1++
            idjoueur1.innerHTML = 'Le joueur 1 a '+ joueur1 +' win' 
            win()
                
        } else if((quatre == ' O')&&(cinq == ' O')&&(six == ' O')){
            
            alert('Le bot gagne (O)')
            bot++
            idbot.innerHTML = 'Le bot a '+ bot +' win' 
            win()
        }

        if((sept == ' X')&&(huit == ' X')&&(neuf == ' X')){
            
            alert('Le joueur 1 gagne (X)')
            joueur1++
            idjoueur1.innerHTML = 'Le joueur 1 a '+ joueur1 +' win' 
            win()
                
        } else if((sept == ' O')&&(huit == ' O')&&(neuf == ' O')){
            
            alert('Le bot gagne (O)')
            bot++
            idbot.innerHTML = 'Le bot a '+ bot +' win' 
            win()
        }

        //___________________________________________________________________________________________

        if((un == ' X')&&(quatre == ' X')&&(sept == ' X')){
            
            alert('Le joueur 1 gagne (X)')
            joueur1++
            idjoueur1.innerHTML = 'Le joueur 1 a '+ joueur1 +' win' 
            win()
                
        } else if((un == ' O')&&(quatre == ' O')&&(sept == ' O')){
            
            alert('Le bot gagne (O)')
            bot++
            idbot.innerHTML = 'Le bot a '+ bot +' win' 
            win()
        }
        if((deux == ' X')&&(cinq == ' X')&&(huit == ' X')){
            
            alert('Le joueur 1 gagne (X)')
            joueur1++
            idjoueur1.innerHTML = 'Le joueur 1 a '+ joueur1 +' win' 
            win()
                
        } else if((deux == ' O')&&(cinq == ' O')&&(huit == ' O')){
            
            alert('Le bot gagne (O)')
            bot++
            idbot.innerHTML = 'Le bot a '+ bot +' win' 
            win()
        }
        if((trois == ' X')&&(six == ' X')&&(neuf == ' X')){
            
            alert('Le joueur 1 gagne (X)')
            joueur1++
            idjoueur1.innerHTML = 'Le joueur 1 a '+ joueur1 +' win' 
            win()
                
        } else if((trois == ' O')&&(six == ' O')&&(neuf == ' O')){
            
            alert('Le bot gagne (O)')
            bot++
            idbot.innerHTML = 'Le bot a '+ bot +' win' 
            win()
        }

        //___________________________________________________________________________________________
        if((un == ' X')&&(cinq == ' X')&&(neuf == ' X')){
            
            alert('Le joueur 1 gagne (X)')
            joueur1++
            idjoueur1.innerHTML = 'Le joueur 1 a '+ joueur1 +' win' 
            win()
                
        } else if((un == ' O')&&(cinq == ' O')&&(neuf == ' O')){
            
            alert('Le bot gagne (O)')
            bot++
            idbot.innerHTML = 'Le bot a '+ bot +' win' 
            win()
        }
        
        if((trois == ' X')&&(cinq == ' X')&&(sept == ' X')){
            
            alert('Le joueur 1 gagne (X)')
            joueur1++
            idjoueur1.innerHTML = 'Le joueur 1 a '+ joueur1 +' win' 
            win()
                
        } else if((trois == ' O')&&(cinq == ' O')&&(sept == ' O')){
            
            alert('Le bot gagne (O)')
            bot++
            idbot.innerHTML = 'Le bot a '+ bot +' win' 
            win()
        }
    }else if(pointr == 1){
        joueur1 = 0
        bot = 0
        pointr = 0
    } else {
        console.error('FATAL ERROR PointR')
    }
}

function win(){
    un.removeEventListener("click", game);
    deux.removeEventListener("click", game);
    trois.removeEventListener("click", game);
    quatre.removeEventListener("click", game);
    cinq.removeEventListener("click", game);
    six.removeEventListener("click", game);
    sept.removeEventListener("click", game);
    huit.removeEventListener("click", game);
    neuf.removeEventListener("click", game);
}


function reset() {
    un.innerHTML = "";
    deux.innerHTML = "";
    trois.innerHTML = "";
    quatre.innerHTML = "";
    cinq.innerHTML = "";
    six.innerHTML = "";
    sept.innerHTML = "";
    huit.innerHTML = "";
    neuf.innerHTML = "";

    un.addEventListener('click', game);
    deux.addEventListener('click', game);
    trois.addEventListener('click', game);
    quatre.addEventListener('click', game);
    cinq.addEventListener('click', game);
    six.addEventListener('click', game);
    sept.addEventListener('click', game);
    huit.addEventListener('click', game);
    neuf.addEventListener('click', game);

    stop = 0;
    chiffreAleatoire = 0
}

function resetplayer(){
    var joueur1 = 0
    var bot = 0
    
    idjoueur1.innerHTML = 'Le joueur 1 a '+ joueur1 +' win' 
    idbot.innerHTML = 'Le bot a '+ bot +' win' 
    
    pointr = 1
    verif()
}

