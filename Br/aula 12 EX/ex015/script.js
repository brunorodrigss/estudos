function verificar (){
   let data = new Date()
   let ano = data.getFullYear()
   let formAno = document.getElementById('txtano')
   let res = document.querySelector('div#res')
   if (formAno.value.length == 0 || formAno.value > ano){
        window.alert('[erro] verifique os dados e tente novamente')
   } else {
        let formSex = document.getElementsByName('radsex')
        let idade = ano - Number(formAno.value)
        let genero=""
        if (formSex[0].checked){
            genero='Homem'
        } else if (formSex[1].checked){
            genero='mulher'
   }
   res.style.textAlign ='center'
   res.innerHTML = `Detectamos genero ${genero} com ${idade} anos.`
   

}
   



}