function clearBtnActive(){
    var b = document.getElementById('btnEqual')
    b.classList.remove('active');

    b = document.getElementById('btnEqualMolDifVol')
    b.classList.remove('active');

    b = document.getElementById('btnEqualVolDifMol')
    b.classList.remove('active');
}

function setActive(btn_elem){
    btn_elem.classList.add('active');
}

function btnEqual(){
    clearBtnActive();
    setActive(document.getElementById('btnEqual'));

    particle_init('p_left', 'p_right');
    leftFill = 1;
    rightFill = 1;
    startParticleSystem();
}

function btnEqualMolDifVol(){
    clearBtnActive();
    setActive(document.getElementById('btnEqualMolDifVol'));

    particle_init('p_left', 'p_right');
    rightFill = .5;

    particles[1] = new Array();
    for(var i = 0; i < 10;i++){
        particles[1][i] = new Object;

        particles[1][i].x = particles[0][i].x;
        particles[1][i].y = particles[0][i].y;
        particles[1][i].x_accel = particles[0][i].x_accel;
        particles[1][i].y_accel = particles[0][i].y_accel;
    }
    startParticleSystem();
}

function btnEqualVolDifMol(){
    clearBtnActive();
    setActive(document.getElementById('btnEqualVolDifMol'));

    particle_init('p_left', 'p_right');
    rightFill = 1;

    particles[1] = new Array();
    for(var i = 0; i < 5;i++){
        particles[1][i] = new Object;

        particles[1][i].x = particles[0][i].x;
        particles[1][i].y = particles[0][i].y;
        particles[1][i].x_accel = particles[0][i].x_accel;
        particles[1][i].y_accel = particles[0][i].y_accel;
    }
    startParticleSystem();
}