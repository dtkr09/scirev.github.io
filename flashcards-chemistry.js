const quiz = {
    "What is an alloy?": "A mixture of two or more elements, one of which is a metal.",
    "Describe the structure of an alloy.": "It has a regular structure of a metal but with different-sized atoms breaking up the regular arrangement.",
    "What two elements make up bronze, and what are its properties?": "Copper and tin; unreactive, soft, very malleable/ductile, expensive.",
    "What elements make up brass, and what unique properties does it have?": "Copper and zinc; unreactive, antibacterial, very malleable/ductile (more so than bronze).",
    "What are the main components of steel and its primary properties?": "Iron and carbon; high tensile strength and low cost.",
    "Name the elements in stainless steel and its notable characteristics.": "Iron, carbon, and chromium; unreactive, durable, high tensile strength.",
    "What elements make up duralumin and what are its key properties?": "Aluminum and copper; high strength, lightweight, easily malleable/ductile.",
    "Define metal and list some key properties.": "A material that is hard, shiny, malleable, fusible, and ductile.",
    "Describe the structure of metals.": "Metals have a non-directional lattice structure with cations surrounded by a sea of delocalized electrons, holding the structure together.",
    "Name five general properties of metals.": "High melting and boiling points, malleable, ductile, high electrical and thermal conductivity, lustrous, high tensile strength.",
    "Define an ionic compound.": "A compound made of ions.",
    "Describe the structure of an ionic compound.": "It has a tightly packed directional lattice where positive ions are surrounded by negative ions and vice versa.",
    "List three properties of ionic compounds.": "Insoluble, brittle, high melting and boiling points, poor conductivity.",
    "What is a polymer?": "A substance with a molecular structure primarily made up of repeating molecules.",
    "Describe the structure of polymers.": "Long chains of molecules, each with full valence shells.",
    "What are some common properties of polymers?": "Tensile strength, durability, viscoelasticity, reactivity, melting point, conductivity.",
    "Define hardness.": "The strength of the bonds between atoms, or how well an object holds its shape under pressure.",
    "What is melting point?": "The temperature at which a substance changes from solid to liquid, determined by the strength of atomic forces.",
    "What is thermal conductivity?": "The transfer of heat through particles moving and colliding with each other.",
    "Describe electrical conductivity.": "The ability of a material to conduct electricity, requiring free-moving charged particles.",
    "What is density?": "The quantity of mass per unit volume.",
    "Define solubility.": "The ability of a substance to dissolve in a solvent.",
    "What is malleability?": "The ability of a material to be shaped and molded without breaking.",
    "What does ductile mean?": "The ability of a material to be stretched into a wire without breaking.",
    "Define tensile strength.": "The resistance of a material to breaking under tension."
};
const slide_show_container = document.querySelector('.slideshow-container');

for (const key in quiz) {
    // creation of divs to display card
    const card = document.createElement('div');
    const card_inner = document.createElement('div');
    const card_front = document.createElement('div');
    const card_back = document.createElement('div');
    const slide = document.createElement('div')
    
    // give divs classes
    card.classList.add('card');
    card_inner.classList.add('card-inner');
    card_front.classList.add('card-front');
    card_back.classList.add('card-back');
    slide.classList.add('mySlides')

    // creation of question
    const card_question = document.createElement('h2');
    card_question.textContent = key;
    
    
    // creation of answer
    const card_answer = document.createElement('h2');
    card_answer.textContent = quiz[key];
    

    // adding everything together
    card_front.appendChild(card_question);
    card_back.appendChild(card_answer);
    card_inner.appendChild(card_front);
    card_inner.appendChild(card_back);
    card.appendChild(card_inner);
    slide.appendChild(card);
    slide_show_container.appendChild(slide);

    

    // flip the cards on click
    card_inner.addEventListener('click', function() {
        card_inner.classList.toggle('flip-card');
    });
}
