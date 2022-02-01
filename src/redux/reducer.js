import facebook from "../assets/icons/facebook-icon.png";
import instagram from "../assets/icons/instagram-icon.png";
import linkedin from "../assets/icons/linkedin-icon.png";
import github from "../assets/icons/hithub-icon.png";
import projectsData from "../datas/projectsData";
import profileData from "../datas/profileData"
import { TOGGLE_MENU_OPENED, TOGGLE_FILTER, FILTER_PROJECTS } from "../datas/variables";

let initialState = {
    menu: {
        isOpened: false,
        navigation: [
            {name: 'about', path: '/', id: 1,},
            {name: 'projects', path: '/projects', id: 2,},
            {name: 'contacts', path: '/contacts', id: 3}
        ]
    },
    social: [
        {name: 'facebook', className: 'facebook', icon: facebook, link: profileData.contacts.facebook, id: 1,},
        {name: 'instagram', className: 'instagram', icon: instagram, link: profileData.contacts.instagram, id: 2,},
        {name: 'linkedin', className: 'linkedin', icon: linkedin, link: profileData.contacts.linkedin, id: 3,},
        {name: 'github', className: 'github', icon: github, link: profileData.contacts.github, id: 4,},
    ],
    filter: {
        filterButtons: [
            {name: 'Show all', checked: true, id: 1},
            {name: 'HTML', checked: false, id: 2},
            {name: 'CSS', checked: false, id: 3},
            {name: 'JavaScript', checked: false, id: 4},
            {name: 'SASS/SCSS', checked: false, id: 5},
            {name: 'React', checked: false, id: 6},
            {name: 'Redux', checked: false, id: 7},
            {name: 'Router', checked: false, id: 8},
            {name: 'Game', checked: false, id: 9},
            {name: 'Editor', checked: false, id: 10},
            {name: 'BEM', checked: false, id: 11},
            {name: 'Webpack', checked: false, id: 12},
        ],
        activeFilter: 'Show all',
    },
    projects: projectsData,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_MENU_OPENED:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    isOpened: !state.menu.isOpened,
                }
            }

        case TOGGLE_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    filterButtons: state.filter.filterButtons.map((el) => {
                        return {
                            ...el,
                            checked: el.id === action.id,
                        }
                    }),
                    activeFilter: action.name,
                },
            }

        case FILTER_PROJECTS:
            return {
                ...state,
                projects: projectsData.filter( (el) => el.skills.includes(action.filter)),
            }

        default: return state;
    }
}