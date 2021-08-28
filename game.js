'use strict';

//1-ое задание
{
    let chessTable = document.getElementById('game');
    const colorBlack = '#000'
    const colorWhite = '#fff'
    let flag = true;

    function initCell() {
        alpha: for (let i = 0; i < 9; i++) {
            const trElem = document.createElement('tr');
            chessTable.appendChild(trElem);

            for (let j = 0; j < 9; j++) {
                const tdElem = document.createElement('td');
                trElem.appendChild(tdElem);

                if (i == 0 && j == 0) continue;
                else if (i == 0) {
                    tdElem.innerText = getAlphabet(j);
                    continue;
                } else if (j == 0) {
                    tdElem.innerText = i;
                    continue;
                }

                if (j == 1) flag = !flag;

                tdElem.style.width = '20px';
                tdElem.style.height = '20px';
                if (flag) {
                    tdElem.style.backgroundColor = colorBlack;
                } else {
                    tdElem.style.backgroundColor = colorWhite;
                }
                flag = !flag;
            }


        }
    }

    function getAlphabet(a) {
        switch (a) {
            case 1:
                return 'H';
            case 2:
                return 'G';
            case 3:
                return 'F';
            case 4:
                return 'E';
            case 5:
                return 'D';
            case 6:
                return 'C';
            case 7:
                return 'B';
            case 8:
                return 'A';
        }
    }

    initCell();
}