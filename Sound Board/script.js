const sounds=['fida','mara','mankatha','polla'];
sounds.forEach(sound =>
    {
        const btn=document.getElementById('button');
        btn.classList.add('btn');
        btn.innerText=sound;
        document.getElementById('buttons').appendChild(btn);
    })