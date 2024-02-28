const loadPhon=async (searchText)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data=await res.json();
    const phones=data.data
  displayPhon(phones)
}

const displayPhon=(phones)=>{

const mainContainer=document.getElementById('phon-container')
mainContainer.textContent=''
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
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
    `
    mainContainer.appendChild(phonCard)
});
}
// handle search 
const searchHandle=()=>{
    const searchFiled= document.getElementById('search-filed');
    const searchText=searchFiled.value ;
    // console.log(searchText)
    loadPhon(searchText)
}
