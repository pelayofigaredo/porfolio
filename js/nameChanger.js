
        function startChange(selector,firstname,secondname){
            wordDOM = selector;
            originalName = firstname;
            alternateName = secondname;
            setInterval(tick,8); 
        }
        
        function tick() {
            if(!changing)
            {
                if(currenTick >= ticksForChangeStart) 
                {
                    changing = true;
                    currenTick = 0;
                    if(isInOriginalName)
                    {
                        targetSize = alternateName.length;
                        targetName = alternateName;
                    }
                    else
                    {
                        targetSize = originalName.length;    
                        targetName = originalName;
                    }
                }
            }
            else{
                if(currenTick >= ticksForLetter){
                    addCharacter();
                    currenTick = 0;
                    if(currentIndex >= targetSize){
                        changing = false;
                        isInOriginalName = !isInOriginalName;
                        currentName = "";
                        currentIndex = 0;
                        wordDOM.text(targetName);
                    }
                    else{
                        randomizeRemaining();
                    }
                }
            }
            currenTick++;
        }
        
        function addCharacter() {
            currentName = targetName.substring(0, currentIndex)
            currentIndex++;
        }
        
        function randomizeRemaining(){
            var remaining = targetName.length - currentIndex;
            var aux = "";
            for (let i = 0; i < remaining; i++) {
                aux += randomCharacter();
            }
            var text = currentName + aux;
            wordDOM.text(text);
        }
        
        function randomCharacter() {
            var char = characters[Math.floor(Math.random()*characters.length)];
            return char;
        }
        
let currenTick = 0;
let ticksForChangeStart = 1200;
let ticksForLetter = 10;
       
let wordDOM =  $("h1#JTest");
        
let originalName = "Pelayo Figaredo";
let alternateName = "Octoyisus";
let currentName = "";
let targetName = "";
let currentIndex = 0;
let targetSize = 0;

let characters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '<', '>', '/', '&', '$', '#', '@', '!', '?' ];
        
let isInOriginalName = true;
let changing = false;
		
