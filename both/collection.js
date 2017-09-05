GSRrecord = new Mongo.Collection("gsrrecord");
TasksCollection = new Mongo.Collection("tasks");

var Schemas = {};

Schemas.GSRrecord = new SimpleSchema({
    videoName: {
        type: String,
        label: "Video Name",
        optional: true,
        max: 100
    },
    sensorID: {
        type: String,
        label: "SID",
        max: 200,
        optional: false
    },
    value: {
        type: SimpleSchema.Integer,
        label: "Value",
        min: 0
    },
    time: {
        type: Date,
        label: "Time",
        optional: true
    },
    valid: {
        type: Boolean,
        label: "IsValid",
        optional: true
    },
});