const container=document.querySelector('.container')
let newTitle = document.createElement('h3');
 newTitle.innerText = 'calculer une TVA';

 //newdiv.appendChild(newTitle);




let Mantant_hors_taxes=document.createElement('td')
let Mantant_TVA=document.createElement('td')
let Mantant_TTC=document.createElement('td')


Mantant_hors_taxes.innerText="Mantant hors taxes";
Mantant_TVA.innerText='Mantant TVA';
Mantant_TTC.innerText='Mantant TTC';

container.appendChild(newTitle)
container.appendChild(Mantant_hors_taxes)
container.appendChild(Mantant_TVA)
container.appendChild(Mantant_TTC)


let prix_saisi=('number')
taux_tva=[5,7,8,10,19,20];

	


let form=document.createElement('form')
let hors_taxes =document.createElement('input')
 const addition =document.createElement('span')
let tva=document.createElement('input')
const valeur=document.createElement('span')
let ttc=document.createElement('input')


let prix_hors_taxes=document.createTextNode(prix_saisi)
const additionner=document.createTextNode('+')
let prix_tva=document.createTextNode(prix_hors_taxes*taux_tva[1])
const total=document.createTextNode('=')
let prix_ttc=document.createTextNode( prix_hors_taxes+prix_tva)


hors_taxes.appendChild(prix_hors_taxes)
 addition.appendChild(additionner)
tva.appendChild(prix_tva)
valeur.appendChild(total)
ttc.appendChild(prix_ttc)


form.appendChild(hors_taxes)
form.appendChild(additionner)
form.appendChild(tva)
form.appendChild(valeur)
form.appendChild(ttc)
//const container=document.querySelector('.container')
container.appendChild(form)



//troisieme partie
let label1=document.createElement('label')
let input1= document.createElement('input')

taux_de_tva=document.createTextNode('taux TVA')
le_taux_choisi=document.createTextNode(taux_tva[0])



label1.appendChild(taux_de_tva)
input1.appendChild(le_taux_choisi)


container.appendChild(label1)
container.appendChild(input1)
 

 //QUATRIEME PARTIE


let form2=document.createElement("form")
let cases=document.createElement('input')
 let tableaux=[20,19,10,8,7,5]
let x=0;

let taux_tva_case=0;
for(x=0;x<tableaux.length;x++){

taux_tva_case=document.createTextNode(tableaux[x])

console.log(taux_tva_case)
}
cases.appendChild(taux_tva_case)
form2.appendChild(cases)
container.append(form2);
console.log(form2)


//Cinquieme partie

/*let mypara1=createElement('p')
let mypara2=createElement('p')
let mypara3=createElement('p')
Mantant_Hors_Taxes.document.createTextNode(prix_saisi)
Mantant_TVA.document.createTextNode(prix_tva)
Mantant_TTC.document.createTextNode(prix_ttc)

mypara1.appendChild(Mantant_Hors_Taxes)
mypara2.appendChild(Mantant_TVA)
mypara3.appendChild(Mantant_TTC)
div.appendChild(mypara1)*/