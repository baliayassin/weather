const initialState = {
    favorites: []
}


const weather = (state = initialState , action) =>{
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return [{
                ...state,
                favorites: {name:action.name},
              }];
            break;
        case 'REMOVE_FROM_FAVORITES':
                return {
                  ...state,
                  favorites: state.favorites.filter((name) => name !== action.name),
                };
              default:
                return state;
            }

}


export default weather
