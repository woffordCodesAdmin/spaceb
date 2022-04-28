// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

// Aliens vs Humans - GAME

// {H}: GO First
//  Only can Attack in Order

// After DestroyedShip = option2retreat

// {A}: 6 ships

// ship ={
    // hull:
    // firepower:
    // accuracy:
// }


// Guile Throw https://onlinegiftools.com/images/examples-onlinegiftools/sonic-boom.gif

    // https://www.fightersgeneration.com/characters/charlie-sonicshell.gif


const pOneAttack = () => {
    let ship = document.querySelector('.ussr')
        // create New Action
            let newImg = document.createElement('img')
                newImg.setAttribute('src','https://onlinegiftools.com/images/examples-onlinegiftools/sonic-boom.gif')
                newImg.setAttribute('class', 'ussr');
        ship.replaceWith(newImg)
        
        ship.classList.toggle('pOneAttack')
}

const absorbDamage = (alienId) => {

    let victim = document.querySelector(alienId)
    victim.innerHTML = score - 100
}

const fireShot = () => {
    let laser = prompt("Which Position Would You Like To Fire At ?")

}

