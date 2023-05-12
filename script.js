const height=document.querySelector('#h')
const weight=document.querySelector('#w')
const button=document.querySelector('button')
const result=document.querySelector('.result')


button.addEventListener('click',()=>{

  let height1=(+height.value/100)*(+height.value/100)
  let weight1=+weight.value
  console.log(height1,weight1)

  result.textContent=(weight1/height1).toFixed(1)

})





































