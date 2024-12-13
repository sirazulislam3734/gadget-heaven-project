import toast from "react-hot-toast";

// Get all cards from localStorage
const getAllWish = () => {
    const all = localStorage.getItem('wishCards');
  
    if (all) {
      return JSON.parse(all); // Parse the stored JSON string
    } else {
      console.log('No data');
      return []; // Return an empty array if no data is found
    }
  };
  
  // Add a new card to the list
  const wishCard = (card) => {
    // Get all previously saved cards data
    const cards = getAllWish(); // Will return [] if no data exists
    const isExist = cards.find(item => item.product_id === card.product_id)
    if(isExist) return toast.error('Already Exists')
    cards.push(card); // Add the new card to the array
  
    // Save updated array back to localStorage
    localStorage.setItem('wishCards', JSON.stringify(cards));
    toast.success('Successfully Added wish list');
  };
  

  //  remove card
  const removeCardWish = id => {
    const cards = getAllWish();
    const remaining = cards.filter(item => item.product_id !== id)
    localStorage.setItem('wishCards', JSON.stringify(remaining));
    toast.success('Successfully removed wish list');
  }
  // Export functions
  export { wishCard, getAllWish, removeCardWish };