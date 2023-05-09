function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  const BMI = weight / (height / 100) ** 2;

  if (BMI < 18.5) {
    alert(" you are underwieght");
  } else if (BMI <= 25) {
    alert(" healthy wieght");
  } else if (BMI <= 29.9) {
    alert(" overwieght");
  } else {
    alert(" above obesity");
  }
  alert(`my BMI is ${BMI}`);

  // challenge 3

  if (age >= 19 && age <= 24) {
    if (BMI >= 19 && BMI <= 24) {
      alert(" my BMI is Healthy");
    } else alert("unhealthy");
  }

  if (age >= 25 && age <= 34) {
    if (BMI >= 20 && BMI <= 25) {
      alert(`my BMI is Healthy`);
    } else alert("unhealthy");
  }

  if (age >= 35 && age <= 44) {
    if (BMI >= 21 && BMI <= 26) {
      alert(`my BMI is Healthy`);
    } else alert("unhealthy");
  }

  if (age >= 45 && age <= 54) {
    if (BMI >= 22 && BMI <= 27) {
      alert(`my BMI is Healthy`);
    } else alert("unhealthy");
  }
  if (age > 65) {
    if (BMI >= 24 && BMI <= 29) {
      alert(`my BMI is Healthy`);
    } else alert("unhealthy");
  }
  if (age >= 55 && age <= 64) {
    if (BMI >= 23 && BMI <= 28) {
      alert(`my BMI is Healthy`);
    } else alert("unhealthy");
  }
}
