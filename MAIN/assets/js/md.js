const check_if_integer = ( el = "") => {


    var a = el.match('(^[0-9]+)$')
    if(a == null){return false}
    
    a = el.match("\n|[ ]")
    if(a != null){return false}

return true
}


const check_if_integer_array = () => {
// To be added
// So far, i wasn't able to find a way to use arrays or lists as parameters for any sort of javascript function 
}



const calc_congruency_mk1 = (el0, el1, x) => {

    const d1 = el0 % x 
    const d2 = el1 % x


    if(d1 == d2){

        return {
                el0_c: `${el0} % ${x} = ${d1}`,
                el0_r: `${d1}`,

                el1_c: `${el1} % ${x} = ${d2}`,
                el1_r: `${d2}`,
                
                m: `${d1} = ${d2}`,
                r: true
            }

    } 
    else {

        return {
            el0_c: `${el0} % ${x} = ${d1}`,
            el0_r: `${d1}`,

            el1_c: `${el1} % ${x} = ${d2}`,
            el1_r: `${d2}`,
        
            m: `${d1} ≠ ${d2}`,
            r: false
            }

    }


}



const congruency_main = (i_n1,i_n2,i_mod, answer_main, answer_calc1, anwwer_calc2) => {

    const n1 = document.getElementById(i_n1).textContent
    const n2 = document.getElementById(i_n2).textContent
    const mod = document.getElementById(i_mod).textContent
    
    if((check_if_integer(n1.textContent)) * (check_if_integer(n2.textContent)) * (check_if_integer(mod.textContent))){

        const res = calc_congruency_mk1(n1,n2,mod)

        
        if(res.r){document.getElementById(answer_main).textContent = "Congruênte" }  
        else     {document.getElementById(answer_main).textContent =  "Incongruente"  }

        document.getElementById(answer_calc1).textContent = res.el0_c
        document.getElementById(answer_calc2).textContent = res.el2_c


        result_addToList(res)

    }else{

        // todo: alert message here
    }
    
    

    

}


//
//  Others
//


// todo: make a function to clear the results-page list
const result_clearList = (listID = "result_list") => {

    
    
    list = document.getElementById(listID)
    

}


// todo: make a function to add all of the results to the result-page list
const result_addToList = (results)=>{



}



