const check_if_integer = ( el = "") => {


    var a = el.match('(^[0-9]+)$')
    if(a == null){return false}
    
    a = el.match("\n|[ ]")
    if(a != null){return false}

return true
}


const check_if_integer_array = () => {


}



const calc_congruency_mk1 = (el0, el1, x) => {

    const d1 = el0 / x 
    const d2 = el1 / x 


    if(d1 == d2){

        return {
            el0_c: `${el0} / ${x} = ${d1}`,
                el0_r: `${d1}`,

                el1_c: `${el1} / ${x} = ${d2}`,
                el1_r: `${d2}`,
                
                m: `${d1} = ${d2}`
            }

    } 
    else {

        return {
            el0_c: `${el0} / ${x} = ${d1}`,
            el0_r: `${d1}`,

            el1_c: `${el1} / ${x} = ${d2}`,
            el1_r: `${d2}`,
        
            m: `${d1} ≠ ${d2}`
            }

    }


}