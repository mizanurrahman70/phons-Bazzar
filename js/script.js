const loadPhon=async (searchText)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data=await res.json();
    const phones=data.data
  displayPhon(phones)
}

const displayPhon=(phones)=>{

const mainContainer=document.getElementById('phon-container')
mainContainer.textContent=''
// show button more then 08
const show =document.getElementById('show-button') 
if(phones.length > 8){
   
    show.classList.remove('hidden')
}
else{
    show.classList.add('hidden')  
}

// display only shows 

  phones=phones.slice(0,8)


phones.forEach(phone => {
    const phonCard=document.createElement('div')
    phonCard.classList=(`card w-96 bg-base-100 shadow-xl`)
    phonCard.innerHTML=`
    <figure class="px-10 pt-10">
    <img src="${phone.image}" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.brand}</h2>
    <p>${phone.phone_name}</p>
    <p>666</p>
    <div class="card-actions">
      <button onclick=" modelShows('${phone.slug}')" class="btn btn-primary">Show detail</button>
    </div>
  </div>
    `

    mainContainer.appendChild(phonCard)
    sprinner(false)
});
}
// show phone deletels 
const showPhonDetels=()=>{
  
}
// model open 
const modelShows=async (id)=>{

// load single data 
const rest =await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
const data = await rest.json()
const phon =data.data
showDisplay(phon)
}
const showDisplay=(phone)=>{
  console.log(phone)
  my_modal_3.showModal()
  
  const divC =document.getElementById('dtl-conteinar');
  divC.textContent=""
  const div=document.createElement('div');
  div.innerHTML=`
  <img src="${phone.image}" alt="">
  <h3 class="font-bold text-lg">${phone.brand}</h3>
  <p>${phone.name}</p>
  <p>${phone.releaseDate}</p>
  
  `
  divC.appendChild(div)
  

  
}




// handle search 
const searchHandle=()=>{
    sprinner(true)
    const searchFiled= document.getElementById('search-filed');
    const searchText=searchFiled.value ;
    // console.log(searchText)
    loadPhon(searchText)
}
const sprinner=(isloading)=>{
            const sinner =document.getElementById('spiner')
           if(isloading){
            sinner.classList.remove('hidden')

           }
           else{
            sinner.classList.add('hidden')
           }
}

// handle show all 
loadPhon()