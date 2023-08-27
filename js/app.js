// coding open input for edit username
document.querySelector(".openiput").addEventListener("click",function(){
    console.log("hello world")
    document.querySelector(".edituserName-wrapper__content").classList.add("edituserName-wrapper__content--active")

})
// end coding open input for edit username




// coding close input for edit username
document.querySelector(".edituserName-wrapper-icon").addEventListener("click",function(){
    console.log("hello world")
    document.querySelector(".edituserName-wrapper__content").classList.remove("edituserName-wrapper__content--active")

})
// end coding close input for edit username


// coding open modals
let modalsBtn = document.querySelectorAll(".modals-btn")
modalsBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        console.log("hello")
        document.querySelector(".modal-wrapper").classList.add("modal-wrapper--acitve")
        if(document.querySelector(".modal-box--active")){
            document.querySelector(".modal-box--active").classList.remove("modal-box--active")
        }
         document.querySelector(`.${btn.getAttribute("modaltype")}`).classList.add("modal-box--active") 
    })
})
document.querySelector(".modal-wrapper").addEventListener("click",e=>{
    if(e.target ==  document.querySelector(".modal-wrapper")){
        document.querySelector(".modal-wrapper").classList.remove("modal-wrapper--acitve")

    }
})
// end coding open modals



// coding open setting
let open__setting = document.querySelector(".seetingBoxWrapper")
let right_bar = document.querySelector(".right-box__clientInfo")
let setting_bar = document.querySelector(".setting-box")
let active_class = "active-clientBox"
let close__settings = document.querySelector(".close-setting")
open__setting.addEventListener("click",()=>{
    right_bar.classList.remove(active_class)
    setting_bar.classList.add(active_class)
    open__setting.classList.add("active-opensetting")
})
close__settings.addEventListener("click",()=>{
    right_bar.classList.add(active_class)
    setting_bar.classList.remove(active_class)
    open__setting.classList.remove("active-opensetting")
})