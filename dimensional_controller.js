var conversions = [
    {from:"ft", to: "in", scalar: 12.0, type: "len"},
    {from:"m", to: "cm", scalar: 100.0, type: "len"},
    {from:"in", to: "cm", scalar: 2.54, type: "len"},
    {from:"yard", to: "ft", scalar: 3.0, type: "len"},
    {from:"mole of Hydrogen", to: "g of Hydrogen", scalar: 1.008, type: "chem"},
    {from:"mole of Na", to: "g of Na", scalar: 22.99, type: "chem"},
    {from:"mole of He", to: "g of He", scalar: 4.0026, type: "chem"}
];

// The type of question of the last one
var last = 'chem';


function btnRandom(){
    var problem = conversions[Number(Math.floor(Math.random() * conversions.length)) % conversions.length];
    for(var i = 0;problem.type == last && i < 1000;i++){
        problem = conversions[Number(Math.floor(Math.random() * conversions.length)) % conversions.length];
    }
    last = problem.type;
    var num = Math.floor(Math.random() * 100);
    var ans = num * problem.scalar;

    document.getElementById('question').innerText = "";
    document.getElementById('question').innerText = "How many " + problem.to + " are there in " + num + " " + problem.from + "?";
    document.getElementById('question').innerText += "$$ 1 \\text{ " + problem.from + "} = " + problem.scalar + " \\text{ " + problem.to + "} $$";

    document.getElementById('conversion_factor').innerText = "$${" + problem.scalar + " \\text{ " + problem.to + "} \\over 1 " + " \\text{ " + problem.from + "}}$$"
    document.getElementById('fraction_form').innerText = "$$ { " + num + " \\text{ " + problem.from + "} \\over 1} $$"

    document.getElementById('multiply').innerText = "$$ { " + num + " \\text{ " + problem.from + "} \\over 1} \\times " + "{" + problem.scalar + "\\text{ " + problem.to + "} \\over 1 " + " \\text{ " + problem.from + "}} = " + ans + "$$"
    document.getElementById('cancel').innerText = "$$ { " + num + " \\cancel{\\text{ " + problem.from + "}} \\over 1} \\times " + "{" + problem.scalar + "\\text{ " + problem.to + "} \\over 1 " + " \\cancel{\\text{ " + problem.from + "}}} = " + ans + "$$"
    document.getElementById('ans').innerText = "$$" + ans + " \\text{ " + problem.to + "}$$";

    document.getElementById('answer').hidden = true;
    document.getElementById('btn_answer').hidden = false;
    MathJax.Hub.Typeset();
}

function btnAnswer(){
    b = document.getElementById('btn_answer');
    document.getElementById('answer').hidden = false;
    MathJax.Hub.Typeset();
}