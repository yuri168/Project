const initial_state = ''

export default (state = initial_state, action) =>{
    switch(action.type){
        
        case 'idName':
            return action.payload; 

        default:
            return state; 
    }
}