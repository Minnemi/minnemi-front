/**
 * 
 * @param {string} path 
 * define a rota do componente ex: '/rota/filho'
 * @param {any} component 
 * define o componente a ser renderizado usando o método import ex: import('views/componente.vue')
 * @param {string} routerView 
 * define o nome da router view a ser renderizada
 * @param {object} routeParams 
 * parametro não obrigatório, com passagem das demais propiedades do vue-router ex: redirect, children, meta, name e etc
 * @returns 
 */
export const createRoute = (path, component, routerView, routeParams = {}) => {
    const route = {
        path,
        components: {
            [routerView]: () => component
        }
    }

    return Object.assign(route, routeParams)
}