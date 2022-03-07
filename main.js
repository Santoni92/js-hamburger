console.log('JS OK');   //per controllare che il file js sia linkato bene dall'html

const element = document.querySelector('.header-right > a');    /*memorizzo nella costante 'element' l'oggetto tag 'a' figlio
                                                                   diretto del div di classe'.header-right'*/

element.style.display = "block";    //una volta selezionato l'elemento di cui sopra gli cambio la proprietà display così da renderl ovisibile

const div = document.querySelector('.hamburger-menu');  //dichiaro fuori dalla funzione che segue perchè poi mi servirà anche nell'ultima funzione

/*una volta reso visibile il tag a gli associo un ascoltatore di evento ed l'evento nello specifico riguarda un click sul tag 
in questione.Al verificarsi di questo evento(cioè click sul tag 'a') avvio una funzione la quale mi memorizza nella costante di nome 'div'
l'oggetto div di classe .hamburger-menu ed una volta selezionato questo elemento gli va a cambiare la sua proprietà display così
da renderlo visibile.
In altre parole,per semplificare, al click del tag a (che ho dovuto rendere visibile modificandone la proprietà 
display impostandola ad block) presente nel div .header-right eseguo la funzione che mi va a modificare la proprietà diaplay 
del div .hamburger-menu che voglio visualizzare */


element.addEventListener('click',function(){
    div.style.display = "block";
    div.style.top = "70px"; /*per abbassare un po il div .hamburger-menu così da rendere comunque visibile l'header anche 
                              quando compare il div .hamburger-menu.Notare che nel file css l'altezza dell'header è impostata ad 70px ed ecco perchè ho usato questo valore*/
}
);

const a = document.querySelector('.hamburger-menu > a');
    a.addEventListener('click',function(){
    div.style.display = "none";
});





