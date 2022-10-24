$.fn.my_wysiwyg = function (options = {
    option1: 'bold',
    option2: 'italic',
    option3: 'strike through',
    option4: 'fore color,',
    option5: 'font size',
}) {



    var $textarea = $('#textarea')
    // Title
    var $title = $('<h1>MY_WYSIWYG</h1>')

    var $divEditor = $('<div id="editor" contentEditable></div>')


    // Conditions

    for (var option in options) {
        if (jQuery.type(options[option]) === 'array') {
            for (var i = 0; i < options[option].length; i++) {
                if (options[option][i] === 'bold') {
                    inputBold()
                }
                if (options[option][i] === 'italic') {
                    inputItalic()
                }
                if (options[option][i] === 'strike through') {
                    inputLineThrough()
                }
                if (options[option][i] === 'fore color') {
                    selectForColor()
                }
                if (options[option][i] === 'font size') {
                    selectFontSize()
                }
                if (options[option][i] === 'align center') {
                    inputAlignCenter()
                }
                if (options[option][i] === 'align right') {
                    inputAlignRight()
                }
                if (options[option][i] === 'align left') {
                    inputAlignLeft()
                }
                if (options[option][i] === 'align justify') {
                    inputJustify()
                }


            }
        }
    }

    // Title
    $textarea.before($title)
    // Editor
    $textarea.append($divEditor)
    // VarEditor
    $divEditor = $('#editor')



    $title.css('text-align', 'center')

    $textarea.css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '30px 20px',

        border: '2.5px solid black',
        'border-radius': '30px',

        background: 'lightblue',

        'text-align': 'center'
    })

    $divEditor.css({
        width: '800px',
        height: '300px',
        margin: '20px auto',
        padding: '5px',

        border: '2px solid black',

        background: 'white',

        'text-align': 'left',
        overflow: 'auto',
        'word-wrap': 'break-word'
    })


    function command(name, arg) {
        if (typeof arg === 'undefined') {
            arg = ''
        }
        switch (name) {
            case 'createLink':
                arg = prompt("What's the adress link ?")
                break
            case 'insertImage':
                arg = prompt("What's the adress img ?")
                break
        }
        document.execCommand(name, false, arg)
    }

    // BOLD

    function inputBold() {
        $inputBold = $('<input type="button" value="G" />')
        $textarea.append($inputBold)
        $inputBold.css('font-weight', 'bold')
        $inputBold.click(function () {
            command('bold')
        })
    }

    // Italic

    function inputItalic() {
        $inputItalic = $('<input type="button" value="I" />')
        $textarea.append($inputItalic)
        $inputItalic.css('font-weight', 'italic')
        $inputItalic.click(function () {
            command('italic')
        })
    }

    // Line Through

    function inputLineThrough() {
        $inputLineThrough = $('<input type="button" value="B" />')
        $textarea.append($inputLineThrough)
        $inputLineThrough.css('text-decoration', 'line-through')
        $inputLineThrough.click(function () {
            command('strikeThrough')
        })
    }

    // Font Color

    function selectForColor() {
        $selectForColor = $("<select></select>")
        $optionForColor = $('<option disabled>- Color -</option>'
            + '<option value="black"selected>Black (default)</option>'
            + '<option value="green">Green</option>'
            + '<option value="blue">Blue</option>'
            + '<option value="red">Red</option>'
            + '<option value="orange">Orange</option>'
            + '<option value="brown">Brown</option>'
            + '<option value="purple">Purple</option>'
            + '<option value="yellow">Yellow</option>')
        $textarea.append($selectForColor)
        $selectForColor.append($optionForColor)
        $selectForColor.change(function () {
            command('forecolor', this.value)
        })
    }

    // Font Size

    function selectFontSize() {
        $selectForSize = $('<select></select>')
        $optionForSize = $('<option disabled>- Character Size -</option>'
            + '<option value="1">1</option>'
            + '<option value="2">2</option>'
            + '<option value="3">3 (default)</option>'
            + '<option value="4">4</option>'
            + '<option value="5">5</option>'
            + '<option value="6">6</option>')
        $textarea.append($selectForSize)
        $selectForSize.append($optionForSize)
        $selectForSize.change(function () {
            command('fontSize', this.value)
        })
    }

    // Align Center

    function inputAlignCenter() {
        $alignCenter = $('<input type="button" value="Align C" />')
        $textarea.append($alignCenter)
        $alignCenter.click(function () {
            command('justifyCenter')
        })
    }

    // Align Right

    function inputAlignRight() {
        $alignRight = $('<input type="button" value="Align R" />')
        $textarea.append($alignRight)
        $alignRight.click(function () {
            command('justifyRight')
        })
    }

    // Align Left

    function inputAlignLeft() {
        $alignLeft = $('<input type="button" value="Align L" />')
        $textarea.append($alignLeft)
        $alignLeft.click(function () {
            command('justifyLeft')
        })
    }

    // Justify

    function inputJustify() {
        $justify = $('<input type="button" value="Justify" />')
        $textarea.append($justify)
        $justify.click(function () {
            command('justifyFull')
        })
    }

}