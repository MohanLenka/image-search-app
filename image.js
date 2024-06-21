const key="GV4NIpKThiLsaOyEZbf7G7BlWlWUeofRVAtbyui11nU"
let input=document.querySelector("input")
let submit=document.querySelector(".submit")
let images=document.querySelector(".images")
let more=document.querySelector(".showmore")
let im=document.querySelector(".imge")
let form=document.querySelector("form")
const error=document.querySelector(".error")
const heading=document.querySelector(".heading")
let page=1
console.log(submit)
function getdata(){
    //console.log("fmhcvb ")
    if(page===1){
      images.innerHTML=""
      }
        let inputval=input.value
        const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputval}&client_id=${key}`
      fetch(url).then(response=>response.json())
        .then((data)=>{
           const{results}=data
          
           results.map((items)=>{
            //console.log(items)
            let div=document.createElement("div");
              div.classList.add("imge")
            let image=document.createElement("img")
            image.src=items.urls.small
            let p=document.createElement("p")
            p.innerText=items.slug;
            div.append(image)
            images.append(div)
            div.append(p)
           })
        })
        .catch(()=>{
          heading.style.display="none"
          error.style.display="block"
        })
        page++;
        if(page>1){
          more.style.display="block";
        }
       
}
submit.addEventListener("click",()=>{
  page=1;
  getdata();
}
)

more.addEventListener("click",()=>{
  getdata()
})