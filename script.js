const playerList = []
document.getElementById("submit").addEventListener( "click" , (eve) =>{
    eve.preventDefault()

        

        const firstname = document.getElementById("fName").value
        const lastname = document.getElementById("lName").value
        const country = document.getElementById("country").value
        const score = document.getElementById("score").value

        const list = {name: firstname+" "+lastname ,
                          country: country ,
                          score : Number(score)
            }

        
                playerList.push(list);
                playerList.sort((a,b) => b.score - a.score)
                

                ul.innerHTML = ''
                for(let i = 0;i<playerList.length;i++){
                    if(playerList[i] == undefined)continue;

        
                    const ul = document.getElementById("ul")
                    ul.className = "ulclass"
                    const lies = document.createElement("li");
                    lies.className = "liclass"
                    const fname = document.createElement("span")
                    const coun = document.createElement("span")
                    const scor = document.createElement("span")
                    const butPlus = document.createElement("button");
                    const butmines = document.createElement("button");
                    const butRemove = document.createElement("button");


    
                fname.innerText = playerList[i].name
                coun.innerText = playerList[i].country
                
                butPlus.innerText = "+5"
                butmines.innerText = "-5"
                butRemove.innerText = "🗑️"

                butPlus.setAttribute('onclick' , `incrise(${i})`);
                butmines.setAttribute('onclick' , `decrise(${i})`);
                butRemove.setAttribute('onclick' , `remove(${i})`);
                
                scor.innerText = playerList[i].score


                lies.append(fname , coun ,scor ,butRemove ,  butPlus , butmines )
                ul.append(lies);

            }
            
        })
        

    function incrise(i){
        playerList[i].score += 5;
        refresh()
    }

    function decrise(i){
        playerList[i].score -= 5;
        refresh()
    }

    function remove(i){
        delete playerList[i];
        refresh()
    }


    function refresh(){
         
        const ul = document.getElementById("ul")
        playerList.sort((a,b) => b.score - a.score)
                

                ul.innerHTML = ''
                for(let i = 0;i<playerList.length;i++){
                    if(playerList[i] == undefined)continue;

        
                    const ul = document.getElementById("ul")
                    const lies = document.createElement("li");
                    lies.className = "liclass"
                    const fname = document.createElement("span")
                    const coun = document.createElement("span")
                    const scor = document.createElement("span")
                    const butPlus = document.createElement("button");
                    const butmines = document.createElement("button");
                    const butRemove = document.createElement("button");


    
                fname.innerText = playerList[i].name
                coun.innerText = playerList[i].country
                
                butPlus.innerText = "+5"
                butmines.innerText = "-5"
                butRemove.innerText = "🗑️"

                butPlus.setAttribute('onclick' , `incrise(${i})`);
                butmines.setAttribute('onclick' , `decrise(${i})`);
                butRemove.setAttribute('onclick' , `remove(${i})`);
                
                scor.innerText = playerList[i].score


                lies.append(fname , coun ,scor ,butRemove ,  butPlus , butmines )
                ul.append(lies);

            }
}
