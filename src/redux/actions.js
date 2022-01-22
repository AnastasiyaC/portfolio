import { TOGGLE_MENU_OPENED, TOGGLE_FILTER, FILTER_PROJECTS} from "../datas/variables";

export const toggleMenuOpened = () => ({type: TOGGLE_MENU_OPENED});
export const toggleFilter = (id, name) => ({type: TOGGLE_FILTER, id, name});
export const filterProjects = (filter) => ({type: FILTER_PROJECTS, filter});