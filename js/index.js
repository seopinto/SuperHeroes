$(document).ready(function(){
   $.ajax({ 
    type: 'GET', 
    url: 'http://35.162.46.100/superheroes/',
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) {            
            var results = JSON.stringify(data);
            var obj = JSON.parse(results);
            var html = "";
            for(var i = 0;i<obj.length;i++){                       
             
             html+="<div class='col-sm-12 col-md-3 col-lg-3	col-xl-3'><div class='card '><div class='card__image card__image--heroe'><img src='"+obj[i].picture+"'></div><div class='card__level card__level--heroe'>"+obj[i].publisher+"</div><div class='card__unit-name'>"+obj[i].name+"</div><div class='card__unit-description'>"+obj[i].info+"</div><div class='card__unit-stats card__unit-stats--heroe clearfix'><div class='one-third'><div class='like'> <i class='fa fa-thumbs-up'></i><i class='outer'></i></div></div><div class='one-third'> <div class='dislike'><i class='fa fa-thumbs-down'></i><i class='outer'></i></div></div></div></div></div>";                           
   }
   $("#c_heroes").html(html);
   }
}); 
    
    
       new TypeIt('#type-1', {
  strings: [" SUPER HEROES ", ],
  speed: 120,
  breakLines: false,
  autoStart: true

});
                  
       });



   

            
           