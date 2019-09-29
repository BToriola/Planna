const initialState = {
    projects: [
        { id: 1, title: 'Blockchain Tech', content: 'Blockchain.com is a bitcoin block explorer service' },
        { id: 2, title: 'Calibra', content: 'A newly formed Facebook subsidiary whose goal is to provide financial services that will let people' },
        { id: 3, title: 'Artificial Technology', content: 'AI the simulation of human intelligence processes by machines, especially computer systems.' }
    ]
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            break;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project', action.err)
            return state;
        default:
            return state
    }

}

export default projectReducer