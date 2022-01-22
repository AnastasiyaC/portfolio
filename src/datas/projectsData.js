import calculator from '../assets/projectsImages/calculator.jpg';
import photoEditor from '../assets/projectsImages/photo-editor.jpg';
import animalSoundboard from '../assets/projectsImages/animal-soundboard.jpg';
import videoPlayer from '../assets/projectsImages/video-player.jpg';
import dynamicLandingPage from '../assets/projectsImages/dynamic-landing-page.jpg';
import flexPanelGallery from '../assets/projectsImages/flex-panel-gallery.jpg';
import canvas from '../assets/projectsImages/canvas.jpg';
import meditation from '../assets/projectsImages/meditation.jpg';
import videoSpeedController from '../assets/projectsImages/video-speed-controller.jpg';
import virtualKeyboard from '../assets/projectsImages/virtual-keyboard.jpg';
import whackAMole from '../assets/projectsImages/whack-a-mole.jpg';
import raindrops from '../assets/projectsImages/raindrops.jpg';
// import weather from '../assets/projectsImages/weather.jpg';
import portfolio from '../assets/projectsImages/portfolio.jpg';



const projectsData = [
        {
            name: 'calculator',
            demo: 'https://anastasiyac.github.io/calculator/',
            git: 'https://github.com/AnastasiyaC/calculator',
            screenshot: calculator,
            description: 'The simplest calculator that performs mathematical operations: addition, subtraction, multiplication and division. Calculator contain a keyboard with buttons for digits and arithmetical operations and a display as an output of the result of a mathematical expression.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'BEM',],
            id: 1,
        },
        {
            name: 'photo editor',
            demo: 'https://anastasiyac.github.io/photo-editor/',
            git: 'https://github.com/AnastasiyaC/photo-editor',
            screenshot: photoEditor,
            description: 'The photo editor allows you to edit an image by applying various properties and filters to it.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'Editor', 'BEM',],
            id: 2,
        },
        {
            name: 'animal soundboard',
            demo: 'https://anastasiyac.github.io/animal-soundboard/',
            git: 'https://github.com/AnastasiyaC/animal-soundboard',
            screenshot: animalSoundboard,
            description: 'The animal soundboard which you can play animal sounds by pressing keys on the keyboard. Each key has its own sound.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'BEM',],
            id: 3,
        },
        {
            name: 'video player',
            demo: 'https://anastasiyac.github.io/video-player/',
            git: 'https://github.com/AnastasiyaC/video-player',
            screenshot: videoPlayer,
            description: 'The video player allows you to play and pause a video, fastforward and runback, mute and change volume and open it full screen.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'Editor', 'BEM',],
            id: 4,
        },
        {
            name: 'dynamic landing page',
            demo: 'https://anastasiyac.github.io/dynamic-landing-page/',
            git: 'https://github.com/AnastasiyaC/dynamic-landing-page',
            screenshot: dynamicLandingPage,
            description: 'The dynamic landing page shows the current date and time, input field for user\'s name and daily task. The background image changes depending on the day time. The app uses local storage to store the user\'s name and daily task.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'BEM',],
            id: 5,
        },
        {
            name: 'canvas',
            demo: 'https://anastasiyac.github.io/canvas/',
            git: 'https://github.com/AnastasiyaC/canvas',
            screenshot: canvas,
            description: 'Canvas app is a simple paint where you can draw lines choosing line thickness and color, erase lines and change the background color.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'Editor', 'BEM',],
            id: 6,
        },
        {
            name: 'flex panel gallery',
            demo: 'https://anastasiyac.github.io/flex-panel-gallery/',
            git: 'https://github.com/AnastasiyaC/flex-panel-gallery',
            screenshot: flexPanelGallery,
            description: 'The Flex panel gallery app consists of a series of thematic pictures "Five reasons to visit Belarus". Each picture refers to one of the reasons wich opens by clicking on it.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'BEM',],
            id: 7,
        },
        {
            name: 'meditation',
            demo: 'https://anastasiyac.github.io/meditation/',
            git: 'https://github.com/AnastasiyaC/meditation',
            screenshot: meditation,
            description: 'Meditation app allows you to choose relaxing music and set a timer to play it.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'BEM',],
            id: 8,
        },
        {
            name: 'video speed controller',
            demo: 'https://anastasiyac.github.io/video-speed-controller/',
            git: 'https://github.com/AnastasiyaC/video-speed-controller',
            screenshot: videoSpeedController,
            description: 'Video speed controller app allows you to play a video, speed up or slow down it by moving the slider.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'Editor', 'BEM',],
            id: 9,
        },
        {
            name: 'virtual keyboard',
            demo: 'https://anastasiyac.github.io/virtual-keyboard/',
            git: 'https://github.com/AnastasiyaC/virtual-keyboard',
            screenshot: virtualKeyboard,
            description: 'Virtual keyboard app allows you typing on the virtual keyboard.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'BEM',],
            id: 10,
        },
        {
            name: 'whack a mole',
            demo: 'https://anastasiyac.github.io/whack-a-mole/',
            git: 'https://github.com/AnastasiyaC/whack-a-mole',
            screenshot: whackAMole,
            description: 'Whack a mole is a game where holes in the play area are filled with small moles, which pop up at random. Points are scored by clicking each mole as it appears. The faster the reaction the higher the score.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'Game', 'BEM',],
            id: 11,
        },
        {
            name: 'raindrops',
            demo: 'https://anastasiyac.github.io/raindrops/',
            git: 'https://github.com/AnastasiyaC/raindrops',
            screenshot: raindrops,
            description: 'Raindrops game is math simulator that allows you to consolidate the skills of arithmetic operations as addition, subtraction, multiplication and division.',
            skills: ['Show all', 'HTML', 'CSS', 'JavaScript', 'Game', 'BEM',],
            id: 12,
        },
        {
            name: 'weather',
            demo: '',
            git: '',
            screenshot: '',
            description: '',
            skills: ['Show all', 'JavaScript', 'SASS/SCSS', 'React', 'Redux', 'BEM', 'Webpack'],
            id: 13,
        },
        {
            name: 'portfolio',
            demo: '',
            git: '',
            screenshot: portfolio,
            description: '',
            skills: ['Show all', 'JavaScript', 'SASS/SCSS', 'React', 'Redux', 'Router', 'BEM', 'Webpack'],
            id: 14,
        },
]

export default projectsData;