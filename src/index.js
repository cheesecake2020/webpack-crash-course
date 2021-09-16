import _ from 'lodash'

function compornent() {
    const div = document.createElement('div');
    const array = ['Hello', 'webpack']
    div.innerHTML= _.join(array,' ')
    return div;
}
document.body.appendChild(compornent());