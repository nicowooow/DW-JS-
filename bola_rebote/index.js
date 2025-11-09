
window.addEventListener("DOMContentLoaded",()=>{
    let ball = document.querySelector('.ball');
    
    let ball_x= parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    let ball_y =  parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
    
    let w_height = window.innerHeight;
    let w_width = window.innerWidth;

    function move_ball(){

        function sum(){
            ball_x+=5;
            ball_y+=5;
            ball.style.top=ball_x+"px";
            ball.style.left=ball_y+"px";
            
        }
        function res(){
            ball_x-=5;
            ball_y-=5;
            ball.style.top=ball_x+"px";
            ball.style.left=ball_y+"px";
        }

        res();


    }
    
    setInterval(move_ball,1)
})