
const navBar = (function(){
    const wrapper = document.getElementById("nav-wrap");
    wrapper.addEventListener("mouseenter", (e)=>{
        if (e.target === wrapper){
            let popoutLength = (window.scrollY > 45)?45:window.scrollY;
            e.target.style.transform = `translate(0,${popoutLength}px)`;
        };
    });
    wrapper.addEventListener("mouseleave", (e)=>{
        if (e.target === wrapper){
            e.target.style.transform = "";
        };
    });
    document.addEventListener("scroll", (e)=>{
        wrapper.style.transform = "";
    });
    return{};
}());


// const wrapper = document.getElementById("nav-wrap");
// wrapper.addEventListener("mouseover", (e)=>{
//     e.target.classlist.add("nav-active");
//     console.log("class added");
// });