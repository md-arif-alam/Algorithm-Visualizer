
class column{
    
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.queue=[];
        this.color={r:150,g:150,b:150}
    }

    moveTo(loc,Yoffset=1,frameCount=45){              /*speed of algorithm*/
        for(let i=1;i<=frameCount;i++){       
            const t=i/frameCount;
            const u=Math.sin(t*Math.PI);
            this.queue.push({
                x:lerp(this.x,loc.x,t),                 /*lerp=linear interpolation*/
                y:lerp(this.y,loc.y,t)+u*this.width/2*Yoffset,
                r:lerp(150,255,u),
                g:lerp(500,0,u),
                b:lerp(10,0,u)
            });
        }
    }
     
    jump(frameCount=20){                                
        for(let i=1;i<=frameCount;i++){
           const t=i/frameCount;
           const u=Math.sin(t*Math.PI);
           this.queue.push({
            x:this.x,
            y:this.y,
            r:lerp(10,8,u),
            g:lerp(90,10,u),
            b:lerp(50,10,u)
           });
        }
    }



    draw(ctx){
        let changed=false;
        if(this.queue.length>0){
            const {x,y,r,g,b}=this.queue.shift();           /*iterating through the frame*/
            this.x=x;
            this.y=y;
            this.color={r,g,b};
            changed=true;
         }
        const left=this.x-this.width/2;
        const top=this.y-this.height;
        const right=this.x+this.width/2;

        // ctx.beginPath();
        // ctx.rect(left,top,this.width,this.height);
        // ctx.fill();
        ctx.beginPath(); 
        const {r,g,b}=this.color;
        ctx.fillStyle=`rgb(${r},${g},${b})`;
        ctx.moveTo(left,top);
        ctx.lineTo(left,this.y);
        ctx.ellipse(this.x,this.y,this.width/2,this.width/4,0,Math.PI,Math.PI*2,true);
        ctx.lineTo(right,top);
        ctx.ellipse(this.x,top,this.width/2,this.width/4,0,0,Math.PI*2,true);
        ctx.fill();
        ctx.stroke();
        
        
        return changed;
        
        

     
    }
    
}
