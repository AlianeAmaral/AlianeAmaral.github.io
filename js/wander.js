/* Animação da Estrela */
(() => {
    if (reduz) return;

    const cv = $("wander"), ctx = cv.getContext("2d");
    let W, H;
    const sorteio = (min, max) => min + Math.random() * (max - min);
    const corEstrela = () => getComputedStyle(document.documentElement).getPropertyValue("--star").trim();

    function redimensionar(){
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = innerWidth; H = innerHeight;
        cv.width = W * dpr; cv.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    redimensionar();
    addEventListener("resize", redimensionar);

    function viagem(){
        // Cada passagem tem um desenho diferente, velocidade horizontal (px/s)
        const dir = Math.random() < .5 ? 1 : -1;
        const v = sorteio(150, 230);
        const baseY = sorteio(.15, .7) * H;
        const ondasY = [[sorteio(40, 120), sorteio(.12, .3), sorteio(0, 6.3)],
            [sorteio(10, 40),  sorteio(.45, .9), sorteio(0, 6.3)]];
        // Quando esta oscilação é forte, a estrela faz laços
        const laco = [sorteio(20, 95), sorteio(.3, .6), sorteio(0, 6.3)];
        const inicioX = dir > 0 ? -40 : W + 40;

        const rastro = [];
        let t = 0, ultimo = performance.now(), terminou = false;

        function posicao(tt){
            const x = inicioX + dir * (v * tt + laco[0] * Math.sin(tt * laco[1] * Math.PI * 2 + laco[2]));
            const y = baseY + ondasY.reduce((s, [a, f, p]) => s + a * Math.sin(tt * f * Math.PI * 2 + p), 0);
            return [x, y];
        }

        function quadro(agora){
            const dt = Math.min((agora - ultimo) / 1000, .05);
            ultimo = agora; t += dt;

            const [x, y] = posicao(t);
            if (!terminou) rastro.push({ x, y, t });
            if ((dir > 0 && x > W + 60) || (dir < 0 && x < -60)) terminou = true;

            // Rastro dura 1,2 s
            while (rastro.length && t - rastro[0].t > 1.2) rastro.shift();

            const rgb = corEstrela();
            ctx.clearRect(0, 0, W, H);
            ctx.lineCap = "round";
            for (let i = 1; i < rastro.length; i++){
                const a = rastro[i - 1], b = rastro[i];
                const vida = 1 - (t - b.t) / 1.2;
                ctx.strokeStyle = `rgba(${rgb},${(vida * .55).toFixed(3)})`;
                ctx.lineWidth = .4 + vida * 2;
                ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            }

            if (!terminou){
                const brilho = .75 + .25 * Math.sin(t * 9);
                ctx.shadowColor = `rgba(${rgb},.9)`; ctx.shadowBlur = 14;
                ctx.fillStyle = `rgb(${rgb})`;
                ctx.beginPath(); ctx.arc(x, y, 2.6, 0, Math.PI * 2); ctx.fill();
                ctx.shadowBlur = 0;
                ctx.strokeStyle = `rgba(${rgb},${(.7 * brilho).toFixed(3)})`; ctx.lineWidth = 1;
                const r = 9 * brilho;
                ctx.beginPath();
                ctx.moveTo(x - r, y); ctx.lineTo(x + r, y);
                ctx.moveTo(x, y - r); ctx.lineTo(x, y + r);
                ctx.stroke();
            }

            if (!terminou || rastro.length) requestAnimationFrame(quadro);
            else {
                ctx.clearRect(0, 0, W, H);
                setTimeout(viagem, sorteio(20000, 40000));
            }
        }
        requestAnimationFrame(quadro);
    }

    setTimeout(viagem, 5000);
})();