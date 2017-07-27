window.dialog=function(options){
    // 析构赋值
    let {title,content,buttons} = options
    let $div = generateHtml()
    
    let api={       
        close:function(){

            $div.hide()     //  don't use hide() ,ues remove()
        }        
    }
    
    $(document.body).append($div)
    return api

    function generateHtml(){
        let $divWrapper = $('<div class="dialog-wrapper"></div>')
        let $div = $('<div class="dialog"></div>')
        let $title = $('<div class="dialog-title"></div>')
        let $content = $('<div class="dialog-content"></div>')
        let $buttons = $('<div class="dialog-action"></div>')
        $title.text(title).appendTo($div)
        $content.text(content).appendTo($div)
        
        for(let i=0;i<buttons.length;i++){
            let creatButton = $('<button></button>')
            creatButton.text(buttons[i].text).appendTo($buttons)
            .on('click',function(){
                let action = buttons[i].action
                let result = action && action()
                result !== false && api.close()
            })
            
        }
        $buttons.appendTo($div)

        $div.appendTo($divWrapper)

        return $divWrapper
    }   

}


button.onclick=function(){   //  有个问题，如果用户多次点击页面的按钮，页面中会创建多个div的标签，我认为这样不好
                            //  可以通过每次点击关闭按钮的是个删除标签 就好了
    let api = dialog({
        title: '标题',
        content: 'Aenean lacinia bibendum nulla sed consectetur.\
         Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. \
         Donec ullamcorper nulla non metus auctor fringilla.\
         Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel \
         scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
        buttons: [
            {
                text: '确定',
                action: function(){
                    return false
                }
            },
            {
                text: '取消'
            }
        ]

    }) 
}