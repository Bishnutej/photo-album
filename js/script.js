let container = document.querySelector('.container');
for (let i = 416; i <= 483; i++) {
  let div = document.createElement('div');
  div.className = 'image-container';
  div.innerHTML = `
    <img src="nk/DSC_0${i}.JPG" alt="DSC_0${i}">
    <a href="nk/DSC_0${i}.JPG" download="DSC_0${i}.JPG" class="download-btn">Download</a>
  `;
  container.appendChild(div);
}
