import { imoPerformance } from "./imoResults.js";
let imoPerformanceResults="";

imoPerformance.forEach( (year) => {
    imoPerformanceResults+=`
        <div class="big-imo big-imo${year.year}">
			<div class="imo-an imo${year.year}-an}">
				<div>${year.year}</div>
			</div>
			<div class="imo-rang-international imo${year.year}-rang-international">
				<div>${year.rInt}</div>
			</div>
			<div class="imo-rang-africain imo${year.year}-rang-africain">
				<div>${year.rAf}</div>
			</div>
			<div class="imo-rang-arabe imo${year.year}-rang-arabe">
				<div>${year.rAr}</div>
			</div>
			<div class="imo-or imo${year.year}-or">
				<div>${year.or}</div>
			</div>
			<div class="imo-argent imo${year.or}-argent">
				<div>${year.ag}</div>
			</div>
			<div class="imo-bronze imo${year.year}-Bronze">
				<div>${year.br}</div>
			</div>
            <div class="imo-hm" imo${year.year}-hm">
				<div>${year.hm}</div>
			</div>
			<div class="imo-score-sotal imo${year.year}-score-total">
				<div >${year.total}</div>
			</div>
		</div>
    `
});
document.querySelector('.resultats-imo').innerHTML=imoPerformanceResults