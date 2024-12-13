function goToRandomPage1() {
    const pages = [
      'wildlife.html',
      'wildlife2.html',
     'wildlife3.html',
    ];

    const randomIndex = Math.floor(Math.random() * pages.length);

    window.location.href = pages[randomIndex];
}

function goToRandomPage2() {
    const pages = [
        'animals.html',
    ];

    const randomIndex = Math.floor(Math.random() * pages.length);

    window.location.href = pages[randomIndex];
}

function goToRandomPage3() {
    const pages = [
      'colonialism.html',
      'colonialism2.html',
    ];

    const randomIndex = Math.floor(Math.random() * pages.length);

    window.location.href = pages[randomIndex];
}