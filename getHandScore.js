const argvs = process.argv
const argv = argvs.slice(2)
const cardA = argv[0]
const cardB = argv[1]
const cardC = argv[2]

score = getHandScore(cardA, cardB, cardC)
console.log("score = " + score)

function getHandScore(cardA, cardB, cardC){
    
    rankCardA = cardA.substring(1)
    rankCardB = cardB.substring(1)
    rankCardC = cardC.substring(1)

    cards = [cardA,cardB,cardC]
    highest = 0

    if(rankCardA == "" || rankCardB == "" || rankCardC == "" ){
        return 0
    }

    if(rankCardA == rankCardB && rankCardA == rankCardC){
        if(rankCardA == "A"){
            highest = 35
        }
        else{
            highest = 32.5
        }
    }
    else{
        points = [0,0,0,0]
        
        for(var i = 0 ; i < cards.length; i++){
            rankCard = cards[i].substring(1)
            suitCard = cards[i].substring(0,1)
            // console.log("rankCard = " + rankCard)
            // console.log("suitCard = " + suitCard)

            if(rankCard == "J" || rankCard == "Q" || rankCard == "K"){
                point = 10
            }
            else if (rankCard == "A"){
                point = 11
            }
            else{
                point = parseInt(rankCard)
            }

            if(suitCard == "H"){
                points[0] += point 
            }
            else if(suitCard == "C"){
                points[1] += point 
            }
            else if(suitCard == "D"){
                points[2] += point 
            }
            else if(suitCard == "S"){
                points[3] += point 
            }

            // console.log("points[] = " + points)

        }
        
        points.sort(function(a, b){return b-a});
        // console.log("points[] = " + points)
        highest = points[0];
    }


    return highest
}
