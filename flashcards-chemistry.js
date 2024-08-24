const quiz = {
    "What are ionic compounds made of?": "Cations (positive ions) and anions (negative ions).",
    "What type of elements typically form ionic compounds?": "A metal and a non-metal.",
    "Describe the structure of an ionic compound.": "A 3D lattice where each positive ion is surrounded by negative ions, and vice versa.",
    "Why do ionic compounds have high melting and boiling points?": "Due to strong electrostatic forces of attraction between the ions.",
    "In what state are all ionic substances at room temperature?": "Solid.",
    "When can ionic substances conduct electricity?": "When the ions are free to move, such as when dissolved in water or melted.",
    "Why are many ionic substances soluble in water?": "Because water can separate the ions, allowing them to move freely.",
    "Why are ionic substances hard?": "Because of the closely packed 3D lattice structure.",
    "Why are ionic substances brittle?": "A large enough force can cause ions to shift and repel against same-charged ions, causing the material to break.",
    "What happens to the ions in an ionic substance when they are dissolved or melted?": "The ions are free to move, allowing the substance to conduct electricity.",
    "What is the structure of metallic substances?": "Positively charged metal ions (cations) surrounded by a sea of delocalized electrons.",
    "How do metallic substances conduct electricity?": "Delocalized electrons can carry current and flow easily through the metal.",
    "Why do metals have high melting and boiling points?": "Due to strong attractions between particles in the metal lattice.",
    "What property allows metals to be malleable and ductile?": "The strong but not rigid attractive forces allow layers to slide over each other.",
    "Why do metals conduct heat well?": "Tightly packed particles allow for fast transfer of heat energy.",
    "What is an alloy?": "A mixture of two or more elements, where at least one is a metal, with properties different from the constituent metals.",
    "What are smart alloys?": "Alloys that have unusual properties.",
    "What is corrosion?": "The process of metal breaking down.",
    "How does the density of metals relate to their structure?": "The ordered lattice structure with atoms fitting into gaps between layers contributes to high density.",
    "What makes metals good conductors of electricity and heat?": "The presence of free-moving, delocalized electrons.",
    "What are molecular substances made of?": "Small particles called molecules, made up of atoms.",
    "What types of molecular structures exist?": "Diatomic (two atoms), Polyatomic (more than two atoms), and Macromolecules (many hundreds of atoms).",
    "What kind of bonds hold the atoms within a molecule together?": "Covalent bonds.",
    "What are intermolecular forces?": "Weak attractive forces that occur between molecules.",
    "Why do molecular substances generally have low melting and boiling points?": "Because intermolecular forces are generally weak.",
    "What determines the solubility of molecular substances?": "Polar substances dissolve in polar solvents, and non-polar substances dissolve in non-polar solvents.",
    "Why don't molecular substances conduct electricity?": "Because they are made of uncharged molecules.",
    "What are macromolecules?": "Large molecules formed by polymerization, consisting of many small molecules (monomers) joined together.",
    "What are allotropes?": "Different forms of the same element in the same physical state, e.g., graphite and diamond.",
    "Why are most polymers insoluble?": "Because intermolecular bonds between large polymer molecules are too strong for a solvent to overcome.",
    "What is hardness?": "The strength of the bonds between the atoms holding a substance together; how well an object holds its shape under pressure.",
    "What is melting point?": "The temperature at which a substance changes from a solid to a liquid.",
    "What is thermal conductivity?": "The ability of a substance to transfer heat through the collision of particles.",
    "What is electrical conductivity?": "The ability of a substance to conduct electricity, requiring free-moving charged particles.",
    "What is density?": "The quantity of mass per unit volume of a substance.",
    "What is solubility?": "The ability of a substance to dissolve in a solvent.",
    "What is malleability?": "The ability of a substance to be shaped or molded without breaking.",
    "What is ductility?": "The ability of a substance to be stretched or drawn out into a wire without breaking.",
    "What is an alloy?": "A mixture of two or more elements, one or more of which is a metal, with unique properties.",
    "What is corrosion?": "The gradual destruction of materials, usually metals, by chemical reaction with their environment."
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
