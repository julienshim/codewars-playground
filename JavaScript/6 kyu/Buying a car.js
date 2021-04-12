function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let month=0;
  let saved = startPriceOld;
  while (saved < startPriceNew) {
    month++;
    if (month % 2 === 0) {
      percentLossByMonth += 0.5
    }
    startPriceOld -= startPriceOld * percentLossByMonth/100;
		startPriceNew -= startPriceNew * percentLossByMonth/100;
		saved = startPriceOld + (savingperMonth * month);
    };
   return [month,Math.round(saved-startPriceNew)];
}
