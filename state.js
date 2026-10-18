let records = [];

export function getRecords(){
    return records
}

export function addRecords(record){
    records.push(record);
    
}

export function deleteRecords(id){
    records = records.filter((record) => record.id !== id);


}

export function updateRecords(id,description, date, amount,category){
    const record = records.find((r => r.id === id));
    if (!record) return;
    record.amount = amount;
    record.category = category;
    record.description = description;
    record.date = date;
    record.updatedAt = new Date().toISOString();


}