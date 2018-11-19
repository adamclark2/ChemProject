var particles;
var max_particles = 20;

function particle_init(canvas_name){
    let can = document.getElementById(canvas_name);

    particles = new Array;
    for(var i = 0; i < max_particles;i++){
        particles[i] = new Object;
        particles[i].x = (Math.random() * can.width);
        particles[i].y = (Math.random() * can.height);
        particles[i].x_accel = (Math.random() * 20.0) - 10;
        particles[i].y_accel = (Math.random() * 20.0) - 10;
        console.log(particles.x + " " + particles.y);
    }

    setInterval(
        () => do_particle(can),35
    )
}

function do_particle(canvas){
    let ctex = canvas.getContext("2d");
    ctex.fillStyle = "rgba(255,255,255,1)";
    ctex.fillRect(0,0,canvas.width,canvas.height);
    ctex.fillStyle = "rgba(0,0,255,1)";
    for(var i = 0; i < max_particles;i++){
        particles[i].x += particles[i].x_accel;
        particles[i].y += particles[i].y_accel;
        if(particles[i].x > canvas.width || particles[i].x < 0){
            particles[i].x_accel = -particles[i].x_accel;
        }
        if(particles[i].y > canvas.width || particles[i].y < 0){
            particles[i].y_accel = -particles[i].y_accel;
        }
        ctex.fillRect(particles[i].x,particles[i].y,20,20);
    }

    ctex.fillStyle = "rgba(0,0,255,0.5)";
    ctex.fillRect(0,canvas.height - (canvas.height * beaker_fill_left),canvas.width/2, canvas.height);
    ctex.fillRect(canvas.width/2,canvas.height - (canvas.height * beaker_fill_right),canvas.width/2, canvas.height);
    ctex.fillStyle = "rgba(255,255,255,1)";
    ctex.fillRect(canvas.width/2 - 50,0,100,canvas.height);
}