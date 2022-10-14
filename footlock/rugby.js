array=['Nouvelle-zelande','France','Italie','Uruguay','Namibie','Afrique du Sud','Irlande','Ecosse','Tonga','Romanie','Pays de Galles','Australie','Fidji','Géorgie','Winner of the qual - we still dont know','Angleterre','Japon','Argentine','Samoa','Chili']

 $('#btn1').on('click',function(){
    for(var i=0;i<4;i++){
        $("#list1").append('<li><a href="#">' + makeTeam(array) + '</a></li>')
    }
    array=['Nouvelle-zelande','France','Italie','Uruguay','Namibie','Afrique du Sud','Irlande','Ecosse','Tonga','Romanie','Pays de Galles','Australie','Fidji','Géorgie','Winner of the qual - we still dont know','Angleterre','Japon','Argentine','Samoa','Chili']

 })

 function rdm(x){
    return Math.floor(Math.random()*x)
 }

function makeTeam(arr) {
    var result = []
    for(var i=0;i<5;i++){
        var key = rdm(arr.length)
        console.log(key)
        result.push(arr[key])
        arr.splice(key, 1)
    }
    return result
}