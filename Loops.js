//for Loop
// it had 4 varients - for, for of, for in, for each

for (let i = 0; i < 5; i++)
    console.log(i);

for (let j = 0; j <= 5; j++)
    console.log(j);

//identifier can sart with "_" followed by 1, rules of variables.
for (let _1 = 0; _1 <= 5; _1++)
    console.log(_1);

for (let sammu = 0; sammu <= 18; sammu++) {
    if (sammu > 15) {
        console.log("Gets Iphone");
    }
    else {
        console.log("No Iphone");
    }
}

for (i = 0; i < 0; i++) {
    if (i === 1) continue; //this is single statement.
    console.log(i);
}
//0 === 0 no if fails  log will print 0;
//1 === 1 yes if block executes continue will send bk the ctrl to for loop.
//no log is trinted when i is 1 as if gets executed.
//when 2 === 1 if fails log prints 2
//when i is 3 3<3 condition fails for will not get executed.