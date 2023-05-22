const argvs = process.argv
const argv = argvs.slice(2)
const numA = parseInt(argv[0])
// const numA = argv[1]

isDigisible(String(numA))

function isDigisible(numA) {

    // numA.includes("0")
    if ((/0/).test(numA)){
        result = false 
    }
    else{

        if ((/([0-9]).*?\1/).test(numA)){
            result = false 
        }
        else {
            var i = 0
            len = numA.length
            while(i<len){
                // console.log("digit " + numA.charAt(i));
                if(numA % numA.charAt(i) != 0){
                    result = false
                    break
                }
                else{
                    result = true
                }
                i+=1
            }

        }
    }

    console.log("isDigisible === " + result);
}