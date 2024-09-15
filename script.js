document.querySelector('.crose').style.display = 'none';
document.querySelector('.hemberg').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hamb').style.display = 'inline';
        document.querySelector('.crose').style.display = 'none';
        
    }else{
        document.querySelector('.hamb').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.crose').style.display = 'inline';
         }, 300);
      }
})