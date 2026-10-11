const EventEmiter = require("events");

const emmiter = new EventEmiter();

emmiter.on("bellRing", () => {
    console.log("We need to run");
});

console.log("Event loding...")
setTimeout(()=> {
    emmiter.emit("bellRing")
},2000)