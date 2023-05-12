document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'battery',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=34842e69-2fc9-574a-8c8e-200339380833'
        },
        {
            name: 'battery',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=34842e69-2fc9-574a-8c8e-200339380833'
        },
        {
            name: 'collision',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=4b852044-1a02-570c-a855-958f0acd40e7'
        },
        {
            name: 'collision',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=4b852044-1a02-570c-a855-958f0acd40e7'
        },
        {
            name: 'engine',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=b2d6aa3d-e35e-5926-8a26-95ced2a7bd16'
        },
        {
            name: 'engine',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=b2d6aa3d-e35e-5926-8a26-95ced2a7bd16'
        },
        {
            name: 'steering',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=ace4c7e9-cddb-5e92-a797-10c45e3d041f'
        },
        {
            name: 'steering',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=ace4c7e9-cddb-5e92-a797-10c45e3d041f'
        },
        {
            name: 'tire',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=aa92941d-ce26-5f96-872c-a6df1af34a61'
        },
        {
            name: 'tire',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=aa92941d-ce26-5f96-872c-a6df1af34a61'
        },
        {
            name: 'transmission',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=d9b71b4f-ffeb-5d52-8d3f-1c06b5356b04'
        },
        {
            name: 'transmission',
            img: 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=d9b71b4f-ffeb-5d52-8d3f-1c06b5356b04'
        }
    ]
    
    cardArray.sort(()=> 0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    // const resultDislay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    
    const noClicky = document.querySelector('#noClicky')
    
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=f61d9505-1681-5f54-9ad6-d68c665739de')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
    
    function checkForMatch() {
        noClicky.classList.remove('barrier')
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            console.log('You Found A Match')
            cards[optionOneId].setAttribute('src', 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=3f87a42e-b8e5-5f65-ae52-cd43cdd9bd31')
            cards[optionTwoId].setAttribute('src', 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=3f87a42e-b8e5-5f65-ae52-cd43cdd9bd31')
            cards[optionOneId].removeEventListener('click', flipcard)
            cards[optionTwoId].removeEventListener('click', flipcard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=f61d9505-1681-5f54-9ad6-d68c665739de')
            cards[optionTwoId].setAttribute('src', 'https://contentservice.mc.reyrey.net/image_v1.0.0/?id=f61d9505-1681-5f54-9ad6-d68c665739de')
        }
        cardsChosen = []
        cardsChosenId = []
        // resultDislay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDislay.textContent = 'Congratulations!'
        }
    
    }
    
    function flipcard() {
        const cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        this.classList.add('avoid-clicks')
        if (cardsChosen.length === 2) {
            let removeNoSeconds = document.querySelectorAll('.avoid-clicks')
            for (const x of removeNoSeconds) {
                x.classList.remove('avoid-clicks')
            }
            noClicky.classList.add('barrier')
            setTimeout(checkForMatch, 500)
        }
    }
    
     createBoard();
    })