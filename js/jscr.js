/*window.onload = function() {
     if (localStorage.getItem('bgcolor')!==null && localStorage.getItem('color')!==null && localStorage.getItem('linkColor')!==null){
         var bgcolor = localStorage.getItem('bgcolor');
         var color = localStorage.getItem('color');
         var linkColor = localStorage.getItem('linkColor');
         document.getElementsByTagName('body')[0].style.background = bgcolor;
         document.getElementsByTagName('body')[0].style.color = color;
         document.getElementById('link1').style.color = linkColor;
         document.getElementById('link2').style.color = linkColor;
         document.getElementById('link3').style.color = linkColor;
         document.getElementById('link4').style.color = linkColor;
         
     }
        document.getElementsByClassName('blackBtn')[0].onclick = function () {
    // console.log('work');
            document.getElementsByTagName('body')[0].style.background = 'rgba(0,0,0,0.8)';
            document.getElementsByTagName('body')[0].style.color = 'rgba(255,255,255,0.8)';
            document.getElementById('link1').style.color = 'rgba(255,255,255,0.75)';
            document.getElementById('link2').style.color = 'rgba(255,255,255,0.75)';
            document.getElementById('link3').style.color = 'rgba(255,255,255,0.75)';
            document.getElementById('link4').style.color = 'rgba(255,255,255,0.75)';
            localStorage.setItem('bgcolor','rgba(0,0,0,0.8)');
            localStorage.setItem('color','rgba(255,255,255,0.8)');
            localStorage.setItem('linkColor','rgba(255,255,255,0.75)');
    
        }
    }


    function readMore(){
        var dots = document.getElementById("dots");
        var more = document.getElementById("more");
        var btn = document.getElementById("btn");
    
        if(dots.style.display === "none") 
        {
            dots.style.display="inline";
            btn.innerHTML="more";
    
            more.style.display="none";
    
        }
        else 
        {
            dots.style.display="none";
            btn.innerHTML="Hide";
    
            more.style.display="inline";
    
        }
    
    }
    
        
    
    document.getElementsByClassName('whiteBtn')[0].onclick = function () {
        // console.log('work');
        document.getElementsByTagName('body')[0].style.background = ' url(img/f1.jpg)';
        document.getElementsByTagName('body')[0].style.color = 'rgba(0,0,0,0.8)';
        document.getElementById('link1').style.color = 'rgba(0,0,0,0.75)';
        document.getElementById('link2').style.color = 'rgba(0,0,0,0.75)';
        document.getElementById('link3').style.color = 'rgba(0,0,0,0.75)';
        document.getElementById('link4').style.color = 'rgba(0,0,0,0.75)';
        localStorage.setItem('bgcolor',' url(img/f1.jpg)');
        localStorage.setItem('color','rgba(0,0,0,0.8)');
        localStorage.setItem('linkColor','rgba(0,0,0,0.75)');
    }



$(document).ready(function () {

	$('a[href^="#"]').click(function () {
		
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 600);
		return false;
	});

});*/
window.onload = function() {
    if (localStorage.getItem('bgcolor')!==null && localStorage.getItem('color')!==null && localStorage.getItem('linkColor')!==null){
        var bgcolor = localStorage.getItem('bgcolor');
        var color = localStorage.getItem('color');
        var linkColor = localStorage.getItem('linkColor');
        document.getElementsByTagName('body')[0].style.background = bgcolor;
        document.getElementsByTagName('body')[0].style.color = color;
        document.getElementById('link1').style.color = linkColor;
        document.getElementById('link2').style.color = linkColor;
        document.getElementById('link3').style.color = linkColor;
        document.getElementById('link4').style.color = linkColor;
        
    }
       document.getElementsByClassName('blackBtn')[0].onclick = function () {
   // console.log('work');
           document.getElementsByTagName('body')[0].style.background = 'rgba(0,0,0,0.8)';
           document.getElementsByTagName('body')[0].style.color = 'rgba(255,255,255,0.8)';
           document.getElementById('link1').style.color = 'rgba(255,255,255,0.75)';
           document.getElementById('link2').style.color = 'rgba(255,255,255,0.75)';
           document.getElementById('link3').style.color = 'rgba(255,255,255,0.75)';
           document.getElementById('link4').style.color = 'rgba(255,255,255,0.75)';
           localStorage.setItem('bgcolor','rgba(0,0,0,0.8)');
           localStorage.setItem('color','rgba(255,255,255,0.8)');
           localStorage.setItem('linkColor','rgba(255,255,255,0.75)');
   }




   
       
   
   document.getElementsByClassName('whiteBtn')[0].onclick = function () {
       // console.log('work');
       document.getElementsByTagName('body')[0].style.background = ' url(img/f1.jpg)';
       document.getElementsByTagName('body')[0].style.color = 'rgba(0,0,0,0.8)';
       document.getElementById('link1').style.color = 'rgba(0,0,0,0.75)';
       document.getElementById('link2').style.color = 'rgba(0,0,0,0.75)';
       document.getElementById('link3').style.color = 'rgba(0,0,0,0.75)';
       document.getElementById('link4').style.color = 'rgba(0,0,0,0.75)';
       localStorage.setItem('bgcolor',' url(img/f1.jpg)');
       localStorage.setItem('color','rgba(0,0,0,0.8)');
       localStorage.setItem('linkColor','rgba(0,0,0,0.75)');
   }
}


$(document).ready(function () {

   $('a[href^="#"]').click(function () {
       
       var target = $(this).attr('href');
       $('html, body').animate({
           scrollTop: $(target).offset().top
       }, 600);
       return false;
   });

});


function readMore(){
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if(dots.style.display === "none") 
    {
        dots.style.display="inline";
        btn.innerHTML="more";

        more.style.display="none";

    }
    else 
    {
        dots.style.display="none";
        btn.innerHTML="Hide";

        more.style.display="inline";

    }

}

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      } else {
        sessionStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
  $( document ).click(function() {
    $( "#toggle" ).toggle( "blind" );
  });

