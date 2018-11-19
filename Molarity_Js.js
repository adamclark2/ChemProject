/*
The radio button to choose weather to calculate volume or molarity
was changed

This will update which filed is disabled
*/
function click_calc(){
    let calc_mol = document.getElementById("calc_mol");
    let calc_vol = document.getElementById("calc_vol");
    let mol2_in = document.getElementById("m2");
    let vol2_in = document.getElementById("v2");

    if(calc_mol.checked){
        mol2_in.disabled = true;
        vol2_in.disabled = false;
    }else{
        mol2_in.disabled = false;
        vol2_in.disabled = true;
    }
}

function clear_inputs(){
    let mol1_in = document.getElementById("m1");
    let vol1_in = document.getElementById("v1");
    let mol2_in = document.getElementById("m2");
    let vol2_in = document.getElementById("v2");

    mol1_in.value = '';
    mol2_in.value = '';
    vol1_in.value = '';
    vol2_in.value = '';
}

/*
One of the input fields was changed, we need to re-calculate the values
*/
function calc_modified(){
    let mol1_in = document.getElementById("m1");
    let vol1_in = document.getElementById("v1");
    let mol2_in = document.getElementById("m2");
    let vol2_in = document.getElementById("v2");

    let calc_mol = document.getElementById("calc_mol");
    let calc_vol = document.getElementById("calc_vol");

    if(!(calc_mol.checked || calc_vol.checked)){
        alert("Select a value to calculate");
        clear_inputs();
        return;
    }

    if(calc_mol.checked){
        mol2_in.value = (mol1_in.value * vol1_in.value) / vol2_in.value;
    }else{
        vol2_in.value = (mol1_in.value * vol1_in.value) / mol2_in.value;
    }

    if(Number(vol2_in.value) > Number(vol1_in.value)){
        beaker_fill_left = vol1_in.value/vol2_in.value;
        beaker_fill_right = 1;
    }else{
        beaker_fill_left = 1;
        beaker_fill_right = vol2_in.value/vol1_in.value;;
    }    
}