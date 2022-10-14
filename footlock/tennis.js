var tenn=[        'Rafael Nadal',
  
         'Carlos Alcaraz',
    
           'Stefanos Tsitsipas',
    
            'Casper Ruud',
    
            'Alexander Zverev',
    
            'Daniil Medvedev',
    
            'Andrey Rublev',
    
            'Félix Auger-Aliassime',
    
            'Taylor Fritz',
    
            'Novak Djokovic',
    
            'Hubert Hurkacz',
    
            'Matteo Berrettini',
    
            'Jannik Sinner'    ,
            'Marin Cilic  '
    ]
   

 $('#btn3').on('click',function(){
    for(var i=0;i<7;i++){
        $("#list").append('<tr><td><li><a href="#">' + makeTeam(tenn) + '</a></li></td></tr>')
    }
   

})

 function rdm(x){
    return Math.floor(Math.random()*x)
 }

function makeTeam(arr) {
    var result = []
    for(var i=0;i<2;i++){
        var key = rdm(arr.length)
        result.push(arr[key])
        arr.splice(key, 1)
    }
    return result
}


   