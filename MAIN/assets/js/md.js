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




//
//  Others
//


const clearList = (listID = "result_list") => {

    list = document.getElementById(listID)
    list.

}
