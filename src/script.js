
let navSmoothAnim = document.querySelector('.nav-smooth')
let parentSection = document.getElementById('parentSection')
let darkSpace = document.querySelector('.dark-space')
let myAbout = document.getElementById('about')
let myStat = document.getElementById('myStat')

let myProfile = document.getElementById('profiles')
let profileText = document.querySelector('.text_gray')

let myHeader = document.getElementById('header')
let headerSvgPath = myHeader.querySelectorAll('path')
let headerBtn = myHeader.querySelectorAll('.header_btn')
let signUpBtn = myHeader.querySelector('.sign_up_btn')


window.onscroll = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        navSmoothAnim.classList.add('active')
    } else {
        navSmoothAnim.classList.remove('active')
    }

    if ((document.body.scrollTop > 200 && document.body.scrollTop < 1000)
        || (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 1000)) {
        parentSection.classList.add('bg_dark')
        darkSpace.classList.add('dark-space-in')
        myHeader.classList.add('bg_dark')
        myProfile.classList.add('text-gray-600')
        profileText.classList.remove('text_gray_light')

        myProfile.classList.replace('opacity-100', 'opacity-25')
        signUpBtn.classList.replace('bg-black', 'bg-white')
        signUpBtn.classList.replace('text-white', 'text-black')

        headerSvgPath.forEach(item => item.attributes[1].value = 'white')
        headerBtn.forEach(item => item.classList.replace('text-black', 'text-white'))


        for (let i = 0; i < 6; i++) {
            if(parentSection.children[i].classList.contains('opacity-100')){
                parentSection.children[i].classList.replace('opacity-100', 'opacity-25')
            }
        }
    } else {
        parentSection.classList.remove('bg_dark')
        darkSpace.classList.remove('dark-space-in')
        myHeader.classList.remove('bg_dark')
        myProfile.classList.remove('text-gray-600')
        profileText.classList.add('text_gray_light')

        myProfile.classList.replace('opacity-25', 'opacity-100')
        signUpBtn.classList.replace('bg-white', 'bg-black')
        signUpBtn.classList.replace('text-black', 'text-white')

        headerSvgPath.forEach(item => item.attributes[1].value = 'black')
        headerBtn.forEach(item => item.classList.replace('text-white', 'text-black'))

        for (let i = 0; i < 6; i++) {
            if(parentSection.children[i].classList.contains('opacity-25')){
                parentSection.children[i].classList.replace('opacity-25', 'opacity-100')
            }
        }
    }
}