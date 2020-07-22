// slots__items
function createItemsForVacanciesContainer() {
    for (let i = 0; i < vacanciesObj.length; i++) {
        let slotsItems = document.createElement('div');
        slotsItems.classList.add('slots__items');
        slotsItems.dataset.idAjax =vacanciesObj[i].id ;

        let slotsContentP = document.createElement('p');
        slotsContentP.classList.add('slotsContentP');
        slotsContentP.innerText = vacanciesObj[i].city;
        slotsItems.append(slotsContentP);

        let slotsContentDivFlex = document.createElement('div');
        slotsContentDivFlex.classList.add('slotsContentDivFlex');

        let slotsDivFlexDesc = document.createElement('p');
        slotsDivFlexDesc.classList.add('slotsDivFlexDesc');
        let vacDesc = vacanciesObj[i].vacancy;
        let vacDesc1, vacDesc2;
        vacDesc1 = vacDesc.slice(0, vacDesc.indexOf(" ", 0));
        vacDesc2 = vacDesc.slice(vacDesc.indexOf(" ", 0), vacDesc.length);
        vacDesc = vacDesc1 + `\n` + vacDesc2;
        slotsDivFlexDesc.innerHTML = vacDesc;
        slotsContentDivFlex.append(slotsDivFlexDesc);

        let slotsDivFlexArrow = document.createElement('img');
        slotsDivFlexArrow.classList.add('slotsDivFlexArrow');
        slotsDivFlexArrow.src = 'images/icon1.svg';
        slotsContentDivFlex.append(slotsDivFlexArrow);

        let slotsDivFlexArrowB = document.createElement('img');
        slotsDivFlexArrowB.classList.add('slotsDivFlexArrowB');
        slotsDivFlexArrowB.src = 'images/iconb.svg';
        slotsDivFlexArrowB.style.display = 'none';
        slotsContentDivFlex.append(slotsDivFlexArrowB);

        slotsItems.append(slotsContentDivFlex);

        let slotsContentSalary = document.createElement('p');
        slotsContentSalary.classList.add('slotsContentSalary');
        if (vacanciesObj[i].salary === null) {
            slotsContentSalary.innerText = "З/п не указана";

        } else {
            slotsContentSalary.innerText = "З/П " + vacanciesObj[i].salary + "$";
        }
        slotsItems.append(slotsContentSalary);
        vacanciesContainer.append(slotsItems);
    }
    let slotsItems2 = document.createElement('div');
    slotsItems2.classList.add('slots__items');
    slotsItems2.classList.add('slots__items-nohover');
    vacanciesContainer.append(slotsItems2);
    let slotsItems3 = document.createElement('div');
    slotsItems3.classList.add('slots__items');
    slotsItems3.classList.add('slots__items-nohover');
    vacanciesContainer.append(slotsItems3);
}

createItemsForVacanciesContainer();