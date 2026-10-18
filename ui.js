
import { isValidAmount, isValidCategory, isValidDate,isValidDescription,isValidDuplicate} from "./validator.js";
import { getRecords,addRecords,deleteRecords,updateRecords } from "./state.js";


const Cancelrecordbutton = document.getElementById("Cancel-record-button")
const Searchrecord = document.getElementById("Search-record")
const Sortrecord = document.getElementById("Sort-record")



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
watchBox(descriptionbox,descriptionerror,isValidDescription,"Spaces at the beginning is an error")
watchBox(datebox,dateerror,isValidDate,"Should be a real date")
watchBox(categorybox,categoryerror,isValidCategory,"Choose from the options below")

function checkAllrecords(){
  let allGood = true;

  if (!isValidAmount(amountbox.value)){
    fromMessage(amounterror,amountbox,"Amount must be a number like 12")
allGood = false;
  } else{
  fromMessage(amounterror,amountbox,"");




};

  if (!isValidDescription(descriptionbox.value)){
    fromMessage(descriptionerror,descriptionbox,"no spaces at the start")
allGood = false;
  } else{
  fromMessage(descriptionerror,descriptionbox,"");



  }

if (!isValidCategory(categorybox.value)){
    fromMessage(categoryerror,categorybox,"Choose from the options below")
allGood = false;
  } else{
  fromMessage(categoryerror,categorybox,"");



  }
if (!isValidDate(datebox.value)){
    fromMessage(dateerror,datebox,"Should be a real date")
allGood = false;
} else{
  fromMessage(dateerror,datebox,"");


  }return allGood}

const Addrecordbutton = document.getElementById("Add-record-button");

Addrecordbutton.addEventListener("click",() =>{
  console.log("add clicked");
  if (! checkAllrecords()) return;
  console.log("check passed");
  function makeCell(text){
    const cell = document.createElement("td");
    cell.textContent = text;
    return cell;

  }
  function drawRecords() {
    recordtbody.replaceChild();

    for (const record of getRecords()){
      const row = document.createElement("tr");
      row.append(makeCell(record.description), makecell(record.amount), makecell(record.category),makecell(record.date),makecell(record.actions))
      recordtbody.appendChild(row); 
    }

  }

  const now = new Date().toISOString();

  addRecords({
    id:"record_"+ Date.now(),
    description:"lunch",
    amount:Number(amountbox.value),
    date:"2026-10-13",

    createdAt:now,
    updatedArt:now,

    
  })
  descriptionbox.value ="";
  amountbox.value = "";
  categorybox.value = "";
  datebox.value = "";
  console.table(getRecords()); 
});


console.log("draw called");
console.log("saved:",getRecords().length);

console.log("record: ",getRecords().length);

const recordtbody = document.getElementById("record-tbody")

console.log("rows in table: ",recordtbody.children.length);














