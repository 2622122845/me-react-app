
let init = {
    //是否显示
    shouDrawer: false,
    //显示的模板
    component: null,
    //模板名字
    name: ''
};
export default function a(previousState = init, action) {
    const { data, type } = action
    switch (type) {
        case 'changeDrawerState':
            return data;
            case 'close':
            return init;
        default:
            return previousState;
    }
}