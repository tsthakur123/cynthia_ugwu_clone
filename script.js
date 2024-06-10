const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;

function circleSkew(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener('mousemove', function(dets){
        clearTimeout(timeout)
        diffX = xprev - dets.clientX;
        diffY = yprev - dets.clientY;

        xprev = dets.clientX;
        yprev = dets.clientY;

        xscale = gsap.utils.clamp(.8, 1.2, diffX);
        yscale = gsap.utils.clamp(.8, 1.2, diffY);

        circleFollower(xscale, yscale);

        timeout = setTimeout(function(){
            document.querySelector('#circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
        }, 100);
    })
}

function circleFollower(xscale, yscale){
    window.addEventListener('mousemove', function(dets){
document.querySelector('#circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
})}

function animateHeroPage(){
    var tl = gsap.timeline();
    
    tl.
        from(".nav h4",{
            y: '100%',
            opacity: 0,
            duration: 1.5,
            ease: Expo.easeInOut
        })
        .from('.reveal', {
            y:'100%',
            opacity: 0,
            delay: -.5,
            duration: 1,
            ease: Power3.easeInOut,
            stagger: .2
        })
        .from('.reveal2', {
            y:'-100%',
            opacity: 0,
            delay:-.7,
            duration: 1,
            ease: Power3.easeInOut,
            stagger: .2
        })
        .from('.heroFooter', {
            opacity: 0,
            delay: -0.49,
            ease: Expo.easeInOut
        })
}


function scaleCircle(){
    document.querySelectorAll('.scale').forEach(function(elem){
        elem.addEventListener('mousemove', function(dets){
            var line = elem.querySelector('.line');
            

            gsap.set(line, {
                left: 0,
                width: 0,
            })

            gsap.to(line, {
                width: '100%',
                overwrite: 'all'
            })

    
        })
        elem.addEventListener('mouseleave', function(dets){
            var line = elem.querySelector('.line');

            gsap.to(line, {
                width: '0',
                left: '100%',
                overwrite: 'all'
            })
        })
    })

}

function imgRotate(){
    document.querySelectorAll('.txt').forEach(function(elem){

       var xprev = 0;
       var diffrot = 0;

        elem.addEventListener('mousemove', function(dets){
        
            var diff = dets.clientY - elem.getBoundingClientRect().top;

           diffrot = dets.clientX - xprev;
           xprev = dets.clientX

            gsap.to(elem.querySelector('img'), {
                opacity: 1,
                ease: Power3,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffrot*0.5)
            })
        })

        elem.addEventListener('mouseleave', function(dets){

            gsap.to(elem.querySelector('img'), {
                opacity: 0,
                ease: Power3,
                duration: .5
            })
        })
    })
}

imgRotate();
circleSkew();
circleFollower();
animateHeroPage();
scaleCircle();