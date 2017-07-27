window.dialog=function(options){
    // 析构赋值
    let {title,content,buttons} = options
    
    
    let api={       
        close:function(){

            $div.remove()     //  don't use hide() ,ues remove()
            
        } 
              
    }
    let $div = generateHtml()
    
    $(document.body).append($div)
    return api

    function generateHtml(){
        let $divWrapper = $('<div class="dialog-wrapper"></div>')
        let $div = $('<div class="dialog"></div>')
        let $title = $('<div class="dialog-title"></div>')
        let $content = $('<div class="dialog-content"></div>')
        let $buttons = $('<div class="dialog-action"></div>')
        let $close = $('<a class="close" href="#"></a>')

        
        $title.text(title).appendTo($div)
        $content.text(content).appendTo($div)
        $close.text('×').appendTo($title)
        // $close.on('click',api.close)
        $close.on('click',function(e){
            api.close()
            e.stopPropagation()
        })
        
        for(let i=0;i<buttons.length;i++){
            let creatButton = $('<button></button>')
            creatButton.text(buttons[i].text).appendTo($buttons)
            .on('click',function(e){
                let action = buttons[i].action
                let result = action && action()
                result !== false && api.close()
                e.stopPropagation()
            })
            
        }

        $buttons.appendTo($div)
        $div.appendTo($divWrapper)
        
        $div.on('click',function(e){
            e.stopPropagation()
        })

        $divWrapper.on('click',function(e){
            api.close()
        })
        return $divWrapper
    }


}

let button = $('.button')[0]

button.onclick=function(){   //  
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