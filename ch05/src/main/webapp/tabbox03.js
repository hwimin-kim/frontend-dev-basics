/*  
    DOM Event Model1 Level0: basic: HTML Element의 
    Event Attribute에 Event Handler(함수)를 설정 하는 방식
    JavaScript Code(DOM API)로만 작성하기
*/
let liSelected = null;

var tabBox = {
    init: function() {
        $(this._onWindowLoad.bind(this));
    }, 
    _onTabClicked: function () {
        // unselect
        var $lisSelected = $('.selected');
        $lisSelected.removeClass('selected');

        // select
        $(this).addClass('selected');
    },
    _onWindowLoad: function() {
        var $liTabs = $('.tab-box > ul > li');
        for(var i = 0; i < $liTabs.length; i++)
            $liTabs[i].addEventListener('click', this._onTabClicked);
    }
}