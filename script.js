function copyToClipboard(str){
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

function copyAddress(){
  console.log("here")
  copyText = document.getElementById("address");
  copyText2 = document.getElementById("address2");
  copyToClipboard("0xa12c298F30a8f143eaB6bef26076dcC8C23f8C4c")
  function flash(item){
    function reset(item){
      item.style.color = "white"
      item.style.backgroundColor = "#0F0F0F"
    }
    item.style.backgroundColor = "white";
    item.style.color = "black"
    setTimeout(reset, 100, item);
  }
  
  document.execCommand("copy");
  flash(copyText);
  flash(copyText2);
}
document.getElementById("copy_address_button").addEventListener('click', copyAddress)
document.getElementById("copy_address_button2").addEventListener('click', copyAddress)



