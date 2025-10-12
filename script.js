const lodeLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => displayLevels(json.data))
        
}
           const loadLevelWords =(id) => {
            const url = `https://openapi.programming-hero.com/api/level/${id}`;
            fetch(url)
            .then(res => res.json())
            .then(data => displayLevelsWords(data.data))
           }

           const displayLevelsWords =(words) => {
            const wordContainer = document.getElementById('word-container');
            wordContainer.innerHTML = '';

            words.forEach(word =>{
                const card = document.createElement('div');
                card.innerHTML = `
                 
    <div
      class="w-[228px] h-[258px] bg-white rounded-2xl shadow-lg flex flex-col justify-between items-center p-6 text-center transition hover:shadow-xl py-10 px-3 space-x-3 mt-5 ml-5 ">
      <!-- Word Section -->
      <div>
        <h2 class="text-2xl font-bold text-gray-800 tracking-wide">Eager</h2>
        <p class="text-sm text-gray-500 mt-1">Meaning / Pronunciation</p>
        <p class="text-xl font-semibold text-gray-700 mt-4">“আগ্রহী / ইগার”</p>
      </div>


      <!-- Buttons Section -->
      <div class="flex justify-between w-full px-2 mb-2">
        <button
          class="bg-gray-100 p-3 rounded-full hover:bg-gray-200 active:scale-95 transition-transform duration-150">
          <i class="fa-solid fa-circle-info text-gray-600 text-lg"></i>
        </button>
        <button
          class="bg-gray-100 p-3 rounded-full hover:bg-gray-200 active:scale-95 transition-transform duration-150">
          <i class="fa-solid fa-volume-high text-gray-600 text-lg"></i>
        </button>
      </div>
    </div>
                `
                wordContainer.append(card);
            });

        }
const displayLevels = lessons => {
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';

    for (let lesson of lessons) {
        
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `

            <button onclick="loadLevelWords(${lesson.level_no})"
              class="border-2 border-blue-900 rounded-md flex items-center px-2 py-1 gap-2 hover:bg-lime-400 hover:text-white">
              <img src="./assets/fa-book-open.png" alt="question">lesson - ${lesson.level_no}
            </button>

                `
        levelContainer.appendChild(btnDiv);
    }
}

lodeLessons();