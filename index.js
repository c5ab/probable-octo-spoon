const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
if(event.code === "Enter") {
search()
}

});


function search() {
const input = searchInput.value;

window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enNZ948NZ948&oq=" + input + "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8"
}
document.addEventListener('keydown',e=>{

if(e.key.toLowerCase()=='l'){
  window.location.href = 'boot.html'
}
})

document.addEventListener('keydown',e=>{

if(e.key.toLowerCase()=='w'){
  Swal.fire({
                  icon: 'question',
                  title: 'Do you Want do Shutdown...',
                  text: '',
                  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes',
                  footer: 'Automatic shutdown in 15 seconds'
  }) 


function hello() {

                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                  footer: 'Automatic shutdown in 15 seconds'
                })
                setTimeout(() => {
                  window.location.href = 'shut.html'
                }, 14000);

}
function rtxon(){
  window.location.href = 'settings.html'
}
}
}

