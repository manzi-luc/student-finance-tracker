export function getRecords(){
    return records
    
}

export function addRecords(record){
    records.push(record);
    save();
    
    
}

export function deleteRecords(id){
    records = records.filter((record) => record.id !== id);
    save();


}

export function updateRecords(id,description, date, amount,category){
    const record = records.find((r => r.id === id));
    if (!record) return;
    record.amount = amount;
    record.category = category;
    record.description = description;
    record.date = date;
    record.updatedAt = new Date().toISOString();


save();
}

const Key = "records-data";

function load() {
    try{
        return JSON.parse(localStorage.getItem(Key) || "[]");
    }catch{
        return [];
    }
}

function save() {
    localStorage.setItem(Key,JSON.stringify(records));
}

let records = load();

export function addRecords(record){
    records.push(record);
    save();
}

export function replaceRecords(list) {
    records = list;
    save();
}