

   


        document.getElementById("gradeForm").addEventListener("submit", function (event) {
            event.preventDefault();

            var percentage = parseFloat(document.getElementById("percentage").value);

            if (isNaN(percentage)) {
                document.getElementById("result").textContent = "Please enter a valid percentage.";
            } else {
                let grade;

                if (percentage >= 80) {
                    grade = "A+";
                } else if (percentage >= 70) {
                    grade = "A";
                } else if (percentage >= 60) {
                    grade = "B";
                } else if (percentage >= 50) {
                    grade = "C";
                } else {
                    grade = "F";
                }

                document.getElementById("result").textContent = "Your grade is: " + grade;
            }
        });
  

