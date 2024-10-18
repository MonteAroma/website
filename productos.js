document.querySelector('#conjunto1').addEventListener('mouseover', function() {
    document.querySelector('.sectionAromatica').style.display = 'block';
    document.querySelector('.sectionAromatica').style.background = 'rgba(32, 75, 35, 0.4)';
});

document.querySelector('#conjunto1').addEventListener('mouseout', function() {
    document.querySelector('.sectionAromatica').style.display = 'none';
});

// Section Condimentos 

document.querySelector('#conjunto2').addEventListener('mouseover', function() {
    document.querySelector('.sectionCondimentos').style.display = 'block';
    document.querySelector('.sectionCondimentos').style.background = 'rgba(32, 75, 35, 0.4)';
});

document.querySelector('#conjunto2').addEventListener('mouseout', function() {
    document.querySelector('.sectionCondimentos').style.display = 'none';
});

// Section Aceites Esenciales

document.querySelector('#conjunto3').addEventListener('mouseover', function() {
    document.querySelector('.sectionAceitesE').style.display = 'block';
    document.querySelector('.sectionAceitesE').style.background = 'rgba(32, 75, 35, 0.4)';
});

document.querySelector('#conjunto3').addEventListener('mouseout', function() {
    document.querySelector('.sectionAceitesE').style.display = 'none';
});

// Section Aceites Macerados

document.querySelector('#conjunto4').addEventListener('mouseover', function() {
    document.querySelector('.sectionAceitesM').style.display = 'block';
    document.querySelector('.sectionAceitesM').style.background = 'rgba(32, 75, 35, 0.4)';
});

document.querySelector('#conjunto4').addEventListener('mouseout', function() {
    document.querySelector('.sectionAceitesM').style.display = 'none';
});


// Modal Aromaticas

var abrir = document.querySelector('#BAromaticas'); 
var modalAromaticas = document.querySelector('#modal-Aromaticas');

abrir.addEventListener('click',()=> {

    modalAromaticas.style.display = 'block';

});


// Modal Condimentos

var abrirC = document.querySelector('#BCondimentos'); 
var modalCondimentos = document.querySelector('#modal-Condimentos');

abrirC.addEventListener('click',()=> {

    modalCondimentos.style.display = 'block';

});

// Modal Aceites Esenciales

var abrirAesenciales = document.querySelector('#BAEsenciales');
var modalAEsenciales = document.querySelector('#modal-AEsenciales')

abrirAesenciales.addEventListener('click',()=> {

    modalAEsenciales.style.display = 'block';

});

// Modal Aceites Macerados

var abrirAmacerados = document.querySelector('#BAMacerados');
var modalAMacerados = document.querySelector('#modal-AMacerados')

abrirAmacerados.addEventListener('click',()=> {

    modalAMacerados.style.display = 'block';
    
});