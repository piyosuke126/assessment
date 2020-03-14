'use strict';
const userNameInput=document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivided=document.getElementById('result-area');
const tweetDivided=document.getElementById('tweet-area');
/**
 * 指定した要素の子供を全て削除する
 * @param{HTMLElement}element HTMLの要素
 */
function removeAllChildren(element) {
    while (element.firstChild) {//子供の要素がある
        element.removeChild(element.firstChild);
    }
}
userNameInput.onkeydown=(event)=>{
    if(event.key==='Enter'){
        assessmentButton.onclick();
    }
};
