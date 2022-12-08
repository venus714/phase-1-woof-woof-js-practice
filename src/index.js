document.addEventListener('DOMContentLoaded', () =>  {
   fetch("http://localhost:3000/pups ") 
   .then(res => res.json())
   .then(data => {
    
    names(data)
    
    function names (dogs){
        dogs.forEach(onedog)
    }
})


    function onedog(single){
     
     let user2= document.createElement("span")
     user2.innerText = single.name
     document.querySelector('#dog-bar').append(user2)
     user2.addEventListener('click', (e) =>{
        dogclick(e,single.image, single.isGoodDog, single.name, single.id)
     })
    }
    function dogclick(event,imgUrl,goodBad,dogName,dogID){
        let doginfor=document.querySelector('#dog-info')
        doginfor.innerHTML=""
        let img = document.createElement("img")
        img.src= imgUrl
        let htu = document.createElement("h2")
        htu.innertext=dogName
        let button=document.createElement('button')
        button.innerText=(goodBad ?"Good Dog":"Bad Dog")
        doginfor.append(img,htu,button)

        button.addEventListener('click',(e) =>{
            changes(button,goodBad,dogID)
        })}

        function changes(button, goodBad, dogID){
            fetch(`http://localhost:3000/pups/${dogID}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    isGoodDog: !goodBad
                })
            })
            .then(resp => resp.json())
            .then(function(data){
                dogclick(event, data.image, data.isGoodDog, data.name, data.id)
                trues()
            }
            )} 
            function trues(){
            fetch("http://localhost:3000/pups")
            .then(resp=> resp.json())
            .then(function(data){
                false(data)
            })}
            let drop = document.querySelector('#good-dog-filter')
            drop.addEventListener('click',function(){
                fetch("http://localhost:3000/pups ")
                .then (resp => resp.json())
                .then(function(data){

                if(drop.innerText === "Filter good dogs:OFF"){
                    drop.innerText="Filter good dogs:ON"
                    trues(data)
                }else{
                        drop.innerText="Filter good dogs:OFF"
                        document.querySelect('#dog-bar').innerHTML=""
                        data.forEach(onedog)
                    }
                })
            })
        })
                        
                    
                  
        
    




   
