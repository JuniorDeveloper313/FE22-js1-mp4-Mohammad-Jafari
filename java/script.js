const MJ3Animation = {
    targets: '#player3 h1',
    keyframes: [
        { translateY: '0px', translateX: '0px', color: `hsl(0, 100%, 50%)`, filter: 'drop-shadow(0 0 20px #fff)' },
    ],
    delay: anime.stagger(2000),
    direction: 'alternate',
    easing: 'easeInOutSine',
    duration: (2000),
    loop: 1,
    autoplay: false,
    scale: 1.5,
    padding: '15px',
    margin: '50px',
    fontFamily: 'Georgia',

}
const MJ3 = anime(MJ3Animation);
const MJ2Animation = {
    targets: '#player2 h1',
    keyframes: [
        { translateY: '0px', translateX: '0px', color: `hsl(0, 100%, 50%)`, filter: 'drop-shadow(0 0 20px #fff)' },


    ],
    delay: anime.stagger(400),
    direction: 'alternate',
    easing: 'easeInOutSine',
    duration: (1000),
    loop: 1,
    autoplay: false,
    scale: 1.5,
    padding: '15px',
    margin: '10px',
    fontFamily: 'Georgia',
    complete: MJ3.play

}
const MJ2 = anime(MJ2Animation);


const MJ1Animation = {
    targets: '#player1 h1',
    keyframes: [

        { translateY: '0px', translateX: '0px', color: `hsl(0, 100%, 50%)`, filter: 'drop-shadow(0 0 20px #fff)' },
    ],
    delay: anime.stagger(500),
    direction: 'alternate',
    easing: 'easeInOutSine',
    duration: (1000),
    autoplay: false,
    scale: 1.5,
    padding: '10px',
    margin: '10px',
    fontFamily: 'Georgia',
    complete: MJ2.play

}
const MJ1 = anime(MJ1Animation);

const MJAnimation = {
    targets: '#player h1',
    keyframes: [
        { translateY: '0px', translateX: '0px', color: `hsl(0, 0%, 7%)` },

        { translateY: '-100vh', translateX: '0px', color: `hsl(0, 0%, 7%)` },

        { translateY: '0px', translateX: '0px', color: `hsl(0, 0%, 7%)` },

        { translateY: '0px', translateX: '0px', color: `hsl(0, 100%, 50%)`, filter: 'drop-shadow(0 0 20px #fff)' },
        { translateY: '0px', translateX: '0px' }

    ],
    delay: anime.stagger(400),
    direction: 'alternate',
    easing: 'easeInOutSine',
    duration: (1000),
    autoplay: false,
    scale: 1.5,
    padding: '10px',
    margin: '10px',
    fontFamily: 'Georgia',
    complete: MJ1.play


}
const MJ = anime(MJAnimation);



const playbtn = document.querySelector('#play');
const pausebtn = document.querySelector('#Pause');
const stopbtn = document.querySelector('#stop');

playbtn.addEventListener('click', function () {
    MJ.play();


});
stopbtn.addEventListener('click', function () {
    MJ.restart();
    MJ.pause();
    MJ1.restart();
    MJ1.pause();
    MJ2.restart();
    MJ2.pause();
    MJ3.restart();
    MJ3.pause();
})
