import { CLASS_JS_TPU_STACKEDIT } from '../templates/classes';
// import styles from './index.css';

export const Button = `<a class="button-link ${CLASS_JS_TPU_STACKEDIT}" href="#" title="Open in stackedit">
        <span class="icon-sm icon-small">
            <span class="posBlock">
                <svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M23.997,6.002c0,-3.311 -2.688,-5.999 -5.999,-5.999l-11.999,0c-3.311,0 -5.999,2.688 -5.999,5.999l0,11.999c0,3.311 2.688,5.999 5.999,5.999l11.999,0c3.311,0 5.999,-2.688 5.999,-5.999l0,-11.999Z" style="fill:none;"/><clipPath id="_clip1"><path d="M23.997,6.002c0,-3.311 -2.688,-5.999 -5.999,-5.999l-11.999,0c-3.311,0 -5.999,2.688 -5.999,5.999l0,11.999c0,3.311 2.688,5.999 5.999,5.999l11.999,0c3.311,0 5.999,-2.688 5.999,-5.999l0,-11.999Z"/></clipPath><g clip-path="url(#_clip1)"><path d="M23.997,0.003l-24,0l12,12l12,-12Z" style="fill:#ffd700;"/><path d="M-0.003,0.003l0,24l12,-12l-12,-12Z" style="fill:#a5c700;"/><path d="M-0.003,24.003l24,0l-12,-12l-12,12Z" style="fill:#ff8a00;"/><path d="M23.997,24.003l0,-24l-12,12l12,12Z" style="fill:#66aefd;"/><path d="M22.497,-1.497l-10.5,10.497l3,3.003l10.5,-10.5l-3,-3Z" style="fill:url(#_Linear2);"/><path d="M25.499,22.503l-10.498,-10.5l-3.002,3l10.5,10.5l3,-3Z" style="fill:url(#_Linear3);"/><path d="M1.497,25.501l10.5,-10.497l-3,-3.003l-10.5,10.5l3,3Z" style="fill:url(#_Linear4);"/><path d="M-1.503,1.503l10.498,10.5l3.002,-3l-10.5,-10.5l-3,3Z" style="fill:url(#_Linear5);"/></g><path d="M21.75,5.852c0,-2.195 -1.782,-3.977 -3.977,-3.977l-11.546,0c-2.195,0 -3.977,1.782 -3.977,3.977l0,11.546c0,2.195 1.782,3.977 3.977,3.977l11.546,0c2.195,0 3.977,-1.782 3.977,-3.977l0,-11.546Z" style="fill:#fff;"/><path d="M4.633,6.013l1.37,0l0,-1.828l1.399,0l0,1.828l1.696,0l0,-1.828l1.399,0l0,1.828l1.37,0l0,1.691l-1.37,0l0,1.902l1.37,0l0,1.69l-1.37,0l0,1.829l-1.399,0l0,-1.829l-1.696,0l0,1.829l-1.399,0l0,-1.829l-1.37,0l0,-1.69l1.37,0l0,-1.902l-1.37,0l0,-1.691Zm2.769,1.691l0,1.902l1.696,0l0,-1.902l-1.696,0Z" style="fill:#737373;"/><defs><linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-2.99995,-3,3,-2.99995,23.9974,3.00265)"><stop offset="0" style="stop-color:#66aefd;stop-opacity:1"/><stop offset="1" style="stop-color:#ffd700;stop-opacity:1"/></linearGradient><linearGradient id="_Linear3" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(3,-2.99995,2.99995,3,20.9987,24.0027)"><stop offset="0" style="stop-color:#ff8a00;stop-opacity:1"/><stop offset="1" style="stop-color:#66aefd;stop-opacity:1"/></linearGradient><linearGradient id="_Linear4" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.99995,3,-3,2.99995,-0.00255928,21.0013)"><stop offset="0" style="stop-color:#a5c700;stop-opacity:1"/><stop offset="1" style="stop-color:#ff8a00;stop-opacity:1"/></linearGradient><linearGradient id="_Linear5" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-3,2.99995,-2.99995,-3,2.99744,0.00265252)"><stop offset="0" style="stop-color:#ffd700;stop-opacity:1"/><stop offset="1" style="stop-color:#a5c700;stop-opacity:1"/></linearGradient></defs></svg>
            </span>
        </span>
        <span>Edit SE</span>
    </a>`;
export const Styles =
    '<link rel="stylesheet" type="text/css" href="https://vlasakh.github.io/Trello-power-up/src/styles.css" media="all"/>';
export const TpuStackeditIframeWrapper = '<div id="%{iframeId}"></div>';
export const IframeHtml = `<div class="stackedit-iframe-container" data-style="position: absolute; top: 0; left: 0; z-index: 1000">
            <iframe style="width: 100%; height: 100%;" src="https://stackedit.io/app#origin=https%3A%2F%2Ftrello.com&fileName=trello.com&contentText=%{content}" class="stackedit-iframe"></iframes>
            </div>`;
