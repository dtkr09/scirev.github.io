const quiz = {
    "What is gravitational potential energy?": "The force of gravity on an object above the ground.",
    "What is the formula for gravitational potential energy (Ep)?": "Ep = mgh.",
    "What is kinetic energy?": "The energy of a moving object.",
    "What is the formula for kinetic energy (Ek)?": "Ek = 1/2 mv^2.",
    "What does the conservation of energy principle state?": "Energy conserved = Energy output.",
    "Why might kinetic energy (Ek) be less than gravitational potential energy (Ep)?": "Energy loss due to friction or air resistance.",
    "What is work in physics?": "Work is the energy transferred to an object over a distance.",
    "When is work considered negative?": "When a force is applied against the direction of an object's movement.",
    "Is work done if an object does not move?": "No, work is only done if there is movement.",
    "Give an example of negative work.": "Friction or air resistance.",
    "What is thermal (heat) energy?": "Thermal energy is the energy possessed by an object due to the motion of its particles.",
    "How does thermal energy relate to particle movement?": "An object with high thermal energy has fast-moving particles, and vice versa.",
    "What is temperature?": "Temperature is the measure of the amount of thermal energy.",
    "What is conduction?": "Conduction is the transfer of heat through direct contact of particles without moving the particles to a new location.",
    "In what state of matter does conduction primarily occur?": "Solids.",
    "What is an insulator?": "A material that resists the transfer of thermal energy.",
    "Give examples of common insulators.": "Air, plastics, wood, and gases.",
    "What is convection?": "Convection is the transfer of heat through the movement of fluid particles (liquids and gases).",
    "What happens to particles during convection?": "Particles gain kinetic energy, move faster, become less dense, and rise.",
    "What is radiation in terms of heat transfer?": "Radiation is the transfer of energy without particles, typically through infrared radiation.",
    "What is electricity?": "Electricity is a type of energy that can build up in one place or flow from one place to another.",
    "What are the two types of electricity?": "Static electricity and current electricity.",
    "What is current?": "The amount of charge that passes a certain point per second.",
    "What unit is current measured in?": "Amperes (amps), symbol 'A', measured with an ammeter.",
    "What is voltage?": "The force from an electrical power source that pushes charged electrons (current).",
    "What unit is voltage measured in?": "Volts, symbol 'V', measured with a voltmeter.",
    "What is electrical power?": "The measure of the rate at which energy is transferred in an electric circuit.",
    "What is the formula for electrical power (P)?": "P = VI.",
    "What is the formula for power in terms of energy transformed (P)?": "P = E/T.",
    "What is resistance?": "The quantity that describes how much electrical energy is restricted by a component.",
    "What is a series circuit?": "A circuit where all components are connected one after the other in a single path.",
    "How does current behave in a series circuit?": "Current does not change throughout the circuit; there is only one path for current to take.",
    "How does voltage behave in a series circuit?": "Voltage is divided (shared) between each component.",
    "What happens to resistance when resistors are added in series?": "The total resistance increases; R_total = R1 + R2 + R3...",
    "What is a parallel circuit?": "A circuit where components are connected in parallel, offering multiple paths for current to take.",
    "How does current behave in a parallel circuit?": "Current splits between each wire; there are multiple paths for the current.",
    "How does voltage behave in a parallel circuit?": "Voltage remains the same across each parallel branch.",
    "What happens to resistance when resistors are added in parallel?": "The total resistance decreases; R_total = 1/(1/R1 + 1/R2 + 1/R3...).",
    "What determines the brightness of a lamp in a circuit?": "The rate at which energy is converted to light, also known as power.",
    "What causes a bulb to burn out in a circuit?": "Exceeding the voltage for which the lamp is designed causes the filament to melt.",
    "What does 'shorting' a lamp in a parallel circuit mean?": "Creating a parallel pathway that allows current to bypass the lamp, preventing it from glowing.",
    "What is specific heat capacity?": "The amount of heat energy needed to change the temperature of 1 kg of a substance by 1°C.",
    "What is the formula for specific heat capacity?": "Q = mcΔT.",
    "What is latent heat?": "The amount of heat energy required to change the state of a substance without changing its temperature.",
    "What is the formula for latent heat?": "Q = mL.",
    "How does particle spacing affect conductivity in materials?": "Materials with closely packed particles (like metals) conduct heat well, while those with widely spaced particles (like gases) act as insulators."
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
