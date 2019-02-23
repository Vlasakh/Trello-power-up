import template from '@tinkoff/utils/string/template';

import * as Templates from './constants';

function getNode(html, params)
{
    const fragment = document.createElement('div');
    const innerHTML = params ? template(params, html) : html;

    fragment.innerHTML = innerHTML;
    return fragment.children[0];
}

export {
    Templates,
    getNode,
};
