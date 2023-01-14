function removeItem(rec) {
    console.log(rec);
    var filter = EmployeObj.filter((a, i) => {
        if (rec == a.id) {
            EmployeObj.splice(i, 1);
            displayTableData();
        }
    })

}