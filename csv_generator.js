function csvGenerator(data) {
    var text = "Name,Roll No.\n";

    data.forEach(record => {
        text = text + `${record.name},${record.roll_no}\n`;
    });

    var data = new Blob([text], { type: 'text/csv' });

    var url = window.URL.createObjectURL(data);

    var date = new Date()
    document.getElementById('download-link').download = `Attendance-${date.getDay()}-${date.getMonth()}-${date.getFullYear()}.csv`
    document.getElementById('download-link').href = url;
}

var data = [{
    name:'Ishan',
    roll_no:'157'
},{
    name:'Abhinav',
    roll_no:'012'
},{
    name:'Kirti',
    roll_no:'176'
}]

csvGenerator(data);