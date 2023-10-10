let currentPos = { x: 20, y: 20 };
let cursor;
let moveIgnored = false;

export function main() {
    createTranslationLayer();
    createCursor();
}

const createTranslationLayer = () => {
    const translationLayer = document.createElement('div');
    translationLayer.classList.add('translationLayer');

    translationLayer.addEventListener('click', (e) => {
        onTranslationLayerClick(e);
    });

    translationLayer.addEventListener('mousemove', (e) => {
        if (moveIgnored) {
            return;
        }

        moveIgnored = true;
        
        setTimeout(() => {
            console.log(e.pageX + ' ' + e.pageY)
            currentPos.x = e.pageX + 50;
            currentPos.y = e.pageY;
            updateMousePosition();
            moveIgnored = false;
        }, 10);
    });

    document.body.appendChild(translationLayer);
}

const createCursor = () => {
    //const newCursor = document.createElement('img');
    const newCursor = document.createElement('div');
    newCursor.id = 'cursor';
    //newCursor.src = chrome.runtime.getURL('images/cursor.svg');

    document.body.appendChild(newCursor);
    cursor = document.getElementById('cursor');
}

const onTranslationLayerClick = (e) => {
    const underCursor = document.elementsFromPoint(currentPos.x, currentPos.y);
    console.log(underCursor);
    const firstEl = underCursor.find(el => el.className !== 'translationLayer' && el.id !== 'cursor' && el.click);
    if (firstEl)
        firstEl.click();
}

const updateMousePosition = () => {
    cursor.style.left = currentPos.x + 'px';
    cursor.style.top = currentPos.y + 'px';
}
