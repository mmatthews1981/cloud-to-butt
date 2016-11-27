// uses simplified loop from https://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Donald Trump/gi, 'Alex Mickelson\'s 3rd-favorite butt boy, Donald Trump');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}