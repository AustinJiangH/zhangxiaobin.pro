function init() {

    wait(1000).then(() => {
        clearText()
        removeText('').then(typeLoop)
    })

    function typeLoop() {
        typeText('fessional!')
            .then(() => wait(3500))
            .then(() => removeText('fessional!'))

            .then(() => typeText('fessor!'))
            .then(() => wait(3500))
            .then(() => removeText('fessor!'))

            .then(() => typeText('ud!'))
            .then(() => wait(3500))
            .then(() => removeText('ud!'))

            .then(() => typeText('moted!'))
            .then(() => wait(3500))
            .then(() => removeText('moted!'))

            .then(() => typeText('fit!'))
            .then(() => wait(3500))
            .then(() => removeText('fit!'))

            .then(() => typeText('found!'))
            .then(() => wait(3500))
            .then(() => removeText('found!'))

            .then(() => typeText('ductive!'))
            .then(() => wait(3500))
            .then(() => removeText('ductive!'))

            .then(() => typeText('sperous!'))
            .then(() => wait(3500))
            .then(() => removeText('sperous!'))

            .then(() => typeText('prietor!'))
            .then(() => wait(3500))
            .then(() => removeText('prietor!'))

            .then(() => typeText('gressive!'))
            .then(() => wait(3500))
            .then(() => removeText('gressive!'))

            .then(() => typeText('tected!'))
            .then(() => wait(3500))
            .then(() => removeText('tected!'))


            .then(typeLoop)
    }

}


// Source code 🚩

const elementNode = document.getElementById('type-text')
let text = ''

function updateNode() {
    elementNode.innerText = text
}

function pushCharacter(character) {
    text += character
    updateNode()
}

function popCharacter() {
    text = text.slice(0, text.length - 1)
    updateNode()
}

function clearText() {
    text = ''
    updateNode()
}


function wait(time) {
    if (time === undefined) {
        const randomMsInterval = 100 * Math.random()
        time = randomMsInterval < 50 ? 10 : randomMsInterval
    }

    return new Promise(resolve => {
        setTimeout(() => {
            requestAnimationFrame(resolve)
        }, time)
    })
}

function typeCharacter(character) {
    return new Promise(resolve => {
        pushCharacter(character)
        wait().then(resolve)
    })
}

function removeCharacter() {
    return new Promise(resolve => {
        popCharacter()
        wait().then(resolve)
    })
}

function typeText(text) {
    return new Promise(resolve => {

        function type([character, ...text]) {
            typeCharacter(character)
                .then(() => {
                    if (text.length) type(text)
                    else resolve()
                })
        }

        type(text)
    })
}

function removeText({ length: amount }) {
    return new Promise(resolve => {

        function remove(count) {
            removeCharacter()
                .then(() => {
                    if (count > 1) remove(count - 1)
                    else resolve()
                })
        }

        remove(amount)
    })
}


init()
