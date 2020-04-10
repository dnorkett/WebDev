const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//LOOPS
for(let i =0; i < companies.length; i++) {
    console.log(companies[i]);
}


companies.forEach(function(company) {
    console.log(company.name);
} );


//FILTER
let canDrink = [];
for (let i=0; i < ages.length ; i++) {
    if ( ages[i] >= 21) { 
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);


let canDrinkFilter = ages.filter(function(age){
    if ( age >=  21) {
        return true;
    }
});
console.log(canDrinkFilter);


let canDrinkArrow = ages.filter(age => age >= 21);
console.log(canDrinkArrow);


let retailCompanies = companies.filter(function(company) {
    if (company.category == "Retail" ){
        return true;
    }
});
console.log(retailCompanies);


let retailCompaniesArrow = companies.filter(company => company.category == 'Retail');
console.log(retailCompaniesArrow);


let eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
console.log(eightiesCompanies);


let lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);


//MAP
let companyNames = companies.map(function(company){
    return company.name;
})
console.log(companyNames);


let companyNamesArrow = companies.map(company => company.name);
console.log(companyNamesArrow);


let agesDouble = ages.map(age => age*2);
console.log(ages);
console.log(agesDouble);


let agesDoubleOld = ages.map(function(age){
    return age*2;
});
console.log(agesDoubleOld);


//SORT
let sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start) {
        return 1; 
    } else {
            return -1;
        }
        });
console.log(sortedCompanies);