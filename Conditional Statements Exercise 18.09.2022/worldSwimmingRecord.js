function worldSwimmingRecord(input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeters = Number(input[2]);

    let totalTime = distance * timeForMeters;
    let slowTime = Math.floor(distance / 15);
    totalTime = totalTime + (slowTime * 12.5);

    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        let diff = Math.abs(totalTime - worldRecord);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }


}
worldSwimmingRecord(["10464","1500","20"])
