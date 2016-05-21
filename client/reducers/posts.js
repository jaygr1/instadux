// a reducer takes in 2 things. The action (info about what happened) and a copy of the current state

function posts(state = [], action){
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('incremnting likes');
      const i = action.index;
      return [
        ...state.slice(0, i), //every post before the post we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) //every post after the post we are updating
      ]

    default:
      return state
  }
  console.log(state, action);
  return state;
}

export default posts;
