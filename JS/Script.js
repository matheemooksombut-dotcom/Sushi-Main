document.querySelector(".hamberger-bar").addEventListener('click',() =>{
    document.querySelector('.menu').classList.toggle('show');
})





export function pushminus(){

    
    const form = document.getElementById("fromid")
    const basePrice = 120 
    const qtyinput = document.querySelector(".style-input")
    const priceinput = document.querySelector(".style-input")


   form.querySelector('.btn-qty.plus').addEventListener('click', () => {
    
    let qty = parseInt(qtyinput.value);
    if (qty < 99) {
      qty++;
      qtyinput.value = qty;
      priceinput.value = qty * basePrice; // คำนวณราคาใหม่
    }
  });

  // ปุ่ม -
  form.querySelector('.btn-qty.minus').addEventListener('click', () => {
    let qty = parseInt(qtyinput.value);
    if (qty > 1) {
      qty--;
      qtyinput.value = qty;
      priceinput.value = qty * basePrice; // คำนวณราคาใหม่
    }
  });
  

}