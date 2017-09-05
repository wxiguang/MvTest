Template.table.helpers({
    settings: function () {
        return {
            collection: GSRrecord,
            rowsPerPage: 30	,
            showFilter: true,
            fields: [
            { key: 'seqNum', label: '#' , headerClass: 'col-md-1'}, 
            { key: 'videoName', label: 'Video Name' , headerClass: 'col-md-2',fn: function (value) { return "Black Hole"; }}, 
            { key: 'sensorID', label: 'Sensor ID' , headerClass: 'col-md-1'}, 
            { key: 'Participant', label: 'Participant' , headerClass: 'col-md-2',fn: function (value) { return "Participant Name"; }}, 
            { key: 'value', label: 'GSR value' , headerClass: 'col-md-1'}, 
            { key: 'time', label: 'Time' , headerClass: 'col-md-3'}, 
            { key: 'valid', label: 'Is Valid' , fn: function (value) {
        return new Spacebars.SafeString("<span class= \"label label-success\"" + ">Valid</span>");
} }, 
            ]
        };
    }
});



