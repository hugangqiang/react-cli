export default function test(state={text: '测试' }, action) {
    
    switch(action.type){
        case "Data_test":
            return {
                text: action.data.test
            };
        default:
            return state;
    }
}