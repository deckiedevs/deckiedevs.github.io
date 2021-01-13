import Highway from '@dogstudio/highway';
import { gsap } from 'gsap';

class Fade extends Highway.Transition {
    in({from, to, done}){
        
        gsap.fromTo(to, 0.5, { left: '-100%', top: '50%'}, { left: '0%'})
        gsap.fromTo(to, 1, { height: '2vh'}, {delay: 0.5, height: '80vh', top: '20%', onComplete: function(){
                from.remove();
                done();
            }})
        gsap.fromTo(to.children[0], 2, { opacity: 0 }, { delay: 1.5, opacity: 1})
    }
    out({from, done}){
        done();
    }
};

export default Fade;