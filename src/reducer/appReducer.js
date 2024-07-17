import init  from "@/utils/init";


export const appReducer = (state = init, {type,payload}) => {
    switch(type){
        case 'UPDATE_USERS':
           return  {
                ...state,
                users:payload
            }
            case 'UPDATE_PHOTOS':
           return  {
                ...state,
                photos:payload
            }
            case 'UPDATE_POSTS':
            return  {
                 ...state,
                 posts:payload
             }
    }
    return state;

}