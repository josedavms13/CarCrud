

//#region Generic Functions ============================


function ShowPannel(id){
    document.getElementById(id).classList.remove('d-none');
}

function HidePannel(id){
    document.getElementById(id).classList.add('d-none');
}


function changeButtonName(id, name){

    document.getElementById(id).innerText = name

}

function ToggleButton(number, callback1){

    switch(number){
        case 1:
            callback1()
            break
        case 2:
            callback1();
    }
}

//#endregion


//#region FORMS ACTIONS ========================



function switchShowButton(){

    const message1 = 'Show me more !';
    const message2 = 'Show me less !';

    if(document.getElementById('Show-More-Button').innerText === message1){
        ToggleButton(1, ()=> document.getElementById('Show-More-Button').innerText = message2);       
        ShowPannel('Card-section-pannel');
        HidePannel('Par-Description');

        ShowPannel('Add-car-button');            
    }

    else if(document.getElementById('Show-More-Button').innerText === message2){
        ToggleButton(2, ()=> document.getElementById('Show-More-Button').innerText = message1);
        HidePannel('Card-section-pannel');
        ShowPannel('Par-Description');

        HidePannel('Add-car-button');            
    }

}

//#endregion




const Items = [
    {
        Brand : 'Kia',
        Model : 'Sportage',
        Color : 'Black',
        Price : '$20.000',
        Year : 2016,
        Picture : './sources/images/CarsImages/KIA-Sportage.jpg'
    },

    {
        Marca : 'Chevrolet',
        Model : 'Onix',
        Color : 'Black',
        Price : '$25.000',
        Year : 2019,
        Picture : './sources/images/CarsImages/KIA-Sportage.jpg'
    },

]

