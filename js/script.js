const formaldehydes = [
    'FORMALDEHYDE',
    'QUATERNIUM-5',
    'QUATERNIUM-15',
    'DIMETHYL-DIMETHYL HYDANTOIN',
    'DMDM',
    'IMIDAZOLIDINYL UREA',
    'DIAZOLIDINYL UREA',
    'SODIUM HYDROXYMETHYLGLYCINATE',
    '2-BROMO-2-NITROPROPANE-1,3-DIOL',
    'BROMOPOL',
    'TOSYLAMIDE',
    'POLYOXYMETHYLENE UREA',
    '5-BROMO-5-NITRO-1,3 DIOXANE',
    'METHENAMINE',
    'FORMALIN',
    'FORMIC ALDEHYDE',
    'MERTHADEHYDE',
    'METHANAL',
    'OXOMETHANE',
    'OXYMETHYLENE',
    'BFV'
]

const analyzeButton = document.querySelector('#main__analyze-button')

analyzeButton.addEventListener('click', function(){
    const resultList = document.querySelector('.main__results')
    resultList.innerHTML = ''

    const ingredientsInput = document.querySelector('#main__ingredients-input')
    const ingredients = ingredientsInput.value.toUpperCase()

    ingredientsInput.value = ''

    let containsFormaldehydes = false

    for (i = 0; i < formaldehydes.length; i++) {
        if (ingredients.includes(formaldehydes[i])) {
            console.log(`DANGER: ${formaldehydes[i]}`)
            containsFormaldehydes = true
        }
    }

    resultList.appendChild(createListItem('Formaldehyde', containsFormaldehydes))
})

function createListItem(substance, present) {
    let li = document.createElement('li')
    li.classList.add('alert')

    if (present) {
        li.textContent = `Contains ${substance}`
        li.classList.add('alert-danger')
    } else {
        li.textContent = `${substance} Free`
        li.classList.add('alert-success')
    }

    return li
}