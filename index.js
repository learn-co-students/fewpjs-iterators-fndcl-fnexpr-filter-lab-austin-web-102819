// Code your solution here
function findMatching(drivers, string){
    return drivers.filter( driverMatch => 
        driverMatch.toLowerCase() === string.toLowerCase()
)}

function fuzzyMatch(dataSet, search){
    return dataSet.filter( name => 
        name.toLowerCase().indexOf(search.toLowerCase()) === 0
)}
    
function matchName(list, testString){
    return list.filter( listItem => 
        listItem.name === testString
    )
}