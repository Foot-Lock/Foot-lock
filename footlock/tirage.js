array=['Tunisie','Argentine',' Brésil', 'Angleterre', 'France', 'Espagne', 'Belgique', 'Portugal', 'Allemagne', 'Pays-Bas', 
'Uruguay', 'Croatie', 'Danemark', 'Mexique', ' États-Unis', 'Sénégal', 'Pays de Galles', 'Pologne', 'Australie', 'Japon', 'Maroc', 'Suisse','Ghana', 'République de Corée', 
 'Cameroun', 'Serbie', 'Canada', 'Costa Rica', 'Arabie saoudite', 'Iran' ,'Équateur', 'Qatar']

 $('#btn0').on('click',function(){
    for(var i=0;i<8;i++){
        $("#list").append('<tr><td><li><a href="#">' + makeTeam(array) + '</a></li></td></tr>')
    }
    array=['Tunisie','Argentine',' Brésil', 'Angleterre', 'France', 'Espagne', 'Belgique', 'Portugal', 'Allemagne', 'Pays-Bas', 
'Uruguay', 'Croatie', 'Danemark', 'Mexique', ' États-Unis', 'Sénégal', 'Pays de Galles', 'Pologne', 'Australie', 'Japon', 'Maroc', 'Suisse','Ghana', 'République de Corée', 
 'Cameroun', 'Serbie', 'Canada', 'Costa Rica', 'Arabie saoudite', 'Iran' ,'Équateur', 'Qatar']
 $('#btn1').show()
 $('#btn0').hide()
})

 function rdm(x){
    return Math.floor(Math.random()*x)
 }

function makeTeam(arr) {
    var result = []
    for(var i=0;i<4;i++){
        var key = rdm(arr.length)
        result.push(arr[key])
        arr.splice(key, 1)
    }
    return result
}

var dates=['Monday 6pm', 'Monday 9pm', 'Tuesday 9pm', 'Tuesday 9pm', 'Wednesday 6pm', 'Wednesday 9pm','Thursday 6pm','Thursday 9pm']


function selectDates(arr){
    var result = []
    for(var i=0;i<8;i++){
        var key = rdm(arr.length)
        result.push(arr[key])
        arr.splice(key, 1)
    }
    return result
}

$('#btn1').on('click',function(){
    dates = selectDates(dates)
    for(var i=0;i<8;i++){
        $("#dates").append('<tr><td><li><a href="#">' + dates[i] + '</a></li></td></tr>')
    }
    dates = ['Monday 6pm', 'Monday 9pm', 'Tuesday 9pm', 'Tuesday 9pm', 'Wednesday 6pm', 'Wednesday 9pm','Thursday 6pm','Thursday 9pm']
 })

 $('#btn1').hide()
 