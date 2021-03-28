$(document).ready(function(){

    
    $.get("https://pokeapi.co/api/v2/pokemon?limit=30", function(data){
        var results = data.results 
        var htmlStr = ""; 
            console.log(data);
            //Getting the list 
        for(var i =0; i<results.length; i++){
                // console.log(results[i].url);

                var name = results[i].name;
                var url = results[i].url; 

            htmlStr += `<li> `+name+` </li>`; 
            
            htmlStr += `<p id="url"> ${url}</p>`; 

            

            $("#getList").click(function () {  
                
                $('#post').append(htmlStr);
                
                
            });

            
            
            
        }//end of loop

        //search bar function
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#post li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            
            });
            
        });
            
               //dynamic content 
                $(document).on("click", `#url`,`#getList`, function () {  
                    $('#pokeId').empty();
                    $('#pokeImg').empty();
                    
                    
                    
                    

                    
                    
                var pokemonUrl = $(this).text(); 
                //make ajax call using above url 
                $.get(pokemonUrl, function (data) { 
                    var name =data.name; 
                    // console.log("Poke name", name);
                    // console.log(data); 
                    var img = data.sprites.front_default; 
                    var abilities = data.abilities; 
                    $('#pokeId').append(`<p id="break">Abilities</p>`); 
                    
                    for(var i = 0; i<abilities.length; i++){
                        // console.log(abilities[i].ability.name); 
                        $('#pokeId').append(`<li> abilites: ${abilities[i].ability.name} </li>`); 
                        
                        
                    }// end of pokeURL loop
                    $('#pokeImg').append(`<img src="${img}" alt="">`);
                    // console.log(data.moves[1].move.name);
                    $('#pokeId').append(`<hr>`); 
                    $('#pokeId').append(`<div id="break"><p>Moves</p> </div>`)
                    
                        for(var i =0; i<data.moves.length; i++){
                            // console.log(data.moves[i].move.name);
                            $('#pokeId').append(`<li> moves: ${data.moves[i].move.name} </li>`); 

                        }//end of loop

                        
                    }); 

            }); 
            

    
    });

});