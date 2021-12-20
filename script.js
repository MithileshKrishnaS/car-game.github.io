
window.onload  = function(){
    var button=document.createElement('div');
    var img=document.createElement('img');
    img.src="./images/reload.svg";
    img.width=100;
    img.height=100;
    button.appendChild(img);
    document.getElementById('btn').appendChild(button);
    document.querySelector("#btn").hidden = true;
    document.querySelector("#start").hidden = false;
    document.querySelector("#ins").hidden = false;
    document.getElementById('start').addEventListener('click', function (event) {
        document.querySelector("#start").hidden = true;
        document.querySelector("#ins").hidden = true;
        complete();
    });
    

}

function complete()
{
    const rd=document.getElementById('road');
    const tree=document.getElementById('one');
    const lane2=document.getElementById('two');
    const rlane1=document.getElementById('rone');
    const rlane2=document.getElementById('rtwo');

    var score=0;
    var check=1000;
    let collide=false;
    let player={step : 2.5};
    let a=1;
    var speed=a*40;
    let keys={ArrowLeft:'false',ArrowRight:'false'};
    var item_y=0;
    var tree_y=0;
    var house_y=0;
    let item_y1=0;
    let item_y01=-30;
    let item_y02=-60;

    // document.addEventListener('keyleft',Leftkey);
    // document.addEventListener('keyright',Rightkey);

   

    // function Leftkey(event)
    // {
    //     keys[event.key]=true;
    // }

    // function Rightkey(event)
    // {
    //     keys[event.key]=true;
    // }



    function move_objects(){
        score++;
        if(score>check)
        {
            a=a+0.25;
            check=check+1000;
            console.log(a);
        }
        speed=a*40;
        document.getElementById('pts').innerHTML=score;
        document.getElementById('spd').innerHTML=speed;
        let line=document.querySelectorAll('#line');

        line.forEach(function(item){
            if(item_y>=80){
                item_y-=80;
            }
            item_y+=a/2;
            item.style.top=item_y+'%';
            //console.log(item);
            
        })
        let tree=document.querySelector('#trees');
        let rlane2=document.querySelector('#lane4');
        if(tree_y>=60)
        {
            tree_y-=70;
        }
        tree_y=tree_y+(a);
        rlane2.style.top=tree_y+'%';
        tree.style.top=tree_y+'%';
        //console.log(tree.style.top);

        let lane2=document.querySelector('#lane2');
        let rlane1=document.querySelector('#lane3');
        
        if(house_y>=60)
        {
            house_y-=65;
        }
        house_y=house_y+(a);
        
        lane2.style.top=house_y+'%';
        rlane1.style.top=house_y+'%';
        
        //console.log(rlane2.style.top);

        var car=document.querySelector('.user');
        var ucar=car.getBoundingClientRect();
        
        //othercar=getBoundingClientRect();
        let other=document.querySelectorAll('.other');
        other.forEach(function(item){
            var ocar=item.getBoundingClientRect();
            if(!((ucar.bottom<ocar.top)||(ucar.top>ocar.bottom)||(ucar.right<ocar.left)||(ucar.left>ocar.right)))
            {
                console.log('collision');
                collide=true;
            }
            if(item_y1>=80){
                item_y1=-20;
                item.style.left=(Math.floor(Math.random()*20)+40) + '%';
            }
            item_y1+=a/2;
            item.style.top=item_y1+'%';
            //console.log(item_y1);
        })

        let other1=document.querySelectorAll('.other1');
        other1.forEach(function(item){
            var ocar=item.getBoundingClientRect();
            if(!((ucar.bottom<ocar.top)||(ucar.top>ocar.bottom)||(ucar.right<ocar.left)||(ucar.left>ocar.right)))
            {
                console.log('collision');
                collide=true;
            }
            if(item_y01>=80){
                item_y01=-20;
                item.style.left=(Math.floor(Math.random()*20)+40) + '%';
            }
            item_y01+=a/2;
            item.style.top=item_y01+'%';
            
        })

        let other2=document.querySelectorAll('.other2');
        other2.forEach(function(item){
            var ocar=item.getBoundingClientRect();
            if(!((ucar.bottom<ocar.top)||(ucar.top>ocar.bottom)||(ucar.right<ocar.left)||(ucar.left>ocar.right)))
            {
                console.log('collision');
                console.log(collide)
                collide=true;
            }
            if(item_y02>=80){
                item_y02=-20;
                item.style.left=(Math.floor(Math.random()*20)+40) + '%';
            }
            item_y02+=a/2;
            item.style.top=item_y02+'%';
            
        })
        //console.log("car1 : "+item_y1+"car2 : "+item_y01+"car3 : "+item_y02);
    }

    if(collide==true)
    {
        
    }

    function startgame()
    {
        let user=document.querySelector('.user');
        let road=rd.getBoundingClientRect();
        move_objects();

        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 37:
                    if(player.x>39){
                        player.x-=player.step;
                    }
                    console.log(player.y);
                   console.log('Left Key pressed!');
                    break;
                case 38:
                    if(player.y>60)
                    {
                        player.y-=(player.step*2);
                        a=a+0.25;
                    }
                    break;
                //str = 'Up Key pressed!';
                //     break;
                case 39:
                    if(player.x<59){
                        player.x+=player.step;
                        
                    }
                    str = 'Right Key pressed!';
                    break;
                case 40:
                    if(player.y<85)
                    {
                        player.y+=(player.step*2);
                        a=a-0.25;
                    }
                    
                //     str = 'Down Key pressed!';
                //     break;
            }
        }
        user.style.left=player.x + '%';
        user.style.top=player.y+'%';
        if(collide == false)
        {
            window.requestAnimationFrame(startgame);
        }
        else{
            document.querySelector("#btn").hidden = false;
        }
        
    }

    function basic()
    {
        
        var usercar=document.createElement("div");
        usercar.setAttribute("class","user");
        rd.appendChild(usercar);        
        
        var t1=document.createElement("div");
        t1.setAttribute("id","trees");

        var t2=document.createElement("div");
        t2.setAttribute("id","lane2");

        var rt1=document.createElement("div");
        rt1.setAttribute("id","lane3");

        var rt2=document.createElement("div");
        rt2.setAttribute("id","lane4");
       
        tree.appendChild(t1);
        lane2.appendChild(t2);
        rlane1.appendChild(rt1);
        rlane2.appendChild(rt2);
        console.log(t1);

        player.x=40;
        player.y=85;
        for(let i=0;i<5;i++)
        {
            var lines=document.createElement("div");
            lines.setAttribute("id","line");
            var more_line=i*20;
            lines.style.top=more_line+'%';
            rd.appendChild(lines);
        }

    
        var other=document.createElement("div");
        other.setAttribute("class","other");
        other.style.top=0;
        other.style.left=(Math.floor(Math.random()*20)+40)+'%';
        rd.appendChild(other);
        
        var other1=document.createElement("div");
        other1.setAttribute("class","other1");
        other1.style.top=0;
        other1.style.left=(Math.floor(Math.random()*20)+40)+'%';
        rd.appendChild(other1);

        var other2=document.createElement("div");
        other2.setAttribute("class","other2");
        other2.style.top=0;
        other2.style.left=(Math.floor(Math.random()*20)+40)+'%';
        rd.appendChild(other2);


        //console.log(player.y);
        if(collide==false)
        {
            window.requestAnimationFrame(startgame);
        }
        
        
    }
    basic();
    document.getElementById('btn').addEventListener('click', function (event) {
            location.reload();
        });
}



