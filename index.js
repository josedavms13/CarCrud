//#region Globals ----

let CURRENT_CARD_ID = 0


let SELECTED_ELEMENT_ID = 0
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
        Brand: 'Chevrolet',
        Model: 'Onix',
        Color: 'White',
        Price: '$25.000',
        Year: 2019,
        Picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Chevrolet_Onix_006.jpg/800px-Chevrolet_Onix_006.jpg',
        Id: CURRENT_CARD_ID++,
    },

    {
        Brand: 'Farrari',
        Model: 'F8',
        Color: 'Yellow',
        Price: '$1.125.000',
        Year: 2020,
        Picture: 'https://s3-prod.autonews.com/s3fs-public/styles/width_792/public/Ferrari%20F8%20Spider%20web.jpg',
        Id: CURRENT_CARD_ID++,
    },

    {
        Brand: 'Volkswagen',
        Model: 'VW',
        Color: 'Green',
        Price: '$5.000',
        Year: 1992,
        Picture: 'https://previews.123rf.com/images/neydt/neydt1905/neydt190500188/122445003-mulhouse-france-12-may-2019-green-old-volkswagen-beetle-parked-in-the-street.jpg',
        Id: CURRENT_CARD_ID++,
    },


]


// console.log(Items);


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

// Prints the current array of cars 
PrintInHtml('Card-section-pannel',GenerateCard())

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


//#region INPUT FORM SUBMIT FUNCTIONS ===============


function switchtoSubmitBtn(){
    const submitButon = document.getElementById('Submit-edit-btn');

    console.log(submitButon);
    submitButon.classList.add('btn');
    submitButon.classList.add('btn-success');

    submitButon.innerText= 'Submit';
    
}


function switchToEditBtn(ItemID){
    const submitButon = document.getElementById('Submit-edit-btn');

    console.log(submitButon);
    submitButon.classList.add('btn');
    submitButon.classList.add('btn-warning');

    submitButon.innerText= 'Edit';


    SELECTED_ELEMENT_ID = ItemID;

    console.log('Element ID =' );
    console.log(SELECTED_ELEMENT_ID);
}


function SubmitButtonFunctions(){

    const buttonState = document.getElementById('Submit-edit-btn').innerText;

    console.log(buttonState);
    if( buttonState=== 'Submit'){
        createNewCar();
        console.log('Submit');
    }    

    if(buttonState === 'Edit'){
        console.log('Edit');
        updateCarInfo();
    } 



}
//#endregion INPUT FORM SUBMIT FUNCTIONS ===============




//#endregion FORMS ACTIONS -------------------------------





//#region CRUD ===============================

//#region General CRUD Functions   ----->

function GenerateCard() {

    let content = ''
    for (let i = 0; i < Items.length; i++) {
        content += `
        <div class="card-blureprint mt-5">

            <div class="tittle-container d-flex align-items-center">

                <h4 STYLE="text-transform:uppercase"> ${(Items[i].Brand)} ${(Items[i].Model)}</h4>
            </div>
            <div class="card-container d-flex" id="Card-Container">

                <!-- #region CHANGES DYNAMICALLY -->
                
                        <!-- #region Info pannel -->
                <div class="text-info-container d-flex px-2">
                    <div class="a-text-container pe-2">
                        <ul>
                            <li>Brand:  ${(Items[i].Brand)}</li>
                            <li class="mt-2">Model: ${(Items[i].Model)}</li>
                            <li class="mt-2">Color: ${(Items[i].Color)}</li>
                        </ul>
                    </div>

                    <div class="b-text-container px-3 me-4">
                        <ul>
                            <li class="mt-2">Price :${(Items[i].Price)}</li>
                            <li class="mt-2">Year: ${(Items[i].Year)}</li>
                        </ul>    
                    </div>  
                    
                    
                    <div class="edit-delete-buttons-container lg-show-hide">
                        <button class="btn btn-outline-light mx-1" onclick="ShowPannel('New-car-form'), editBtnFun(${Items[i].Id})">
                            <i class="far fa-edit"></i>
                        </button>
                        <button class="btn btn-outline-light mx-1" onclick="deleteCar(${Items[i].Id})">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </div>


                </div>

                <div class="image-container">
                    <img src=" ${(Items[i].Picture)}" alt=" ${(Items[i].Model)}">
                    
                    <div class="edit-delete-buttons-container s-show-hide" >
                        <button class="btn btn-outline-light mx-1" onclick="ShowPannel('New-car-form'), editBtnFun(${Items[i].Id})">
                            <i class="far fa-edit"></i>
                        </button>
                        <button class="btn btn-outline-light mx-1"onclick="deleteCar(${Items[i].Id})">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </div>

                </div>


            </div>
        </div>
    `
    }


    PrintInHtml('Card-section-pannel', content);

    return content
}





function IndexOfId(){
    const index = Items.findIndex((car)=> car.Id === SELECTED_ELEMENT_ID)
    return index
}

//#endregion General CRUD Functions   <------




//#region CREATE ++++++++++++++++




function createNewCar() {

    console.log('entra a creat car')

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
        Picture: image,
        Id: id,


    }


    console.log(newCar);
    Items.push(newCar);
    console.log(Items);
    GenerateCard();
}



//#endregion CREATE ****************





//#region UPDATE \\\\\\\\\\\\\\\\\\\

function editBtnFun(ItemID) {
    console.log('se esta llamando')
    switchToEditBtn(ItemID);
    showCurrentInfoInEditForm();
}



function showCurrentInfoInEditForm(){

    let brand = document.getElementById('Brand-input').value = Items[IndexOfId()].Brand;
    let model = document.getElementById('Model').value = Items[IndexOfId()].Model;;
    let color = document.getElementById('Color').value = Items[IndexOfId()].Color;
    let price = Items[IndexOfId()].Price;
    price = price.slice(1);
    console.log(price);

    price = document.getElementById('Price').value = price
    let year = document.getElementById('Year').value = Items[IndexOfId()].Year;
    let image = document.getElementById('Image-link-input').value = Items[IndexOfId()].Picture;

    const toLog = [brand, model, color, price, year, image]
    console.log(toLog);
}

function updateCarInfo(ItemId){

    const brand = document.getElementById('Brand-input').value
    const model = document.getElementById('Model').value
    const color = document.getElementById('Color').value
    const price = '$'+document.getElementById('Price').value
    const year = document.getElementById('Year').value
    const image = document.getElementById('Image-link-input').value

    const currentIndex = IndexOfId(SELECTED_ELEMENT_ID)

    Items[currentIndex].Brand = brand;
    Items[currentIndex].Model = model;
    Items[currentIndex].Color = color;
    Items[currentIndex].Price = price;
    Items[currentIndex].Year = year;
    Items[currentIndex].Picture = image;


    console.log(Items);
    GenerateCard();
}



//#endregion Update /////////////////



//#region Delete --------------


function deleteCar(ItemId){
    SELECTED_ELEMENT_ID = ItemId;
    Items.splice(IndexOfId(ItemId), 1);
    
    GenerateCard();
}



//#endregion delete



//#endregion CRUD --------------------------

