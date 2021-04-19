//#region Globals ----

let CURRENT_CARD_ID = 0

//#endregion Globals

//#region DATA
const Items = [
    {
        Brand: 'Kia',
        Model: 'Sportage',
        Color: 'Black',
        Price: '$20.000',
        Year: 2016,
        Picture: './sources/images/CarsImages/KIA-Sportage.jpg',
        Id: CURRENT_CARD_ID++,
    },

    {
        Marca: 'Chevrolet',
        Model: 'Onix',
        Color: 'Black',
        Price: '$25.000',
        Year: 2019,
        Picture: './sources/images/CarsImages/KIA-Sportage.jpg',
        Id: CURRENT_CARD_ID++,
    },

]


console.log(Items);


//#endregion DATA




//#region Generic Functions ============================


function ShowPannel(id) {
    document.getElementById(id).classList.remove('d-none');
}

function HidePannel(id) {
    document.getElementById(id).classList.add('d-none');
}


function changeButtonName(id, name) {

    document.getElementById(id).innerText = name

}

function ToggleButton(number, callback1) {

    switch (number) {
        case 1:
            callback1()
            break
        case 2:
            callback1();
    }
}


function PrintInHtml(id, content) {
    const placeToPrint = document.getElementById(id);
    placeToPrint.innerHTML = '';
    placeToPrint.innerHTML += content;

}






//#endregion


//#region FORMS ACTIONS ========================



function switchShowButton() {

    const message1 = 'Show me more !';
    const message2 = 'Show me less !';

    if (document.getElementById('Show-More-Button').innerText === message1) {
        ToggleButton(1, () => document.getElementById('Show-More-Button').innerText = message2);
        ShowPannel('Card-section-pannel');
        HidePannel('Par-Description');

        ShowPannel('Add-car-button');
    }

    else if (document.getElementById('Show-More-Button').innerText === message2) {
        ToggleButton(2, () => document.getElementById('Show-More-Button').innerText = message1);
        HidePannel('Card-section-pannel');
        ShowPannel('Par-Description');

        HidePannel('Add-car-button');
    }

}

//#endregion









//#region CRUD ===============================

//#region CREATE ++++++++++++++++

function createNewCar() {

    const brand = document.getElementById('Brand-input').value;
    const model = document.getElementById('Model').value;
    const color = document.getElementById('Color').value;
    const year = document.getElementById('Year').value;
    const price = '$' + document.getElementById('Price').value;
    const image = document.getElementById('Image-link-input').value;
    const id = CURRENT_CARD_ID++;


    const newCar = {
        Brand: brand,
        Model: model,
        Color: color,
        Year: year,
        Price: price,
        Image: image,
        Id: id,


    }


    console.log(newCar);
    Items.push(newCar);
    console.log(Items);
    GenerateCard();
}


function GenerateCard() {

    let content = ''
    for (let i = 0; i < Items.length; i++) {
        content += `
        <div class="card-blureprint">

            <div class="tittle-container d-flex align-items-center">

                <h4 STYLE="text-transform:uppercase"> ${(Items[i].Brand)} ${(Items[i].Model)}</h4>
            </div>
            <div class="card-container d-flex" id="Card-Container">

                <!-- #region CHANGES DYNAMICALLY -->
                
                        <!-- #region Info pannel -->
                <div class="text-info-container d-flex px-2">
                    <div class="a-text-container pe-2">
                        <ul>
                            <li>Marca:  ${(Items[i].Brand)}</li>
                            <li class="mt-2">Modelo: ${(Items[i].Model)}</li>
                            <li class="mt-2">Color: ${(Items[i].Color)}</li>
                        </ul>
                    </div>

                    <div class="b-text-container px-3 me-4">
                        <ul>
                            <li class="mt-2">Precio :${(Items[i].Price)}</li>
                            <li class="mt-2">Año: ${(Items[i].Year)}</li>
                        </ul>    
                    </div>  
                    
                    
                    <div class="edit-delete-buttons-container lg-show-hide">
                        <button class="btn btn-outline-light mx-1">
                            <i class="far fa-edit"></i>
                        </button>
                        <button class="btn btn-outline-light mx-1">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </div>


                </div>

                <div class="image-container">
                    <img src=" ${(Items[i].Picture)}" alt=" ${(Items[i].Model)}">
                    
                    <div class="edit-delete-buttons-container s-show-hide">
                        <button class="btn btn-outline-light mx-1">
                            <i class="far fa-edit"></i>
                        </button>
                        <button class="btn btn-outline-light mx-1">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </div>

                </div>


            </div>
        </div>
    `
    }

    PrintInHtml('Card-section-pannel', content);

}

//#endregion CREATE ****************


//#region UPDATE \\\\\\\\\\\\\\\\\\\






//#endregion Update /////////////////



//#endregion CRUD --------------------------

