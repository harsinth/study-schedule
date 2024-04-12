document.addEventListener("DOMContentLoaded", function() {
    var scheduleItems = [
        { day: 1, chapter: "Linear Equations in One Variable", activity: "Write a short story about a memorable experience you had. Focus on describing the setting, characters, and emotions."},
        { day: 2, chapter: "Data Handling", activity: "Write a letter to a family member or friend about your favorite hobby or activity. Explain why you enjoy it and how it benefits you."},
        { day: 3, chapter: "Rational Numbers", activity: "Write an essay on the importance of kindness in daily life. Provide examples of acts of kindness and their impact."},
        { day: 4, chapter: "Chemical Effects of Electric Current", activity: "Write a short story with a surprise ending. Focus on building suspense and keeping the reader engaged until the end."},
        { day: 5, chapter: "Force and Pressure", activity: "Write a letter to your future self. Include your hopes, dreams, and goals for the future."},
        { day: 6, chapter: "Friction", activity: "Write a descriptive essay about your favorite place. Use vivid language to paint a picture for the reader."},
        { day: 7, chapter: "Revise", activity: "Write an essay reflecting on your learning experiences from the past week. Discuss challenges faced and strategies for improvement."},
        { day: 8, chapter: "Squares and Square Roots", activity: "Write a letter to a role model or someone you admire. Express your appreciation and share how they have inspired you."},
        { day: 9, chapter: "Cubes and Cube Roots", activity: "Write an essay on the benefits of learning mathematics. Discuss its importance in everyday life and various career fields."},
        { day: 10, chapter: "Exponents and Powers", activity: "Write a short story set in a world where everyone has superpowers. Explore the themes of responsibility and morality."},
        { day: 11, chapter: "Materials: Metals and Non-Metals", activity: "Write an essay discussing the impact of technology on society. Consider both positive and negative effects."},
        { day: 12, chapter: "Synthetic Fibres and Plastics", activity: "Write a letter to your future self, reflecting on your achievements and experiences over the past year."},
        { day: 13, chapter: "Some Natural Phenomena", activity: "Write a short story about a character's encounter with a natural disaster. Explore themes of resilience and adaptation."},
        { day: 14, chapter: "Revise", activity: "Write an essay on the importance of lifelong learning. Discuss strategies for staying curious and motivated to learn throughout life."},
        { day: 15, chapter: "Understanding Quadrilaterals", activity: "Write a letter to a younger sibling or relative, offering advice on navigating challenges they may face in school or life."},
        { day: 16, chapter: "Practical Geometry", activity: "Write a short story about a character's journey to solve a practical problem using geometry. Emphasize creativity and critical thinking."},
        { day: 17, chapter: "Comparing Quantities", activity: "Write an essay on the role of money in modern society. Discuss its impact on individuals, communities, and global economies."},
        { day: 18, chapter: "Light", activity: "Write a letter to your future self, reflecting on your personal growth and accomplishments over the past year."},
        { day: 19, chapter: "Sound", activity: "Write an essay discussing the importance of communication skills in today's world. Provide examples of effective communication in various contexts."},
        { day: 20, chapter: "Coal and Petroleum", activity: "Write a short story about a character's journey to discover alternative energy sources. Explore themes of innovation and sustainability."},
        { day: 21, chapter: "Revise", activity: "Write an essay reflecting on your strengths and weaknesses as a learner. Discuss strategies for maximizing your strengths and addressing your weaknesses."},
        { day: 22, chapter: "Algebraic Expressions and Identities", activity: "Write a letter to a teacher or mentor who has had a significant impact on your life. Express your gratitude and share how their guidance has influenced you."},
        { day: 23, chapter: "Visualising Solid Shapes", activity: "Write an essay on the importance of creativity in problem-solving. Discuss how visualizing solutions can lead to innovative ideas and breakthroughs."},
        { day: 24, chapter: "Mensuration", activity: "Write a short story involving solid shapes. Prompt: How can visualizing solid shapes enhance spatial reasoning?"},
        { day: 25, chapter: "Direct and Inverse Proportions", activity: "Write an essay on the role of mathematics in art and design. Discuss how mathematical principles are used to create aesthetic beauty and symmetry."},
        { day: 26, chapter: "Factorisation", activity: "Write a letter to your future self, outlining your goals and aspirations for the next five years. Reflect on the steps you need to take to achieve them."},
        { day: 27, chapter: "Introduction to Graphs", activity: "Write an essay discussing the impact of social media on interpersonal relationships. Consider both positive and negative effects, and propose strategies for maintaining healthy digital habits."},
        { day: 28, chapter: "Revise", activity: "Write a short story involving the concept of cubes and cube roots. Prompt: How can understanding cubes and cube roots help in problem-solving?"},
        { day: 29, chapter: "Playing with Numbers", activity: "Write a letter to a friend explaining the concept of rational numbers. Question: How do rational numbers help in understanding fractions?"},
        { day: 30, chapter: "Microorganisms: Friend and Foe", activity: "Write an essay on the importance of kindness in daily life. Provide examples of acts of kindness and their impact."},
        { day: 31, chapter: "Combustion and Flame", activity: "Write a short story with a surprise ending. Focus on building suspense and keeping the reader engaged until the end."},
        { day: 32, chapter: "Conservation of Plants and Animals", activity: "Write a letter to a local authority addressing concerns about air and water pollution. Question: How can individuals and communities contribute to reducing pollution?"},
        { day: 33, chapter: "Cell: Structure and Functions", activity: "Write a descriptive essay about your favorite place. Use vivid language to paint a picture for the reader."},
        { day: 34, chapter: "Reproduction in Animals", activity: "Write a short poem about nature or a favorite memory. Focus on imagery and sensory details."},
        { day: 35, chapter: "Revise", activity: "Write a letter to a role model or someone you admire. Express your appreciation and share how they have inspired you."},
        { day: 36, chapter: "Reaching The Age of Adolescence", activity: "Write a persuasive essay on a topic you feel strongly about. Present arguments and evidence to support your position."},
        { day: 37, chapter: "Pollution of Air and Water", activity: "Write a dialogue between two characters discussing a current event or social issue. Explore different perspectives."},
        { day: 38, chapter: "Crop Production and Management", activity: "Write a short story set in a futuristic world. Imagine new technologies and societal changes."},
        { day: 39, chapter: "Stars and The Solar System", activity: "Write a reflective essay on a lesson you learned from a mistake or failure. Discuss how it has shaped you."}
    ];
  
    var scheduleList = document.getElementById("schedule-list");

    scheduleItems.forEach(function(item) {
        var listItem = document.createElement("li");
        listItem.className = "schedule-item";

        // Create label for the day
        var dayLabel = document.createElement("label");
        dayLabel.textContent = "Day " + item.day;
        dayLabel.style.cursor = "pointer";
        listItem.appendChild(dayLabel);

        // Create checkbox for the chapter
        var chapterCheckbox = document.createElement("input");
        chapterCheckbox.type = "checkbox";
        chapterCheckbox.className = "chapter-checkbox";
        chapterCheckbox.style.display = "none"; // Hide the chapter checkbox
        listItem.appendChild(chapterCheckbox);

        // Create label for the chapter
        var chapterLabel = document.createElement("label");
        chapterLabel.textContent = item.chapter;
        chapterLabel.style.display = "none"; // Hide the chapter label
        listItem.appendChild(chapterLabel);

        // Create checkbox for the activity
        var activityCheckbox = document.createElement("input");
        activityCheckbox.type = "checkbox";
        activityCheckbox.className = "activity-checkbox";
        activityCheckbox.style.display = "none"; // Hide the activity checkbox
        listItem.appendChild(activityCheckbox);

        // Create label for the activity
        var activityLabel = document.createElement("label");
        activityLabel.textContent = item.activity;
        activityLabel.style.display = "none"; // Hide the activity label
        listItem.appendChild(activityLabel);

        scheduleList.appendChild(listItem);

        // Add click event listener to toggle chapter and activity visibility
        dayLabel.addEventListener("click", function() {
            chapterCheckbox.style.display = chapterCheckbox.style.display === "none" ? "block" : "none";
            chapterLabel.style.display = chapterLabel.style.display === "none" ? "block" : "none";
            activityCheckbox.style.display = activityCheckbox.style.display === "none" ? "block" : "none";
            activityLabel.style.display = activityLabel.style.display === "none" ? "block" : "none";
        });
    });
});