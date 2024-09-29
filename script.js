// Add event listener to shop now button
document.querySelector('.shop-now').addEventListener('click', () => {
  // Add logic to navigate to shop page
  console.log('Shop now button clicked');
});

// Add event listener to about us button
document.querySelector('.about-us').addEventListener('click', () => {
  // Add logic to navigate to about us page
  console.log('About us button clicked');
});

document.getElementById("filter").addEventListener("change", function() {
  const filterValue = this.value;
  console.log(`Filter by: ${filterValue}`);
  // Logic for filtering products
});

document.getElementById("sort").addEventListener("change", function() {
  const sortValue = this.value;
  console.log(`Sort by: ${sortValue}`);
  // Logic for sorting products
});
