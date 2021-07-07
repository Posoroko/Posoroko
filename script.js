const posoroko_h1 = document.getElementById('posoroko');
const mainSection_section = document.getElementById('mainSection');

console.log(mainSection_section.offsetWidth);
console.log(posoroko_h1.offsetWidth);


window.addEventListener('resize', function(){
    largeurRedimentionnable(20, posoroko_h1, mainSection_section, 0.8);
});
largeurRedimentionnable(20, posoroko_h1, mainSection_section, 0.8);



function largeurRedimentionnable(minSize,cible, parent, largeur)
{
    let minSizeInput = fontSizeCount = minSize;
    let texteCibleInput = cible;
    let parentInput = parent;

    rechercheLargeur();

function rechercheLargeur()
    {
        texteCibleInput.style.fontSize = fontSizeCount + 'px';
        if(texteCibleInput.offsetWidth < parentInput.offsetWidth * largeur)
        {
            fontSizeCount ++;
            rechercheLargeur();
        }
        else
        {
            fontSizeCount = minSizeInput;
        }
    }

}