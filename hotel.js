function save(){
 document.getElementById('f2').addEventListener('submit', function(event) {
      event.preventDefault();
      calculateField();
    });

function calculateField() {
  const TD = parseInt(document.getElementById('TD').value);
  const TP = parseInt(document.getElementById('TP').value);
  const RT = document.getElementById('RT').value;
  const AME= document.getElementById('AME').value;
  const AP = parseInt(document.getElementById('AP').value);

  const roomRate = RT === 'Deluxe Room' ? 4000 : 2500;
  const DD = AME === 'AC' ? 1000 : 300;

  const TRC = roomRate * TD;
  const TAC = DD * TD;
  const TC1 = TRC + TAC;
  if(TP>2)
  {
    balance=(TC1-AP)+((TP-1)*1000);
  }
  else
  {
   const balance = TC1 - AP;
  }
  document.getElementById('TRC').value = TRC;
  document.getElementById('TAC').value = TAC;
  document.getElementById('TC1').value = TC1;
  document.getElementById('balance').value = balance;
}
}