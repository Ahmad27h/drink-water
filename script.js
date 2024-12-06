

        let cups = document.querySelectorAll(".cups")
        let water = document.querySelector(".water")
        let bottle = document.querySelector(".bottle")
        let p = document.querySelector(".p")
        let p2 = document.querySelector(".p2")

        cups.forEach ( (ele,idx) => {
            ele.addEventListener("click", ()=> {
                if (ele.classList.contains("white") &&  !ele.nextElementSibling.classList.contains("white")) {
                    ele.classList.remove("white")
                    remove(idx-1)
                }
                else {

                    
                    remove(idx )
                    
                  
                }
            })
        } )


        function remove(idx) {
            
            cups.forEach((ele)=> {
                ele.classList.remove("white")
            })





              let height = (idx + 1) * 12.5
                    for ( let i = 0 ; i <= idx ; i++ ) {
                        cups[i].classList.add("white")
                    }
                    water.style.height = `${height}%`
                    p.innerHTML = `${height}%`
                    p2.innerHTML= `${100-height}%`
        }