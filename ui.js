
import { isValidAmount, isValidCategory, isValidDate,isValidDescription,isValidDuplicate} from "./validator.js";
import { getRecords,addRecords,deleteRecords,updateRecords } from "./state.js";


const Cancelrecordbutton = document.getElementById("Cancel-record-button")
const Searchrecord = document.getElementById("Search-record")
const Sortrecord = document.getElementById("Sort-record")
const recordtbody = document.getElementById("record-tbody")


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
  if (! checkAllrecords()) return;
  const now = new Date().toISOString();

  addRecords({
    id:"record_"+ Date.now(),
    description:descriptionbox.value,
    amount:Number(amountbox.value),
    date:datebox.value,
    category: categorybox.value,

    createdAt:now,
    updatedAt:now,

    
  })
  descriptionbox.value ="";
  amountbox.value = "";
  drawRecords();
});

function makeCell(text){
  const cell = document.createElement("td");
  cell.textContent = text;
  return cell;
}


function drawRecords() {
  
    recordtbody.replaceChildren();
  for (const record of getRecords()){
    const row = document.createElement("tr");
    const deletebutton = document.createElement("button");
      deletebutton.type = "button";
      deletebutton.textContent = "Delete";
      deletebutton.dataset.id = record.id;
      deletebutton.setAttribute("aria-label","Delete "+ record.description);


      const actionsCell = document.createElement("td");
      actionsCell.appendChild(deletebutton);
        
      row.append(makeCell(record.description), makeCell(record.amount), makeCell(record.category),makeCell(record.date),actionsCell)
      recordtbody.appendChild(row); 
  }

// safe regex compiler 
      function compileRegex(text,flags){
  try{
    return text ? new RegExp(text,flags) : null;
  }catch{
    return null;
  }
}



      {


      
      function Sortrecords() {
        for (const record of Sortrecords());
          let list = [ ...getRecords()];
  const re = compileRegex(Searchrecord.value,casebox.checked ? "i" : "")
  searchMessage.textContent = searchbox.value && !re ? "that pattern isn't valid yet" :"";
  if (re) {
    list = list.filter((record) => re.test(record.description));
  


  }  ;
        if (Sortrecord.value === "description") {
          list.sort((a,b) => a.description.localeCompare(b.description));
        } else if(Sortrecord.value === "amount-up"){
          list.sort((a,b) => a.amount -b.amount);
        } else if (Sortrecord.value === "amount-down"){
          list.sort((a,b) => b.amount - a.amount);
        }else {
          list.sort((a,b) => b.date.localeCompare(a.date));
        }
        
        return list;

      }
}}

Sortrecord.addEventListener("change", drawRecords);
  
  
    recordtbody.addEventListener("click",(event)=>{
      const button = event.target.closest("button");
    if (!button) return;

    if (confirm("Delete this record?")){
      deleteRecords(button.dataset.id);
      drawRecords();
    }});
drawRecords();
const searchMessage = document.getElementById("search-message");

















