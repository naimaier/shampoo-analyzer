const formaldehydes = [
    'FORMALDEHYDE',
    'QUATERNIUM-5',
    'QUATERNIUM-15',
    'DIMETHYL-DIMETHYL HYDANTOIN',
    'DMDM HYDANTOIN',
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

const sulfates = [
    'LAURIL ÉTER SULFATO DE SÓDIO',
    'LAURIL ÉTER SULFONATO DE SÓDIO',
    'SODIUM LAURYL SULFATE',
    'SODIUM LAURYL ETHER SULFATE',
    'SODIUM LAURETH SULFATE',
    'SODIUM DODECYL POLYOXYETHYLENE SULFATE',
    'SODIUM LAURYL ETHOXYSULFATE',
    'SODIUM POLYOXYETHYLENE KLAURYL SULFATE',
    'MONODODECYL ESTER SODIUM SALT SULFURIC ACID',
    'SODIUM DODECYL SULFATE',
    'SODIUM LAURYL SULFATE',
    'SODIUM SALT SULFURIC ACID',
    'SULFURIC ACID MONODODECYL ESTER SODIUM SALT',
    'SULFURIC ACID',
    'SODIUM SALT',
    'SODIUM CETEARYL SULFATE',
    'MAGNESIUM SULFATE',
    'AMMONIUM LAURYL SULFATE',
    'SODIUM TRIDECETH SULFATE',
    'TEA-LAURYL SULFATE MAGNESIUM LAURETH SULFATE',
    'SULFATE'
]

const analyzeButton = document.querySelector('#main__analyze-button')

analyzeButton.addEventListener('click', function(){
    const resultList = document.querySelector('.main__results')
    resultList.innerHTML = ''

    const ingredientsInput = document.querySelector('#main__ingredients-input')
    const ingredients = ingredientsInput.value.toUpperCase()

    ingredientsInput.value = ''

    const containsFormaldehydes = checkFor(ingredients, formaldehydes)
    resultList.appendChild(createListItem('Formaldehyde', containsFormaldehydes))

    const containsSulfates = checkFor(ingredients, sulfates)
    resultList.appendChild(createListItem('Sulfate', containsSulfates))
})

function checkFor(string, array) {
    let present = false

    for (i = 0; i < array.length; i++) {
        if (string.includes(array[i])) {
            present = true
        }
    }

    return present
}

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