
const home_page = document.querySelector(".home_page");


const observer = new IntersectionObserver(
    (entries) => {
    
        const ent = entries[0];
        console.log(ent);
   
 },
{    
    root: null,
    rootMargin: "",
    threshold: 0,
});

 
observer.observe(home_page);

