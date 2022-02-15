const progress= document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circle');

let cActive=1;

next.addEventListener('click',()=>{
    cActive++;

    if(cActive>circles.length)
    {
        cActive=circles.length;
    }
    update();
})

prev.addEventListener('click',()=>{
    cActive--;

    if(cActive<1)
    {
        cActive=1;
    }
   update();
})

function update()
{
    circles.forEach((circle,idx) =>
    {  
        if(idx<cActive)
        {
        circle.classList.add('active')

    }
    else
    {
        circle.classList.remove('active')
    }
});

 const actives=document.querySelectorAll('.active');

 progress.style.width=(actives.length-1)/(circles.lenth-1)*100+'%';
 
 if(cActive === 1) {
    prev.disabled = true
} else if(cActive === circles.length) {
    next.disabled = true
} else {
    prev.disabled = false
    next.disabled = false
}
}

