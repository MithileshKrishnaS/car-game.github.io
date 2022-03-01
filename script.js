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

function getRandomInt(min, max) {
var byteArray = new Uint8Array(1);
window.crypto.getRandomValues(byteArray);
var randomNum = '0.' + byteArray[0].toString();
randomNum = Math.floor(randomNum * (max - min + 1)) + min;
return randomNum;
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
    var item_y=0;
    var tree_y=0;
    var house_y=0;
    let item_y1=0;
    let item_y01=-30;
    let item_y02=-60;

    function move_objects(){
        score++;
        if(score>check)
        {
            a=a+0.25;
            check=check+1000;
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
        })
        let trees=document.querySelector('#trees');
        let rtlane2=document.querySelector('#lane4');
        if(tree_y>=60)
        {
            tree_y-=70;
        }
        tree_y=tree_y+(a);
        rtlane2.style.top=tree_y+'%';
        trees.style.top=tree_y+'%';
        let l2=document.querySelector('#lane2');
        let rtlane1=document.querySelector('#lane3');
        if(house_y>=60)
        {
            house_y-=65;
        }
        house_y=house_y+(a);
        l2.style.top=house_y+'%';
        rtlane1.style.top=house_y+'%';
        var car=document.querySelector('.user');
        var ucar=car.getBoundingClientRect();
        let other=document.querySelectorAll('.other');
        other.forEach(function(item){
            var ocar=item.getBoundingClientRect();
            if(!((ucar.bottom<ocar.top)||(ucar.top>ocar.bottom)||(ucar.right<ocar.left)||(ucar.left>ocar.right)))
            {
                collide=true;
            }
            if(item_y1>=80){
                item_y1=-20;
                item.style.left= getRandomInt(40,60);
            }
            item_y1+=a/2;
            item.style.top=item_y1+'%';
        })

        let other1=document.querySelectorAll('.other1');
        other1.forEach(function(item){
            var ocar=item.getBoundingClientRect();
            if(!((ucar.bottom<ocar.top)||(ucar.top>ocar.bottom)||(ucar.right<ocar.left)||(ucar.left>ocar.right)))
            {
                collide=true;
            }
            if(item_y01>=80){
                item_y01=-20;
                item.style.left= getRandomInt(40,60);
            }
            item_y01+=a/2;
            item.style.top=item_y01+'%';
            
        })

        let other2=document.querySelectorAll('.other2');
        other2.forEach(function(item){
            var ocar=item.getBoundingClientRect();
            if(!((ucar.bottom<ocar.top)||(ucar.top>ocar.bottom)||(ucar.right<ocar.left)||(ucar.left>ocar.right)))
            {
                collide=true;
            }
            if(item_y02>=80){
                item_y02=-20;
                item.style.left= getRandomInt(40,60);
            }
            item_y02+=a/2;
            item.style.top=item_y02+'%';  
        })
    }

    function startgame()
    {
        let user=document.querySelector('.user');
        move_objects();

        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 37:
                    if(player.x>39){
                        player.x-=player.step;
                    }
                    break;
                case 38:
                    if(player.y>60)
                    {
                        player.y-=(player.step*2);
                        a=a+0.25;
                    }
                    break;
                case 39:
                    if(player.x<59){
                        player.x+=player.step;
                        
                    }
                    break;
                case 40:
                    if(player.y<85)
                    {
                        player.y+=(player.step*2);
                        a=a-0.25;
                    }
            }
        }
        user.style.left=player.x + '%';
        user.style.top=player.y+'%';
        if(collide === false)
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
        other.style.left= getRandomInt(40,60);
        rd.appendChild(other);
        
        var other1=document.createElement("div");
        other1.setAttribute("class","other1");
        other1.style.top=0;
        other1.style.left= getRandomInt(40,60);
        rd.appendChild(other1);

        var other2=document.createElement("div");
        other2.setAttribute("class","other2");
        other2.style.top=0;
        other2.style.left= getRandomInt(40,60);
        rd.appendChild(other2);
        if(collide===false)
        {
            window.requestAnimationFrame(startgame);
        }   
    }
    basic();
    document.getElementById('btn').addEventListener('click', function (event) {
            location.reload();
        });
}
