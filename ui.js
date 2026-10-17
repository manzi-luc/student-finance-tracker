
import { isValidAmount, isValidCategory, isValidDate,isValidDescription,isValidDuplicate} from "./validator.js";



const amountbox = document.getElementById("Amount");

const amounterror = document.getElementById("Amount-error");

const descriptionbox = document.getElementById("Description");

const descriptionerror = document.getElementById("Description-error");

const datebox = document.getElementById("Date");

const dateerror = document.getElementById("Date-error");

const categorybox = document.getElementById("Category");

const categoryerror = document.getElementById("Category-error");



function fromMessage(errorline, box, message) {
  errorline.textContent = message;
  box.setAttribute("aria-invalid", message ? "true" : "false");
}

function watchBox(box,errorline,findit, message) {
  box.addEventListener ( "input", () =>{
  if (!findit(box.value)){
    fromMessage(errorline,box,message)
} else{
  fromMessage(errorline,box,"");
}
});}
watchBox(amountbox,amounterror,isValidAmount,"Amount must be a number like 12")
watchBox(descriptionbox,descriptionerror,isValidDescription,"It can't be empty")
watchBox(datebox,dateerror,isValidDate,"looks like 2026-10-14")
watchBox(categorybox,categoryerror,isValidCategory,"There is different options")







