function bmi(weight,height)
{
    BMI=weight/Math.pow(height,2);
    return Math.round(BMI);
}
console.log (bmi(prompt("Enter your weight in kgs"),prompt("Enter your height in meter")));
