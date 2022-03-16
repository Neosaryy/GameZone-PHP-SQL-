var image = document.getElementById('image')


var plan = document.getElementById('plan')
plan.addEventListener('change', etat)

var attraction = document.getElementById('planAttractions')
attraction.addEventListener('change', etat)

var all = document.getElementById('planAll')
all.addEventListener('change', etat)

function etat(){
    // permet de ne pas faire un refrech site ou les bugs d'affichage 
    image.innerHTML = '<img src="img/plan/plan-simple.jpg" />'
    image.innerHTML = '<img src="img/plan/attractions.jpg" />'
    image.innerHTML = '<img src="img/plan/plan-complet.jpg" />'     

    if(this == plan){
        image.innerHTML = '<img src="img/plan/plan-simple.jpg" />'
    }else if(this == attraction){
        image.innerHTML = '<img src="img/plan/attractions.jpg" />'
    }else if(this == all){
        image.innerHTML = '<img src="img/plan/plan-complet.jpg" />'     
    }else{
        image.innerHTML = '<img src="img/plan/plan-simple.jpg" />'
    }
}
etat()