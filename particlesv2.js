var particles;
var max_particles = 20;

var interval = null;
var eCanvasLeft;
var eCanvasRight;

var rightFill = 1;
var leftFill = 1;

// Init the system.
function particle_init(canvas_left, canvas_right){
    if(interval != null){
        clearInterval(interval);
    }
    eCanvasLeft = document.getElementById(canvas_left);
    eCanvasRight = document.getElementById(canvas_right);

    particles = new Array;
    particles[0] = new Array;
    particles[1] = new Array;
    for(var i = 0; i < max_particles;i++){
        particles[0][i] = new Object;
        particles[1][i] = new Object;

        // TODO incorporate left
        let x = (Math.random() * eCanvasRight.width);
        let y = (Math.random() * eCanvasRight.width);
        let x_accel = (Math.random() * 25);
        let y_accel = (Math.random() * 25);
        
        particles[0][i].x = x;
        particles[0][i].y = y;
        particles[0][i].x_accel = x_accel;
        particles[0][i].y_accel = y_accel;

        particles[1][i].x = x;
        particles[1][i].y = y;
        particles[1][i].x_accel = x_accel;
        particles[1][i].y_accel = y_accel;
    }
}

function startParticleSystem(){
    interval = setInterval(
        () => do_particle(eCanvasLeft, eCanvasRight),35
    )
}

// Render a particle set onto a canvas using the drawing context.
// This also updates the position using accelleration 
function renderParticles(particleSet,ctex,canvas){
    ctex.fillStyle = "rgba(0,0,255,1)";

    for(var i = 0; i < particleSet.length;i++){
        particleSet[i].x += particleSet[i].x_accel;
        particleSet[i].y += particleSet[i].y_accel;
        if(particleSet[i].x > canvas.width || particleSet[i].x < 20){
            particleSet[i].x_accel = -particleSet[i].x_accel;
            particleSet[i].x += particleSet[i].x_accel * 2;
        }

        if(particleSet[i].y > canvas.width || particleSet[i].y < 0){
            particleSet[i].y_accel = -particleSet[i].y_accel;
            particleSet[i].y += particleSet[i].y_accel * 2;
        }

        ctex.fillRect(particleSet[i].x,particleSet[i].y,20,20);
    }
}

// The function called during the render interval
function do_particle(eCanvasLeft, eCanvasRight){
    let ctex_l = eCanvasLeft.getContext("2d");
    let ctex_r = eCanvasRight.getContext("2d");

    // Clean left & right
    ctex_l.fillStyle = "rgba(255,255,255,1)";
    ctex_r.fillStyle = "rgba(255,255,255,1)";
    ctex_l.fillRect(0,0,eCanvasLeft.width,eCanvasLeft.height);
    ctex_r.fillRect(0,0,eCanvasRight.width,eCanvasRight.height);

    // Add 'atoms' to beaker
    renderParticles(particles[0], ctex_l, eCanvasLeft);
    renderParticles(particles[1], ctex_r, eCanvasRight);

    // Add the 'water' line to the beaker
    ctex_l.fillStyle = "rgba(0,0,255,.25)";
    ctex_r.fillStyle = "rgba(0,0,255,.25)";
    ctex_l.fillRect(0,eCanvasLeft.height * (1 - leftFill),eCanvasLeft.width,eCanvasLeft.height);
    ctex_r.fillRect(0,eCanvasRight.height * (1 - rightFill),eCanvasRight.width,eCanvasRight.height);

    // Add white bar to top
    ctex_l.fillStyle = "rgba(255,255,255,1)";
    ctex_r.fillStyle = "rgba(255,255,255,1)";
    ctex_l.fillRect(0,0,eCanvasLeft.width,eCanvasLeft.height * (1 - leftFill));
    ctex_r.fillRect(0,0,eCanvasRight.width,eCanvasRight.height * (1 - rightFill));
}