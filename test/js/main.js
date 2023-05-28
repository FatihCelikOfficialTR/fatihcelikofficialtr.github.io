function sistem(st,text,redir){
if(st=="ok"){
var ico = "success";
}else{
var ico = "error";
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: ico,
  title: text
}).then(function() {
window.location.assign(redir);
})


}

