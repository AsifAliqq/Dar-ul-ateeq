
const bar=()=> {
    
   
    let items = document.getElementById('items');
    let b = document.getElementById('b');
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    if(b2.style.rotate === '0deg'){
        items.style.visibility = 'visible';
        items.style.translate = '0 100%';
        b.style.translate = '0px 6px';
        b2.style.translate = '0px -6px';
        b.style.rotate = '45deg';
        b1.style.rotate = '-45deg';
        b2.style.rotate = '-45deg';
        
    }
    else {
        items.style.translate = '0 -100%';
        // items.style.display = 'none';
        b.style.translate = '0px 0px';
        b2.style.translate = '0px -0px';
        b.style.rotate = '0deg';
        b1.style.rotate = '0deg';
        b2.style.rotate = '-0deg';
    }

    
}
