window.onload = () => { 
    
    document.getElementById("n1").value = " " 
    document.getElementById("n2").value = " "
    document.getElementById("mod").value = " "


}


//
//  Congruency calculator - related
//


const input_validate = ( el = "") => {

    // Check if 'el' is an integer
    var a = el.match('(^[0-9]+)$')
    if(a == null){return false}

    // Check if the value is not made out just of 0
    var a = el.match('(^[0]+)$')
    if(a != null){return false}
    
    // Check if there are any new lines or spaces in 'el'
    a = el.match("\n|[ ]")
    if(a != null){return false}

return true
}



const congruency_calc = (el0, el1, x) => {

    const d1 = el0 % x 
    const d2 = el1 % x


    if(d1 == d2){

        return {

                'mod': x,
                'el0': el0,
                'el1': el1,

                el0_c: `${el0} % ${x} = ${d1}`,
                el1_c: `${el1} % ${x} = ${d2}`,
                m: `${d1} = ${d2}`,
                
                r: true
            }

    } 
    else {

        return {

            'mod': x,
            'el0': el0,
            'el1': el1,

            el0_c: `${el0} % ${x} = ${d1}`,
            el1_c: `${el1} % ${x} = ${d2}`,
            m: `${d1} ≠ ${d2}`,
            
            r: false
            }

    }


}



const congruency_main = (i_n1,i_n2,i_mod, answer_main, answer_calc1, answer_calc2) => {

    const n1 = document.getElementById(i_n1).value
    const n2 = document.getElementById(i_n2).value
    const mod = document.getElementById(i_mod).value
    
    if((input_validate(n1)) * (input_validate(n2)) * (input_validate(mod))){

        const res = congruency_calc(n1,n2,mod)

        
        if(res.r){document.getElementById(answer_main).innerHTML = "Congruênte" }  
        else     {document.getElementById(answer_main).innerHTML =  "Incongruente"  }

        document.getElementById(answer_calc1).innerHTML = res.el0_c
        document.getElementById(answer_calc2).innerHTML = res.el1_c


        result_addToList(res)

    }else{

        // alert('Todos os números devem ser diferentes de 0, inteiros e positivos.')
        // Add a better alert here (boostrap alert)
    }
    
    

    

}







//
//  inner-page - related
//


// todo: make a function to clear the results-page list
const result_clearList = (listID = "result-dt") => {
    document.getElementById(listID).innerHTML = " "
}


// todo: make a function to add all of the results to the result-page list
const result_addToList = (res, listID = "result-dt")=>{

    list = document.getElementById(listID)

    const new_element = document.createElement('dt')
    new_element.innerHTML = `${res.el0} ≡ ${res.el0} mod ${res.el0}: ${(res.r)?"Congruênte":"Incongruente"}`
    
    list.appendChild(new_element)


}



