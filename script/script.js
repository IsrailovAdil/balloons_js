const row=document.querySelector('.row')
let balloonArr=[
    {
        id:1,
        src:'../assets/balloon.png',
    },
    {
        id:2,
        src:'../assets/balloon.png',
    },
    {
        id:3,
        src:'../assets/balloon.png',
    },
    {
        id:4,
        src:'../assets/balloon.png',
    },
    {
        id:5,
        src:'../assets/balloon.png',
    },
    {
        id:6,
        src:'../assets/balloon.png',
    },
    {
        id:7,
        src:'../assets/balloon.png',
    },
    {
        id:8,
        src:'../assets/balloon.png',
    },
    {
        id:9,
        src:'../assets/balloon.png',
    }
]

const handleCheck=(box)=>{
    box.classList.toggle('bg-color')
    box.children[1].checked=!box.children[1].checked
    console.log()
}

const handleShow=()=>{
    row.innerHTML=balloonArr.map(balloon=>{
        return`
        <div class="col-4">
        <div class="box">
        <img src="${balloon.src}" alt="balloon" class="img"/>
        <input type="checkbox">
</div>
</div>
        `}).join('')


    const checkboxes = document.querySelectorAll('.box');
    checkboxes.forEach((check, index) => {
        check.addEventListener('click', (e) => {
            const box = e.target.closest('.box');
            handleCheck(box);
        });
    });


    const mainCheckbox = document.querySelector('#mainCheckbox');
    mainCheckbox.addEventListener('click', () => {
        const allChecked = Array.from(checkboxes).every(box => box.children[1].checked);
        checkboxes.forEach(box => {
            if (allChecked) {
                box.classList.remove('bg-color');
                box.children[1].checked = false;
            } else {
                box.classList.add('bg-color');
                box.children[1].checked = true;
            }
        });
    });
}

handleShow()



